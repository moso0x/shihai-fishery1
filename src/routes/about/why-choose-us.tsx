import React, { useMemo, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Leaf,
  Sparkles,
  Zap,
  Fish,
  Droplets,
  Factory,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

import whychoose_img1 from "@/assets/whychoose/feeding.jpg";
import whychoose_img2 from "@/assets/whychoose/grading.jpg";
import whychoose_img3 from "@/assets/whychoose/ponds.jpg";

// Route Definition
export const Route = createFileRoute("/about/why-choose-us")({
  component: WhyChooseUs,
});

// Animation variants aligned with home page style
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Animated Badge Component styled with design system tokens
interface AnimatedBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  icon: Icon,
  label,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </motion.div>
);

export function WhyChooseUs() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const hatcheryRef = useRef(null);
  const cagesRef = useRef(null);
  const processingRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  const hatcheryInView = useInView(hatcheryRef, { once: true, amount: 0.3 });
  const cagesInView = useInView(cagesRef, { once: true, amount: 0.3 });
  const processingInView = useInView(processingRef, { once: true, amount: 0.3 });

  // Floating ambient particles for hero section
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      width: Math.random() * 60 + 20,
      height: Math.random() * 60 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 12 + 8,
    }));
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* HERO SECTION */}
     
        {/* Floating Light Ambient Blob */}


        {/* Hero Content */}


      {/* WHY CHOOSE US CARDS SECTION */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Value Proposition
              </div>
              <h2 className="font-display text-4xl text-balance md:text-5xl">
                Why Choose Shihai Fishery
              </h2>
            </div>

            {/* Grid Container */}
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col justify-between bg-background p-8 md:p-10 transition-colors hover:bg-accent/10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">01</span>
                    <div className="p-2.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Low Mortality & Precise Sizing
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Thanks to our locally‑bred disease‑resistant genetics and refined feeding protocols, SHIHAI fish grow evenly with high survival rates. Bulk buyers receive consistent weight and size grading for every shipment, greatly simplifying sorting and resale.
                  </p>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col justify-between bg-background p-8 md:p-10 transition-colors hover:bg-accent/10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">02</span>
                    <div className="p-2.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Leaf className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Extended Freshness & Shelf‑Life
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Natural anti‑oxidant ingredients are scientifically formulated into feeds, improving post‑harvest oxidative resistance of fish flesh. Whole fish retain bright silvery appearance on supermarket shelves, while fillets keep their natural tender texture.
                  </p>
                </div>
              </motion.article>

              {/* Card 3 */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col justify-between bg-background p-8 md:p-10 transition-colors hover:bg-accent/10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">03</span>
                    <div className="p-2.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Compliance with Global Standards
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We implement proactive fish health management instead of over‑reliance on medication. SHIHAI products pass strict veterinary residue testing with zero harmful chemical residues, meeting international food‑safety import requirements for consumer safety.
                  </p>
                </div>
              </motion.article>

              {/* Card 4 */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col justify-between bg-background p-8 md:p-10 transition-colors hover:bg-accent/10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">04</span>
                    <div className="p-2.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Data‑Driven Management
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Full‑cycle data logging is implemented. Scientific analysis of water quality, feeding and growth cycles enables precise fish‑health monitoring, guaranteeing consistent quality batch after batch.
                  </p>
                </div>
              </motion.article>

              {/* Card 5 (Spans 2 columns on larger displays) */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col justify-between bg-background p-8 md:p-10 transition-colors hover:bg-accent/10 md:col-span-2 lg:col-span-2"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">05</span>
                    <div className="p-2.5 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Factory className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">
                    Our Farms & Quality Control
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                    From egg to table: modern technology safeguards nature's pure produce through rigorous multi-stage controls.
                  </p>

                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SPLIT 1: HATCHERY */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          ref={hatcheryRef}
          initial="hidden"
          animate={hatcheryInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2 md:gap-20 items-center"
        >
          <motion.div variants={slideLeft} className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stage 01
            </div>

            <h2 className="font-display text-4xl text-balance md:text-6xl">
              a. Our Hatchery
            </h2>

            <p className="text-lg font-light text-accent">
              Breeding for quality from the very start
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              This is the cradle of high‑quality aquatic life. Fingerlings are fed scientifically formulated feeds. Strict water‑quality control, detailed data monitoring and quality screening ensure every fry leaving the hatchery is robust and healthy.
            </p>

            <div className="pt-4">
              <Link
                to="/business"
                className="inline-flex items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:text-accent"
              >
                Explore fingerlings <span>→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/20"
          >
            <motion.img
              src={whychoose_img3}
              alt="Hatchery Facilities"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* EDITORIAL SPLIT 2: LAKE CAGES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-t border-border">
        <motion.div
          ref={cagesRef}
          initial="hidden"
          animate={cagesInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2 md:gap-20 items-center"
        >
          <motion.div
            variants={slideLeft}
            className="order-2 md:order-1 relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/20"
          >
            <motion.img
              src={whychoose_img1}
              alt="Lake Cages"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div variants={slideRight} className="order-1 md:order-2 space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stage 02
            </div>

            <h2 className="font-display text-4xl text-balance md:text-6xl">
              b. Lake Cages
            </h2>

            <p className="text-lg font-light text-accent">
              Natural lake conditions create superior‑tasting fish.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Our cages are positioned in deep, pristine waters of Lake Victoria. Ample swimming space and strong natural water currents encourage fish to swim actively. This is SHIHAI's natural secret for firm, great‑tasting fish with no muddy off‑flavour.
            </p>

            <div className="pt-4">
              <Link
                to="/business"
                className="inline-flex items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:text-accent"
              >
                Learn about cage farming <span>→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EDITORIAL SPLIT 3: PROCESSING FACILITY */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-t border-border">
        <motion.div
          ref={processingRef}
          initial="hidden"
          animate={processingInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2 md:gap-20 items-center"
        >
          <motion.div variants={slideLeft} className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stage 03
            </div>

            <h2 className="font-display text-4xl text-balance md:text-6xl">
              c. Processing Facility
            </h2>

            <p className="text-lg font-light text-accent">
              Rapid fresh‑lock, seamless safety workflow
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Time is the biggest enemy of freshness. At our modern processing plant, harvested fish immediately enter tightly controlled cold‑chain workflows. From harvesting, grading to packaging, seamless cold‑chain preservation locks in original freshness to deliver optimum quality to you.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:text-accent"
              >
                Request product sample <span>→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/20"
          >
            <motion.img
              src={whychoose_img2}
              alt="Processing Facility"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA SECTION */}

    </div>
  );
}