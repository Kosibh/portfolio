import { Github, Instagram, Linkedin, Mail, Globe } from "lucide-react";
import type { SocialLinksData } from "../types/portfolio";

interface SocialLinksProps {
  social: SocialLinksData;
  variant?: "pill" | "plain";
  className?: string;
}

const LINK_CONFIG: {
  key: keyof SocialLinksData;
  label: string;
  icon: typeof Github;
  href: (value: string) => string;
}[] = [
  { key: "github", label: "GitHub", icon: Github, href: (v) => v },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: (v) => v },
  { key: "instagram", label: "Instagram", icon: Instagram, href: (v) => v },
  { key: "website", label: "Website", icon: Globe, href: (v) => v },
  { key: "email", label: "Email", icon: Mail, href: (v) => `mailto:${v}` },
];

export default function SocialLinks({ social, variant = "pill", className = "" }: SocialLinksProps) {
  const links = LINK_CONFIG.filter(({ key }) => Boolean(social[key]?.trim()));

  if (links.length === 0) return null;

  if (variant === "plain") {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {links.map(({ key, label, icon: Icon, href }) => (
          <a
            key={key}
            href={href(social[key])}
            target={key === "email" ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {links.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href(social[key])}
          target={key === "email" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent-magenta/60 hover:text-white"
        >
          <Icon size={17} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
