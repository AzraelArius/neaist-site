# NEAIST Website

🌍 **Núcleo dos Estudantes Africanos do Instituto Superior Técnico**

Modern, responsive website for NEAIST - the African Students Association at Instituto Superior Técnico, Lisbon.

## 🚀 Features

- **Modern Design**: Clean, contemporary design with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Fast Performance**: Optimized for speed and performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and semantic markup
- **Interactive Elements**: Animated statistics, FAQ accordion, contact form
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## 📁 Project Structure

```
new-site/
├── index.html              # Homepage
├── sobre-nos.html          # About Us page
├── contactos.html          # Contact page
├── recursos.html           # Resources page
├── guia-caloiro.html       # Freshman Guide page
├── mentoria.html           # Mentoring Program page
├── css/
│   ├── style.css          # Main styles
│   └── animations.css     # Animation styles
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Images directory
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome 6**: Icons
- **Google Fonts**: Inter & Poppins fonts

## 🌐 Local Development

### Option 1: Python Simple HTTP Server

```bash
cd new-site
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd new-site

# Start server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: PHP Built-in Server

```bash
cd new-site
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📤 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

```bash
# Initialize git repository
cd new-site
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Modern NEAIST website"

# Create repository on GitHub and add remote
git remote add origin https://github.com/YOUR_USERNAME/neaist-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** (in the left sidebar)
4. Under **Source**, select **main** branch
5. Select **/ (root)** as the folder
6. Click **Save**

Your website will be published at: `https://YOUR_USERNAME.github.io/neaist-website/`

### Step 3: Custom Domain (Optional)

If you want to use `neaist.tecnico.ulisboa.pt`:

1. Create a file named `CNAME` in the root directory
2. Add your domain: `neaist.tecnico.ulisboa.pt`
3. Configure DNS settings with your domain provider
4. Add a CNAME record pointing to `YOUR_USERNAME.github.io`

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #009DE0;
    --primary-dark: #0077B6;
    --secondary-color: #E63946;
    /* ... */
}
```

### Content

- Update social media links in the footer and contact page
- Add your actual logo to `/images/logo.png`
- Replace email address: `neaist@tecnico.ulisboa.pt`
- Update contact information in footer

### Images

Add images to the `/images/` directory and update image paths in HTML files.

## 📝 Page Descriptions

- **index.html**: Homepage with hero section, features, stats, and CTA
- **sobre-nos.html**: About page with mission, vision, and activities
- **contactos.html**: Contact page with form and contact information
- **recursos.html**: Resources page with categorized resources
- **guia-caloiro.html**: Freshman guide with timeline and FAQ
- **mentoria.html**: Mentoring program information and testimonials

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Progressive Web App (PWA)

To make this a PWA, add:

1. `manifest.json` file
2. Service worker (`sw.js`)
3. App icons in various sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for NEAIST.

## 👥 Contact

**NEAIST** - Núcleo dos Estudantes Africanos do IST

- Email: neaist@tecnico.ulisboa.pt
- Location: Instituto Superior Técnico, Lisboa

## 🙏 Acknowledgments

- Instituto Superior Técnico
- NEAIST Community
- All contributors and supporters

---

**Built with ❤️ for the African student community at IST**
