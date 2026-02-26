/**
 * TestimonialQuote.tsx
 * ---------------------
 * Reusable testimonial card components.
 *
 * <TestimonialQuote> — standalone single card (kept for potential future use).
 * <TestimonialGrid>  — renders a responsive 3-column grid of founder cards.
 *
 * Each card layout:
 *   ┌──────────────────────────────────┐
 *   │  [company logo]                  │
 *   │                                  │
 *   │  Quote text in serif…            │
 *   │                                  │
 *   │  ──────────────────────────────  │
 *   │  [headshot]  Author name         │
 *   │              Role / company      │
 *   └──────────────────────────────────┘
 *
 * Asset paths come from content.ts — swap images there without touching
 * this component.
 */

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, reducedStaggerItem } from "./Section";
import type { Testimonial } from "@/lib/content";

// ─── Standalone quote (for potential reuse on other pages) ────────────────────

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
      <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground mb-6">
        {quote}
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

// ─── Grid of rich founder cards ───────────────────────────────────────────────

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-lg mx-auto md:max-w-none"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-border/80"
        >

          {/* ── Quote (no quotation marks) ────────────────────────────────── */}
          <blockquote className="font-serif text-[15px] sm:text-base md:text-lg leading-relaxed text-foreground flex-1 mb-6">
            {testimonial.quote}
          </blockquote>

          {/* ── Divider + author row ──────────────────────────────────────── */}
          <div className="pt-5 border-t border-border flex items-center gap-4">
            <img
              src={testimonial.headshotImage}
              alt={testimonial.author}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-border"
            />
            <div>
              <p className="font-medium text-foreground leading-tight">
                {testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground leading-snug mt-0.5 font-medium">
                {testimonial.rolePrefix}{" "}
                <a
                  href={testimonial.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-all"
                  data-testid={`link-company-${index}`}
                >
                  {testimonial.companyName}
                </a>
              </p>
            </div>
          </div>

        </motion.div>
      ))}
    </motion.div>
  );
}
