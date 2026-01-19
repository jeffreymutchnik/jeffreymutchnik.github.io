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
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-neutral-200)] dark:bg-[var(--color-neutral-700)]" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <StaggerItem key={index}>
            <div className="relative pl-12">
              {/* Marker */}
              <div
                className={`absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                  item.isActive
                    ? "border-[var(--color-accent-500)] bg-[var(--color-accent-500)]"
                    : "border-[var(--color-neutral-300)] bg-white dark:border-[var(--color-neutral-600)] dark:bg-[var(--color-neutral-800)]"
                }`}
              >
                {item.isActive && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              {/* Content */}
              <div>
                <span className="text-body-sm text-[var(--color-accent-500)] font-medium">
                  {item.date}
                </span>
                <h4 className="text-h4 mt-1 mb-0">{item.title}</h4>
                <span className="text-body-sm text-[var(--color-neutral-500)]">
                  {item.company}
                </span>
                <ul className="mt-3 space-y-2 text-[var(--color-neutral-600)] dark:text-[var(--color-neutral-400)]">
                  {item.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-2">
                      <span className="text-[var(--color-accent-500)] mt-1.5">•</span>
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
