import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "subtle" | "primary";
  showDivider?: boolean;
  disableAnimation?: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export function Section({
  children,
  className,
  id,
  background = "default",
  showDivider = false,
  disableAnimation = false,
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const backgroundClasses = {
    default: "bg-background",
    subtle: "bg-primary/[0.02]",
    primary: "bg-primary text-primary-foreground",
  };

  const motionProps = disableAnimation
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: shouldReduceMotion ? reducedMotionVariants : sectionVariants,
      };

  return (
    <motion.section
      id={id}
      {...motionProps}
      className={cn(backgroundClasses[background], className)}
    >
      {showDivider && (
        <div className="container-custom relative">
          {/* Left half: always visible */}
          <div className="absolute left-0 right-1/2 top-0 border-b border-primary" />

          {/* Right half: draws from center → right */}
          <motion.div
            className="absolute left-1/2 right-0 top-0 border-b border-primary origin-left"
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 2, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </div>
      )}

      <div className="container-custom py-12 sm:py-16 md:py-24 lg:py-32">
        {children}
      </div>
    </motion.section>
  );
}

// Stagger container for child animations
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Item variants for staggered children
export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const reducedStaggerItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
