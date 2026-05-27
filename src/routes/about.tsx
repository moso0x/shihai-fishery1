import { createFileRoute } from "@tanstack/react-router";
import fingerlingsImg from "@/assets/fingerlings.jpeg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SHIHAI" },
      {
        name: "description",
        content:
          "Thirty years of tilapia farming, now rooted in Kenya. Meet the team and the philosophy behind SHIHAI.",
      },
      { property: "og:title", content: "About SHIHAI" },
      {
        property: "og:description",
        content: "Thirty years of tilapia mastery, rooted in Kenya in 2024.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Animated background glows */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            About SHIHAI
          </motion.div>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.05] md:text-7xl"
          >
            Thirty years on the water.
            <br />

            <motion.em
              className="not-italic text-accent"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 24px rgba(255,255,255,0.45)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              One promise
            </motion.em>{" "}
            to Kenya.
          </motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-6 pb-24 md:grid-cols-12 md:gap-16">
        {/* Floating particles / ambient blur */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/3 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />

        {/* IMAGE */}
        <motion.div
          className="relative md:col-span-7"
          initial={{ opacity: 0, x: -60, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="overflow-hidden rounded-sm"
          >
            <motion.img
              src={fingerlingsImg}
              alt="Hands inspecting fresh tilapia fingerlings"
              loading="lazy"
              width={1200}
              height={900}
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>

          {/* Floating accent border */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-sm border border-white/10"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="relative md:col-span-5"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            In 2024, SHIHAI officially settled in Kenya. But we are far from
            new — behind us stands a core team with three decades of tilapia
            farming experience, mature techniques, scientific discipline, and a
            deep reverence for African land.
          </motion.p>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We are here to deliver high-quality aquatic protein to Kenyan
            families — through professionalism, on this fertile soil.
          </motion.p>

          {/* Floating line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 1.2,
              delay: 0.5,
            }}
            className="mt-10 h-px bg-gradient-to-r from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/40">
        {/* Massive ambient motion */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Value Concept
              </div>

              <motion.h2
                className="mt-6 font-display text-4xl text-balance md:text-5xl"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Nourishing African families with professional strength.
              </motion.h2>
            </motion.div>

            <motion.div
              className="md:col-span-7 md:col-start-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
              }}
            >
              <motion.p
                className="text-lg text-muted-foreground"
                whileHover={{
                  scale: 1.01,
                }}
              >
                We have always believed that high-quality protein should not be
                a luxury. With a senior team, scientific farming systems,
                large-scale operations and outstanding cost performance, SHIHAI
                is committed to letting every Kenyan family — and every African
                family — easily enjoy safe, delicious, nutritious tilapia.
              </motion.p>

              <motion.blockquote
                className="mt-12 border-l-2 border-accent pl-6 font-display text-2xl leading-snug md:text-3xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 6,
                  textShadow: "0px 0px 18px rgba(255,255,255,0.2)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
              >
                "We safeguard the health of family members through the power of
                ingredients."
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLOGAN */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:py-32">
        {/* Moving glow */}
        <motion.div
          animate={{
            x: [0, 120, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-1/2 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Slogan
          </div>

          <motion.p
            className="mt-6 text-balance font-display text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <motion.span
              whileHover={{
                color: "#ffffff",
                scale: 1.03,
              }}
              className="inline-block"
            >
              Premium Service.
            </motion.span>{" "}
            <motion.span
              className="inline-block text-accent"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 30px rgba(255,255,255,0.35)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              Premium Quality.
            </motion.span>{" "}
            <motion.span
              whileHover={{
                color: "#ffffff",
                scale: 1.03,
              }}
              className="inline-block"
            >
              Premium Taste.
            </motion.span>
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}