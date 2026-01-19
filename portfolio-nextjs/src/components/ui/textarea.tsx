import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-text-soft)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson-500)] focus:ring-offset-0 focus:border-[var(--color-crimson-500)] disabled:cursor-not-allowed disabled:opacity-50 resize-y dark:border-[var(--color-border-strong)] dark:bg-[var(--color-surface)] dark:text-white dark:placeholder:text-[var(--color-text-muted)] dark:focus:border-[var(--color-crimson-500)]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
