# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 portfolio website for Jeffrey Mutchnik (Marketing Technology Manager) with a "Digital Horizon" Y2K design aesthetic. Part of a larger resume system that includes HTML resume variants with PDF generation.

## Commands

### Next.js Portfolio (run from portfolio-nextjs/)
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint with accessibility rules
```

### Resume PDF Generation (run from root)
```bash
npm run pdf      # Generate PDFs from HTML resume variants using Puppeteer
```

## Architecture

### Data Flow
1. Static content lives in `src/data/` (navigation, resume, blog, case-studies, creative-work)
2. Pages compose section components that consume this data
3. Dynamic routes (`/blog/[slug]`, `/case-studies/[slug]`) use slug-based routing
4. Forms submit to Formspree with Sonner toast notifications

### Component Organization
```
src/components/
├── ui/         # Shadcn components (Button, Card, Dialog, Sheet, Badge, Input)
├── layout/     # Header (scroll-aware nav, mobile Sheet) and Footer
├── sections/   # Page sections (Hero, StatsSection, FeaturedWork, CTASection, PageHeader)
├── motion/     # Animation wrappers (ScrollReveal, CountUp, StaggerContainer)
├── gallery/    # WorkCard, Lightbox, CategoryFilter
├── forms/      # ContactForm
└── blocks/     # Timeline
```

### Animation System
Framer Motion variants are centralized in `src/lib/animations.ts`. Key patterns:
- `ScrollReveal` - Scroll-triggered entrance with direction options
- `StaggerContainer/StaggerItem` - Coordinated list animations
- `CountUp` - Animated number counting with prefix/suffix support
- All animations respect `prefers-reduced-motion`

### Design System
CSS variables defined in `src/app/globals.css`:
- **Primary**: Electric Blue (#2563EB)
- **Accent**: Cyber Teal (#14B8A6)
- **Fonts**: Playfair Display (display), Inter (body), JetBrains Mono (code)
- Fluid typography using `clamp()` (text-display-2xl through text-body-xs)
- Custom utilities: `.glass`, `.bg-grid-hero`, `.accent-line`, `.section-py`

### Key Technologies
- **Next.js 16** with App Router and React 19
- **Tailwind CSS v4** with PostCSS
- **Shadcn UI** components (configured via `components.json`)
- **Framer Motion** for animations
- **focus-trap-react** for modal accessibility
- **Sonner** for toast notifications

### Accessibility
- ESLint jsx-a11y rules enforced
- Skip link for keyboard navigation
- Focus trapping in modals (Lightbox, Sheet)
- ARIA labels on interactive elements
- Reduced motion support in all animations
