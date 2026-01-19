"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const isDark = variant === "dark";

  return (
    <section
      className={`section-py-lg ${
        isDark
          ? "bg-gradient-hero text-white"
          : "bg-[var(--color-surface-secondary)]"
      }`}
    >
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-h2 mb-4 ${
              isDark ? "text-white" : "text-[var(--color-primary-900)]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-body-lg mb-8 ${
              isDark
                ? "text-[var(--color-neutral-300)]"
                : "text-[var(--color-neutral-600)]"
            }`}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className={isDark ? "" : ""}
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={
                isDark
                  ? "border-white/30 text-white hover:bg-white/10 hover:text-white"
                  : ""
              }
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTASection;
