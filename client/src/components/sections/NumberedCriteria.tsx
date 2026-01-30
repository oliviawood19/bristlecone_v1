import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, reducedStaggerItem } from "./Section";

interface CriteriaItem {
  text: string;
}

interface NumberedCriteriaProps {
  items: CriteriaItem[];
}

export function NumberedCriteria({ items }: NumberedCriteriaProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6 md:space-y-8 max-w-3xl"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex gap-6 md:gap-8 items-baseline group"
        >
          <span className="text-sm font-medium text-accent tabular-nums shrink-0 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg md:text-xl text-foreground leading-relaxed">
            {item.text}
          </span>
        </motion.li>
      ))}
    </motion.ol>
  );
}
