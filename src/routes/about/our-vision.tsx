import React, { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { Target, Users, Leaf } from "lucide-react";

import vision_img from "@/assets/vision-img1.jpeg";
import vision_img1 from "@/assets/whychoose/hero-1.jpeg";
import vision_img2 from "@/assets/whychoose/proteins.jpg";

export const Route = createFileRoute("/about/our-vision")({
  component: OurVision,
});

export function OurVision() {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const section1InView = useInView(section1Ref, { once: true, amount: 0.2 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.2 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* HERO SECTION - CLEAN HERO IMAGE WITHOUT OVERLAY */}
      <section ref={heroRef} className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={vision_img}
            alt="SHIHAI Vision"
            className="h-full w-full flex object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:pb-36 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-primary-foreground"
          >
            
            <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl">
              Our <em className="not-italic text-accent">Vision</em>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
              Building a sustainable, accessible, and community-first fisheries model across East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - EDITORIAL SPLIT */}
      <section
        ref={section1Ref}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32 border-b border-border"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={section1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Target className="h-4 w-4 text-accent" />
            <span>Our Mission</span>
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Healthier Africa: Quality Protein Within Reach
          </h2>

          <p className="mt-4 text-sm font-medium text-accent">
            30+ Years Experience · 300+ Dedicated Employees
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our outlook centres on household food security. SHIHAI will keep delivering affordable, high‑nutritional aquaculture produce. Beyond supply volume, we continuously upgrade food‑safety and nutrition standards to support community well‑being.
          </p>

          <div className="mt-8">
            <Link
              to="/business"
              className="border-b border-foreground text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent"
            >
              Learn about our products →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={section1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted/20"
        >
          <img
            src={vision_img2}
            alt="Quality Protein"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* SECTION 2 - VALUE HIGHLIGHT */}
      <section className="bg-secondary/40 border-b border-border">
        <div
          ref={section2Ref}
          className="mx-auto max-w-7xl px-6 py-24 md:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Users className="h-4 w-4 text-accent" />
              <span>Community First</span>
            </div>

            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              An Open Platform: Partnering with 300+ Local Stakeholders
            </h2>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Three hundred employees is only our starting point. SHIHAI will evolve into an open‑access ecosystem. Beyond employment creation, we empower local small‑scale traders and distributors to grow together and share industry benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - EDITORIAL SPLIT */}
      <section
        ref={section3Ref}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={section3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted/20"
        >
          <img
            src={vision_img1}
            alt="Greener Fisheries"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={section3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Leaf className="h-4 w-4 text-accent" />
            <span>Sustainability</span>
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Greener Fisheries: Advancing the Blue Economy
          </h2>

          <p className="mt-4 text-sm font-medium text-accent">
            Protecting aquatic ecosystems for future generations
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            We promote eco‑friendly, sustainable modern aquaculture concepts. While meeting market demand, we protect local ecosystems, making fisheries a "green bank" benefiting future generations.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Eco-Friendly", "Sustainable", "Blue Economy", "Future Generations"].map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CALL TO ACTION */}
     
    </>
  );
}

export default OurVision;