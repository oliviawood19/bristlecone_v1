import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bristleconeTreeImg from "@assets/drawn_bristlecone.png";
import twoBristleconesImg from "@assets/twobristlecones.png";
import rootsIcon from "@assets/roots-icon.png";
import twotreesIcon from "@assets/twotrees-icon.png";
import treesIcon from "@assets/trees-icon.png";
import fingerprintIcon from "@assets/fingerprint-icon.png";
import {
  Section,
  staggerContainer,
  staggerItem,
  reducedStaggerItem,
} from "@/components/sections/Section";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { NumberedCriteria } from "@/components/sections/NumberedCriteria";
import { TestimonialGrid } from "@/components/sections/TestimonialQuote";
import { DualCTA } from "@/components/sections/DualCTA";
import { cn } from "@/lib/utils";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedStaggerItem : staggerItem;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden min-h-screen flex flex-col">
        {/* Stagger-in animation styles */}
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50%       { opacity: 1;   transform: scaleY(0.6); }
          }
          .hero-fade-1 { animation: fadeUp 0.7s ease both; animation-delay: 0.10s; }
          .hero-fade-2 { animation: fadeUp 0.7s ease both; animation-delay: 0.22s; }
          .hero-fade-3 { animation: fadeUp 0.7s ease both; animation-delay: 0.34s; }
          .hero-fade-4 { animation: fadeUp 0.7s ease both; animation-delay: 0.46s; }
          .hero-fade-5 { animation: fadeUp 0.7s ease both; animation-delay: 0.58s; }
          .hero-tree   { animation: fadeUp 1.1s ease both; animation-delay: 0.20s; }

          .cta-underline {
            position: relative;
            padding-bottom: 6px;
          }
          .cta-underline::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 100%; height: 1px;
            background: hsl(var(--foreground));
            transform-origin: right;
            transform: scaleX(1);
            transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          }
          .cta-underline::before {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 100%; height: 1px;
            background: hsl(var(--primary));
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.35s cubic-bezier(0.4,0,0.2,1) 0.05s;
          }
          .cta-underline:hover::after  { transform-origin: left;  transform: scaleX(0); }
          .cta-underline:hover::before { transform-origin: right; transform: scaleX(1); }

          .scroll-line {
            width: 1px; height: 40px;
            background: hsl(var(--muted-foreground));
            animation: scrollPulse 2s ease-in-out infinite;
          }
        `}</style>

        {/* Split-screen body */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-screen">
          {/* ── LEFT PANEL ── */}
          <div
            className="relative z-10 flex flex-col justify-center
                          flex-none lg:w-[52%]
                          px-8 sm:px-12 lg:px-20
                          pt-36 pb-20 lg:py-0"
          >
            {/* Headline */}
            <h1
              className="hero-fade-2 font-serif font-bold text-primary leading-[1.0] tracking-[-0.01em]
                           text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]
                           mb-8"
            >
              Enduring ownership
              <br />
              for enduring
              <br className="hidden sm:block" />
              businesses
            </h1>

            {/* Thin rule divider */}
            <div className="hero-fade-3 w-12 h-[1.5px] bg-primary opacity-50 mb-8" />

            {/* Body copy */}
            <p
              className="hero-fade-4 font-sans font-light text-muted-foreground
                          text-base sm:text-lg leading-relaxed
                          max-w-[44ch] mb-12"
            >
              Bristlecone acquires and operates essential businesses to steward
              what matters most—people, customers, and legacy—and unlock their
              full potential over decades.
            </p>

            {/* CTA */}
            <div className="hero-fade-5">
              <a
                href="mailto:info@bristleconecompanies.com"
                className="cta-underline group inline-flex items-center gap-2
              text-sm tracking-[0.08em] font-sans text-foreground"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Scroll indicator — hidden on mobile */}
            <div className="hidden lg:flex absolute bottom-10 left-20 items-center gap-3">
              <div className="scroll-line" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground opacity-60">
                Scroll
              </span>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            className="relative flex-none lg:w-[48%]
                          h-[480px] lg:h-auto overflow-hidden"
          >
            {/* Left-edge fade so panels blend softly */}
            <div
              className="absolute inset-y-0 left-0 w-24 z-10
                            bg-gradient-to-r from-background to-transparent pointer-events-none"
            />

            {/* Top-edge fade on mobile */}
            <div
              className="absolute inset-x-0 top-0 h-20 z-10 lg:hidden
                            bg-gradient-to-b from-background to-transparent pointer-events-none"
            />

            <div
              className="hero-tree absolute inset-0 -left-10 -bottom-5 -right-5
                            flex items-center justify-center"
            >
              <img
                src={bristleconeTreeImg}
                alt="Bristlecone Pine"
                className="w-full h-full object-cover object-center opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== POST-HERO SECTIONS START ========== */}

      {/* Section 1: Welcome (What We Do) */}
      <Section id="what-we-do" background="default" disableAnimation>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header + Copy - sticky with offset for navbar */}
          <motion.div
            className="lg:sticky lg:top-24"
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

          {/* Right: At-a-glance blocks */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6"
          >
            {[
              {
                title: "Forever Mindset",
                desc: "We acquire to own indefinitely and have no intention to sell. This changes everything: how we invest, how we operate, and how we treat people.",
              },
              {
                title: "Team & Culture First",
                desc: "Everything starts with people. We invest in teams, protect what makes each culture special, and create environments where talented people thrive.",
              },
              {
                title: "Operator DNA",
                desc: "We care about the details, the discipline, and the daily execution. Small actions matter when done consistently over time.",
              },
              {
                title: "Independence & Autonomy",
                desc: "The best decisions are made by people closest to customers. Each business maintains its independence, and we empower leaders with real autonomy.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={cn(
                  "card-editorial group border border-primary/20 transition-colors duration-200",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90 hover:border-primary/40",
                  "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                )}
              >
                <h4 className="text-lg md:text-xl font-serif font-bold text-primary-foreground mb-2">
                  {item.title}
                </h4>

                <p className="leading-relaxed text-primary-foreground/80">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Section 2: Why Bristlecone (Value Proposition) */}
      <Section
        id="why-bristlecone"
        background="subtle"
        className="section-chapter"
        showDivider
      >
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
                Bristlecone was founded by people who have been in your shoes.
                We know what it takes to build, because we've built. We know
                what it means to sell, because we've been stewards of that
                trust.
              </p>
            }
          />

          {/* The Bristlecone Promise */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-16">
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase block mb-8">
              The Bristlecone Promise
            </span>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Your team stays",
                  desc: "We don't slash costs to boost short-term margins.",
                },
                {
                  num: "02",
                  title: "Your brand remains",
                  desc: "We honor the legacy you built.",
                },
                {
                  num: "03",
                  title: "We hold forever",
                  desc: "No flipping, no exit strategy.",
                },
              ].map((item) => (
                <motion.div
                  key={item.num}
                  variants={itemVariants}
                  className="border-l-2 border-primary/30 pl-4 sm:pl-6"
                >
                  <span className="text-lg font-medium text-primary mb-3 block">
                    {item.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-primary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 3: Who We're a Fit For (Qualification) */}
      <Section id="fit" background="default" showDivider>
        <div className="pt-10 lg:pt-14">
          <div className="h-px w-full bg-primary/25 mb-10 lg:mb-12" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-[1.15fr_1.25fr] gap-10 lg:gap-16 items-start"
          >
            {/* Left column */}
            <div className="max-w-none">
              <SectionHeader
                eyebrow="Who We're a Fit For"
                title={
                  <span className="whitespace-nowrap">
                    The Right Partnership
                  </span>
                }
              />

              <motion.div
                className="mt-2 flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <div className="w-3/4 max-w-xs">
                  <img
                    src={twoBristleconesImg}
                    alt="Two bristlecone trees illustration"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right column: sticky + shifted right */}
            <div className="lg:sticky lg:top-24 self-start lg:pl-6 xl:pl-10">
              <NumberedCriteria
                variant="editorial"
                items={[
                  {
                    text: "Bootstrapped founders who've built something enduring",
                  },
                  {
                    text: "Businesses measuring success in decades, not quarters",
                  },
                  { text: "Leaders who value their team's growth" },
                  { text: "Companies with a core DNA worth preserving" },
                  {
                    text: "Operators seeking institutional rigor with family-business care",
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 4: What We Offer (How We Create Value) */}
      <Section
        id="what-we-offer"
        background="subtle"
        className="section-chapter"
        showDivider
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader eyebrow="How We Create Value" title="What We Offer" />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: rootsIcon,
                title: "Permanent Capital",
                desc: "We buy to hold forever. No flips, no exits, no short-term horizons. Your legacy is safe with us because we measure success in decades, not quarters.",
              },
              {
                icon: twotreesIcon,
                title: "Preserve What Works",
                desc: "You didn't build something great by accident. We protect the core DNA of your business and honor the history that got you here.",
              },
              {
                icon: treesIcon,
                title: "Invest in People",
                desc: "Businesses don't compound—people do. We introduce systems, training, and growth opportunities for your team.",
              },
              {
                icon: fingerprintIcon,
                title: "Operate with Discipline",
                desc: "Institutional rigor with the care of a family business. We bring excellence in the margins without losing the soul.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card-editorial text-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-20 h-20 mb-4 mx-auto object-contain"
                />
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
              <p>
                We've spent years building a reputation for doing exactly what
                we say we'll do.
              </p>
            }
          />
          <TestimonialGrid
            testimonials={[
              {
                quote:
                  "They understood what we'd built. More importantly, they understood why it mattered. Selling to Bristlecone wasn't an exit; it was a graduation.",
                author: "Jean Doe",
                role: "Founder, Systrends",
              },
              {
                quote:
                  "I talked to twenty PE firms. Bristlecone was the only one that didn't ask me how much cost I could cut in the first 100 days.",
                author: "Michael Chen",
                role: "CEO, LegalTech Solutions",
              },
              {
                quote:
                  "They kept their word on every single deal point. The transition was seamless, and my team is happier now than they were before.",
                author: "Sarah Jenkins",
                role: "Founder, ConstructFlow",
              },
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
