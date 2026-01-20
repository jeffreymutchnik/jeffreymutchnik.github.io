import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#AE193B] text-white hover:bg-[#991936] shadow-md hover:shadow-lg",
        accent:
          "bg-[var(--color-crimson-500)] text-white hover:bg-[var(--color-crimson-600)] shadow-md hover:shadow-lg",
        destructive:
          "bg-[var(--color-error-500)] text-white hover:bg-[var(--color-error-500)]/90",
        outline:
          "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:bg-[var(--color-warm-100)] hover:text-[var(--color-text)] dark:border-[var(--color-border-strong)] dark:bg-transparent dark:text-[var(--color-text)] dark:hover:bg-[var(--color-surface)]",
        secondary:
          "bg-[var(--color-plum-500)] text-white hover:bg-[var(--color-plum-600)]",
        ghost: "text-[var(--color-text-muted)] hover:bg-[var(--color-warm-100)] hover:text-[var(--color-text)] dark:text-[var(--color-text-soft)] dark:hover:bg-[var(--color-surface)] dark:hover:text-white",
        link: "text-[var(--color-link)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
