# 🚀 Deployment Checklist for GitHub Pages + GoDaddy

## Pre-Deployment Checklist

### ✅ Files Ready
- [x] CNAME file created with `tourdenorth.com`
- [x] All images fixed (removed double extensions)
- [x] Forms updated (removed Netlify dependencies)
- [x] Form handler script added to all pages
- [x] README.md with full documentation
- [x] .gitignore file created
- [x] Contact info configured in config.js

### ⚙️ Configuration Verification

**Contact Information (config.js):**
- Phone: +92 300 0333563
- WhatsApp: 923000333563
- Email: tourdenorth@gmail.com

**Images Available:**
- ✓ fairy-meadows-trek.jpg
- ✓ hunza-valley-escape.jpeg
- ✓ hunza-honeymoon-special.jpg
- ✓ naran-kaghan-getaway.jpeg
- ✓ skardu-and-deosai-adventure.jpeg
- ✓ swat-kalam-retreat.jpeg
- ✓ hero.jpg

## Step-by-Step Deployment Guide

### 1. Git Commit and Push to GitHub

```bash
cd /mnt/d/website/tour-de-north-preview
git add .
git commit -m "Complete GitHub Pages setup for tourdenorth.com"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/PalwashaKhalid/[your-repo-name]/settings/pages
2. Under **Source**: Select "Deploy from a branch"
3. Branch: **main**
4. Folder: **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes for initial deployment

### 3. Configure GoDaddy DNS

**Login to GoDaddy:**
- URL: https://dcc.godaddy.com/manage/tourdenorth.com/dns

**Add A Records (for root domain):**
```
Type: A, Name: @, Value: 185.199.108.153, TTL: 600
Type: A, Name: @, Value: 185.199.109.153, TTL: 600
Type: A, Name: @, Value: 185.199.110.153, TTL: 600
Type: A, Name: @, Value: 185.199.111.153, TTL: 600
```

**Add CNAME Record (for www):**
```
Type: CNAME, Name: www, Value: PalwashaKhalid.github.io, TTL: 600
```

**Delete any conflicting records:**
- Remove existing A records pointing to GoDaddy parking page
- Remove any CNAME records on @ (root)

### 4. Configure Custom Domain in GitHub

1. Go to: Repository Settings → Pages
2. Under **Custom domain**, enter: `tourdenorth.com`
3. Click **Save**
4. Wait 5 minutes, then check "Enforce HTTPS"

### 5. Setup Form Handling (IMPORTANT!)

**Option A: Web3Forms (Recommended - Free)**
1. Visit: https://web3forms.com
2. Register with: tourdenorth@gmail.com
3. Copy your Access Key
4. Edit `form-handler.js`:
   - Replace `YOUR_ACCESS_KEY_HERE` with your key
5. Commit and push:
   ```bash
   git add form-handler.js
   git commit -m "Add Web3Forms access key"
   git push origin main
   ```

**Option B: Alternative Services**
- Formspree: https://formspree.io
- Getform: https://getform.io
- EmailJS: https://www.emailjs.com

**Option C: Direct Email (Simple but limited)**
Replace forms with mailto links (not recommended for professional sites)

### 6. Verification & Testing

**DNS Propagation Check:**
```bash
# Check if DNS is propagated
nslookup tourdenorth.com
# Should show GitHub Pages IPs
```

**Test Checklist:**
- [ ] Visit https://tourdenorth.com
- [ ] Check HTTPS is working (green padlock)
- [ ] Test all navigation links
- [ ] Test all 6 tour pages
- [ ] Submit a test form
- [ ] Test on mobile device
- [ ] Check WhatsApp buttons work
- [ ] Test email links
- [ ] Test phone links
- [ ] Check images load properly

### 7. Post-Deployment

**Monitor:**
- Check GitHub Pages deployment status
- Monitor form submissions
- Check Google Search Console (setup if needed)
- Add Google Analytics (optional)

**Backup:**
- Keep a local copy of the website
- Document your Web3Forms access key securely

## Troubleshooting

### DNS Not Working
- Wait 30-60 minutes for full propagation
- Clear browser cache (Ctrl+F5)
- Try incognito/private window
- Check DNS with: https://dnschecker.org

### HTTPS Not Available
- Wait for DNS to fully propagate first
- Uncheck and re-check "Enforce HTTPS" in GitHub
- Wait another 10-15 minutes

### Forms Not Working
- Check browser console for errors (F12)
- Verify Web3Forms access key is correct
- Ensure form-handler.js is loading
- Test with a simple form submission

### Images Not Loading
- Check image filenames match exactly
- Verify images are in the images/ folder
- Check file extensions (.jpg vs .jpeg)

### 404 Errors
- Ensure CNAME file contains only: tourdenorth.com
- Check GitHub Pages is enabled on main branch
- Verify all HTML files are in root directory

## Timeline

**Immediate (0-5 minutes):**
- GitHub Pages builds your site
- Site available at username.github.io/repo-name

**Short (30-60 minutes):**
- DNS propagates globally
- tourdenorth.com starts working

**Complete (2-24 hours):**
- Full global DNS propagation
- HTTPS certificate issued
- All users can access the site

## Support Resources

- GitHub Pages Docs: https://docs.github.com/pages
- GoDaddy DNS Help: https://www.godaddy.com/help
- Web3Forms Docs: https://docs.web3forms.com

## Contact

For technical issues with this deployment:
- Email: tourdenorth@gmail.com
- WhatsApp: +92 300 0333563

---

**Last Updated:** January 2025
**Domain:** tourdenorth.com
**Repository Owner:** PalwashaKhalid
