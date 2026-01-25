"use client";

import { useRef } from "react";
import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASING, DURATION } from "@/lib/constants";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Use this for stagger children
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASING.smooth,
    },
  },
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : staggerItemVariants;

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}

export default StaggerContainer;
