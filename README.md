# Bazhena Dementyeva - Personal Portfolio

A modern, high-performance personal portfolio website built with Next.js 15 and TypeScript. This project showcases professional experience, projects, and technical expertise with a focus on performance, accessibility, and security.

## ✨ Features

- **Next.js 15**: Latest features with static site generation
- **TypeScript**: Full type safety and developer experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Next.js Image optimization, lazy loading, and minimal bundle size
- **Security Hardened**: No XSS vulnerabilities, proper external link handling
- **Accessibility**: Built with WCAG guidelines and semantic HTML
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **CI/CD**: Automated deployment to GitHub Pages

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with Sharp
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Deployment**: GitHub Actions + GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bashdemy/bashdemy.github.io.git
   cd bashdemy.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes SEO optimization and EXIF stripping)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build static export
- `npm run seo` - Run SEO optimization
- `npm run test-seo` - Test SEO implementation
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles with CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx           # Home page
components/
├── ui/                    # Reusable UI components
│   ├── BlogPostCard.tsx
│   ├── Card.tsx
│   ├── ContactCard.tsx
│   ├── ProfileImage.tsx
│   ├── SectionIntro.tsx
│   ├── StatusBadge.tsx
│   └── Tag.tsx
├── About.tsx              # About section
├── Apps.tsx               # Projects showcase with carousel
├── Blog.tsx               # Blog section
├── Contact.tsx            # Contact information
├── FloatingFlowers.tsx    # Animated background elements
├── Footer.tsx             # Footer component
├── HumanTouch.tsx         # Personal interests carousel
└── Navbar.tsx             # Navigation bar
public/                    # Static assets
├── favicon files          # Complete favicon hierarchy
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots file
└── sitemap.xml            # SEO sitemap
scripts/                   # Build automation
├── optimize-seo.js        # SEO optimization
├── strip-exif.js          # Image metadata removal
└── test-seo.js            # SEO testing
```

## 🎨 Design System

- **Custom Theme**: Dusty pink color palette with CSS variables
- **Typography**: Inter + JetBrains Mono font combination
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Accessibility**: High contrast ratios and semantic markup
- **Performance**: Optimized images and minimal JavaScript

## 🔒 Security Features

- ✅ No XSS vulnerabilities
- ✅ External links with `rel="noopener noreferrer"`
- ✅ Safe structured data implementation
- ✅ Proper favicon configuration
- ✅ Clean dependency audit

## 🚀 Deployment

Automated deployment to GitHub Pages via GitHub Actions:

1. **Automatic**: Push to `main` branch triggers deployment
2. **Manual**: Run `npm run build` and deploy the `out/` directory
3. **SEO**: Includes automatic sitemap generation and image optimization

The site is available at: https://bashdemy.com

## 📈 Performance

- **Static Generation**: Pre-built pages for optimal loading
- **Image Optimization**: Next.js Image component with WebP conversion
- **Bundle Analysis**: Optimized JavaScript chunks
- **SEO Score**: 100/100 with comprehensive metadata

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bazhena Dementyeva (Maria Demy)**

- Senior Software Engineer specializing in backend, cloud, and AI solutions
- Expert in Java, Python, React, and modern web technologies
- Passionate about privacy-first engineering and scalable systems
- Based in Sydney, Australia

## 🔗 Links

- **Portfolio**: https://bashdemy.com
- **GitHub**: https://github.com/bashdemy
- **LinkedIn**: https://linkedin.com/in/bashdemy

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS