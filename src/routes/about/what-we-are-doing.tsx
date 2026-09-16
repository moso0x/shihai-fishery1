import React, { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { Camera, Shield, Award, TrendingUp, ArrowRight } from "lucide-react";

import what_we_do_img from "@/assets/whychoose/hero-img-3.jpeg";
import what_we_do_img1 from "@/assets/whychoose/hero-img-2.jpeg";


export const Route = createFileRoute("/about/what-we-are-doing")({
  component: WhatWeAreDoing,
});

const statsData = [
  {
    icon: Award,
    title: "300+ Local Jobs Created",
    description:
      "Local residents are prioritized across fish farms, processing plants, logistics, maintenance, and security roles, providing stable long‑term salaries.",
  },
  {
    icon: TrendingUp,
    title: "400+ Tons Supplied",
    description:
      "Large volumes of quality table‑fish are released into local markets at fair prices, improving public nutrition and lowering the cost of high‑protein food.",
  },
  {
    icon: Shield,
    title: "Industry Growth Driven",
    description:
      "Stimulating local sectors including feed, packaging materials, retail distribution, and support services to energize regional economic circulation.",
  },
];

export function WhatWeAreDoing() {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const statsRef = useRef(null);
  const section2Ref = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const section1InView = useInView(section1Ref, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* HERO SECTION - CLEAN HERO IMAGE WITHOUT OVERLAY GRADIENT */}


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
            <Camera className="h-4 w-4 text-accent" />
            <span>Our Operations</span>
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            What Does Shihai Fishery Do?
          </h2>

          <p className="mt-4 text-sm font-medium text-accent">
            Delivering Affordable, High‑Quality Protein.
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Drawing on nearly 30 years of aquaculture expertise, SHIHAI is firmly rooted in Kenya. We are building an ecosystem that pairs efficient supply chain execution from origin to table with rigorous food safety and high quality standards.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            By deploying advanced aquaculture management techniques, we continuously improve supply efficiency, making nutrient‑rich aquatic produce accessible to more families across Kenya and Africa.
          </p>

          <div className="mt-8">
            <Link
              to="/about/our-vision"
              className="inline-flex items-center gap-2 border-b border-foreground text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent"
            >
              <span>Learn More About Our Mission</span>
              <ArrowRight className="h-3.5 w-3.5" />
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
            src={what_we_do_img}
            alt="Shihai Fishery Operations"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* STATS HIGHLIGHT GRID */}
      <section ref={statsRef} className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Measurable Progress
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Key Local Impact
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {statsData.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="rounded-sm border border-border bg-background p-8"
                >
                  <IconComponent className="h-6 w-6 text-accent" />
                  <h3 className="mt-6 font-display text-2xl">{stat.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2 - EDITORIAL REVERSE SPLIT */}
      <section
        ref={section2Ref}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32 border-b border-border"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={section2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted/20 md:order-1"
        >
          <img
            src={what_we_do_img1}
            alt="Modern Storage and Logistics"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={section2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center md:order-2"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Our Approach</span>
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Standardized Storage & Distribution
          </h2>

          <p className="mt-4 text-sm font-medium text-accent">
            Creating Dignified, Growth‑Oriented Local Jobs
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            We are optimizing modern warehousing and logistics systems in Kenya. Combining international best practices with local market realities, we standardize storage, delivery, and sales workflows so every batch of fish is delivered at peak freshness.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            More than selling fish, we invest in developing local aquaculture talent. Across sales networks, warehouse operations, maintenance, and security, we offer jobs together with structured vocational training for Kenyan youth.
          </p>
        </motion.div>
      </section>

      {/* CALL TO ACTION */}

    </>
  );
}

export default WhatWeAreDoing;