"use client";

import { useRef } from "react";
import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, fadeIn } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

// Use centralized animation variants from animations.ts
const defaultVariants = {
  up: fadeInUp,
  down: fadeInDown,
  left: slideInLeft,
  right: slideInRight,
  none: fadeIn,
};

export function ScrollReveal({
  children,
  className,
  variants,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });
  const shouldReduceMotion = useReducedMotion();

  const selectedVariants = variants || defaultVariants[direction];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariants}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
