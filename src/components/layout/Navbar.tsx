"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#expertise" },
  { name: "PHOTOS", href: "#photography" },
  { name: "FILMS", href: "#film" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Background becomes visible after scrolling down a bit
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-10 md:px-20 py-3 md:py-4 max-w-[1600px] mx-auto w-full">
          <Link href="/" className="z-50 flex items-center group py-1">
            <span className="font-sans font-black text-xl md:text-2xl tracking-tighter italic uppercase text-white group-hover:text-neutral-300 transition-colors select-none">
              MDWSPRD
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-wide text-neutral-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-sm uppercase tracking-wider z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
