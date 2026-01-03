"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-amber-500 to-amber-600 text-white",

        /** ⭐ Uiverse Golden Button */
        uiverseGold: "uiverse-gold-button",

        outline:
          "border border-amber-500/30 bg-transparent text-amber-100 hover:bg-amber-500/10",
      },
      size: {
        default: "h-10 px-6 py-2.5 rounded-lg",
        sm: "h-8 px-4 rounded-md text-sm",
        lg: "h-12 px-8 rounded-lg text-base font-semibold",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />

      {/* 🔒 Scoped CSS (not global) */}
      <style jsx>{`
        .uiverse-gold-button {
          --gold: #f5c542;
          font-size: 15px;
          letter-spacing: 0.06em;
          font-family: inherit;
          position: relative;
          overflow: hidden;
          border-radius: 0.6em;
          border: 2px solid var(--gold);
          color: var(--gold);

          background: linear-gradient(
            to right,
            rgba(245, 197, 66, 0.12) 1%,
            transparent 40%,
            transparent 60%,
            rgba(245, 197, 66, 0.12) 100%
          );

          box-shadow: inset 0 0 10px rgba(245, 197, 66, 0.45),
            0 0 9px 3px rgba(245, 197, 66, 0.15);

          transition: all 0.3s ease;
        }

        .uiverse-gold-button:hover {
          color: #ffefb0;
          box-shadow: inset 0 0 12px rgba(245, 197, 66, 0.65),
            0 0 12px 4px rgba(245, 197, 66, 0.25);
        }
      `}</style>
    </>
  );
}

export { Button, buttonVariants };
