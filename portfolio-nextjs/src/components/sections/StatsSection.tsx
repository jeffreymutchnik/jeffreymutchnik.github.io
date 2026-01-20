"use client";

import { motion } from "framer-motion";
import { TrendingUp, Rocket, Award, DollarSign, LucideIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CountUpFromString } from "@/components/motion/CountUp";

interface Stat {
  value: string;
  label: string;
  icon?: "trending" | "rocket" | "award" | "dollar";
}

interface StatsSectionProps {
  stats?: Stat[];
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  trending: TrendingUp,
  rocket: Rocket,
  award: Award,
  dollar: DollarSign,
};

const defaultStats: Stat[] = [
  { value: "$20M+", label: "Pipeline Generated", icon: "dollar" },
  { value: "1,200%", label: "Webinar Growth YoY", icon: "trending" },
  { value: "3", label: "Startups as First Hire", icon: "rocket" },
  { value: "$20M", label: "Series B Contribution", icon: "award" },
];

export function StatsSection({ stats = defaultStats, className }: StatsSectionProps) {
  return (
    <section className={`section-py bg-[var(--color-bg-subtle)] ${className || ""}`}>
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative text-center py-8 px-6 rounded-xl card-glass cursor-default"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Icon */}
                  {Icon && (
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-crimson-500)]/10 flex items-center justify-center group-hover:bg-[var(--color-crimson-500)]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[var(--color-crimson-500)]" />
                      </div>
                    </div>
                  )}

                  {/* Value */}
                  <div className="text-metric mb-2 text-[var(--color-cool-900)]">
                    <CountUpFromString value={stat.value} />
                  </div>

                  {/* Label */}
                  <div className="text-body-sm text-[var(--color-text-soft)] font-medium mb-4">
                    {stat.label}
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-[var(--color-peach)] group-hover:w-20 transition-all duration-300" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default StatsSection;
