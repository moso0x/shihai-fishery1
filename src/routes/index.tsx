import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero1.jpg";
import tilapiaImg from "@/assets/hero3.jpeg";
import fingerlingsImg from "@/assets/fingerlings.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import cagesImg from "@/assets/tilapia.jpeg";
import { TrustBar } from "@/components/TrustBar";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import promoVideo from "@/assets/video.mp4";

export const Route = createFileRoute("/")({
  component: Home,
});

const pillars = [
  {
    n: "01",
    t: "Germplasm Selection",
    d: "Drawing on our accumulated professional expertise, we have selectively bred superior strains well‑adapted to African climate and water conditions. The strains feature stable genetics, strong stress resistance and high survival rates.",
    img: fingerlingsImg,
  },
  {
    n: "02",
    t: "Fry Hatchery & Supply",
    d: "Our modern hatchery supports our large‑scale in‑house farming operations, while also supplying the open market. We deliver high‑quality fingerlings to local farmers to boost their production and income.",
    img: hero2,
  },
  {
    n: "03",
    t: "Scientific Cage Aquaculture",
    d: "We adopt eco‑friendly deep‑water large‑scale cage farming techniques. Precision‑formulated nutritious feeds are used to strengthen fish immunity. Full digital tracking ensures pure, hazard‑free produce.",
    img: cagesImg,
  },
  {
    n: "04",
    t: "Market‑ready Fish Distribution",
    d: "Stable bulk supply of premium tilapia. Our sales channels cover restaurant chains, supermarkets, food processors and wholesale markets.",
    img: tilapiaImg,
  },
];

/* ANIMATION VARIANTS */
const slideLeft = {
  hidden: { opacity: 0, x: -100 },
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
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.1, 1],
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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

function Home() {
  const heroSlides = [
    {
      title: (
        <>
          Large‑scale Standardized <br />
          <motion.em
            className="not-italic text-accent"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 25px rgba(255,255,255,0.45)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Tilapia Farming
          </motion.em>
        </>
      ),
    },
    {
      title: (
        <>
          From Fry to Table <br />
          <motion.em
            className="not-italic text-accent"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 25px rgba(255,255,255,0.45)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Quality & Freshness
          </motion.em>
        </>
      ),
    },
    {
      title: (
        <>
          Sustainable <br />
          <motion.em
            className="not-italic text-accent"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 25px rgba(255,255,255,0.45)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Aquaculture Technology
          </motion.em>
        </>
      ),
    },
  ];

  const [currentHero, setCurrentHero] = useState(0);

  // Auto-play interval for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* SINGLE BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroImg}
            alt="SHIHAI Aquaculture"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.78]"
          />

          {/* DARK CINEMATIC OVERLAY */}
          <motion.div
            animate={{
              opacity: [0.45, 0.6, 0.45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background"
          />

          {/* MOVING LIGHT */}
          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              y: ["0%", "-5%", "0%"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]"
          />
        </div>

        {/* FLOATING LIGHT */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl"
        />

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:pb-48 md:pt-56">
          <div className="max-w-4xl text-primary-foreground">
            {/* TEXT CAROUSEL */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
                  {heroSlides[currentHero].title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/business"
                  className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground shadow-xl shadow-accent/20 transition hover:bg-accent/90"
                >
                  Our Full Chain
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/contact"
                  className="rounded-full border border-primary-foreground/60 bg-white/5 px-7 py-3 text-sm text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground hover:text-primary"
                >
                  Buy or Partner →
                </Link>
              </motion.div>
            </motion.div>

            {/* TEXT SLIDE INDICATORS */}
            <div className="mt-12 flex gap-3">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHero(i)}
                  className="focus:outline-none"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      width: currentHero === i ? 42 : 10,
                      opacity: currentHero === i ? 1 : 0.4,
                      backgroundColor:
                        currentHero === i
                          ? "rgb(212, 170, 30)"
                          : "rgba(255,255,255,0.5)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="h-2 rounded-full cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* INTRO + VIDEO */}
      <section className="mx-auto max-w-7xl px-6 py-6 md:py-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 md:grid-cols-12 items-center"
        >
          <motion.div variants={slideLeft} className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Brand Positioning
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-balance md:text-5xl">
              Our Advantages
            </h2>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="md:col-span-6 md:col-start-7 space-y-8"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-black/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={promoVideo} type="video.mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Process />

      {/* CORE PRODUCTS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Core Business
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
                Full‑chain quality control from fish fry to market‑ready fish.
              </h2>
            </div>

            <Link
              to="/business"
              className="text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline"
            >
              Explore the chain →
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.article
                key={p.n}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-accent/10 md:p-12"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-accent">{p.n}</div>
                </div>

                <div className="my-2 h-48 w-full overflow-hidden rounded-lg">
                  <motion.img
                    src={p.img}
                    alt={p.t}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-display text-2xl md:text-3xl">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SPLIT 1 (Product 1 Single Image) */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted/20"
        >
          <img
            src={fingerlingsImg}
            alt="Selected Fingerlings"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Product 1
          </div>

          <h2 className="mt-6 font-display text-4xl text-balance md:text-6xl">
            Premium Fish Fry & Fingerlings
          </h2>

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Locally bred and locally produced fingerlings" ,
              "Fast growth, short culture cycle; reach 500g in as fast as 5 months",
               "Strong disease resistance and high survival rates",
              "Sourced from natural Lake Victoria water"
,
            ].map((line) => (
              <motion.li
                key={line}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 border-b border-border pb-3"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                {line}
              </motion.li>
            ))}
          </ul>

          <Link
            to="/product"
            className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em]"
          >
            Explore product <span className="hover:text-accent h-6 w-3">→</span>
          </Link>
        </motion.div>
      </section>

      {/* EDITORIAL SPLIT 2 (Product 2 Single Image) */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative order-1 aspect-[5/6] overflow-hidden rounded-sm bg-muted/20 md:order-2"
          >
            <img
              src={cagesImg}
              alt="Deep water cages"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 flex flex-col justify-center md:order-1"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Product 2
            </div>

            <h2 className="mt-6 font-display text-4xl text-balance md:text-6xl">
              Fresh & Iced Whole Fish
            </h2>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Great head‑start & faster growth: All table fish originate from SHIHAI’s own robust, fast‑growing premium fingerlings, guaranteeing uniform sizes and top‑tier quality from source",
"Cultivated in pristine Lake Victoria water: No harmful chemical additives are applied. Production follows eco‑friendly principles for healthy natural growth",
"Rich in heart‑healthy Omega‑3 and Selenium. Omega‑3 supports cardiovascular health and brain development; Selenium acts as a natural antioxidant strengthening body defence",
"Firm flesh, great taste with minimal bones: Constant water movement in lake cages builds firm, elastic meat. Tilapia is boneless‑rich with no muddy taste for pleasant healthy eating",
"Extended shelf‑life & consistent quality: Scientific harvesting, chilling and modern warehousing prolong shelf‑life for easier transport and distribution, minimizing losses for wholesalers and retailers"

              ].map((line) => (
                <motion.li
                  key={line}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 border-b border-border pb-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  {line}
                </motion.li>
              ))}
            </ul>

            <Link
              to="/product"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em]"
            >
              Explore product <span className="hover:text-accent h-6 w-3">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-sm border border-border bg-accent p-10 md:p-16"
        >
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl text-accent-foreground md:text-6xl">
                Source the best tilapia in Kenya.
              </h2>
              <p className="mt-4 max-w-xl text-accent-foreground/80">
                Wholesale fish, premium fingerlings, technical partnership.
                Tell us what you need — we'll meet you on the lake.
              </p>
            </div>

            <div className="md:col-span-5 md:text-right">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <motion.img
            src={fingerlingsImg}
            alt=""
            aria-hidden
            loading="lazy"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-20 -right-20 hidden h-72 w-72 rounded-full object-cover opacity-30 md:block"
          />
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-10 mt-20 text-center"
        >
          <h2 className="mb-5 text-3xl font-bold text-primary">
            Visit Our Nairobi Headquarters
          </h2>

          <p className="mb-8 flex justify-center gap-2 text-gray-700">
            P.O. Box 9100-0200 Nairobi, Kenya
          </p>

          <div className="h-96 w-full overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=P.O.%20Box%209100-0200%20Nairobi,%20Kenya&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;