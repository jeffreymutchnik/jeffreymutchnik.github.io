"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Send, Check, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Formspree ID validation
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const isFormspreeConfigured = FORMSPREE_ID && FORMSPREE_ID !== 'placeholder' && FORMSPREE_ID.length > 0;

interface FieldError {
  message: string;
}

interface FormErrors {
  name?: FieldError;
  email?: FieldError;
  subject?: FieldError;
  message?: FieldError;
}

// Consolidated animated field component for both input and textarea
interface AnimatedFieldProps {
  as?: "input" | "textarea";
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  rows?: number;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function AnimatedField({
  as = "input",
  label,
  id,
  name,
  type = "text",
  required = false,
  autoComplete,
  rows = 5,
  error,
  value,
  onChange,
}: AnimatedFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [localHasValue, setLocalHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Compute hasValue: if controlled, use value prop; otherwise use local state
  const hasValue = value !== undefined ? value.length > 0 : localHasValue;
  const isFloating = isFocused || hasValue;
  const isTextarea = as === "textarea";
  const errorId = error ? `${id}-error` : undefined;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    setLocalHasValue(e.target.value.length > 0);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalHasValue(e.target.value.length > 0);
    onChange?.(e);
  };

  const baseClassName = cn(
    "peer w-full rounded-lg border-2 bg-white text-base text-[var(--color-text)] transition-all duration-200",
    "focus:outline-none dark:bg-[var(--color-surface)] dark:text-white",
    error
      ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
      : isFocused
        ? "border-[var(--color-crimson-500)] shadow-[0_0_0_3px_rgba(174,25,59,0.1)]"
        : "border-[var(--color-border)] hover:border-[var(--color-cool-400)] dark:border-[var(--color-border-strong)]",
    isTextarea ? "px-4 pt-7 pb-3 resize-none" : "h-14 px-4 pt-5 pb-2"
  );

  const labelY = isTextarea
    ? (isFloating ? -14 : 6)
    : (isFloating ? -10 : 0);

  const sharedProps = {
    id,
    name,
    required,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    className: baseClassName,
    "aria-invalid": error ? "true" as const : undefined,
    "aria-describedby": errorId,
  };

  return (
    <div className="relative group">
      {isTextarea ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          rows={rows}
          value={value}
          {...sharedProps}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={type}
          autoComplete={autoComplete}
          value={value}
          {...sharedProps}
        />
      )}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: labelY,
          scale: isFloating ? 0.85 : 1,
          color: error
            ? "rgb(239, 68, 68)"
            : isFocused
              ? "var(--color-crimson-500)"
              : "var(--color-text-soft)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={cn(
          "absolute left-4 origin-left pointer-events-none font-medium",
          isTextarea ? "top-4" : "top-1/2 -translate-y-1/2"
        )}
        style={{ transformOrigin: "left center" }}
      >
        {label}
        {required && <span className="text-[var(--color-crimson-500)] ml-0.5">*</span>}
      </motion.label>

      {/* Focus underline accent */}
      <motion.div
        className={cn(
          "absolute bottom-0 left-1/2 h-0.5 rounded-full",
          error ? "bg-red-500" : "bg-[var(--color-crimson-500)]"
        )}
        initial={{ width: 0, x: "-50%" }}
        animate={{ width: isFocused ? "calc(100% - 16px)" : 0, x: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Error message */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            id={errorId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 mt-1.5 text-red-500 text-sm"
            role="alert"
          >
            <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{error.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleFieldChange = useCallback((field: keyof typeof formData) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };
  }, [errors]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = { message: "Name is required" };
    }

    if (!formData.email.trim()) {
      newErrors.email = { message: "Email is required" };
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = { message: "Please enter a valid email address" };
    }

    if (!formData.subject.trim()) {
      newErrors.subject = { message: "Subject is required" };
    }

    if (!formData.message.trim()) {
      newErrors.message = { message: "Message is required" };
    } else if (formData.message.trim().length < 10) {
      newErrors.message = { message: "Message must be at least 10 characters" };
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check Formspree configuration
    if (!isFormspreeConfigured) {
      toast.error("Form not configured", {
        description: "The contact form is not properly configured. Please contact the site owner.",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors", {
        description: "Some fields need your attention.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        // Clear any existing timeout before setting a new one
        if (successTimeoutRef.current) {
          clearTimeout(successTimeoutRef.current);
        }
        successTimeoutRef.current = setTimeout(() => setIsSuccess(false), 3000);
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error("Failed to send message", {
            description: data.errors.map((err: { message: string }) => err.message).join(", "),
          });
        } else {
          toast.error("Failed to send message", {
            description: "Something went wrong. Please try again.",
          });
        }
      }
    } catch {
      toast.error("Failed to send message", {
        description: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show configuration warning in development
  if (!isFormspreeConfigured && process.env.NODE_ENV === "development") {
    return (
      <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
              Contact form not configured
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
              Set the <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">NEXT_PUBLIC_FORMSPREE_ID</code> environment variable to enable the contact form.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedField
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleFieldChange("name")}
          error={errors.name}
        />
        <AnimatedField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleFieldChange("email")}
          error={errors.email}
        />
      </div>

      <AnimatedField
        label="Subject"
        id="subject"
        name="subject"
        type="text"
        required
        value={formData.subject}
        onChange={handleFieldChange("subject")}
        error={errors.subject}
      />

      <AnimatedField
        as="textarea"
        label="Message"
        id="message"
        name="message"
        required
        rows={5}
        value={formData.message}
        onChange={handleFieldChange("message")}
        error={errors.message}
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
