/**
 * WhyBristlecone.tsx
 * --------------------
 * "Business builders, permanent owners" section.
 *
 * Layout:    Two-column on lg+ — sticky text panel left, scrolling principle
 *            cards right. Single column on mobile (no sticky).
 * Content:   PRINCIPLE_CARDS from lib/content.ts.
 * Texture:   WoodGrainOverlay on each dark card.
 *
 * Why not using <Section>?
 * ─────────────────────────
 * CSS `position: sticky` is broken by any ancestor with `overflow: hidden` or
 * `overflow: clip`. The shared <Section> wrapper applies `overflow-hidden` and
 * wraps children in its own container div with hard-coded padding — both of
 * which prevent sticky from working. This section renders a plain <section>
 * tag so we own the full DOM hierarchy and the sticky panel works correctly.
 *
 * Sticky rules:
 *   1. No `overflow: hidden/clip` on any ancestor between the sticky element
 *      and the scrolling viewport (window).
 *   2. The sticky element's parent must be taller than the element itself
 *      (the right column's height provides this).
 *   3. `align-items: start` on the grid (not `stretch`) so the left cell
 *      doesn't grow to match the right column's height.
 */

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { WoodGrainOverlay } from "@/components/ui/WoodGrainOverlay";
import { PRINCIPLE_CARDS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WhyBristlecone() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    /*
     * Plain <section> — no overflow-hidden, no inner container wrapper.
     * bg-background matches the shared design token used by <Section background="default">.
     */
    <section id="what-we-do" className="relative bg-background">

      {/* Very subtle noise texture over the section background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/*
       * container-custom centres content and applies horizontal padding.
       * No vertical padding here — each column carries its own so sticky
       * has the full scroll height of the right column to work with.
       */}
      <div className="container-custom">
        <div className="relative grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-20 items-start">

          {/* ── Left: sticky text panel ────────────────────────────────── */}
          {/*
           * lg:sticky + lg:top-28  pins the panel below the fixed navbar.
           * lg:self-start          keeps the cell height = content height,
           *                        not the full grid row height — required
           *                        for sticky to engage.
           * py-*                   vertical breathing room, matching right col.
           */}
          <motion.div
            className="pt-12 pb-2 sm:pt-16 sm:pb-4 md:pt-24 md:pb-6 lg:pt-10 lg:pb-8 lg:sticky lg:top-20 lg:self-start"
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

          {/* ── Right: staggered principle cards ───────────────────────── */}
          {/* Full height of this column is the scroll range the left panel sticks across */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-2 pb-16 sm:pt-4 sm:pb-20 md:pt-6 md:pb-28 lg:py-32 grid gap-5 sm:gap-6"
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
      </div>
    </section>
  );
}
