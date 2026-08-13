import { motion } from "framer-motion";

// TODO: move these rows into src/data/portfolio.json once a `services[]`
// field is added to the schema. Hardcoded here for now per current scope.
const SERVICES = [
  {
    name: "Backend",
    description: "Designing APIs, services, and data layers that stay fast and correct as traffic grows.",
  },
  {
    name: "AI / LLM",
    description: "Wiring retrieval-augmented generation and LLM workflows into real products, grounded and observable.",
  },
  {
    name: "Frontend",
    description: "Building the interfaces that sit on top of the backend, when the product needs one voice end to end.",
  },
  {
    name: "Cloud",
    description: "Shipping and running services on AWS with CI/CD, containers, and infrastructure that doesn't page you at 3am.",
  },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        What I do
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-14 font-kanit text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
      >
        Four areas, one stack
      </motion.h2>

      <div className="divide-y divide-border border-t border-border">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[64px_200px_1fr] md:items-center md:gap-8"
          >
            <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-semibold text-white">{service.name}</h3>
            <p className="prose-wrap max-w-xl text-muted">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
