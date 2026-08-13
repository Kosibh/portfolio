import { useState } from "react";
import { Copy, Check, Phone } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!profile.social.email) return;
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-border bg-base">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-3 md:gap-8 md:px-10">
        <div>
          <p className="hero-heading font-kanit text-2xl font-semibold">{profile.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{profile.specialization}</p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-muted">Navigate</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-muted">Reach out</p>

          {profile.social.email ? (
            <button
              onClick={handleCopy}
              className="mb-3 flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              {profile.social.email}
              {copied ? <Check size={14} className="text-accent-magenta" /> : <Copy size={14} />}
            </button>
          ) : null}

          {profile.social.phone ? (
            <p className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Phone size={14} />
              {profile.social.phone}
            </p>
          ) : null}

          <SocialLinks social={profile.social} variant="plain" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-3 px-6 py-6 text-xs text-muted md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
