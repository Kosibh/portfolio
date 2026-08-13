import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-14 font-kanit text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
      >
        Selected work
      </motion.h2>

      <div className="relative">
        {sorted.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} total={sorted.length} />
        ))}
      </div>
    </section>
  );
}
