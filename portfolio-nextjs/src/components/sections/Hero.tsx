"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroTitle, heroSubtitle, heroButtons } from "@/lib/animations";

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

export function Hero({
  overline = "Marketing Technology Leader",
  title = "Jeffrey Mutchnik",
  subtitle = "8+ years driving revenue growth for B2B healthcare technology companies. First marketing hire at 3 startups. HubSpot and Salesforce expert.",
  primaryCta = { label: "View Resume", href: "/resume" },
  secondaryCta = { label: "Get in Touch", href: "/contact" },
  badges = [
    { icon: "trophy", label: "ACC Innovation Finalist" },
    { icon: "award", label: "Denver Startup of the Year Finalist" },
  ],
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-hero opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cool-900)]/50" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0 }}
          >
            <span className="accent-line" />
            <span className="text-overline text-[var(--color-warm-400)]">
              {overline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-display font-display text-display-2xl text-white mb-6"
            variants={shouldReduceMotion ? undefined : heroTitle}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "visible"}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-body-xl text-[var(--color-warm-200)] max-w-2xl mx-auto mb-10"
            variants={shouldReduceMotion ? undefined : heroSubtitle}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "visible"}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={shouldReduceMotion ? undefined : heroButtons}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "visible"}
          >
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[160px] border-white/30 text-white hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cool-800)]"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </motion.div>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}

export default Hero;
