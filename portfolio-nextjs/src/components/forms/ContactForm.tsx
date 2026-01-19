"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
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
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-body-sm font-medium text-[var(--color-primary-900)] dark:text-white"
          >
            Name <span className="text-[var(--color-error-500)]">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-body-sm font-medium text-[var(--color-primary-900)] dark:text-white"
          >
            Email <span className="text-[var(--color-error-500)]">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-body-sm font-medium text-[var(--color-primary-900)] dark:text-white"
        >
          Subject <span className="text-[var(--color-error-500)]">*</span>
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-body-sm font-medium text-[var(--color-primary-900)] dark:text-white"
        >
          Message <span className="text-[var(--color-error-500)]">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or opportunity..."
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export default ContactForm;
