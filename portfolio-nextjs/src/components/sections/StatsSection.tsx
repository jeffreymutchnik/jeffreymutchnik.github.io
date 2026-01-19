"use client";

import { Card } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CountUpFromString } from "@/components/motion/CountUp";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  { value: "$20M+", label: "Pipeline Generated" },
  { value: "1,200%", label: "Webinar Growth YoY" },
  { value: "3", label: "Startups as First Hire" },
  { value: "$20M", label: "Series B Contribution" },
];

export function StatsSection({ stats = defaultStats, className }: StatsSectionProps) {
  return (
    <section className={`section-py bg-[var(--color-bg-subtle)] ${className || ""}`}>
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Card className="text-center py-8 px-4 border-0 shadow-none bg-transparent">
                <div className="text-metric mb-2">
                  <CountUpFromString value={stat.value} />
                </div>
                <div className="text-body-sm text-[var(--color-text-soft)] font-medium">
                  {stat.label}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default StatsSection;
