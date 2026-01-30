import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem, reducedStaggerItem } from "./Section";
import { cn } from "@/lib/utils";
import woodGrainPattern from "@assets/generated_images/abstract_bristlecone_pine_wood_grain_line_pattern.png";

interface CTAPanelProps {
  headline: string;
  ctaText: string;
  href: string;
  variant?: "default" | "primary";
}

function CTAPanel({ headline, ctaText, href, variant = "default" }: CTAPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;
  const isPrimary = variant === "primary";

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "relative overflow-hidden rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 min-h-[280px]",
        "flex flex-col justify-between",
        isPrimary
          ? "bg-primary" // keep your token
          : "bg-primary/[0.03] border border-border/50"
      )}
    >
      {/* Background layers (NO blend modes) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern */}
        <div
          className={cn(
            "absolute inset-0",
            isPrimary ? "opacity-[0.08]" : "opacity-[0.14]"
          )}
          style={{
            backgroundImage: `url(${woodGrainPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "520px",
            backgroundPosition: "center",
          }}
        />

        {/* Gentle wash to make it feel designed (tuned per variant) */}
        <div
          className={cn(
            "absolute inset-0",
            isPrimary
              ? "bg-gradient-to-br from-black/20 via-black/10 to-transparent"
              : "bg-gradient-to-br from-background/80 via-background/40 to-transparent"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={cn(
            "font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",
            // Force legibility (tokens are betraying you here)
            isPrimary ? "text-white" : "text-foreground"
          )}
        >
          {headline}
        </h3>
      </div>

      <div className="relative z-10 pt-8">
        <Button
          asChild
          // Choose variants that guarantee readable text
          variant={isPrimary ? "secondary" : "default"}
          className={cn(
            "text-base",
            // Make sure the default card button isn't white-on-white
            !isPrimary && "bg-background text-foreground border border-border/60 hover:bg-background/90",
            // Ensure primary panel CTA looks crisp
            isPrimary && "text-foreground"
          )}
        >
          <a href={href}>
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

const ownerMailto = "mailto:info@bristleconecompanies.com?subject=Selling%20My%20Business&body=Name%3A%0ACompany%3A%0ARevenue%2FEBITDA%3A%0ATimeline%3A%0ANotes%3A";
const talentMailto = "mailto:info@bristleconecompanies.com?subject=Careers%20Inquiry&body=Name%3A%0ARole%20Interest%3A%0ALinkedIn%3A%0AResume%20Link%3A%0ANotes%3A";

export function DualCTA() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 gap-6 md:gap-8"
    >
      <CTAPanel
        headline="Ready to Sell Your Business?"
        ctaText="Selling Your Business"
        href={ownerMailto}
        variant="primary"
      />
      <CTAPanel
        headline="Join Our Team"
        ctaText="Careers"
        href={talentMailto}
        variant="default"
      />
    </motion.div>
  );
}
