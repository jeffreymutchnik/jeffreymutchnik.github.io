"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  isActive?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

// Individual timeline entry with animations
function TimelineEntry({
  item,
  index,
  isLast,
}: {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-12"
    >
      {/* Animated line segment */}
      {!isLast && (
        <motion.div
          className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-[var(--color-crimson-500)] origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}

      {/* Marker with pulse effect */}
      <div className="absolute left-0 w-8 h-8">
        {/* Pulse ring for active items */}
        {item.isActive && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--color-crimson-500)]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        {/* Main marker */}
        <motion.div
          className={`w-8 h-8 rounded-full border-4 flex items-center justify-center relative z-10 ${
            item.isActive
              ? "border-[var(--color-crimson-500)] bg-[var(--color-crimson-500)]"
              : "border-[var(--color-cool-300)] bg-white dark:border-[var(--color-border-strong)] dark:bg-[var(--color-surface)]"
          }`}
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: shouldReduceMotion ? 0 : index * 0.1,
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
        >
          {item.isActive && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </motion.div>
      </div>

      {/* Content card */}
      <motion.div
        className="group"
        whileHover={shouldReduceMotion ? {} : { x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="text-body-sm text-[var(--color-crimson-500)] font-medium">
          {item.date}
        </span>
        <h4 className="text-h4 mt-1 mb-0 group-hover:text-[var(--color-crimson-500)] transition-colors">
          {item.title}
        </h4>
        <span className="text-body-sm text-[var(--color-text-soft)]">
          {item.company}
        </span>
        <ul className="mt-3 space-y-2 text-[var(--color-text-soft)] dark:text-[var(--color-text-muted)]">
          {item.description.map((point, pointIndex) => (
            <motion.li
              key={pointIndex}
              className="flex gap-2"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                delay: shouldReduceMotion ? 0 : index * 0.1 + 0.2 + pointIndex * 0.05,
              }}
            >
              <span className="text-[var(--color-crimson-500)] mt-1.5">•</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const shouldReduceMotion = useReducedMotion();

  // Background line that shows scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line (static) */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)] dark:bg-[var(--color-border-strong)]" />

      {/* Scroll progress line overlay */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute left-4 top-0 w-px bg-[var(--color-crimson-500)]/30 origin-top"
          style={{ height: lineHeight }}
        />
      )}

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineEntry
            key={index}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
