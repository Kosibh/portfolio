import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ExperienceSection() {
  const { experience, skills } = usePortfolio();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        Skills &amp; Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-10 font-kanit text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
      >
        Where I've worked
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16 space-y-5"
      >
        {skills.categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-3 sm:flex-row sm:items-baseline">
            <span className="w-full shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-muted sm:w-44">
              {category.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="divide-y divide-border border-t border-border">
        {experience.map((role, index) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[64px_1fr_auto] md:gap-8"
          >
            <span className="font-mono text-sm text-muted md:pt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{role.company}</h3>
                <span className="text-sm text-muted">{role.role}</span>
              </div>
              <p className="prose-wrap mt-3 max-w-2xl text-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2">
                {role.highlights.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted/90">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-magenta" />
                    <span className="prose-wrap">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:text-right">
              <span className="inline-block rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted">
                {role.period}
              </span>
              <p className="mt-2 text-xs text-muted">{role.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
