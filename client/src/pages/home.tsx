import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Landmark, Shield, Users, Target } from "lucide-react";
import pineconeLogo from "@assets/pinecone-logo-transparent.png";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { Section, staggerContainer, staggerItem, reducedStaggerItem } from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { NumberedCriteria } from "@/components/sections/NumberedCriteria";
import { TestimonialGrid } from "@/components/sections/TestimonialQuote";
import { DualCTA } from "@/components/sections/DualCTA";
import { cn } from "@/lib/utils"

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section - PRESERVED EXACTLY */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="container-custom pt-24 md:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left z-20 order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <h1 className="font-serif text-5xl md:text-4xl lg:text-7xl font-bold mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[1.1]">
                <span className="text-primary">Built to </span>
                <TypewriterText
                  words={["Endure.", "Grow.", "Steward."]}
                  className="text-foreground"
                  waitDuration={5000}
                />
              </h1>
              <div className="max-w-xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground">
                  We partner with bootstrapped founders who've built something enduring.
                </p>
                <div className="h-px w-12 bg-border my-6 mx-auto lg:mx-0" />
                <p className="text-lg md:text-xl font-serif text-muted-foreground/80">
                  Then we build it bigger—together.
                </p>
              </div>
              <div className="flex flex-row gap-6 justify-center lg:justify-start items-center lg:items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full">
                <Button
                  className="text-base font-medium"
                  variant="link-animated"
                  asChild
                >
                  <a href="mailto:info@bristleconecompanies.com">
                    Connect{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end items-center order-1 lg:order-2 animate-in fade-in zoom-in duration-1000 delay-150 -mt-4 lg:-mt-8">
              {/* Using favicon as the large pinecone image as requested */}
              <img
                src={pineconeLogo}
                alt="Bristlecone Pinecone"
                className="w-full md:w-3/4 lg:w-full max-w-[700px] h-auto object-contain opacity-90 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== POST-HERO SECTIONS START ========== */}

      {/* Section 1: Welcome (What We Do) */}
      <Section id="what-we-do" background="default">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Header + Copy */}
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="What We Do"
              title="Honoring the Craft of Building"
              description={
                <p>
                  We're operators who roll up our sleeves,{" "}
                  <span className="text-primary font-medium">
                    preserve what makes your business special
                  </span>
                  , and help it reach its full potential.
                </p>
              }
            />
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-accent/30 pl-6 py-2"
            >
              <p className="font-serif text-xl md:text-2xl font-medium leading-tight text-primary">
                We think in decades, not quarters.
              </p>
            </motion.div>
          </div>

          {/* Right: At-a-glance blocks */}
          <motion.div
            variants={staggerContainer}
            className="grid gap-6"
          >
            {[
              {
                title: "Permanent Capital",
                desc: "We buy to hold forever. No flips, no exits, no short-term horizons."
              },
              {
                title: "Preserve What Works",
                desc: "We protect the core DNA of your business and honor the history that got you here."
              },
              {
                title: "Invest in People",
                desc: "We introduce systems, training, and growth opportunities for your team."
              },
              {
                title: "Operate with Discipline",
                desc: "Institutional rigor with the care of a family business."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={cn(
                  "card-editorial group border border-primary/15 hover:border-primary transition-colors duration-200",
                  "hover:bg-primary/[0.03]"
                )}
                
              >
                <h4 className="text-lg md:text-xl font-serif font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 2: Why Bristlecone (Value Proposition) */}
      <Section id="why-bristlecone" background="subtle" className="section-chapter" showDivider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow="Why Bristlecone"
            title="Built by Operators, for Operators."
            description={
              <p className="prose-narrow">
                Bristlecone was founded by people who have been in your
                shoes. We know what it takes to build, because we've built.
                We know what it means to sell, because we've been stewards
                of that trust.
              </p>
            }
          />

          {/* The Bristlecone Promise */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-16">
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-8">
              The Bristlecone Promise
            </span>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Your team stays",
                  desc: "We don't slash costs to boost short-term margins."
                },
                {
                  num: "02",
                  title: "Your brand remains",
                  desc: "We honor the legacy you built."
                },
                {
                  num: "03",
                  title: "We hold forever",
                  desc: "No flipping, no exit strategy."
                }
              ].map((item) => (
                <motion.div
                  key={item.num}
                  variants={itemVariants}
                  className="border-l-2 border-accent/30 pl-6"
                >
                  <span className="text-lg font-medium text-accent mb-3 block">
                    {item.num}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-primary">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 3: Who We're a Fit For (Qualification) */}
      <Section id="fit" background="default" showDivider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow="Who We're a Fit For"
            title="The Right Partnership"
          />
          <NumberedCriteria
            items={[
              { text: "Bootstrapped founders who've built something enduring" },
              { text: "Businesses measuring success in decades, not quarters" },
              { text: "Leaders who value their team's growth" },
              { text: "Companies with a core DNA worth preserving" },
              { text: "Operators seeking institutional rigor with family-business care" }
            ]}
          />
        </motion.div>
      </Section>

      {/* Section 4: What We Offer (How We Create Value) */}
      <Section id="what-we-offer" background="subtle" className="section-chapter" showDivider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow="How We Create Value"
            title="What We Offer"
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Landmark,
                title: "Permanent Capital",
                desc: "We buy to hold forever. No flips, no exits, no short-term horizons. Your legacy is safe with us because we measure success in decades, not quarters."
              },
              {
                icon: Shield,
                title: "Preserve What Works",
                desc: "You didn't build something great by accident. We protect the core DNA of your business and honor the history that got you here."
              },
              {
                icon: Users,
                title: "Invest in People",
                desc: "Businesses don't compound—people do. We introduce systems, training, and growth opportunities for your team."
              },
              {
                icon: Target,
                title: "Operate with Discipline",
                desc: "Institutional rigor with the care of a family business. We bring excellence in the margins without losing the soul."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card-editorial"
              >
                <item.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h4 className="text-xl font-serif font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Section 5: Testimonials (Proof) */}
      <Section id="testimonials" background="default" showDivider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow="Testimonials"
            title="Founders Trust The Process."
            description={
              <p>We've spent years building a reputation for doing exactly what we say we'll do.</p>
            }
          />
          <TestimonialGrid
            testimonials={[
              {
                quote: "They understood what we'd built. More importantly, they understood why it mattered. Selling to Bristlecone wasn't an exit; it was a graduation.",
                author: "Jean Doe",
                role: "Founder, Systrends"
              },
              {
                quote: "I talked to twenty PE firms. Bristlecone was the only one that didn't ask me how much cost I could cut in the first 100 days.",
                author: "Michael Chen",
                role: "CEO, LegalTech Solutions"
              },
              {
                quote: "They kept their word on every single deal point. The transition was seamless, and my team is happier now than they were before.",
                author: "Sarah Jenkins",
                role: "Founder, ConstructFlow"
              }
            ]}
          />
        </motion.div>
      </Section>

      {/* Section 6: Dual CTA */}
      <Section id="cta" background="default" showDivider>
        <DualCTA />
      </Section>

      <Footer />
    </div>
  );
}
