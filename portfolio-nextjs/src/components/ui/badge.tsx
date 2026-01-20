import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson-500)] focus:ring-offset-2 hover:scale-105 cursor-default",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-crimson-500)] text-white hover:brightness-110",
        secondary:
          "border-transparent bg-[var(--color-warm-200)] text-[var(--color-text)] hover:bg-[var(--color-warm-300)] dark:bg-[var(--color-surface)] dark:text-[var(--color-text)] dark:hover:bg-[var(--color-surface-raised)]",
        destructive:
          "border-transparent bg-[var(--color-error-500)] text-white hover:brightness-110",
        outline: "text-[var(--color-text)] border-[var(--color-border)] hover:bg-[var(--color-warm-100)] dark:text-[var(--color-text)] dark:border-[var(--color-border-strong)] dark:hover:bg-[var(--color-surface)]",
        accent:
          "border-transparent bg-[var(--color-crimson-100)] text-[var(--color-crimson-600)] hover:bg-[var(--color-crimson-200)] dark:bg-[var(--color-crimson-500)]/20 dark:text-[var(--color-crimson-400)] dark:hover:bg-[var(--color-crimson-500)]/30",
        primary:
          "border-transparent bg-[var(--color-crimson-500)] text-white hover:brightness-110",
        purple:
          "border-transparent bg-[var(--color-plum-500)] text-white hover:brightness-110",
        peach:
          "border-transparent bg-[var(--color-peach)] text-[var(--color-espresso)] hover:brightness-105",
        teal:
          "border-transparent bg-[var(--color-teal-500)] text-white hover:brightness-110",
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
