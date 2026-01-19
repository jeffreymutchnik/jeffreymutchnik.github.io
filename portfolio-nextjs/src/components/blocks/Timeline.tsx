"use client";

import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

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

export function Timeline({ items }: TimelineProps) {
  return (
    <StaggerContainer className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)] dark:bg-[var(--color-border-strong)]" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <StaggerItem key={index}>
            <div className="relative pl-12">
              {/* Marker */}
              <div
                className={`absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                  item.isActive
                    ? "border-[var(--color-crimson-500)] bg-[var(--color-crimson-500)]"
                    : "border-[var(--color-border)] bg-white dark:border-[var(--color-border-strong)] dark:bg-[var(--color-surface)]"
                }`}
              >
                {item.isActive && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              {/* Content */}
              <div>
                <span className="text-body-sm text-[var(--color-plum-500)] font-medium">
                  {item.date}
                </span>
                <h4 className="text-h4 mt-1 mb-0">{item.title}</h4>
                <span className="text-body-sm text-[var(--color-text-soft)]">
                  {item.company}
                </span>
                <ul className="mt-3 space-y-2 text-[var(--color-text-soft)] dark:text-[var(--color-text-muted)]">
                  {item.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-2">
                      <span className="text-[var(--color-crimson-500)] mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}

export default Timeline;
