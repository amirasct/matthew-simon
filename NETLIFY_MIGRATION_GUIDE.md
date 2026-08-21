# 🚀 Netlify Migration Guide - Step by Step

**What we're doing:** Moving your website from GitHub Pages to Netlify, while keeping GitHub as the code storage. This gives you:
- ✅ Direct photo upload from admin (no more manually uploading to GitHub)
- ✅ Password-protected admin uploads
- ✅ Free forever (100GB bandwidth/month)
- ✅ Your custom domain (matthew-simon.ch) keeps working
- ✅ Fully automatic — every GitHub push updates the website
- ✅ Fixes the "old cached files on phone" problem

**Time required:** 20-30 minutes  
**Cost:** Free  
**Difficulty:** Easy — mostly clicking buttons

---

## PART 1: Upload Files to GitHub (5 minutes)

**First, upload all the new files** I've provided to your GitHub repo. Make sure these files are in place:

- `netlify.toml` (in the root - configures Netlify)
- `netlify/functions/upload-photo.js`
- `netlify/functions/get-photo.js`
- `netlify/functions/list-photos.js`
- `netlify/functions/package.json`
- Plus all the updated HTML/JS files

**To upload the `netlify/` folder:**
1. On your computer, create a folder called `netlify` inside your local Downloads (or wherever your website files are)
2. Inside `netlify`, create another folder called `functions`
3. Put the 4 function files inside `netlify/functions/`
4. Go to your GitHub repo → click **"Add file"** → **"Upload files"**
5. Drag the entire `netlify` folder in
6. Also upload `netlify.toml` to the root of the repo
7. Scroll down → **"Commit changes"**

---

## PART 2: Create Netlify Account (5 minutes)

1. Go to **https://www.netlify.com/**
2. Click **"Sign up"** in the top right
3. Choose **"Sign up with GitHub"** (easiest — uses your existing GitHub login)
4. Authorize Netlify to access your GitHub account
5. When asked "What do you want to do?" — skip the survey, click "Skip"

You should now see your Netlify dashboard.

---

## PART 3: Connect Your Site (5 minutes)

1. On Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to see your repositories
4. Find and click on **"matthew-simon"** (your repo)
5. **Site settings:**
   - **Branch to deploy:** `main`
   - **Base directory:** (leave empty)
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (just a dot)
6. Click **"Deploy site"**

Netlify will spend 1-2 minutes deploying your site. You'll see it working in the log.

When done, you'll get a URL like `magical-name-12345.netlify.app` — click it to verify your site loads correctly.

---

## PART 4: Enable Netlify Blobs (2 minutes)

Netlify Blobs is where uploaded photos will be stored (free, unlimited).

1. In your Netlify site dashboard, go to **"Site configuration"** (left sidebar)
2. Click **"Environment variables"** in the sidebar
3. Click **"Add a variable"**
4. Add this variable:
   - **Key:** `ADMIN_PASSWORD`
   - **Value:** (choose a strong password — this protects photo uploads. Write it down!)
   - **Scopes:** All (leave default)
5. Click **"Create variable"**

---

## PART 5: Redeploy (1 minute)

After adding the environment variable, you need to redeploy so it takes effect:

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait 1-2 minutes

---

## PART 6: Update Your Domain (5 minutes)

Now point matthew-simon.ch to Netlify instead of GitHub Pages.

### 6a. Add domain in Netlify
1. In Netlify dashboard → **"Domain management"**
2. Click **"Add a domain"**
3. Type: `matthew-simon.ch`
4. Click **"Verify"** → **"Yes, add domain"**
5. Netlify will show you DNS instructions

### 6b. Update DNS at your domain registrar
This depends on where you bought the domain. Netlify will show you either:

**Option A: Point nameservers to Netlify** (easier)
- Go to your domain registrar (where you bought matthew-simon.ch)
- Change nameservers to what Netlify shows (usually 4 nameserver addresses)

**Option B: Add DNS records manually**
- Add an `A` record pointing to `75.2.60.5`
- Add a `CNAME` record for `www` pointing to your Netlify site

Netlify's help pages walk through this for common registrars: https://docs.netlify.com/domains-https/custom-domains/

### 6c. Wait for DNS
DNS changes take 5 minutes to 24 hours to propagate. Netlify will show "Awaiting DNS" until it's done.

### 6d. Enable HTTPS
Once DNS is working:
1. In **"Domain management"** → scroll to **"HTTPS"**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"** (free, automatic)

---

## PART 7: Test Photo Upload (2 minutes)

1. Go to `https://matthew-simon.ch/admin.html`
2. Click any product's **"✎ Bearbeiten"** button (or add a new product)
3. Scroll to **📸 Fotos verwalten**
4. **Drag a photo** onto the upload zone (or click to select)
5. When prompted, enter the ADMIN_PASSWORD you set in Part 4
6. Watch the upload progress bar
7. Photo appears in the product's photo list
8. Save the product
9. View the product on the shop — photo should display! 🎉

---

## 🎉 You're Done!

**Your website now has:**
- ⚡ Fast global CDN (faster loading everywhere)
- 📸 Direct photo uploads from admin
- 🔐 Password-protected admin uploads
- 🔄 Auto-deploys when you push to GitHub
- 🌐 Custom domain with free HTTPS
- 💰 $0/month cost

**Note on old photos:** All your existing photos in the GitHub `/images/` folder still work exactly as before! The new upload system is IN ADDITION to those. New uploads go to Netlify Blobs, old ones stay on GitHub.

---

## 🆘 Troubleshooting

**"Deploy failed" error:**
- Check that `netlify.toml` is in the root of your repo (not in a folder)
- Check that `netlify/functions/package.json` exists

**"Upload failed (401)":**
- Wrong admin password — check Environment Variables in Netlify
- After changing environment variable, you MUST redeploy

**"Upload failed (500)":**
- Check function logs: Netlify dashboard → Functions → Click on `upload-photo` → View logs

**Photo doesn't display after upload:**
- Check browser console (F12) for errors
- Try the photo's URL directly: `https://matthew-simon.ch/.netlify/functions/get-photo?name=YOUR_FILENAME`

**Domain not working after 24 hours:**
- Double-check DNS records at your registrar
- Contact Netlify support (they're helpful)

---

## ❓ Questions?

Take your time with this migration. Each part is independent — you can do Part 1-5 and test on the free Netlify URL first before doing Part 6 (domain).

If anything gets confusing, take a screenshot and we can work through it together in another chat!
