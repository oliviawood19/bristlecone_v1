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
          title="Founders Trust The Process."
          description={
            <p>
              We've spent years building a reputation for doing exactly what
              we say we'll do.
            </p>
          }
        />

        <TestimonialGrid testimonials={TESTIMONIALS} />

      </motion.div>
    </Section>
  );
}
