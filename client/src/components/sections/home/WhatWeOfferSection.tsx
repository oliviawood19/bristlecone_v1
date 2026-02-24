/**
 * WhatWeOfferSection.tsx
 * -----------------------
 * "How We Create Value / What We Offer" section.
 *
 * Layout:  2×2 icon card grid (1 column mobile, 2 columns sm+).
 * Content: OFFERING_CARD_DATA from lib/content.ts; icons imported here so
 *          Vite can fingerprint and bundle them properly.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Section, staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { OFFERING_CARD_DATA } from "@/lib/content";

// Icon assets — imported here so Vite handles asset fingerprinting
import rootsIcon      from "@assets/roots-icon.png";
import twotreesIcon   from "@assets/twotrees-icon.png";
import treesIcon      from "@assets/trees-icon.png";
import fingerprintIcon from "@assets/fingerprint-icon.png";

/** Maps offering key → imported icon so content.ts stays asset-free */
const ICON_MAP: Record<string, string> = {
  capital:    rootsIcon,
  preserve:   twotreesIcon,
  people:     treesIcon,
  discipline: fingerprintIcon,
};

export function WhatWeOfferSection() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <Section
      id="what-we-offer"
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
        <SectionHeader eyebrow="How We Create Value" title="What We Offer" />

        {/* Responsive 2-column grid — single column on mobile */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {OFFERING_CARD_DATA.map((card) => (
            <motion.div
              key={card.key}
              variants={itemVariants}
              className="card-editorial text-center"
            >
              <img
                src={ICON_MAP[card.key]}
                alt=""
                aria-hidden="true"
                className="w-20 h-20 mb-4 mx-auto object-contain"
              />
              <h4 className="text-xl font-serif font-bold text-foreground mb-3">
                {card.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </Section>
  );
}
