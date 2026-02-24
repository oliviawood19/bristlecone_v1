import { Section } from "@/components/sections/Section";
import { SingleCTA } from "@/components/sections/DualCTA";

export function CTASection() {
  return (
    <Section id="cta" background="default" showDivider>
      <SingleCTA />
    </Section>
  );
}
