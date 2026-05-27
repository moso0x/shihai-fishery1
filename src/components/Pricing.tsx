import { motion } from "framer-motion";

import {  Link } from "@tanstack/react-router";



const tiers = [
  {
    name: "Fingerlings",
    price: "From KSh 8",
    unit: "per fingerling",
    desc:
      "Premium selected seedlings for farmers building their own grow-out operations.",
    features: [
      "High-survival genetics",
      "Size grades 1g – 10g",
      "Technical onboarding included",
      "MOQ 5,000 units",
    ],
    cta: "Order fingerlings",
    highlight: false,
  },
  {
    name: "Wholesale Fish",
    price: "Market price",
    unit: "per kilogram",
    desc:
      "Whole fresh tilapia in bulk for supermarkets, processors, and large caterers.",
    features: [
      "Sizes 300g – 800g+",
      "Cold-chain delivery in Kenya",
      "Same-day harvest available",
      "Weekly contract pricing",
    ],
    cta: "Get wholesale quote",
    highlight: true,
  },
  {
    name: "Farm Partnership",
    price: "Custom",
    unit: "long-term programs",
    desc:
      "Turn-key technical, genetic and operations support for serious commercial farms.",
    features: [
      "Site & water assessment",
      "Cage & feed program design",
      "Staff training on-site",
      "Offtake agreements",
    ],
    cta: "Talk to our team",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Pricing() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            How to Buy
          </div>

          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Three ways to work with SHIHAI.
          </h2>

          <p className="mt-4 text-muted-foreground">
            From a single batch of fingerlings to long-term offtake agreements,
            we scale to meet your operation.
          </p>
        </motion.div>

        {/* PRICING GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className={`group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm ${
                t.highlight
                  ? "border-accent bg-accent/10 shadow-2xl shadow-accent/10"
                  : "border-border bg-background/80 hover:border-foreground/40"
              }`}
            >
              {/* HOVER LIGHT */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"
              />

              {/* POPULAR BADGE */}
              {t.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent-foreground"
                >
                  Most popular
                </motion.div>
              )}

              {/* TITLE */}
              <motion.h3
                whileHover={{
                  x: 3,
                }}
                className="font-display text-2xl"
              >
                {t.name}
              </motion.h3>

              {/* PRICE */}
              <div className="mt-4 flex items-baseline gap-2">
                <motion.span
                  animate={
                    t.highlight
                      ? {
                          textShadow: [
                            "0px 0px 0px rgba(255,255,255,0)",
                            "0px 0px 20px rgba(255,255,255,0.2)",
                            "0px 0px 0px rgba(255,255,255,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="font-display text-4xl"
                >
                  {t.price}
                </motion.span>

                <span className="text-xs text-muted-foreground">
                  {t.unit}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f, idx) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.45,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent"
                    />

                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8"
              >
                
                <Link
                  to="/contact"
                  className={`inline-block w-full rounded-full px-5 py-3 cursor-pointer text-center text-xs uppercase tracking-[0.2em] transition ${
                    t.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {t.cta}
                </Link>
              </motion.div>

              {/* BORDER GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-accent/30"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}