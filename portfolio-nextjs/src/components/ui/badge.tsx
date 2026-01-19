import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-accent-500)] text-white",
        secondary:
          "border-transparent bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] dark:bg-[var(--color-neutral-800)] dark:text-[var(--color-neutral-100)]",
        destructive:
          "border-transparent bg-[var(--color-error-500)] text-white",
        outline: "text-[var(--color-neutral-900)] border-[var(--color-neutral-300)] dark:text-[var(--color-neutral-100)] dark:border-[var(--color-neutral-600)]",
        accent:
          "border-transparent bg-[var(--color-accent-100)] text-[var(--color-accent-600)] dark:bg-[var(--color-accent-500)]/20 dark:text-[var(--color-accent-400)]",
        primary:
          "border-transparent bg-[var(--color-primary-500)] text-white",
        purple:
          "border-transparent bg-[var(--color-purple-500)] text-white",
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
