import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-button text-white hover:opacity-90 shadow-md hover:shadow-lg",
        accent:
          "bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] shadow-md hover:shadow-lg",
        destructive:
          "bg-[var(--color-error-500)] text-white hover:bg-[var(--color-error-500)]/90",
        outline:
          "border border-[var(--color-neutral-300)] bg-white text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-primary-900)] dark:border-[var(--color-neutral-600)] dark:bg-transparent dark:text-[var(--color-neutral-100)] dark:hover:bg-[var(--color-neutral-800)]",
        secondary:
          "bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-200)] dark:bg-[var(--color-neutral-800)] dark:text-[var(--color-neutral-100)] dark:hover:bg-[var(--color-neutral-700)]",
        ghost: "text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-primary-900)] dark:text-[var(--color-neutral-300)] dark:hover:bg-[var(--color-neutral-800)] dark:hover:text-white",
        link: "text-[var(--color-accent-500)] underline-offset-4 hover:underline",
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
