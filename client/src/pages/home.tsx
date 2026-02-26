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
import { SEOHead } from "@/components/SEOHead";
import { HeroSection }           from "@/components/sections/home/HeroSection";
import { WhyBristlecone }       from "@/components/sections/home/WhyBristlecone";
import { TestimonialsSection }   from "@/components/sections/home/TestimonialsSection";
import { CTASection }            from "@/components/sections/home/CTASection";
import { TESTIMONIALS } from "@/lib/content";

function TestimonialSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TESTIMONIALS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.author,
          jobTitle: `${t.rolePrefix} ${t.companyName}`,
        },
        reviewBody: t.quote,
        itemReviewed: {
          "@type": "Organization",
          name: "Bristlecone Companies",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead
        title="Bristlecone Companies | Enduring Ownership for Enduring Businesses"
        description="Bristlecone Companies acquires and operates essential businesses to steward what matters most — people, customers, and legacy — and unlock their full potential over decades."
        path="/"
      />
      <TestimonialSchema />
      <Navbar />

      <main>
        <HeroSection />
        <WhyBristlecone />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
