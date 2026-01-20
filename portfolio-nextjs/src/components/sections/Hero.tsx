"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface HeroProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  badges?: Array<{
    icon?: "trophy" | "award";
    label: string;
  }>;
}

// Text reveal animation - each letter animates in
function AnimatedText({ text, className }: { text: string; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3 + index * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero({
  overline = "Marketing Technology Leader",
  title = "Jeffrey Mutchnik",
  subtitle = "Marketing technology leader who's built revenue engines from the ground up at 3 healthcare startups. Generated $20M+ in pipeline. HubSpot certified, Salesforce fluent.",
  primaryCta = { label: "View Resume", href: "/resume" },
  secondaryCta = { label: "Get in Touch", href: "/contact" },
  badges = [
    { icon: "trophy", label: "ACC Innovation Finalist" },
    { icon: "award", label: "Denver Startup of the Year Finalist" },
  ],
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax effect - grid moves slower than scroll
  const gridY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[var(--color-crimson-500)] opacity-[0.12] blur-3xl animate-float"
        />
        <div
          className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[var(--color-crimson-600)] opacity-[0.08] blur-3xl animate-float-delayed"
        />
        <div
          className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-crimson-400)] opacity-[0.06] blur-3xl animate-float-slow"
        />
      </div>

      {/* Grid overlay with parallax */}
      <motion.div
        className="absolute inset-0 bg-grid-hero opacity-30"
        style={{ y: shouldReduceMotion ? 0 : gridY }}
      />

      <motion.div
        className="container mx-auto px-6 py-32 relative z-10"
        style={{
          y: shouldReduceMotion ? 0 : contentY,
          opacity: shouldReduceMotion ? 1 : opacity
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0 }}
          >
            <span className="accent-line-animated" />
            <span className="text-overline text-[var(--color-warm-400)]">
              {overline}
            </span>
          </motion.div>

          {/* Title with letter reveal */}
          <h1 className="text-display font-display text-display-2xl text-white mb-6">
            <AnimatedText text={title} />
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-body-xl text-[var(--color-warm-200)] max-w-2xl mx-auto mb-10"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.8 }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 1 }}
          >
            <MagneticButton strength={40}>
              <Link
                href={primaryCta.href}
                className="btn-shimmer inline-flex items-center justify-center h-12 px-8 min-w-[160px] rounded-lg text-base font-medium bg-[#AE193B] !text-white hover:bg-[#991936] shadow-md hover:shadow-lg transition-all duration-200"
              >
                {primaryCta.label}
              </Link>
            </MagneticButton>
            <MagneticButton strength={40}>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center h-12 px-8 min-w-[160px] rounded-lg text-base font-medium border border-white/30 bg-transparent !text-white hover:bg-white/10 transition-all duration-200"
              >
                {secondaryCta.label}
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 1.2 }}
            >
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="accent"
                  className="bg-[var(--color-warm-500)]/40 text-white border-0 py-1.5 px-3"
                >
                  {badge.icon === "trophy" && (
                    <Trophy className="h-3.5 w-3.5 mr-1.5" />
                  )}
                  {badge.icon === "award" && (
                    <Award className="h-3.5 w-3.5 mr-1.5" />
                  )}
                  {badge.label}
                </Badge>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
