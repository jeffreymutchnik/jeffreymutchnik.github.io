/**
 * Shared animation and UI constants
 *
 * Centralizes repeated values to ensure consistency and make updates easier.
 */

// Easing curves for Framer Motion
// This specific curve creates a smooth deceleration effect
export const EASING = {
  // Primary easing - used for most entrance animations
  smooth: [0.16, 1, 0.3, 1] as const,
  // Standard easing for quick transitions
  easeOut: "easeOut" as const,
  // Linear for progress animations
  linear: "linear" as const,
} as const;

// Spring animation configurations for Framer Motion
export const SPRING = {
  // Snappy - good for hover effects, cards, interactive elements
  snappy: { type: "spring" as const, stiffness: 400, damping: 25 },
  // Gentle - good for timeline markers, subtle animations
  gentle: { type: "spring" as const, stiffness: 300, damping: 20 },
  // Bouncy - good for attention-grabbing elements
  bouncy: { type: "spring" as const, stiffness: 500, damping: 15 },
} as const;

// Scroll position thresholds (in pixels)
export const SCROLL_THRESHOLDS = {
  // When to show backdrop blur on header
  headerBackdrop: 50,
  // When to show floating nav in case studies
  caseStudyNav: 400,
} as const;

// Animation durations (in seconds)
export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  medium: 0.5,
  slow: 0.6,
  verySlow: 0.8,
} as const;

// Common animation delays (in seconds)
export const DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
} as const;

// Stagger configuration for list animations
export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

// IntersectionObserver margins
export const INTERSECTION_MARGINS = {
  // For section tracking (40% from top and bottom)
  sectionTracking: "-40% 0px -40% 0px",
  // For scroll reveal animations
  scrollReveal: "-100px",
} as const;
