/**
 * WhatWeDoSection.tsx
 * --------------------
 * "Business builders, permanent owners" section.
 *
 * Layout:    Two-column on lg+ (sticky text left, scrolling principle cards right).
 *            Single column on mobile.
 * Content:   PRINCIPLE_CARDS from lib/content.ts.
 * Texture:   WoodGrainOverlay on each dark card.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Section, staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { WoodGrainOverlay } from "@/components/ui/WoodGrainOverlay";
import { PRINCIPLE_CARDS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WhyBristlecone() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <Section
      id="what-we-do"
      background="default"
      disableAnimation
      className="relative overflow-hidden"
    >
      {/* Very subtle noise texture over the section background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: section header (sticky on desktop) ─────────────────── */}
        <motion.div
          className="lg:sticky lg:top-28 mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Why Bristlecone?"
            title="Business builders, permanent owners"
            description={
              <div className="space-y-6">
                <p>
                  Bristlecone Companies is a long-term holding company for
                  mission-critical businesses that have earned deep customer
                  trust and leading positions in specialized markets.
                </p>
                <p>
                  We are business builders who happen to invest. We believe
                  enduring companies are built brick-by-brick through
                  discipline, care, and relentless focus.
                </p>
                <p>
                  Backed by our own capital and a time horizon measured in
                  decades, we can invest in what takes time: building great
                  teams, deepening customer relationships, and amplifying your
                  legacy.
                </p>
              </div>
            }
          />
        </motion.div>

        {/* ── Right: staggered principle cards ─────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:gap-6"
        >
          {PRINCIPLE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={cn(
                "card-editorial group relative overflow-hidden",
                "bg-primary text-primary-foreground border border-primary/20",
                "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                "transition-all duration-300 ease-out",
                "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-primary/40",
              )}
            >
              {/* Wood-grain texture + gradient wash for depth */}
              <WoodGrainOverlay opacity={0.12} withGradientWash />

              {/* Card content — z-10 to sit above the overlay */}
              <div className="relative z-10">
                <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-primary-foreground mb-2">
                  {card.title}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-primary-foreground/80">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
