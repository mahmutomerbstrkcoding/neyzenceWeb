# NeyzenCe Demo Website

A static website showcasing the NeyzenCe mobile app - a comprehensive learning platform for the traditional Turkish Ney flute.

## 🎵 About NeyzenCe

NeyzenCe is a mobile application designed to help users learn the traditional Turkish musical instrument known as the Ney. The app provides interactive music sheets, audio recordings, progressive learning content, and educational tutorials.

## 📁 Website Structure

```
demoWeb/
├── index.html          # Homepage with app features and download links
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
└── assets/
    ├── css/
    │   └── styles.css  # Main stylesheet with app-compatible design
    ├── js/
    │   └── script.js   # Interactive features and animations
    ├── images/         # App icons and promotional images
    │   ├── icon.png
    │   ├── icon_transparent.png
    │   ├── ney_rainbow.png
    │   └── neyzen.png
    └── fonts/          # App fonts (Poppins, Kaushan Script)
        ├── KaushanScript-Regular.ttf
        ├── Poppins-Bold.ttf
        ├── Poppins-Regular.ttf
        └── Poppins-SemiBold.ttf
```

## 🎨 Design Features

### Color Scheme (Matching Mobile App)
- **Primary Brown**: `#8B4513`
- **Light Brown**: `#CD853F`
- **Background Beige**: `#F5F3EF`
- **Secondary Beige**: `#F7F3F0`
- **Card Beige**: `#E0DDD5`

### Typography
- **Primary Font**: Poppins (Regular, SemiBold, Bold)
- **Brand Font**: Kaushan Script (for logo and highlights)

### Key Features
- ✅ Responsive design (mobile-first approach)
- ✅ Smooth animations and hover effects
- ✅ Interactive navigation with mobile hamburger menu
- ✅ App Store and Google Play download buttons
- ✅ Compatible with mobile app's visual identity
- ✅ SEO optimized with proper meta tags
- ✅ Accessibility features (focus management, keyboard navigation)

## 📱 App Download Links

The website includes prominent download buttons for:
- **iOS**: App Store link (update the href in index.html)
- **Android**: Google Play Store link (update the href in index.html)

## 🚀 Deployment

To deploy this website:

1. **Static Hosting** (Recommended):
   - Upload the entire `demoWeb` folder to any static hosting service
   - Services: Netlify, Vercel, GitHub Pages, AWS S3, etc.

2. **Custom Domain**:
   - Point your domain to the hosting service
   - Example: `www.neyzence.com` or `demo.neyzence.com`

3. **Update Download Links**:
   - Replace placeholder URLs in `index.html` with actual App Store and Google Play links
   - Update the app IDs in the href attributes

## 📄 Legal Pages

### Terms of Service (`terms.html`)
Comprehensive terms covering:
- App usage rights and restrictions
- Intellectual property (Neyzen Cemil Baştürk's musical content)
- User responsibilities
- In-app purchases
- Educational disclaimers

### Privacy Policy (`privacy.html`)
Detailed privacy policy including:
- Data collection practices
- Third-party integrations (Supabase, Google, Apple, Mixpanel)
- User rights and data protection
- GDPR and CCPA compliance

## 🛠 Technical Features

### JavaScript Functionality
- Mobile navigation toggle
- Smooth scrolling for anchor links
- Scroll-based navbar effects
- Intersection Observer animations
- Image lazy loading
- Download button interactions
- Keyboard accessibility

### CSS Features
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Smooth transitions and animations
- Mobile-first responsive design
- Print-friendly styles
- High contrast support

## 📧 Contact Information

Based on the mobile app:
- **Developer**: Mahmut Ömer Baştürk - mahmutomerbstrk@neyzence.com
- **Content Creator**: Cemil Baştürk - cemney@neyzence.com
- **Support**: info@neyzence.com

## 🔧 Customization

### To update app store links:
1. Open `index.html`
2. Find the download buttons section
3. Replace the href URLs with your actual app store links

### To modify colors:
1. Open `assets/css/styles.css`
2. Update the CSS custom properties in the `:root` section

### To add new pages:
1. Create new HTML files following the existing template structure
2. Update navigation links in all HTML files
3. Add corresponding styles if needed

## 📊 Performance

The website is optimized for:
- Fast loading times
- Mobile performance
- SEO rankings
- Accessibility standards
- Cross-browser compatibility

## 🎯 Call-to-Actions

The website includes strategic CTAs:
- Download app buttons in hero section
- App store links in dedicated download section
- Contact information for support
- Social sharing capabilities (can be extended)

---

**Note**: Remember to update the app store URLs with your actual app links before deploying to production!