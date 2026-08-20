# Matthew Simon Website

Professional antique dealer website with admin panel for managing products and full multi-language support.

## Files Included

- **index.html** - Homepage with featured product, categories, and services
- **shop.html** - Product grid with filtering and sorting
- **about.html** - Matthew's story and credentials
- **contact.html** - Inquiry form
- **admin.html** - Admin panel to add/edit/delete products
- **style.css** - Complete styling (professional + warm aesthetic)
- **shop.js** - Product display and filtering logic
- **languages.js** - Multi-language system (German, French, English)

## Setup Instructions

### 1. Deploy to GitHub Pages (Free)

1. Create a GitHub account if you don't have one (github.com)
2. Create a new repository called `matthew-simon`
3. Upload all these files to the repository
4. Go to Settings → Pages → Enable GitHub Pages
5. Point your domain matthew-simon.ch to GitHub Pages

**Domain Setup:**
- At your domain registrar, add these DNS records:
  - Type: CNAME
  - Name: www
  - Value: [your-github-username].github.io

### 2. Alternative: Use Netlify (Also Free)

1. Go to netlify.com
2. Drag and drop this folder
3. Netlify gives you a URL
4. Connect your domain matthew-simon.ch

## How to Use

### For Customers

1. **Homepage** - Features latest acquisition and navigation
2. **Shop** - Browse all products with filters and search
3. **About** - Learn Matthew's story
4. **Contact** - Send inquiry

### For You (Admin)

1. Go to **matthew-simon.ch/admin.html**
2. View all products or add new ones
3. Products are stored in browser's local storage
4. **Important:** Local storage is per-browser, per-device

## Important: Data Storage

⚠️ **Current Setup:** Products are stored in your browser's local storage. This means:
- Products stay on this device/browser only
- Other devices/browsers won't see new products
- Clearing browser data deletes products

**To Fix This:**
When ready, we can upgrade to a real database (like Supabase or Firebase) so products sync everywhere.

## Customization

### Change Colors
Edit these in `style.css`:
```css
--bg-cream: #FAF8F5;      /* Background */
--accent-gold: #C4A747;   /* Gold highlights */
--accent-blue: #3D4E5C;   /* Blue accents */
```

### Add New Products
1. Go to admin.html
2. Click "Add Product"
3. Fill out the form
4. Products appear on shop.html instantly

### Update Featured Product
Edit index.html, search for "Featured This Month" section and change the product details.

### Translate to Additional Languages
Edit `languages.js` and add a new language object:
```javascript
xx: {  // Use language code (e.g., 'it' for Italian)
  'nav.home': 'Home in Italian',
  'nav.shop': 'Shop in Italian',
  // ... add all other keys
}
```
Then add to the language dropdown menu in HTML files:
```html
<a href="#" onclick="setLanguage('xx'); return false;">Italiano</a>
```

## Features

✅ Professional design (gallery aesthetic)
✅ Responsive (mobile-friendly)
✅ Product filtering by category
✅ Search functionality
✅ Admin panel to manage products
✅ **Multi-language support** (German, French, English)
✅ Newsletter signup
✅ Contact form
✅ Instagram integration (link provided)
✅ Fast loading
✅ No hosting fees

## Multi-Language Support

The website is fully translated into **German (Deutsch)**, **French (Français)**, and **English**.

- **Language Switcher** - Located in top-right corner of navbar
- **Browser Memory** - Language preference is saved in browser (returns to same language on next visit)
- **All Pages Translated** - Every page (home, shop, about, contact) is fully translated
- **Admin Panel** - Stays in English for management

**Supported Languages:**
- 🇬🇧 English
- 🇩🇪 Deutsch (German)
- 🇫🇷 Français (French)

## Next Steps

1. **Deploy the site** using GitHub Pages or Netlify
2. **Add your products** via admin panel
3. **Update featured product** monthly
4. **Test on mobile** (important!)
5. **Share with collectors**

## Technical Notes

- No backend server needed (works entirely in browser)
- All styling is custom (not template-based)
- Products stored locally (localStorage API)
- Images loaded from matthew-simon.ch domain
- Contact form uses mailto (opens email client)

## Support

If you need to:
- Add more products
- Change colors/fonts
- Fix bugs
- Add new features
- Upgrade to a real database

Just let me know!

---

**Website built with:** HTML, CSS, JavaScript
**Design:** Professional + Warm aesthetic
**Color scheme:** Cream background, gold & blue accents
