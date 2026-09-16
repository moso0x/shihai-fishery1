import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero1.jpg";
import tilapiaImg from "@/assets/hero3.jpeg";
import fingerlingsImg from "@/assets/fingerlings.jpeg";
import hero2 from "@/assets/hero2.jpg";
import cagesImg from "@/assets/tilapia.jpeg";
import videoUrl from "@/assets/video.mp4";
import { TrustBar } from "@/components/TrustBar";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Home,
});

const PILLARS = [
  {
    n: "01",
    t: "Germplasm Selection",
    d: "Drawing on our accumulated professional expertise, we have selectively bred superior strains well‑adapted to African climate and water conditions. The strains feature stable genetics, strong stress resistance and high survival rates.",
    img: cagesImg,
  },
  {
    n: "02",
    t: "Fry Hatchery & Supply",
    d: "Our modern hatchery supports our large‑scale in‑house farming operations, while also supplying the open market. We deliver high‑quality fingerlings to local farmers to boost their production and income.",
    video: videoUrl,
  },
  {
    n: "03",
    t: "Scientific Cage Aquaculture",
    d: "We adopt eco‑friendly deep‑water large‑scale cage farming techniques. Precision‑formulated nutritious feeds are used to strengthen fish immunity. Full digital tracking ensures pure, hazard‑free produce.",
    img: hero2,
  },
  {
    n: "04",
    t: "Market‑ready Fish Distribution",
    d: "Stable bulk supply of premium tilapia. Our sales channels cover restaurant chains, supermarkets, food processors and wholesale markets.",
    img: tilapiaImg,
  },
];

const PRODUCT_1_POINTS = [
  "Locally bred and locally produced fingerlings",
  "Fast growth, short culture cycle; reach 500g in as fast as 5 months",
  "Strong disease resistance and high survival rates",
  "Sourced from natural Lake Victoria water",
];

const PRODUCT_2_POINTS = [
  "Great head‑start & faster growth: All table fish originate from SHIHAI’s own robust, fast‑growing premium fingerlings, guaranteeing uniform sizes and top‑tier quality from source",
  "Cultivated in pristine Lake Victoria water: No harmful chemical additives are applied. Production follows eco‑friendly principles for healthy natural growth",
  "Rich in heart‑healthy Omega‑3 and Selenium. Omega‑3 supports cardiovascular health and brain development; Selenium acts as a natural antioxidant strengthening body defence",
  "Firm flesh, great taste with minimal bones: Constant water movement in lake cages builds firm, elastic meat. Tilapia is boneless‑rich with no muddy taste for pleasant healthy eating",
  "Extended shelf‑life & consistent quality: Scientific harvesting, chilling and modern warehousing prolong shelf‑life for easier transport and distribution, minimizing losses for wholesalers and retailers",
];

/* ANIMATION VARIANTS */
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentHero, setCurrentHero] = useState(0);

  const heroSlides = useMemo(
    () => [
      {
        id: "slide-1",
        title: (
          <>
            Large‑scale Standardized <br />
            <span className="not-italic text-accent">Tilapia Farming</span>
          </>
        ),
      },
      {
        id: "slide-2",
        title: (
          <>
            From Fry to Table <br />
            <span className="not-italic text-accent">Quality & Freshness</span>
          </>
        ),
      },
      {
        id: "slide-3",
        title: (
          <>
            Sustainable <br />
            <span className="not-italic text-accent">Aquaculture Technology</span>
          </>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = true;
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay blocked or video loading error:", error);
        });
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black/90">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroImg}
            alt="SHIHAI Aquaculture"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:pb-48 md:pt-56">
          <div className="max-w-4xl text-primary-foreground">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[currentHero].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
                  {heroSlides[currentHero].title}
                </h1>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/business"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground shadow-xl transition hover:scale-105 hover:bg-accent/90"
              >
                Our Full Chain
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-primary-foreground/60 bg-white/5 px-7 py-3 text-sm text-primary-foreground backdrop-blur-sm transition hover:scale-105 hover:bg-primary-foreground hover:text-primary"
              >
                Buy or Partner →
              </Link>
            </div>

            {/* SLIDE INDICATORS */}
            <div className="mt-12 flex gap-3" role="tablist" aria-label="Hero Slides">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentHero(i)}
                  className="p-1 focus:outline-none"
                  aria-label={`Go to slide ${i + 1}`}
                  role="tab"
                  aria-selected={currentHero === i}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentHero === i ? "w-10 bg-amber-500 opacity-100" : "w-2.5 bg-white/50 opacity-40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* BRAND POSITIONING & VIDEO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
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
             Advantages of SHIHAI Aquaculture
            </h2>
          </motion.div>
        </motion.div>
      </section>

      <Process />

      {/* CORE BUSINESS PILLARS */}
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
              to="/product"
              className="text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline"
            >
              Explore the chain →
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2"
          >
            {PILLARS.map((p) => (
              <motion.article
                key={p.n}
                variants={scaleIn}
                className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-accent/10 md:p-12"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-accent">{p.n}</div>
                </div>

                <div className="my-2 h-48 w-full overflow-hidden rounded-lg">
                  {p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.t}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="font-display text-2xl md:text-3xl">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SPLIT 1 */}
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
            loading="lazy"
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
            {PRODUCT_1_POINTS.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 border-b border-border pb-3"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/product"
            className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
          >
            Explore product <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* PRODUCT SPLIT 2 */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-1 aspect-[5/6] overflow-hidden rounded-sm bg-muted/20 md:order-2"
          >
            <img
              src={cagesImg}
              alt="Deep water cages"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 flex flex-col justify-center md:order-1"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Product 2
            </div>

            <h2 className="mt-6 font-display text-4xl text-balance md:text-6xl">
              Fresh & Iced Whole Fish
            </h2>

            <ul className="mt-8 space-y-3 text-sm">
              {PRODUCT_2_POINTS.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-b border-border pb-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/product"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
            >
              Explore product <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-sm border border-border bg-accent p-10 md:p-16"
        >
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl text-accent-foreground md:text-6xl">
                Source the best tilapia in Kenya.
              </h2>
              <p className="mt-4 max-w-xl text-accent-foreground/80">
                Wholesale fish, premium fingerlings, technical partnership. Tell us
                what you need — we'll meet you on the lake.
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
        </motion.div>

        {/* MAP SECTION */}
        <div className="mb-10 mt-20 text-center">
          <h2 className="mb-5 text-3xl font-bold text-primary">
            Visit Our Nairobi Headquarters
          </h2>

          <p className="mb-8 flex justify-center gap-2 text-gray-700">
            P.O. Box 9100-0200 Nairobi, Kenya
          </p>

          <div className="h-96 w-full overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="SHIHAI Headquarters Map"
              src="https://www.google.com/maps?q=P.O.%20Box%209100-0200%20Nairobi,%20Kenya&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;