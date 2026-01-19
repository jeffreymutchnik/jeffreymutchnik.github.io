"use client";

import { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { FileText, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/data/creative-work";

interface WorkCardProps {
  item: WorkItem;
  onClick: () => void;
}

export function WorkCard({ item, onClick }: WorkCardProps) {
  const isPDF = item.type === "pdf";
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[var(--color-crimson-500)] focus-within:ring-offset-2">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left focus:outline-none"
        aria-label={`View ${item.title}${item.description ? `: ${item.description}` : ""}`}
      >
        <div className="relative aspect-[4/3] bg-[var(--color-warm-100)] dark:bg-[var(--color-surface)] overflow-hidden">
        {isPDF ? (
          // PDF Thumbnail placeholder
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-cool-900)] to-[var(--color-plum-500)] text-white p-6">
            <FileText className="h-16 w-16 mb-4 opacity-80" />
            <span className="text-sm font-medium text-center line-clamp-2 opacity-90">
              {item.title}
            </span>
          </div>
        ) : (
          // Image with loading state
          <>
            {isLoading && (
              <div className={cn(
                "absolute inset-0 bg-[var(--color-warm-200)] dark:bg-[var(--color-surface-2)]",
                !shouldReduceMotion && "animate-pulse"
              )} />
            )}
            <Image
              src={item.file}
              alt={item.title}
              fill
              className={cn(
                "object-cover transition-all duration-300 group-hover:scale-105",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setIsLoading(false)}
            />
          </>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-h5 mb-2 line-clamp-2">{item.title}</h3>
            {item.description && (
              <p className="text-white/80 text-body-sm mb-3 line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex items-center gap-2">
              <Badge
                variant="accent"
                className="bg-[var(--color-plum-500)]/90 text-white"
              >
                {item.company}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-0"
              >
                {isPDF ? "PDF" : "Image"}
              </Badge>
            </div>
          </div>
        </div>

        {/* View indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 dark:bg-black/90 rounded-full p-2">
            <Eye className="h-4 w-4 text-[var(--color-text)] dark:text-white" />
          </div>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="accent" className="bg-[var(--color-crimson-500)]">
              Featured
            </Badge>
          </div>
        )}
        </div>
      </button>
    </Card>
  );
}
