import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerItem, reducedStaggerItem } from "./Section";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  titleClassName
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <div
      className={cn(
        "mb-8 sm:mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <motion.span
        variants={itemVariants}
        className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-4"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={itemVariants}
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.div
          variants={itemVariants}
          className={cn(
            "text-lg text-muted-foreground leading-relaxed max-w-[62ch]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.div>
      )}
    </div>
  );
}
