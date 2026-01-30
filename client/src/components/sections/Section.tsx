import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "subtle" | "primary";
  showDivider?: boolean;
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
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const backgroundClasses = {
    default: "bg-background",
    subtle: "bg-primary/[0.02]",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? reducedMotionVariants : sectionVariants}
      className={cn(backgroundClasses[background], className)}
    >
      {showDivider && (
        <div className="container-custom">
          <motion.div
            className="h-px w-1/2 ml-auto bg-primary origin-left"
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0.9 }}
            whileInView={
              shouldReduceMotion
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 1, opacity: 1 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 2, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </div>
      )}

      {showDivider && (
        <div className="container-custom">
          <div className="flex w-full">
            {/* Left half: always visible */}
            <div className="h-px w-1/2 bg-primary" />

            {/* Right half: draws from center → right */}
            <motion.div
              className="h-px w-1/2 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
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
