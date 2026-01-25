"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "light" | "dark";
}

export function CTASection({
  title = "Let's Work Together",
  description = "Looking for a Marketing Technology Manager who can drive measurable results? Let's discuss how I can help grow your business.",
  primaryCta = { label: "Get in Touch", href: "/contact" },
  secondaryCta = { label: "View Resume", href: "/resume" },
  variant = "dark",
}: CTASectionProps) {
  const { resolvedTheme } = useTheme();
  const isDark = variant === "dark";
  // For light variant, check if system is in dark mode
  const useWhiteText = isDark || (variant === "light" && resolvedTheme === "dark");

  return (
    <section
      className={`section-py-lg relative overflow-hidden ${
        isDark
          ? "bg-gradient-animated text-white"
          : "bg-[var(--color-bg-subtle)]"
      }`}
    >
      {/* Floating decorative elements for dark variant */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-[var(--color-crimson-500)] opacity-[0.08] blur-3xl animate-float" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-[var(--color-crimson-600)] opacity-[0.06] blur-3xl animate-float-delayed" />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-h2 mb-4 ${
              isDark ? "text-white" : "text-[var(--color-text)]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-body-lg mb-8 ${
              isDark
                ? "text-[var(--color-warm-200)]"
                : "text-[var(--color-text-soft)]"
            }`}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className={`btn-shimmer inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 ${
                isDark
                  ? "bg-white !text-[var(--color-cool-900)] hover:bg-white/90"
                  : "bg-[var(--color-crimson-500)] !text-white hover:bg-[var(--color-crimson-600)]"
              }`}
            >
              {primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-medium transition-all duration-200 border bg-transparent hover:opacity-80"
              style={{
                borderColor: useWhiteText ? "rgba(255,255,255,0.3)" : "#262626",
                color: useWhiteText ? "#ffffff" : "#262626",
              }}
            >
              {secondaryCta.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTASection;
