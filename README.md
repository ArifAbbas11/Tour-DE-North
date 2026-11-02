# Tour de North - Northern Pakistan Travel Agency Website

A modern, responsive travel agency website for Northern Pakistan tours featuring Hunza, Skardu, Naran Kaghan, Swat Kalam, and Fairy Meadows.

## 🚀 Deployment Instructions for GitHub Pages + GoDaddy

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

### Step 3: Configure GoDaddy Domain

#### In GoDaddy:
1. Log into your GoDaddy account
2. Go to **My Products** → **DNS** for tourdenorth.com
3. Click **Manage DNS**
4. Add these DNS records:

**For Root Domain (tourdenorth.com):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds
```

Add three more A records with these IPs:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: PalwashaKhalid.github.io
TTL: 600 seconds
```

#### In GitHub:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `tourdenorth.com`
3. Click **Save**
4. Wait a few minutes, then check **Enforce HTTPS**

### Step 4: Configure Form Handling

Your contact forms need a backend service. We recommend **Web3Forms** (free):

1. Go to https://web3forms.com
2. Sign up with your email: `tourdenorth@gmail.com`
3. Get your Access Key
4. Open `form-handler.js` and replace `YOUR_ACCESS_KEY_HERE` with your actual key
5. Commit and push the change

**Alternative:** Configure forms to send to your email directly via mailto links or use Google Forms.

### Step 5: Verify Deployment

- Wait 5-10 minutes for DNS propagation
- Visit https://tourdenorth.com
- Test all pages and forms
- Check mobile responsiveness

## 📁 Project Structure

```
tour-de-north-preview/
├── index.html           # Homepage
├── tours.html          # All tours listing
├── about.html          # About page
├── contact.html        # Contact page
├── make-my-trip.html   # Custom trip request
├── thanks.html         # Form submission thank you
├── 404.html            # Error page
├── style.css           # Main stylesheet
├── preview.js          # Main JavaScript
├── form-handler.js     # Form submission handler
├── config.js           # Contact info configuration
├── CNAME               # Custom domain configuration
├── tours/              # Individual tour pages
│   ├── hunza-valley-escape.html
│   ├── skardu-and-deosai-adventure.html
│   ├── naran-kaghan-getaway.html
│   ├── swat-kalam-retreat.html
│   ├── fairy-meadows-trek.html
│   └── hunza-honeymoon-special.html
└── images/             # Tour images
```

## ⚙️ Configuration

### Contact Information
Edit `config.js` to update:
- Phone number: `+92 300 0333563`
- WhatsApp number: `923000333563`
- Email: `tourdenorth@gmail.com`

### Images
Add tour images to the `images/` folder:
- Name format: `tour-slug.jpg` or `tour-slug.jpeg`
- Recommended size: 1200x800px
- Current images: ✓ All tour images uploaded

## 🔧 Maintenance

### Adding a New Tour
1. Copy an existing tour HTML file from `tours/`
2. Update tour details (name, price, itinerary, etc.)
3. Add tour card to `index.html` and `tours.html`
4. Upload tour image to `images/` folder

### Updating Prices
Edit the price in the tour's HTML file and corresponding cards on index.html and tours.html

## 📱 Features

✓ Fully responsive design (mobile, tablet, desktop)
✓ SEO-friendly structure
✓ Fast loading with optimized CSS/JS
✓ Contact forms on every tour page
✓ WhatsApp integration
✓ Filtering and sorting tours
✓ Custom trip request form
✓ FAQ section
✓ 404 error page

## 🌐 Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Support

For website issues or questions:
- Email: tourdenorth@gmail.com
- WhatsApp: +92 300 0333563

---

**Live Website:** https://tourdenorth.com  
**Repository:** https://github.com/PalwashaKhalid/[your-repo-name]
