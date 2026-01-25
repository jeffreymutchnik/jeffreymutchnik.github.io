import { Variants } from "framer-motion";
import { EASING, DURATION, DELAY } from "./constants";

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASING.easeOut },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.smooth },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.smooth },
  },
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.smooth },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.smooth },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger children (use with staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASING.smooth },
  },
};

// Hero-specific animations
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.verySlow, ease: EASING.smooth },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.verySlow, delay: DELAY.medium, ease: EASING.smooth },
  },
};

export const heroButtons: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, delay: 0.4, ease: EASING.smooth },
  },
};

// Card hover effect
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button tap effect
export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Nav item hover
export const navItemHover = {
  color: "#14B8A6",
  transition: { duration: 0.2 },
};

// Gradient text animation
export const gradientText = {
  backgroundSize: "200% 200%",
  animation: "gradient 3s ease infinite",
};

// Count up animation helper
export const countUpTransition = {
  duration: 2,
  ease: EASING.smooth,
};

// Mobile menu animations
export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, delay: DELAY.short },
  },
};

export const mobileMenuPanel: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export const mobileMenuItems: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
