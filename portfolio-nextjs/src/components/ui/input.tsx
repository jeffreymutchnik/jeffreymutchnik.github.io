import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[var(--color-neutral-300)] bg-white px-4 py-2 text-base text-[var(--color-primary-900)] placeholder:text-[var(--color-neutral-500)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:ring-offset-0 focus:border-[var(--color-accent-500)] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[var(--color-neutral-600)] dark:bg-[var(--color-neutral-800)] dark:text-white dark:placeholder:text-[var(--color-neutral-500)] dark:focus:border-[var(--color-accent-500)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
