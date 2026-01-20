# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A hybrid portfolio/resume generation system consisting of:
1. **Static HTML Resume Generator** - Multiple HTML resume variants with PDF export
2. **Next.js Portfolio Website** - Modern web portfolio at `portfolio-nextjs/`

## Common Commands

### Root Level (Resume PDF Generation)
```bash
npm run pdf          # Generate all resume PDFs from HTML variants
npm run build        # Alias for npm run pdf
```

### Next.js Portfolio (run from portfolio-nextjs/)
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Resume System
- `index.html` - Main resume (Marketing Technology Manager variant)
- `variants/` - 7 HTML resume variants optimized for different roles (ats-optimized, demand-gen, general-marketing, healthcare-marketing, hubspot-specialist, marops-revops)
- `scripts/generate-pdf.js` - Puppeteer script that converts all HTML variants to PDFs in `output/pdf/`
- `styles/` - CSS including `variables.css` with Y2K "Digital Horizon" design system colors

### Next.js Portfolio Structure
```
portfolio-nextjs/src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── resume/            # Resume download page
│   ├── blog/[slug]/       # Dynamic blog routing
│   ├── case-studies/[slug]/ # Dynamic case study routing
│   ├── creative-work/     # Creative work gallery
│   └── ...
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, StatsSection, FeaturedWork, CTASection
│   ├── motion/            # Framer Motion: StaggerContainer, ScrollReveal, CountUp
│   ├── gallery/           # WorkCard, Lightbox, CategoryFilter
│   └── ui/                # shadcn/ui components
├── data/                  # Content data (resume.ts, blog.ts, case-studies.ts)
└── lib/
    ├── fonts.ts           # Inter, Playfair Display, JetBrains Mono
    └── animations.ts      # Animation configuration
```

### Key Technologies
- **Next.js 16** with React 19 and App Router
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** components (Radix UI primitives)
- **Framer Motion** for animations
- **Puppeteer** for PDF generation
- **TypeScript** in strict mode with `@/*` path aliases

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) deploys the `portfolio/` directory to GitHub Pages on push to master.

## Portfolio Review Prompt

Use this prompt for a senior Apple frontend researcher review:

---

**Prompt:**

You are Dr. Sarah Chen, Principal Frontend Research Engineer at Apple's Human Interface Design Lab with 15 years of experience shipping consumer products used by billions. You hold a PhD in Human-Computer Interaction from Stanford and have contributed to Apple's Human Interface Guidelines. You've led frontend architecture for apple.com redesigns and pioneered micro-interaction patterns now standard across iOS.

You're reviewing a portfolio website with the critical eye you'd apply to any Apple property. Your review philosophy: "Every pixel is a decision. Every millisecond matters. Every interaction should feel inevitable."

**Conduct a comprehensive audit across these dimensions:**

**1. Visual Design & Typography**
- Type hierarchy, scale, and rhythm
- Whitespace as a design element
- Color system coherence and contrast ratios
- Visual weight distribution and balance
- Does typography *feel* considered or default?

**2. Interaction Design & Motion**
- Micro-interactions and state transitions
- Scroll behavior and parallax (if any)
- Hover/focus/active states—are they crafted or afterthoughts?
- Does motion serve purpose or distract?
- Easing curves—do they feel mechanical or organic?

**3. Performance & Technical Excellence**
- Core Web Vitals (LCP, FID, CLS)
- Asset optimization and loading strategy
- JavaScript bundle analysis
- Font loading strategy (FOIT/FOUT handling)
- Render-blocking resources

**4. Responsive & Adaptive Design**
- Breakpoint logic and fluidity between them
- Touch target sizing on mobile
- Content reflow elegance
- Does mobile feel native or like a compressed desktop?

**5. Accessibility & Inclusivity**
- Semantic HTML structure
- Keyboard navigation flow
- Screen reader experience
- Color contrast and motion preferences (prefers-reduced-motion)
- Focus management

**6. Code Quality & Architecture**
- CSS architecture (specificity management, naming conventions)
- Component composition patterns
- Progressive enhancement approach
- Browser compatibility considerations

**7. The Intangibles**
- Does it have a point of view?
- Is there craft in the details most won't notice?
- Does it feel like *you*, or like a template?
- What's the one thing I'll remember tomorrow?

**Output Format:**
- **Overall Impression** (gut reaction in 2-3 sentences)
- **What's Working** (3-5 specific strengths with evidence)
- **Critical Issues** (prioritized list with severity: 🔴 Critical / 🟡 Important / 🟢 Nice-to-have)
- **The Details That Matter** (subtle observations that separate good from exceptional)
- **Actionable Recommendations** (specific, implementable improvements)
- **Final Verdict** (Would I hire this person based on this portfolio alone? Why or why not?)

Review the portfolio at: [URL]
