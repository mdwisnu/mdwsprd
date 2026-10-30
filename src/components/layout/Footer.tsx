"use client";

import { socials } from "@/data/social";
import { ArrowUp, ArrowUpRight, Globe, Mail, MessageCircle, MapPin } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "whatsapp":
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services & Edit", href: "#expertise" },
    { label: "Photography", href: "#photography" },
    { label: "Videography & Film", href: "#film" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#060606] text-white pt-10 md:pt-14 pb-10 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-20 flex flex-col gap-10 md:gap-14">

        {/* Grid: Bio / Nav / Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

          {/* Col 1: Bio & Location */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              STUDIO & ORIGIN
            </div>
            <p className="text-sm md:text-base text-neutral-400 font-sans leading-relaxed max-w-sm">
              Dedicated to capturing intentional stills, cinematic films, and rhythmic edits with emotional depth and visual clarity.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Denpasar, Bali — Indonesia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1">
              DIRECTORY
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-200 uppercase font-mono flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social Connections */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1">
              CONNECT
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 text-neutral-300 group-hover:text-white">
                    <span className="text-neutral-400 group-hover:text-white transition-colors">
                      {getSocialIcon(social.label)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider">{social.label}</span>
                      {social.handle && (
                        <span className="text-[10px] text-neutral-500 font-mono">{social.handle}</span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-white/10 text-xs text-neutral-500 font-mono">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 I MADE WISNU PRADNYA YOGA</span>
            <span className="hidden sm:inline"></span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all uppercase tracking-wider text-[11px] group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-neutral-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
