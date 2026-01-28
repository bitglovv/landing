# BitGlow Landing Page

A premium, high-conversion landing page for BitGlow - a real-time communication platform.

## Features

- **Modern Design**: Glassmorphism effects with dark mode and emerald green accents
- **Fully Responsive**: Mobile-first design that works across all devices
- **React + TypeScript**: Type-safe component architecture
- **Tailwind CSS**: Utility-first styling with custom configurations
- **Performance Optimized**: Fast load times and smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- PostCSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to view the landing page.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Fixed navigation with logo and CTAs
│   ├── Hero.tsx           # Hero section with code preview
│   ├── TechHighlights.tsx # Technology cards section
│   ├── ProductPreview.tsx # Live chat UI preview
│   ├── WhyBitGlow.tsx     # Feature benefits section
│   ├── CTA.tsx            # Call-to-action section
│   └── Footer.tsx         # Footer with links
├── App.tsx                # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles and Tailwind imports
```

## Design System

### Colors

- **Background**: Near-black (#000000, #0a0a0a)
- **Accent**: Emerald/Green (#22c55e, #4ade80)
- **Text**: White with various opacity levels

### Effects

- **Glass**: `backdrop-blur-md` with semi-transparent backgrounds
- **Gradients**: Subtle green glows and transitions
- **Animations**: Smooth transitions and hover effects

## License

MIT
