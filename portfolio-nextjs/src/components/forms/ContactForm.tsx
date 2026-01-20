"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Send, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Animated floating label input
function AnimatedInput({
  label,
  id,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFloating = isFocused || hasValue;

  return (
    <div className="relative group">
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={cn(
          "peer w-full h-14 px-4 pt-5 pb-2 rounded-lg border-2 bg-white text-base text-[var(--color-text)] transition-all duration-200",
          "focus:outline-none dark:bg-[var(--color-surface)] dark:text-white",
          isFocused
            ? "border-[var(--color-crimson-500)] shadow-[0_0_0_3px_rgba(174,25,59,0.1)]"
            : "border-[var(--color-border)] hover:border-[var(--color-cool-400)] dark:border-[var(--color-border-strong)]"
        )}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -10 : 0,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "var(--color-crimson-500)" : "var(--color-text-soft)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute left-4 top-1/2 -translate-y-1/2 origin-left pointer-events-none font-medium"
        style={{ transformOrigin: "left center" }}
      >
        {label}
        {required && <span className="text-[var(--color-crimson-500)] ml-0.5">*</span>}
      </motion.label>

      {/* Focus underline accent */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--color-crimson-500)] rounded-full"
        initial={{ width: 0, x: "-50%" }}
        animate={{ width: isFocused ? "calc(100% - 16px)" : 0, x: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
}

// Animated textarea
function AnimatedTextarea({
  label,
  id,
  name,
  required = false,
  rows = 5,
}: {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isFloating = isFocused || hasValue;

  return (
    <div className="relative group">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={cn(
          "peer w-full px-4 pt-7 pb-3 rounded-lg border-2 bg-white text-base text-[var(--color-text)] transition-all duration-200 resize-none",
          "focus:outline-none dark:bg-[var(--color-surface)] dark:text-white",
          isFocused
            ? "border-[var(--color-crimson-500)] shadow-[0_0_0_3px_rgba(174,25,59,0.1)]"
            : "border-[var(--color-border)] hover:border-[var(--color-cool-400)] dark:border-[var(--color-border-strong)]"
        )}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -14 : 6,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "var(--color-crimson-500)" : "var(--color-text-soft)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute left-4 top-4 origin-left pointer-events-none font-medium"
        style={{ transformOrigin: "left center" }}
      >
        {label}
        {required && <span className="text-[var(--color-crimson-500)] ml-0.5">*</span>}
      </motion.label>

      {/* Focus underline accent */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--color-crimson-500)] rounded-full"
        initial={{ width: 0, x: "-50%" }}
        animate={{ width: isFocused ? "calc(100% - 16px)" : 0, x: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast.error("Failed to send message", {
          description: "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedInput
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
        <AnimatedInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <AnimatedInput
        label="Subject"
        id="subject"
        name="subject"
        type="text"
        required
      />

      <AnimatedTextarea
        label="Message"
        id="message"
        name="message"
        required
        rows={5}
      />

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="relative overflow-hidden min-w-[180px]"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </motion.span>
            ) : isSuccess ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center"
              >
                <Check className="mr-2 h-4 w-4" />
                Sent!
              </motion.span>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </form>
  );
}

export default ContactForm;
