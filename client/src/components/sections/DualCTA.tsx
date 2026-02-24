import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WoodGrainOverlay } from "@/components/ui/WoodGrainOverlay";
import { staggerContainer, staggerItem, reducedStaggerItem } from "./Section";
import { cn } from "@/lib/utils";

const CTA_EMAIL = "info@bristleconecompanies.com";

export function SingleCTA() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={itemVariants}
        className={cn(
          "relative overflow-hidden",
          "rounded-xl sm:rounded-2xl md:rounded-3xl",
          "p-8 sm:p-12 md:p-16 lg:p-20",
          "bg-primary/[0.03] border border-border/50",
          "flex flex-col items-center justify-center text-center",
        )}
      >
        <WoodGrainOverlay opacity={0.06} />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <h3 data-testid="text-cta-headline" className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground max-w-2xl">
            We care deeply about the work we do and who we do it with.
          </h3>

          <Button
            asChild
            variant="outline"
            className="group rounded-none font-serif text-base text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={`mailto:${CTA_EMAIL}`} data-testid="button-start-conversation">
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
