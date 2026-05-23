## 🚀 Quick Start Guide - Preview Your Website Locally

### Method 1: Python (Simplest - Recommended)

```bash
# Navigate to the new-site directory
cd "/home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site"

# Start Python HTTP server
python3 -m http.server 8000
```

Then open your browser and go to: **http://localhost:8000**

### Method 2: PHP

```bash
# Navigate to the new-site directory
cd "/home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site"

# Start PHP server
php -S localhost:8000
```

Then open your browser and go to: **http://localhost:8000**

### Method 3: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📤 Deploy to GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd "/home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site"
git init
git add .
git commit -m "Initial commit: Modern NEAIST website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click "New Repository"
3. Name it: `neaist-website` (or any name you prefer)
4. Don't initialize with README (we already have files)
5. Click "Create Repository"

### Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/neaist-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/neaist-website/`

---

## 🎯 What's Included

✅ **6 Complete Pages:**
- Homepage with hero section, features, stats
- About Us page
- Contact page with form
- Resources page
- Freshman Guide
- Mentoring Program

✅ **Modern Features:**
- Fully responsive design
- Smooth animations
- Interactive elements
- Mobile-friendly navigation
- Contact form validation
- Animated statistics counter
- FAQ accordion
- Back to top button

✅ **Performance:**
- Optimized CSS & JavaScript
- Fast loading times
- SEO-friendly structure

---

## 📝 Next Steps

1. **Add Logo**: Place your logo image in `/images/logo.png`
2. **Update Social Links**: Edit social media URLs in footer
3. **Customize Content**: Update text and information as needed
4. **Add Photos**: Add team photos, event photos to `/images/`
5. **Test Contact Form**: Integrate with email service (FormSpree, Netlify Forms, etc.)

---

## 🛠️ Need Help?

- Check the full README.md for detailed documentation
- All code is commented for easy understanding
- Responsive design works on all screen sizes

---

**Your website is ready to go live! 🎉**
