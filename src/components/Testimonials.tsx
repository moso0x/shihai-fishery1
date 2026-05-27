import { motion } from "framer-motion";

const items = [
  {
    quote:
      "SHIHAI tilapia changed our restaurant menu. Consistent size, clean taste, and delivery we can actually plan around.",
    name: "Wanjiru K.",
    role: "Head Chef, Nairobi Lakeside Grill",
  },
  {
    quote:
      "Their fingerlings have a survival rate I have never seen locally. The technical guidance alone is worth the partnership.",
    name: "David O.",
    role: "Smallholder Farmer, Kisumu",
  },
  {
    quote:
      "We supply three supermarket chains with SHIHAI fish. Quality stays the same whether we order 200kg or 2 tonnes.",
    name: "Amina H.",
    role: "Wholesale Distributor, Mombasa",
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
    y: 60,
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

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background">
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* HEADER */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Trusted Across Kenya
            </div>

            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              What chefs, farmers and distributors say.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 18px rgba(255,255,255,0.35)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="font-display text-3xl text-accent"
            >
              ★★★★★
            </motion.span>

            <span>4.9 / 5 from 200+ partners</span>
          </motion.div>
        </div>

        {/* TESTIMONIAL GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3"
        >
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="group relative flex flex-col gap-6 overflow-hidden bg-background p-8 md:p-10"
            >
              {/* HOVER LIGHT */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
              />

              {/* LARGE QUOTE */}
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="font-display text-5xl leading-none text-accent"
              >
                “
              </motion.span>

              {/* QUOTE TEXT */}
              <blockquote className="relative z-10 text-base leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>

              {/* FOOTER */}
              <figcaption className="relative z-10 mt-auto border-t border-border pt-4 text-sm">
                <motion.div
                  whileHover={{
                    x: 3,
                  }}
                  className="font-medium"
                >
                  {t.name}
                </motion.div>

                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>

              {/* SUBTLE BORDER GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-accent/30"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}