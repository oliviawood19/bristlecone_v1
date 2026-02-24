/**
 * CTASection.tsx
 * ---------------
 * Bottom-of-page dual call-to-action section.
 *
 * Wraps the <DualCTA> component inside the shared <Section> container so
 * that padding, divider animation, and background are consistent with the
 * rest of the page.
 */

import { Section } from "@/components/sections/Section";
import { DualCTA } from "@/components/sections/DualCTA";

export function CTASection() {
  return (
    <Section id="cta" background="default" showDivider>
      <DualCTA />
    </Section>
  );
}
