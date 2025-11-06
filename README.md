<div align="center">

# 🎨 REJOUICE

### *Tomorrow's Brand, Today™*

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://prakshil.github.io/Rejouice-AwwardsWebsite/)
[![GitHub](https://img.shields.io/badge/repo-github-181717?style=for-the-badge&logo=github)](https://github.com/Prakshil/Rejouice-AwwardsWebsite)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 Overview

**REJOUICE** is an award-winning, immersive creative agency website that pushes the boundaries of modern web design. Built with precision and passion, this project showcases seamless animations, buttery-smooth scrolling, and a visually stunning interface that captivates from the first pixel.

<div align="center">

### 🏆 *Crafted for Excellence*

</div>

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎬 **Cinematic Animations**
- GSAP-powered timeline animations
- Staggered text reveals
- Smooth cursor interactions
- Parallax scroll effects

</td>
<td width="50%">

### 🚀 **Performance**
- Locomotive Scroll integration
- Optimized asset loading
- Hardware-accelerated CSS
- 60fps+ smooth experience

</td>
</tr>
<tr>
<td width="50%">

### 🎯 **Responsive Design**
- Mobile-first approach
- Fluid typography
- Adaptive layouts
- Touch-optimized interactions

</td>
<td width="50%">

### 🎨 **Visual Excellence**
- Custom typography
- Video backgrounds
- Dynamic Swiper carousels
- Hover micro-interactions

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|:---:|:---|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | **Semantic Structure** |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | **Advanced Styling & Animations** |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | **Interactive Functionality** |
| ![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white) | **Professional Animations** |
| ![Locomotive](https://img.shields.io/badge/-Locomotive-000000?style=flat-square) | **Smooth Scroll Engine** |
| ![Swiper](https://img.shields.io/badge/-Swiper-6332F6?style=flat-square) | **Touch Slider Framework** |

</div>

---

## 🎯 Project Structure

```
RejoiceUI/
│
├── 📄 index.html           # Main HTML structure
├── 🎨 style.css            # Complete styling & animations
├── ⚡ script.js            # Core JavaScript & interactions
│
├── 🎬 Assets/              # Media files
│   ├── Video background.mp4
│   ├── video1.mp4
│   ├── video2.mp4
│   ├── video3.mp4
│   ├── RJ-BALL-BLUE-ORANGE-scaled.webm
│   └── slide1-5.avif       # Carousel images
│
└── 🔤 Fonts/               # Custom typography
    ├── NBInternationalProBoo.ttf
    └── Rejouice-Headline.ttf
```

---

## 🚀 Quick Start

### Prerequisites

```bash
# Clone the repository
git clone https://github.com/Prakshil/Rejouice-AwwardsWebsite.git

# Navigate to project
cd RejoiceUI
```

### Installation

**Option 1: Live Server (Recommended)**
```bash
# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

**Option 2: Python Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 3: Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

---

## 📚 Dependencies

All dependencies are loaded via CDN - no installation required!

```html
<!-- Locomotive Scroll -->
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>

<!-- GSAP Core & ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
```

---

## 🎨 Design Highlights

### Color Palette

```css
Primary Background    #FAF8F3  /* Warm White */
Dark Background       #0E0E0E  /* Rich Black */
Accent Orange         #FF5F38  /* Vibrant Coral */
Text Primary          #141414  /* Near Black */
Text Secondary        #91908E  /* Subtle Gray */
```

### Typography

- **Heading Font**: `Rejouice` - Custom display typeface
- **Body Font**: `NB International Pro` - Professional sans-serif

---

## 🎬 Animation Showcase

### 1. **Loader Sequence**
Animated text entrance with staggered timing creates anticipation

### 2. **Hero Text**
Individual character animations form the iconic REJOUICE wordmark

### 3. **Scroll Animations**
Content reveals progressively using GSAP ScrollTrigger

### 4. **Custom Cursor**
Interactive cursor follows mouse movement with scale transitions

### 5. **Image Hover States**
Video overlays activate on hover with smooth opacity transitions

### 6. **Footer Interactions**
Letter hover effects with subtle lift and opacity changes

---

## 📱 Responsive Breakpoints

```css
Mobile      320px  - 767px   /* Optimized for phones */
Tablet      768px  - 1023px  /* Adjusted for tablets */
Desktop     1024px - 1439px  /* Standard desktop */
Large       1440px+          /* Wide screens */
```

---

## 🎯 Performance Optimizations

✅ **Lazy Loading** - Deferred asset loading  
✅ **CSS Transforms** - Hardware acceleration  
✅ **Will-Change** - Optimized for animations  
✅ **Font Display Swap** - Prevent render blocking  
✅ **Compressed Media** - AVIF & WebM formats  
✅ **Minimal Reflows** - Efficient DOM manipulation  

---

## 🔧 Customization Guide

### Changing Colors

```css
/* In style.css */
:root {
  --accent-color: #FF5F38;     /* Update accent */
  --bg-light: #FAF8F3;         /* Update light bg */
  --bg-dark: #0E0E0E;          /* Update dark bg */
}
```

### Adjusting Animation Speed

```javascript
// In script.js
tl.from("#loader h3", {
  duration: 1,        // Change duration
  stagger: 0.2        // Change stagger delay
})
```

### Modifying Scroll Behavior

```javascript
// Adjust smooth scroll speed
const locoScroll = new LocomotiveScroll({
  smooth: true,
  smoothMobile: true,
  multiplier: 1.0     // Increase for faster scroll
});
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Awwwards winning creative agencies
- **GSAP**: GreenSock Animation Platform for premium animations
- **Locomotive Scroll**: Smooth scroll library
- **Swiper**: Modern mobile touch slider
- **Community**: All contributors and supporters

---

## 📬 Connect

<div align="center">

### Built with 💙 by [Prakshil](https://github.com/Prakshil)

[![Portfolio](https://img.shields.io/badge/-Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio.com)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)

### ⭐ Star this repo if you found it helpful!

</div>

---

<div align="center">

**[↑ Back to Top](#-rejouice)**

*Elevating digital experiences, one pixel at a time.*

</div>
