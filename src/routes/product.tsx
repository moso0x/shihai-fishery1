import { createFileRoute } from "@tanstack/react-router";
import cagesImg from "@/assets/market.jpeg";
import { motion } from "framer-motion";
import { CheckCircle2, Fish, Scale } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "product & B2B Wholesale — SHIHAI" },
      {
        name: "description",
        content:
          "Your Trusted B2B Partner for Bulk East-African Fish Supply & Premium Fingerlings. High quality Lake Victoria Tilapia Fry & Market-Ready Table Fish.",
      },
      { property: "og:title", content: "SHIHAI B2B Wholesale & Fingerlings" },
      {
        property: "og:description",
        content:
          "Bulk supply of premium tilapia fry and market-ready table fish grown in Lake Victoria.",
      },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  component: Product,
});

// Chain data retained for overview
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

// Product Data Sets
const fryFeatures = [
  "Locally bred and locally produced fingerlings",
  "Fast growth, short culture cycle; reach 500g in as fast as 5 months",
  "Strong disease resistance and high survival rates",
  "Sourced from natural Lake Victoria water",
];

const fryProducts = [
  {
    size: "1–2 cm",
    tag: "Newly-hatched fry",
    price: "Sh. Contact for Pricing / 1000 pcs",
    bestFor:
      "Experienced farmers with dedicated pre-grow-out ponds, cost-focused operations.",
  },
  {
    size: "3–5 cm",
    tag: "Standard fingerling",
    price: "Sh. Contact for Pricing / 1000 pcs",
    bestFor:
      "Industry standard size, strong adaptability & fast growth, suitable for most cage or pond farming.",
  },
  {
    size: "5 cm+",
    tag: "Large-size fingerling",
    price: "Sh. Contact for Pricing / 1000 pcs",
    bestFor:
      "Uniform size, excellent stress tolerance; enters fattening phase immediately and shortens farming cycle.",
  },
];

const tableFishFeatures = [
  {
    title: "Great Head-Start & Faster Growth",
    desc: "All table fish originate from SHIHAI’s own robust, fast-growing premium fingerlings, guaranteeing uniform sizes and top-tier quality from source.",
  },
  {
    title: "Pristine Lake Victoria Cultivation",
    desc: "No harmful chemical additives applied. Production follows strict eco-friendly principles for healthy, natural growth.",
  },
  {
    title: "Rich in Omega-3 & Selenium",
    desc: "Omega-3 supports cardiovascular health and brain development; Selenium acts as a natural antioxidant strengthening body defence.",
  },
  {
    title: "Firm Flesh & Minimal Bones",
    desc: "Constant water movement in lake cages builds firm, elastic meat with no muddy taste for pleasant healthy eating.",
  },
  {
    title: "Extended Shelf-Life & Consistent Quality",
    desc: "Scientific harvesting, chilling and modern warehousing prolong shelf-life for easier transport and distribution, minimizing losses.",
  },
];

const tableFishProducts = [
  {
    size: "300g–400g",
    category: "Standard size",
    target: "Local open markets, affordable retail, popular for household consumers",
    price: "Sh. Contact for Pricing / Kg",
  },
  {
    size: "400g–600g",
    category: "Golden commercial size",
    target:
      "Top-selling for restaurants, hotels & supermarkets; thick flesh and excellent market appearance",
    price: "Sh. Contact for Pricing / Kg",
  },
  {
    size: "600g+",
    category: "Premium large size",
    target: "High-end dining, banquets and special wholesale clients",
    price: "Sh. Contact for Pricing / Kg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

function Product() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={cagesImg}
            alt="Floating cage farming infrastructure on a lake"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:pb-48 md:pt-56">
          <div className="max-w-4xl text-primary-foreground">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-display text-4xl leading-[1.02] text-balance md:text-7xl lg:text-8xl"
            >
              Your Trusted B2B Partner for Bulk East‑African Fish Supply &{" "}
              <span className="not-italic text-accent">
                Premium Fingerlings
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg text-gray-200 md:text-xl"
            >
              From natural Lake Victoria waters directly to your farm, market, or restaurant. Full-chain traceability and unmatched quality control.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CHAIN OVERVIEW GRID */}
   

      {/* PRODUCTS SECTION 1: FISH FRY & FINGERLINGS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Category 01
            </div>
            <h2 className="mt-2 font-display text-4xl text-balance md:text-6xl">
              Fish Fry & Fingerlings
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            High survival rate seed stock specifically engineered and acclimated for East African climate and water systems.
          </p>
        </div>

        {/* Highlight Features */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fryFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-start gap-3 border-b border-border pb-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <span className="text-sm font-medium leading-snug">{feat}</span>
            </motion.div>
          ))}
        </div>

        {/* Fry Table / Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3"
        >
          {fryProducts.map((item) => (
            <motion.div
              key={item.size}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between bg-background p-8 transition-colors hover:bg-accent/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {item.tag}
                  </span>
                  <Fish className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">{item.size}</h3>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {item.bestFor}
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-4">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Bulk Pricing
                </span>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRODUCTS SECTION 2: MARKET-READY TABLE FISH */}
      <section className="border-t border-border bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Category 02
              </div>
              <h2 className="mt-2 font-display text-4xl text-balance md:text-6xl">
                Market-Ready Table Fish
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Sustainably cultivated tilapia with firm flesh, rich nutrients, and consistent sizing for commercial buyers.
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {tableFishFeatures.map((tf, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col justify-between bg-background p-6"
              >
                <div>
                  <h4 className="font-display text-base font-semibold leading-snug">
                    {tf.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {tf.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing & Sizing Table */}
          <div className="mt-12 overflow-hidden rounded-sm border border-border bg-background">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {tableFishProducts.map((p) => (
                <div key={p.size} className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.size}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {p.target}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-border pt-4">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Wholesale Rate
                    </span>
                    <p className="mt-1 text-sm font-semibold text-accent">
                      {p.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}