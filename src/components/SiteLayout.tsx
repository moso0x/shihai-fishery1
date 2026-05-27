import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/logo-img.png";
import logo_footer from "../assets/logo-img.jpeg";
import heroImg from "../assets/heroImg.jpeg";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
        import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/business", label: "Business" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  // Smooth scroll progress animation
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Header dynamic blur / opacity
  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255,255,255,0.55)", "rgba(255,255,255,0.9)"]
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Animated top progress line */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
      />
      <div className="bg-primary py-2 sticky top-0">
        <div className="  container mx-auto px-4 flex justify-between flex-wrap gap-4 text-primary-foreground">

          <p className="font-bold hidden md:block">
            Shihai Fishery Science & Technology Development Company Limited
          </p>

          <div className="flex md:block hidden items-center gap-2">
           Location:
            <p className="hidden md:block text-sm">
              P.O. Box 9100-0200 Nairobi, Kenya
            </p>
          </div>

          <div className="flex items-center gap-2">
          Contact Us:
            <p className="text-sm">0701763456</p>
          </div>

          <div className="flex items-center gap-2">
            Email Us:
            <p className="text-sm">Qizewu781@gmail.com</p>
          </div>

        </div>
        

      </div>

      <motion.header
        style={{ backgroundColor: headerBg }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-baseline gap-2">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Shihai Fishery"
                className="h-16 w-auto"
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 300,
                  },
                }}
              />
            </Link>

            <motion.span
              className="text-sm md:text-xl  font-extrabold  tracking-close   text-muted-foreground sm:inline"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              SHIHAI Fishery · Kenya
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n, i) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={n.to}
                  className="relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <motion.span
                    whileHover={{
                      textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
                    }}
                  >
                    {n.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="rounded-full border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                Get Fish
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : {}}
                className="block h-0.5 w-8 font-extrabold bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -1 } : {}}
                className="block h-0.5 w-8 font-extrabold bg-foreground"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <motion.div
                className="mx-auto flex max-w-7xl flex-col px-6 py-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {nav.map((n) => (
                  <motion.div
                    key={n.to}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="py-2 text-2xl"
                    >
                      {n.label}
                    </Link>
                    
                  </motion.div>
                ))}
                 <Link
                to="/contact"
                className=" mt-4 rounded-full border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                Get Fish
              </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Page transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key={loc.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="rise"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative  overflow-hidden border-t border-border bg-primary text-primary-foreground">
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={heroImg}
      alt=""
      className="h-full w-full object-cover"
    />

    {/* COLOR OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/60 to-accent/40" />

    {/* EXTRA DARK LAYER */}
    <div className="absolute inset-0 bg-black/30" />
  </div>

  {/* Ambient animated glow */}
  <motion.div
    animate={{
      x: [0, 100, 0],
      y: [0, -50, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
  />

  {/* SECOND GLOW */}
  <motion.div
    animate={{
      x: [0, -80, 0],
      y: [0, 40, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
  />

  {/* CONTENT */}
  <motion.div
    className="relative z-10 mx-auto max-w-7xl px-6 py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="grid gap-12 md:grid-cols-4">
      {/* BRAND */}
      <div className="md:col-span-2">
        <Link to="/">
          <motion.img
            src={logo_footer}
            alt="Shihai Fishery"
            className="h-44 w-auto  opacity-[70%] rounded-lg backdrop-blur-sm"
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
          />
        </Link>

        <motion.p
          className="mt-4 max-w-sm text-lg leading-relaxed text-primary-foreground/75"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Premium Service. Premium Quality. Premium Taste. Nourishing
          African families with thirty years of tilapia expertise, now
          rooted in Kenya.
        </motion.p>
      </div>

      {/* NAV */}
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50">
          Explore
        </div>

        <ul className="mt-4 space-y-3 text-lg">
          {nav.map((n) => (
            <motion.li
              key={n.to}
              whileHover={{ x: 6 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Link
                to={n.to}
                className="text-primary-foreground/80 transition hover:text-accent"
              >
                {n.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50">
          Reach Us
        </div>

        <motion.ul
          className="mt-4 space-y-3 text-sm text-primary-foreground/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <li>P.O. Box 9100-0200 Nairobi, Kenya</li>
          <li>Qizewu781@gmail.com</li>
          <li>+254 701 763 456</li>
        </motion.ul>

        {/* SOCIALS */}
        <div className="mt-6 flex gap-4">
          {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{
                scale: 1.12,
                y: -4,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition hover:bg-accent hover:text-accent-foreground"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <motion.div
      className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <div>
        © {new Date().getFullYear()} SHIHAI Aquaculture Ltd.
      </div>

      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="tracking-[0.25em] uppercase"
      >
        Rooted in Kenya · 2024
      </motion.div>
    </motion.div>
  </motion.div>
</footer>
    </div>
  );
}