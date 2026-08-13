import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function AboutSection() {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-8 font-kanit text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
      >
        {profile.yearsOfExperience} years building software that has to work.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="prose-wrap max-w-2xl text-lg leading-relaxed text-muted"
      >
        {profile.bio}
      </motion.p>
    </section>
  );
}
