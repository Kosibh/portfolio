import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export default function ProjectCard({ project, index, total }: ProjectCardProps) {
  const topOffset = 96 + index * 16;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
      className="sticky mb-6 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/40 sm:p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs text-muted">
            <span className="font-mono">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            {project.highlight && (
              <span className="rounded-full bg-accent-gradient px-2.5 py-0.5 font-semibold text-black">
                Featured
              </span>
            )}
            <span>{project.year}</span>
          </div>

          <h3 className="font-kanit text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm text-accent-magenta">{project.subtitle}</p>
          <p className="prose-wrap mt-4 max-w-md text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">Role — {project.role}</p>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Live project
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-black">
              <span className="hero-heading px-6 text-center font-kanit text-xl font-semibold sm:text-2xl">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
