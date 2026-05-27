import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");

      toast.success("You're on the list. Karibu SHIHAI.");
    }, 700);
  }

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-primary p-10 text-primary-foreground shadow-2xl md:grid md:grid-cols-12 md:items-center md:p-16"
        >
          {/* CINEMATIC LIGHT */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              x: ["-10%", "10%", "-10%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)]"
          />

          {/* FILM GRAIN */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('/noise.png')]" />

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative z-10 md:col-span-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
              The Catch — Monthly
            </div>

            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              Pricing updates, harvest dates, farming tips.
            </h2>

            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80">
              One short email a month. Built for chefs, distributors and
              farmers. Unsubscribe any time.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative z-10 mt-10 md:col-span-5 md:mt-0"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* INPUT */}
              <motion.input
                whileFocus={{
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.co.ke"
                className="flex-1 rounded-full border border-primary-foreground/30 bg-transparent px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
              />

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="relative overflow-hidden rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground transition hover:bg-accent/90 disabled:opacity-60"
              >
                {/* BUTTON SHIMMER */}
                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                <span className="relative z-10">
                  {loading ? "Joining…" : "Subscribe"}
                </span>
              </motion.button>
            </div>
          </motion.form>

          {/* BORDER GLOW */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}