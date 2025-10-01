# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, glass morphism effects, and a beautiful gradient design.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **TypeScript**: Type-safe development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Replace "Your Name" with your actual name
- Update the description and bio
- Add your social media links
- Replace placeholder projects with your actual projects

### Styling
- Colors can be customized in `src/app/globals.css`
- Component styles are in `src/app/page.tsx`
- Tailwind configuration is in `tailwind.config.ts`

### Content
- Update the hero section with your introduction
- Modify the about section with your skills and experience
- Replace the projects section with your actual work
- Update contact information and social links

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts** to complete deployment

### Alternative Deployment Options

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

#### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d out"
```
3. Run: `npm run deploy`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   └── app/
│       ├── globals.css      # Global styles and Tailwind config
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Main portfolio page
├── public/                  # Static assets
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with Next.js optimizations
- **Images**: Optimized with Next.js Image component

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to Vercel

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Responsive design principles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with deployment, feel free to reach out!

---

**Happy Coding! 🚀**