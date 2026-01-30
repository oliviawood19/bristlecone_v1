import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerItem, reducedStaggerItem } from "./Section";

interface TestimonialQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialQuote({ quote, author, role }: TestimonialQuoteProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <motion.div
      variants={itemVariants}
      className="border-l-2 border-accent/30 pl-6 md:pl-8 py-2"
    >
      <Quote className="w-6 h-6 text-accent/40 mb-4" />
      <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground mb-6">
        "{quote}"
      </blockquote>
      <footer className="text-muted-foreground">
        <cite className="not-italic">
          <span className="font-medium text-foreground">{author}</span>
          <span className="mx-2">/</span>
          <span>{role}</span>
        </cite>
      </footer>
    </motion.div>
  );
}

interface TestimonialGridProps {
  testimonials: TestimonialQuoteProps[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="border border-border/50 rounded-2xl p-6 md:p-8"
        >
          <Quote className="w-6 h-6 text-accent/40 mb-4" />
          <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-foreground mb-6">
            "{testimonial.quote}"
          </blockquote>
          <footer className="pt-4 border-t border-border/50 text-sm text-muted-foreground">
            <cite className="not-italic">
              <span className="font-medium text-foreground block">{testimonial.author}</span>
              <span>{testimonial.role}</span>
            </cite>
          </footer>
        </motion.div>
      ))}
    </div>
  );
}
