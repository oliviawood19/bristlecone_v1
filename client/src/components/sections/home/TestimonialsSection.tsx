/**
 * TestimonialsSection.tsx
 * ------------------------
 * "Founders Trust The Process." testimonials section.
 *
 * Content:  TESTIMONIALS from lib/content.ts.
 * Rendering: Delegates to the reusable <TestimonialGrid> component.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Section, staggerContainer } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TestimonialGrid } from "@/components/sections/TestimonialQuote";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="testimonials" background="default" showDivider>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Testimonials"
          title="In their words."
          description={
            <p>
              We are proud to be 100% referenceable with the owners who have entrusted us with their life’s work.
            </p>
          }
        />

        <TestimonialGrid testimonials={TESTIMONIALS} />

      </motion.div>
    </Section>
  );
}
