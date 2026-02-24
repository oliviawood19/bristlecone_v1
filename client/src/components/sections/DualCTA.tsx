/**
 * DualCTA.tsx
 * ------------
 * Side-by-side call-to-action panels used at the bottom of the home page.
 *
 * Panels:
 *   - "Ready to Sell Your Business?" (primary/dark variant)
 *   - "Excited to Join Our Team?"    (default/light variant)
 *
 * Texture:  Shared <WoodGrainOverlay> component (no inline background styles).
 * Content:  CTA_PANELS array from lib/content.ts.
 * Button:   <Button asChild variant="link-animated"> for the panel CTAs.
 *
 * Layout:   Single column on mobile → two columns on md+.
 */

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WoodGrainOverlay } from "@/components/ui/WoodGrainOverlay";
import { staggerContainer, staggerItem, reducedStaggerItem } from "./Section";
import { CTA_PANELS, type CTAPanel } from "@/lib/content";
import { cn } from "@/lib/utils";

// ─── CTAPanelCard ─────────────────────────────────────────────────────────────

interface CTAPanelCardProps {
  panel: CTAPanel;
}

function CTAPanelCard({ panel }: CTAPanelCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;
  const isPrimary = panel.variant === "primary";

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        // Base layout
        "relative overflow-hidden",
        "rounded-xl sm:rounded-2xl md:rounded-3xl",
        "p-6 sm:p-8 md:p-12 lg:p-16",
        "min-h-[240px] sm:min-h-[280px]",
        "flex flex-col justify-between",
        // Variant backgrounds
        isPrimary
          ? "bg-primary"
          : "bg-primary/[0.03] border border-border/50",
      )}
    >
      {/* Wood-grain texture overlay (+ gradient wash on the dark variant) */}
      <WoodGrainOverlay
        opacity={isPrimary ? 0.08 : 0.06}
        withGradientWash={isPrimary}
      />

      {/* Headline */}
      <div className="relative z-10">
        <h3
          className={cn(
            "font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",
            isPrimary ? "text-white" : "text-foreground",
          )}
        >
          {panel.headline}
        </h3>
      </div>

      {/* CTA link — Button component with link-animated variant */}
      <div className="relative z-10 pt-8">
        <Button
          asChild
          variant="link-animated"
          className={cn(
            "text-base font-medium",
            isPrimary
              ? "text-white hover:text-white hover:border-white/50"
              : "text-foreground",
          )}
        >
          <a href={panel.href}>
            {panel.ctaText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

// ─── DualCTA ──────────────────────────────────────────────────────────────────

/**
 * Renders the two CTA panels in a staggered grid.
 * Drop this inside any <Section> wrapper.
 */
export function DualCTA() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 gap-6 md:gap-8"
    >
      {CTA_PANELS.map((panel) => (
        <CTAPanelCard key={panel.headline} panel={panel} />
      ))}
    </motion.div>
  );
}
