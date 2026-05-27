import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where are your farms located?",
    a: "Our cage farms operate in carefully selected natural waters in Kenya, chosen for water quality, temperature stability and ecological balance.",
  },
  {
    q: "What is the minimum wholesale order?",
    a: "Wholesale orders typically start at 200 kg for fresh tilapia. For fingerlings, the minimum is 5,000 units. We can discuss smaller pilots for new partners.",
  },
  {
    q: "Do you deliver across Kenya?",
    a: "Yes. We operate cold-chain delivery to Nairobi, Mombasa, Kisumu, Nakuru and most major towns. Long-distance and cross-border logistics can be arranged.",
  },
  {
    q: "How do you ensure food safety?",
    a: "Every batch follows our 30-year scientific farming protocol: controlled feed, water-quality monitoring, traceable harvest records and rapid cold-chain handling.",
  },
  {
    q: "Can you support new farmers technically?",
    a: "Absolutely. Sharing knowledge is part of our mission in Kenya. We offer site assessment, training, cage design support and ongoing technical advice.",
  },
  {
    q: "How do I become a long-term supplier partner?",
    a: "Reach out via our contact form. We typically schedule a short call, understand your volume needs, then propose a weekly or monthly supply agreement.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FAQ() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30">
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-4"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            FAQ
          </div>

          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Everything you'd ask before the first order.
          </h2>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Still curious? Our team replies to every inquiry within one
            business day.
          </p>
        </motion.div>

        {/* FAQ ACCORDION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="md:col-span-7 md:col-start-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                variants={itemVariants}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="group relative overflow-hidden border-border"
                >
                  {/* HOVER GLOW */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent"
                  />

                  <AccordionTrigger className="relative z-10 text-left font-display text-lg transition-colors hover:text-accent hover:no-underline md:text-xl">
                    <motion.span
                      whileHover={{
                        x: 2,
                      }}
                    >
                      {f.q}
                    </motion.span>
                  </AccordionTrigger>

                  <AccordionContent className="relative z-10 text-base leading-relaxed text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      {f.a}
                    </motion.div>
                  </AccordionContent>

                  {/* BOTTOM LINE */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent/60 via-border to-transparent"
                  />
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}