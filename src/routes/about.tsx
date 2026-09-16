import { createFileRoute, Outlet } from "@tanstack/react-router";
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
<Outlet />
</>
        
      
      
    
  );
}