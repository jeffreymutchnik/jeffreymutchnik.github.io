"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASING, DURATION, STAGGER, DELAY } from "@/lib/constants";

interface PageHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  overline,
  title,
  description,
  children,
}: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : STAGGER.normal,
        delayChildren: shouldReduceMotion ? 0 : DELAY.short,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : DURATION.medium,
        ease: EASING.smooth,
      },
    },
  };

  return (
    <section className="relative bg-[var(--color-bg-subtle)] py-12 md:py-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-cool-400) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-cool-400) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {overline && (
            <motion.div variants={itemVariants} className="mb-3">
              <div className="flex items-center justify-center gap-3">
                <motion.span
                  className="h-px w-8 bg-[var(--color-crimson-500)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : DURATION.medium, delay: shouldReduceMotion ? 0 : DELAY.long }}
                />
                <span className="text-overline">{overline}</span>
                <motion.span
                  className="h-px w-8 bg-[var(--color-crimson-500)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : DURATION.medium, delay: shouldReduceMotion ? 0 : DELAY.long }}
                />
              </div>
            </motion.div>
          )}
          <motion.h1 variants={itemVariants} className="text-h1 mb-4">
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={itemVariants} className="text-lead mb-6">
              {description}
            </motion.p>
          )}
          {children && <motion.div variants={itemVariants}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHeader;
