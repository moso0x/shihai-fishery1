import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    t: "Inquiry",
    d: "Tell us volume, frequency and destination — by form, call or WhatsApp.",
  },
  {
    n: "02",
    t: "Quote & Sample",
    d: "We confirm pricing and arrange a sample batch where applicable.",
  },
  {
    n: "03",
    t: "Harvest",
    d: "Fish are harvested fresh from our cages on your delivery day.",
  },
  {
    n: "04",
    t: "Cold Delivery",
    d: "Iced or chilled transport direct to your kitchen, store or facility.",
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
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Process() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND LIGHT */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
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
            From Lake to Plate
          </div>

          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            A simple, four-step ordering process.
          </h2>
        </motion.div>

        {/* PROCESS GRID */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="group relative flex flex-col gap-4 overflow-hidden bg-background p-8"
            >
              {/* HOVER GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
              />

              {/* STEP NUMBER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative z-10 font-display text-5xl text-accent"
              >
                {s.n}
              </motion.div>

              {/* TITLE */}
              <motion.h3
                whileHover={{
                  x: 4,
                }}
                className="relative z-10 font-display text-xl"
              >
                {s.t}
              </motion.h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>

              {/* ANIMATED LINE */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="mt-2 h-px bg-accent"
              />

              {/* CORNER LIGHT */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute right-0 top-0 h-24 w-24 bg-accent/10 blur-2xl"
              />

              {/* BORDER GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 ring-1 ring-accent/30"
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}