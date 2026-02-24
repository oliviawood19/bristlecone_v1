/**
 * WhoWeAreSection.tsx
 * --------------------
 * "The Right Partnership" qualification section.
 *
 * Layout:    Two-column on lg+ (header + illustration left, criteria right).
 *            Single column stacked on mobile.
 * Content:   FIT_CRITERIA from lib/content.ts, rendered via <NumberedCriteria>.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Section, staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { NumberedCriteria } from "@/components/sections/NumberedCriteria";
import { FIT_CRITERIA } from "@/lib/content";
import twoBristleconesImg from "@assets/twobristlecones.png";

export function WhoWeAreSection() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <Section id="fit" background="default" showDivider>
      <div className="pt-10 lg:pt-14">
        <div className="h-px w-full bg-primary/25 mb-10 lg:mb-12" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1.15fr_1.25fr] gap-10 lg:gap-16 items-start"
        >
          {/* ── Left: section header + illustration ───────────────────── */}
          <div className="max-w-none">
            <SectionHeader
              eyebrow="Who We're a Fit For"
              title={<span className="whitespace-nowrap">The Right Partnership</span>}
            />

            {/* Illustration — centered on mobile, left-aligned on desktop */}
            <motion.div
              className="mt-2 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="w-3/4 max-w-xs">
                <img
                  src={twoBristleconesImg}
                  alt="Two bristlecone trees illustration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right: numbered criteria list (sticky on desktop) ─────── */}
          <div className="lg:sticky lg:top-24 self-start lg:pl-6 xl:pl-10">
            <NumberedCriteria
              variant="editorial"
              items={FIT_CRITERIA}
            />
          </div>

        </motion.div>
      </div>
    </Section>
  );
}
