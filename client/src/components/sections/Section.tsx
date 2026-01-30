import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "subtle" | "primary";
}

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export function Section({
  children,
  className,
  id,
  background = "default"
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const backgroundClasses = {
    default: "bg-background",
    subtle: "bg-primary/[0.02]",
    primary: "bg-primary text-primary-foreground"
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? reducedMotionVariants : sectionVariants}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgroundClasses[background],
        className
      )}
    >
      <div className="container-custom">
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
      delayChildren: 0.1
    }
  }
};

// Item variants for staggered children
export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const reducedStaggerItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};
