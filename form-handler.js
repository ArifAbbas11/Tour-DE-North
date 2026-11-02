// GitHub Pages Form Handler using Web3Forms (free service)
// Sign up at https://web3forms.com to get your access key

(function () {
  'use strict';

  // Configure your Web3Forms access key here
  const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

  document.querySelectorAll('form.tdn-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get the submit button
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // Collect form data
      const formData = new FormData(form);

      // Add Web3Forms access key
      formData.append('access_key', WEB3FORMS_KEY);

      // Add redirect URL
      formData.append('redirect', window.location.origin + '/thanks.html');

      // Submit to Web3Forms
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          // Redirect to thank you page
          window.location.href = '/thanks.html';
        } else {
          alert('Error: ' + (data.message || 'Something went wrong. Please try again.'));
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }
      })
      .catch(function (error) {
        console.error('Form submission error:', error);
        alert('Error submitting form. Please contact us directly via WhatsApp or email.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  });
})();
