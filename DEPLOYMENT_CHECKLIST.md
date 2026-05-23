# 🚀 NEAIST Website Deployment Checklist

## ✅ Pre-Deployment Checklist

### Content Review
- [ ] All text content is in Portuguese
- [ ] Email addresses are correct (neaist@tecnico.ulisboa.pt)
- [ ] Contact information is up-to-date
- [ ] Social media links are added/updated
- [ ] All placeholder text is replaced

### Visual Assets
- [ ] Logo added to `/images/logo.png`
- [ ] Favicon created and added
- [ ] PWA icons created (192x192, 512x512)
- [ ] Team/event photos added
- [ ] All images optimized for web

### Technical
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Contact form tested
- [ ] Mobile responsive design verified
- [ ] All links tested (no broken links)
- [ ] Browser compatibility checked
- [ ] Performance tested (PageSpeed Insights)

## 🌐 Local Testing

### Test on Different Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Test on Different Devices
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Test Features
- [ ] Mobile menu toggle
- [ ] Smooth scrolling
- [ ] FAQ accordion
- [ ] Contact form validation
- [ ] Animated statistics
- [ ] Back to top button
- [ ] All hover effects

## 📤 GitHub Deployment Steps

### 1. Initialize Git Repository
```bash
cd new-site
git init
git add .
git commit -m "Initial commit: Modern NEAIST website"
```

### 2. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `neaist-website`
- Description: "Official website for NEAIST - Núcleo dos Estudantes Africanos do IST"
- Public/Private: Choose as needed
- Don't initialize with README (you already have one)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/neaist-website.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Source: Deploy from branch
4. Branch: main
5. Folder: / (root)
6. Click Save

### 5. Wait for Deployment
- GitHub will build and deploy your site
- Usually takes 1-5 minutes
- Check the Actions tab for build status

### 6. Access Your Site
- Your site will be at: `https://YOUR_USERNAME.github.io/neaist-website/`
- Check if everything works correctly

## 🌍 Custom Domain Setup (Optional)

### For neaist.tecnico.ulisboa.pt

1. **Create CNAME file**
```bash
echo "neaist.tecnico.ulisboa.pt" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. **Configure DNS (contact IST IT)**
- Add CNAME record pointing to: `YOUR_USERNAME.github.io`
- Or A records pointing to GitHub's IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

3. **Enable HTTPS in GitHub Settings**
- Go to Settings → Pages
- Check "Enforce HTTPS"

## 🔄 Future Updates

### Making Changes
```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Description of changes"
git push
```

### Managing Branches
```bash
# Create development branch
git checkout -b development

# Make changes and test

# Merge to main when ready
git checkout main
git merge development
git push
```

## 📊 Analytics & Monitoring

### Google Analytics (Optional)
1. Create Google Analytics account
2. Get tracking ID
3. Add to all HTML files before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛡️ Security

- [ ] HTTPS enabled
- [ ] No sensitive data in code
- [ ] Form submissions secured (use FormSpree or similar)
- [ ] Regular dependency updates

## 📝 Maintenance Schedule

### Weekly
- [ ] Check for broken links
- [ ] Review contact form submissions

### Monthly
- [ ] Update content as needed
- [ ] Check analytics
- [ ] Verify all features working

### Quarterly
- [ ] Review and update resources
- [ ] Update photos/images
- [ ] Optimize performance

## 🎯 Performance Optimization

### Before Launch
- [ ] Run Google PageSpeed Insights
- [ ] Check mobile performance
- [ ] Optimize images further if needed
- [ ] Minify CSS/JS (optional)

### Tools to Use
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

## 🤝 Handover

### Documentation
- [ ] README.md is complete
- [ ] QUICK_START.md is accessible
- [ ] Code is well-commented
- [ ] Deployment process documented

### Access
- [ ] GitHub repository access shared
- [ ] Domain access documented
- [ ] Analytics access set up

## 📞 Support

For issues or questions:
- Check documentation in README.md
- Review code comments
- Test locally before deploying

---

## ✨ Launch Day!

When everything is checked:

1. **Announce the new website** on social media
2. **Share with the NEAIST community**
3. **Gather feedback** for improvements
4. **Celebrate!** 🎉

---

**Website Status:** 
- [ ] In Development
- [ ] In Testing
- [ ] Ready for Deployment
- [ ] Live and Running

**Last Updated:** _______________
**Deployed By:** _______________
**Live URL:** _______________
