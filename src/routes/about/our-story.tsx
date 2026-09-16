import React, { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";

import story_img1 from "@/assets/story/fry-fish.jpg";
import story_img2 from "@/assets/story/story-1.jpg";
import story_img5 from "@/assets/story/story-4.jpeg";
import story_img6 from "@/assets/tilapia.jpeg";

// TanStack Router Route Definition
export const Route = createFileRoute("/about/our-story")({
  component: OurStory,
});

/* ANIMATION VARIANTS (Matching System Design Language) */
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function OurStory() {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative isolate overflow-hidden">
        {/* BACKGROUND IMAGE & OVERLAYS */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.img
            src={story_img5}
            alt="SHIHAI Aquaculture Journey"
            className="h-full w-full object-cover brightness-[0.70]"
            initial={{ scale: 1.1 }}
            animate={{ scale: heroInView ? 1 : 1.1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          {/* CINEMATIC OVERLAY */}
          <motion.div
            animate={{ opacity: [0.5, 0.65, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background"
          />

          {/* AMBIENT LIGHTING */}
          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              y: ["0%", "-5%", "0%"],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]"
          />
        </div>

        {/* FLOATING LIGHT ACCENT */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
        />

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:pb-44 md:pt-56">
          <motion.div
            className="max-w-4xl text-primary-foreground"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="font-display text-5xl leading-[1.04] text-balance md:text-7xl lg:text-8xl">
                Building Our Aquaculture Dream: <br />
                <motion.em
                  className="not-italic text-accent"
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(255,255,255,0)",
                      "0px 0px 25px rgba(255,255,255,0.45)",
                      "0px 0px 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  30 Years of Craftsmanship
                </motion.em>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-100 font-light"
            >
              Our story began in China back in 1995. Driven by a passion for continuous innovation, we took our first steps in modern fish farming. Tilapia—our flagship species—has witnessed our growth over three decades of technical dedication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: CROSSING CONTINENTS */}
      <section ref={section1Ref} className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 md:grid-cols-12 items-center"
        >
          <motion.div variants={slideLeft} className="md:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Global Expansion
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl text-balance">
              Crossing Continents: A Mission for Quality Protein
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A business trip to Kenya in 2019 marked a major cross-border milestone for our enterprise. In this dynamic landscape, the SHIHAI management team identified pivotal opportunities to bridge capacity gaps in local fisheries.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Beyond commercial expansion, what resonated most was the community’s demand for healthy aquatic protein and stable employment. As aquaculture practitioners, we do not merely run an operation—we provide sustainable, nature-sourced nourishment.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="md:col-span-6">
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-border shadow-xl bg-background">
              <img
                src={story_img1}
                alt="Global Expansion Journey"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: ROOTED IN AFRICA */}
      <section className="border-t border-border bg-secondary/40">
        <div
          ref={section2Ref}
          className="mx-auto max-w-7xl px-6 py-24 md:py-32"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-16 md:grid-cols-12 items-center"
          >
            <motion.div
              variants={slideLeft}
              className="md:col-span-6 order-2 md:order-1"
            >
              <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-border shadow-xl bg-background">
                <img
                  src={story_img2}
                  alt="Rooted in Africa Journey"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="md:col-span-6 order-1 md:order-2 space-y-6"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Local Presence
              </div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl text-balance">
                Rooted in Africa: The Birth of SHIHAI
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Driven by empowerment and sustainable growth, we officially entered Kenya's fisheries market in 2020. Overcoming logistical hurdles, we integrated proven aquaculture technology to build resilient aquatic systems across local lakes and regions.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                As our operational footprint matured, SHIHAI was formally established in 2024. Today, we are more than a business—we are a platform dedicated to fostering long-term food security and economic opportunity across East Africa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;