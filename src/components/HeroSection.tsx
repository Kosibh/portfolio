import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "linear-gradient(135deg, #8B5CF6, #D946EF, #F97316)" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mb-8 h-32 w-32 shrink-0 md:h-40 md:w-40"
      >
        <div className="absolute inset-0 rounded-full bg-accent-gradient opacity-70 blur-md" />
        <img
          src={profile.avatarSvg}
          alt={profile.name}
          className="relative h-full w-full rounded-full border border-border object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        {profile.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="hero-heading relative z-10 font-kanit text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Hi, I'm {profile.shortName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="prose-wrap relative z-10 mt-6 max-w-xl text-base text-muted md:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full bg-accent-gradient px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
        >
          View work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 mt-10"
      >
        <SocialLinks social={profile.social} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 text-muted"
        aria-hidden
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
