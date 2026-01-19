import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson-500)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-crimson-500)] text-white",
        secondary:
          "border-transparent bg-[var(--color-warm-200)] text-[var(--color-text)] dark:bg-[var(--color-surface)] dark:text-[var(--color-text)]",
        destructive:
          "border-transparent bg-[var(--color-error-500)] text-white",
        outline: "text-[var(--color-text)] border-[var(--color-border)] dark:text-[var(--color-text)] dark:border-[var(--color-border-strong)]",
        accent:
          "border-transparent bg-[var(--color-crimson-100)] text-[var(--color-crimson-600)] dark:bg-[var(--color-crimson-500)]/20 dark:text-[var(--color-crimson-400)]",
        primary:
          "border-transparent bg-[var(--color-crimson-500)] text-white",
        purple:
          "border-transparent bg-[var(--color-plum-500)] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
