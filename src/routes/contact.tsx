import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SHIHAI" },
      {
        name: "description",
        content:
          "Buy SHIHAI tilapia, source premium fingerlings, or partner with us on Kenya's aquaculture future.",
      },
      { property: "og:title", content: "Contact SHIHAI" },
      {
        property: "og:description",
        content: "Wholesale, fingerlings, partnership — talk to SHIHAI Kenya.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative mx-auto grid max-w-7xl gap-16 overflow-hidden px-6 pb-24 pt-32 md:grid-cols-12 md:pt-40">
        {/* Ambient animated backgrounds */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Left Side */}
        <motion.div
          className="relative z-10 md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
          >
            Contact
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            Let's put good fish on more tables.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Whether you're a buyer, a fellow farmer looking for fingerlings, or
            a partner with a vision for Kenyan aquaculture — we'd love to hear
            from you.
          </motion.p>

          <motion.dl
            className="mt-12 space-y-6 text-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {[
              ["Where", "P.O. Box 9100-0200 Nairobi, Kenya"],
              ["Email", "Qizewu781@gmail.com"],
              ["Phone", "+254701763456"],
              ["Hours", "Mon — Sat · 8:00 – 18:00 EAT"],
            ].map(([k, v]) => (
              <motion.div
                key={k}
                className="border-t border-border pt-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  x: 6,
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>

                <motion.dd
                  className="mt-1 font-display text-xl"
                  whileHover={{
                    textShadow: "0px 0px 12px rgba(255,255,255,0.25)",
                  }}
                >
                  {v}
                </motion.dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative z-10 md:col-span-6 md:col-start-7"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-sm border border-border bg-card/80 p-8 backdrop-blur-xl md:p-10"
            whileHover={{
              boxShadow: "0px 0px 40px rgba(255,255,255,0.06)",
            }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                  }}
                  className="py-16 text-center"
                >
                  <motion.div
                    className="font-display text-3xl text-accent"
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Asante sana.
                  </motion.div>

                  <motion.p
                    className="mt-4 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Your message is on its way to the SHIHAI team.
                    <br />
                    We'll be in touch shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Send a message
                  </div>

                  <div className="mt-8 grid gap-6">
                    <Field label="Name" name="name" />
                    <Field label="Email" name="email" type="email" />
                    <Field
                      label="Company / Role"
                      name="company"
                      required={false}
                    />

                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        I'm interested in
                      </label>

                      <select
                        required
                        className="mt-2 w-full border-b border-input bg-transparent py-3 text-base outline-none focus:border-foreground"
                      >
                        <option>Wholesale finished fish</option>
                        <option>Buying fingerlings</option>
                        <option>Technical partnership</option>
                        <option>Something else</option>
                      </select>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Message
                      </label>

                      <textarea
                        rows={4}
                        required
                        className="mt-2 w-full resize-none border-b border-input bg-transparent py-3 text-base outline-none focus:border-foreground"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="mt-4 rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90"
                      whileHover={{
                        scale: 1.04,
                        y: -2,
                        boxShadow:
                          "0px 10px 25px rgba(0,0,0,0.15)",
                      }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Send →
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -2 }}
    >
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>

      <motion.input
        id={name}
        name={name}
        type={type}
        required={required}
        whileFocus={{
          scale: 1.01,
          borderColor: "rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-2 w-full border-b border-input bg-transparent py-3 text-base outline-none focus:border-foreground"
      />
    </motion.div>
  );
}