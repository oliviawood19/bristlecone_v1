/**
 * home.tsx
 * ---------
 * Home page — pure composition shell.
 *
 * This file does nothing but assemble the page from its section components.
 * All content lives in lib/content.ts; all styling lives in section files
 * and index.css. To add a new section, import it here and drop it in order.
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection }           from "@/components/sections/home/HeroSection";
import { WhatWeDoSection }       from "@/components/sections/home/WhatWeDoSection";
import { WhyBristleconeSection } from "@/components/sections/home/WhyBristleconeSection";
import { WhoWeAreSection }       from "@/components/sections/home/WhoWeAreSection";
import { WhatWeOfferSection }    from "@/components/sections/home/WhatWeOfferSection";
import { TestimonialsSection }   from "@/components/sections/home/TestimonialsSection";
import { CTASection }            from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhyBristleconeSection />
        <WhoWeAreSection />
        <WhatWeOfferSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
