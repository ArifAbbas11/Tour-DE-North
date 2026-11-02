(function () {
  'use strict';
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open'); toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  var t = new Date();
  var iso = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
  document.querySelectorAll('.tdn-date').forEach(function (el) { el.min = iso; });

  // Tours page filtering (reads the query string, also applies on submit)
  var filters = document.getElementById('filters');
  var grid = document.getElementById('tour-grid');
  if (filters && grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.tour-card'));
    var empty = document.getElementById('no-tours');
    var title = document.getElementById('tours-title');
    var params = new URLSearchParams(location.search);
    ['tour_destination', 'max_price', 'sort'].forEach(function (k) {
      if (params.get(k) !== null && filters.elements[k]) { filters.elements[k].value = params.get(k); }
    });
    function apply() {
      var dest = filters.elements.tour_destination.value;
      var max = parseInt(filters.elements.max_price.value || '0', 10);
      var sort = filters.elements.sort.value;
      var shown = cards.filter(function (c) {
        var okD = !dest || c.dataset.dest === dest;
        var okP = !max || parseInt(c.dataset.price, 10) <= max;
        return okD && okP;
      });
      shown.sort(function (a, b) {
        if (sort === 'price_asc') { return a.dataset.price - b.dataset.price; }
        if (sort === 'price_desc') { return b.dataset.price - a.dataset.price; }
        return a.dataset.order - b.dataset.order;
      });
      cards.forEach(function (c) { c.style.display = 'none'; });
      shown.forEach(function (c) { c.style.display = ''; grid.appendChild(c); });
      empty.hidden = shown.length > 0;
      title.textContent = dest ? dest + ' Tour Packages' : 'Tour Packages';
    }
    filters.addEventListener('submit', function (e) { e.preventDefault(); apply(); });
    apply();
  }

  // ---- Contact details from config.js ----
  var cfg = window.TDN_CONFIG || {};
  function keep(str, plus) {
    return String(str || '').split('').filter(function (c) {
      return (c >= '0' && c <= '9') || (plus && c === '+');
    }).join('');
  }
  if (cfg.phone) {
    document.querySelectorAll('[data-phone]').forEach(function (el) { el.textContent = cfg.phone; });
    document.querySelectorAll('a[data-tel]').forEach(function (a) { a.href = 'tel:' + keep(cfg.phone, true); });
  }
  if (cfg.email) {
    document.querySelectorAll('a[data-email]').forEach(function (a) {
      a.href = 'mailto:' + cfg.email;
      if (a.textContent.indexOf('@') > -1) { a.textContent = cfg.email; }
    });
  }
  if (cfg.whatsapp) {
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      var h = a.getAttribute('href');
      var p = h.indexOf('wa.me/');
      if (p < 0) { return; }
      var q = h.indexOf('?', p);
      a.href = h.substring(0, p) + 'wa.me/' + keep(cfg.whatsapp, false) + (q > -1 ? h.substring(q) : '');
    });
  }

  // ---- Images: drop files into the images folder, named after the tour ----
  var me = document.currentScript;
  var base = me && me.src ? me.src.substring(0, me.src.lastIndexOf('/') + 1) : '';
  function findImage(slug, done) {
    var exts = ['jpg', 'jpeg', 'png', 'webp'];
    var i = 0;
    (function next() {
      if (i >= exts.length) { return; }
      var url = base + 'images/' + slug + '.' + exts[i++];
      var img = new Image();
      img.onload = function () { done(url); };
      img.onerror = next;
      img.src = url;
    })();
  }
  document.querySelectorAll('.card-media[data-slug]').forEach(function (box) {
    findImage(box.getAttribute('data-slug'), function (url) {
      var ph = box.querySelector('.ph');
      var img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.loading = 'lazy';
      box.insertBefore(img, box.firstChild);
      if (ph) { ph.remove(); }
    });
  });
  document.querySelectorAll('.tour-hero[data-slug], .hero[data-slug]').forEach(function (el) {
    findImage(el.getAttribute('data-slug'), function (url) {
      el.style.backgroundImage = 'linear-gradient(180deg,rgba(8,30,38,.45),rgba(8,30,38,.8)),url("' + url + '")';
      var art = el.querySelector('.hero-art');
      if (art) { art.style.display = 'none'; }
    });
  });
})();
