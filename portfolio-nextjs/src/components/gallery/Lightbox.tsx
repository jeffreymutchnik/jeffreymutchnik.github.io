"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import FocusTrap from "focus-trap-react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  type: "image" | "pdf";
  src: string;
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function Lightbox({
  isOpen,
  onClose,
  type,
  src,
  title,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: LightboxProps) {
  const shouldReduceMotion = useReducedMotion();
  const triggerElement = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Store trigger element for focus return
  useEffect(() => {
    if (isOpen) {
      triggerElement.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Handle close with focus return
  const handleClose = useCallback(() => {
    onClose();
    // Return focus after animation completes
    setTimeout(() => {
      triggerElement.current?.focus();
    }, shouldReduceMotion ? 0 : 200);
  }, [onClose, shouldReduceMotion]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          handleClose();
          break;
        case "ArrowLeft":
          if (hasPrev && onPrev) onPrev();
          break;
        case "ArrowRight":
          if (hasNext && onNext) onNext();
          break;
      }
    },
    [isOpen, handleClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const animationDuration = shouldReduceMotion ? 0 : 0.2;

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap
          focusTrapOptions={{
            initialFocus: () => closeButtonRef.current,
            allowOutsideClick: true,
            returnFocusOnDeactivate: false, // We handle focus return manually
            escapeDeactivates: false, // We handle ESC manually
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${title}`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Content */}
            <motion.div
              initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? { scale: 1, opacity: 0 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: animationDuration }}
              className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <h3 className="text-white text-lg font-medium truncate max-w-[70%]">
                  {title}
                </h3>
                <Button
                  ref={closeButtonRef}
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-white hover:bg-white/20"
                  data-lightbox-close
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Navigation Buttons */}
              {hasPrev && onPrev && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20 h-12 w-12"
                >
                  <ChevronLeft className="h-8 w-8" />
                  <span className="sr-only">Previous</span>
                </Button>
              )}

              {hasNext && onNext && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20 h-12 w-12"
                >
                  <ChevronRight className="h-8 w-8" />
                  <span className="sr-only">Next</span>
                </Button>
              )}

              {/* Content Area */}
              <div className="w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center mt-12">
                {type === "image" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />
                  </div>
                ) : (
                  <iframe
                    src={`${src}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full bg-white rounded-lg"
                    title={title}
                  />
                )}
              </div>

              {/* Keyboard hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                Press ESC to close{(hasPrev || hasNext) && " • Arrow keys to navigate"}
              </div>
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
}
