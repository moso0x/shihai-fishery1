import { createFileRoute } from "@tanstack/react-router";
import cagesImg from "@/assets/market.jpeg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business — SHIHAI" },
      {
        name: "description",
        content:
          "From germplasm selection to wholesale finished fish — SHIHAI's full-chain tilapia business in Kenya.",
      },
      { property: "og:title", content: "SHIHAI Business" },
      {
        property: "og:description",
        content:
          "Full-chain tilapia: germplasm, hatchery, cage farming, wholesale.",
      },
    ],
    links: [{ rel: "canonical", href: "/business" }],
  }),
  component: Business,
});

const chain = [
  {
    n: "01",
    t: "Tilapia Germplasm Selection & Breeding",
    d: "Professional accumulation, applied to Africa. We cultivate high-quality fingerlings tuned for local climate and water — stable varieties, high survival rates.",
  },
  {
    n: "02",
    t: "Fingerling Incubation & Supply",
    d: "Our hatcheries serve SHIHAI's own grow-out and supply premium seedlings to local Kenyan farmers building their own operations.",
  },
  {
    n: "03",
    t: "Cage Cultivation of Finished Fish",
    d: "Scientific cage farming in living natural waters — ecological by design, with tender, flavorful fish as the outcome.",
  },
  {
    n: "04",
    t: "Wholesale & Sales of Finished Fish",
    d: "Bulk high-quality tilapia for catering, retail and processing — covering multiple channels at honest, dependable pricing.",
  },
];

const advantages = [
  [
    "Senior Team",
    "30 years of tilapia farming. Mature, scenario-tested expertise.",
  ],
  [
    "Guaranteed Germplasm",
    "Independently selected, strongly adapted, reasonable growth cycles.",
  ],
  [
    "Ecological Cage Model",
    "Farming and nature, coexisting on Kenyan waters.",
  ],
  [
    "Localization",
    "Mature technology, perfectly integrated with Kenyan realities.",
  ],
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Business() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Background image with subtle cinematic zoom */}
        <motion.img
          src={cagesImg}
          alt="Floating cage farming infrastructure on a lake"
          width={1920}
          height={1080}
          loading="lazy"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 8,
            ease: "easeOut",
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        {/* Animated overlay */}
        <motion.div
          animate={{
            opacity: [0.65, 0.8, 0.65],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/40 to-background"
        />

        {/* Floating ambient glows */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 md:pb-32 md:pt-56">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80"
          >
            Core Businesses
          </motion.div>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl"
          >
            Full-chain quality control —{" "}
            <motion.em
              className="not-italic text-accent"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 18px rgba(255,255,255,0.35)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              fingerling to fork.
            </motion.em>
          </motion.h1>
          <motion.p className="text-gray-300">The best Tilapia</motion.p>
        </div>
      </section>

      {/* VALUE CHAIN */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
          {chain.map((c, i) => (
            <motion.article
              key={c.n}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="group grid gap-6 bg-background p-10 md:grid-cols-12 md:gap-10 md:p-14"
            >
              {/* Number */}
              <motion.div
                className="font-display text-3xl text-accent md:col-span-2"
                whileHover={{
                  scale: 1.08,
                  rotate: -3,
                }}
              >
                {c.n}
              </motion.div>

              {/* Title */}
              <motion.h2
                className="font-display text-3xl leading-tight md:col-span-4"
                whileHover={{
                  x: 4,
                }}
              >
                {c.t}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="self-end text-muted-foreground md:col-span-6 md:text-lg"
                initial={{ opacity: 0.7 }}
                whileHover={{
                  opacity: 1,
                }}
              >
                {c.d}
              </motion.p>

              {/* Animated line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                }}
                className="absolute bottom-0 left-0 h-px bg-accent/40"
              />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="relative overflow-hidden border-t border-border bg-secondary/40">
        {/* Ambient moving background */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            Core Advantages
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-3xl text-balance font-display text-4xl md:text-6xl"
          >
            Why partners choose SHIHAI.
          </motion.h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {advantages.map(([t, d], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group border-t border-foreground pt-6"
              >
                <motion.div
                  className="font-bold text-4xl text-accent"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  / 0{i + 1}
                </motion.div>

                <motion.div
                  className="mt-3 font-display text-2xl"
                  whileHover={{
                    x: 4,
                  }}
                >
                  {t}
                </motion.div>

                <motion.p
                  className="mt-3 text-sm text-muted-foreground"
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  {d}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}