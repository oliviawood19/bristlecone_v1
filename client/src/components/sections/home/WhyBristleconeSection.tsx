/**
 * WhyBristleconeSection.tsx
 * --------------------------
 * "Built by Operators, for Operators." section.
 *
 * Content:
 *   - Founder background narrative (SectionHeader)
 *   - "The Bristlecone Promise" — three numbered items (PROMISE_ITEMS)
 *
 * Layout:  Single column; promise items in a responsive 1→2→3 column grid.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Section, staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PROMISE_ITEMS } from "@/lib/content";

export function WhyBristleconeSection() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <Section
      id="why-bristlecone"
      background="subtle"
      className="section-chapter"
      showDivider
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Why Bristlecone"
          title="Built by Operators, for Operators."
          description={
            <p className="prose-narrow">
              Bristlecone was founded by people who have been in your shoes.
              We know what it takes to build, because we've built. We know
              what it means to sell, because we've been stewards of that
              trust.
            </p>
          }
        />

        {/* ── The Bristlecone Promise ──────────────────────────────────── */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-16">
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-8">
            The Bristlecone Promise
          </span>

          {/* Responsive grid: stacks on mobile, 2-col sm, 3-col md+ */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {PROMISE_ITEMS.map((item) => (
              <motion.div
                key={item.num}
                variants={itemVariants}
                className="border-l-2 border-primary/30 pl-4 sm:pl-6"
              >
                <span className="text-lg font-medium text-primary mb-3 block">
                  {item.num}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </Section>
  );
}
