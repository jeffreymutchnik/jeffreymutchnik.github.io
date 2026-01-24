"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Eye, ImageOff } from "lucide-react";
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
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-[var(--color-crimson-500)] focus-within:ring-offset-2">
        <button
          type="button"
          onClick={onClick}
          className="w-full text-left focus:outline-none"
          aria-label={`View ${item.title}${item.description ? `: ${item.description}` : ""}`}
        >
          <div className="relative aspect-[4/3] bg-[var(--color-warm-100)] dark:bg-[var(--color-surface)] overflow-hidden">
          {isPDF ? (
            // PDF Thumbnail placeholder
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-cool-900)] text-white p-6">
              <FileText className="h-16 w-16 mb-4 opacity-80" />
              <span className="text-sm font-medium text-center line-clamp-2 opacity-90">
                {item.title}
              </span>
            </div>
          ) : hasError ? (
            // Error fallback state
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-warm-200)] dark:bg-[var(--color-surface-2)] text-[var(--color-text-soft)] p-6">
              <ImageOff className="h-12 w-12 mb-3 opacity-60" />
              <span className="text-sm font-medium text-center line-clamp-2 opacity-75">
                {item.title}
              </span>
            </div>
          ) : (
            // Image with shimmer loading state
            <>
              {isLoading && (
                <div className="absolute inset-0 bg-[var(--color-warm-200)] dark:bg-[var(--color-surface-2)] overflow-hidden">
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>
              )}
              <Image
                src={item.file}
                alt={item.title}
                fill
                loading="lazy"
                className={cn(
                  "object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            </>
          )}

          {/* Hover Overlay with staggered content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              <h3 className="text-white text-h5 mb-2 line-clamp-2">{item.title}</h3>
            </div>
            {item.description && (
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <p className="text-white/80 text-body-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
              </div>
            )}
            <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              <Badge
                variant="accent"
                className="bg-[var(--color-crimson-500)]/90 text-white"
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

          {/* View indicator with scale animation */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <div className="bg-white/90 dark:bg-black/90 rounded-full p-2 shadow-lg">
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

          {/* Corner accent lines on hover */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-crimson-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-crimson-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br" />
          </div>
        </button>
      </Card>
    </motion.div>
  );
}
