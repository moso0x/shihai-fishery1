import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-lake.jpeg";
import tilapiaImg from "@/assets/tilapia.jpeg";
import fingerlingsImg from "@/assets/fingerlings.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import cagesImg from "@/assets/cages.jpeg"
import { TrustBar } from "@/components/TrustBar";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { k: "30", v: "Years of tilapia expertise" },
  { k: "2024", v: "Rooted in Kenya" },
  { k: "100%", v: "Independently selected germplasm" },
  { k: "4", v: "Pillars of the full chain" },
];

const pillars = [
  {
    n: "01",
    t: "Germplasm Selection",
    d: "Independently bred fingerlings tuned for Africa's climate and water — stable varieties, high survival rates.",
  },
  {
    n: "02",
    t: "Hatchery & Supply",
    d: "Premium seedlings supporting our own farms and local Kenyan farmers building their own operations.",
  },
  {
    n: "03",
    t: "Cage Cultivation",
    d: "Scientific cage farming in natural waters. Tender flesh, small bones, gentle on the ecosystem.",
  },
  {
    n: "04",
    t: "Wholesale & Sales",
    d: "Bulk high-quality tilapia for catering, retail and processing channels across Kenya.",
  },
];

/* ANIMATION VARIANTS */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
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

/* COUNTER */

function Counter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, scale: 1.03 }}
      className="rounded-3xl  p-8 text-center "
    >
      <h3 className="mb-3 text-4xl md:text-6xl font-bold text-primary">
        {count}
        {suffix}
      </h3>

      <p className="text-slate-600">{label}</p>
    </motion.div>
  );
}

function Home() {
  const heroImages = [heroImg,hero2, tilapiaImg, ];

  const [currentHero, setCurrentHero] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => {
        const next = (prev + 1) % heroImages.length;

        setDirection(next > prev ? 1 : -1);

        return next;
      });
    }, 9000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* SLIDESHOW */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentHero}
              src={heroImages[currentHero]}
              alt="SHIHAI Aquaculture"
              initial={{
                opacity: 0,
                scale: 1.18,
                x: direction === 1 ? 120 : -120,
                rotate: direction === 1 ? 1.5 : -1.5,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                rotate: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1.08,
                x: direction === 1 ? -120 : 120,
                rotate: direction === 1 ? -1 : 1,
                filter: "blur(6px)",
              }}
              transition={{
                duration: 2.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover brightness-[0.78] will-change-transform"
            />
          </AnimatePresence>

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

          {/* FILM GRAIN */}
          {/* <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[url('/noise.png')]" /> */}
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
            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/80"
            >
              <span className="h-px w-10 bg-accent" />
              Rooted in Kenya · Est. 2024
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl"
            >
              Good fish from <br />

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
                Africa&apos;s fertile
              </motion.em>{" "}
              land.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.9,
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg"
            >
              SHIHAI brings three decades of tilapia mastery to Lake Kenya —
              large-scale, ecologically grounded farming that puts safe,
              affordable, high-quality protein on every African family&apos;s
              table.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
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
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
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

            {/* HERO INDICATORS */}
            <div className="mt-12 flex gap-3">
              {heroImages.map((_, i) => (
                <motion.div
                  key={i}
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
                  className="h-2 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-border bg-accent py-6 text-accent-foreground">
        <div className="marquee flex w-max gap-16 whitespace-nowrap hover:text-gray-200 font-display text-3xl md:text-5xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              Premium Service
              <span className="text-accent-foreground/40">✺</span>
              Premium Quality
              <span className="text-accent-foreground/40">✺</span>
              Premium Taste
              <span className="text-accent-foreground/40">✺</span>
            </span>
          ))}
        </div>
      </section>
      <TrustBar />

      {/* INTRO + STATS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 md:grid-cols-12"
        >
          <motion.div
            variants={slideLeft}
            className="md:col-span-5"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Brand Positioning
            </div>

            <h2 className="mt-6 font-display text-4xl leading-tight text-balance md:text-5xl">
              Large-scale, standardized farming — safeguarding every bite of
              reassuring protein.
            </h2>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are not a new face in aquaculture. Behind SHIHAI stands a core
              team with thirty years of tilapia farming — mature technologies,
              scientific discipline, and a deep reverence for African land.
              Plump flesh, small bones, low fat, more nourishment for the same
              shilling.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 font-bold text-xs tracking-[0.2em] text-primary">
              <Counter end={2024} suffix="" label="Rooted in Kenya" />
              <Counter end={30} suffix="Years" label="Years of tilapia expertise" />
              <Counter end={100} suffix="K+" label="Independently selected germplasm" />
              <Counter end={24} suffix="/7" label="Technical Support" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE BUSINESSES */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Core Businesses
              </div>

              <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
                Full-chain quality control, fingerling to finished fish.
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
                <div className="text-4xl font-bold text-accent">
                  {p.n}
                </div>

                <h3 className="font-display text-2xl md:text-3xl">
                  {p.t}
                </h3>

                <p className="text-muted-foreground">{p.d}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <motion.img
            src={tilapiaImg}
            alt="Fresh tilapia fillet"
            loading="lazy"
            width={1200}
            height={1400}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
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
            The Fish
          </div>

          <h2 className="mt-6 font-display text-4xl text-balance md:text-6xl">
            Plump flesh.
            <br />
            Small bones.
            <br />
            <em className="not-italic text-accent">Honest price.</em>
          </h2>

          <p className="mt-8 max-w-md text-muted-foreground">
            High-quality protein should never be a luxury. With scientific
            farming systems and large-scale operations, SHIHAI tilapia arrives
            at the market at a price every household can welcome — without
            quiet compromises on safety, freshness or nutrition.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Independently selected high-yield fingerlings",
              "Cage farming in living natural waters",
              "Ecological, sustainable, ecosystem-respecting",
              "Bulk supply for catering, retail & processing",
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
        </motion.div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
                Core Advantages
              </div>

              <h2 className="mt-6 font-display text-4xl md:text-5xl">
                Thirty years of professionalism — now empowering Kenya.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <dl className="divide-y divide-primary-foreground/15">
                {[
                  [
                    "Senior Team",
                    "Mature technologies and broad scenario experience from 30 years of tilapia farming.",
                  ],
                  [
                    "High-Quality Germplasm",
                    "Independently selected fingerlings — strong adaptability, reasonable growth cycles.",
                  ],
                  [
                    "Ecologically Sustainable",
                    "Cage model that protects local waters — coexistence of farming and nature.",
                  ],
                  [
                    "Local Adaptation",
                    "Deep research on Kenya's climate, waters and farming habits — proven tech, perfectly localized.",
                  ],
                ].map(([t, d]) => (
                  <motion.div
                    key={t}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-2 py-6 md:grid-cols-3 md:gap-8"
                  >
                    <dt className="font-display text-xl text-accent">
                      {t}
                    </dt>

                    <dd className="md:col-span-2 text-primary-foreground/80">
                      {d}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative order-2 aspect-[5/6] overflow-hidden rounded-sm md:order-1"
          >
            <motion.img
              src={cagesImg}
              alt="Cage farming on a misty African lake at dawn"
              loading="lazy"
              width={1200}
              height={900}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 flex flex-col justify-center md:order-2"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Industrial Vision
            </div>

            <h2 className="mt-6 font-display text-4xl text-balance md:text-6xl">
              We are more than a farm.
              <br />
              <em className="not-italic text-accent">
                We are an enabler.
              </em>
            </h2>

            <p className="mt-8 max-w-md text-muted-foreground">
              By sharing fingerlings, exporting scientific methods and opening
              our large-scale playbook, SHIHAI is working hand in hand with
              Kenyan farmers to build new employment, lift the aquaculture
              industry, and let ecological farming become a new growth engine
              for the local economy.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground hover:border-accent pb-1 text-sm uppercase tracking-[0.2em]"
            >
              Read our story  <span className="hover:text-accent h-6 w-3">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
       <Testimonials />

      <Pricing />

      <Process />

      <FAQ />

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