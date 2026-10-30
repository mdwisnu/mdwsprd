"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Snowfall from "react-snowfall";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88dvh] md:min-h-[92dvh] w-full overflow-hidden flex flex-col justify-center bg-[#070707] text-white pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16"
    >
      {/* Background Cinematic Ambience (No Photo) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Snowfall confined to Hero section and fades out on scroll */}
        <Snowfall
          color="rgba(255, 255, 255, 0.5)"
          snowflakeCount={65}
          radius={[0.5, 2.2]}
          speed={[0.4, 1.2]}
          wind={[-0.3, 0.5]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />

        {/* Subtle Animated Glowing Radial Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#8b0000] via-[#5c0000] to-transparent blur-[120px] opacity-30"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 right-[-10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-gradient-to-tl from-[#8b0000]/60 via-neutral-900 to-transparent blur-[140px] opacity-25"
        />

        {/* Central ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[300px] sm:h-[500px] bg-red-950/15 rounded-full blur-[160px]" />

        {/* Geometric Perspective Grid with radial fade */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 80%)",
          }}
        />

        {/* Vignette border */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707] opacity-80" />
      </motion.div>

      {/* Main Content Container - px-6 on mobile, px-20 on desktop */}
      <div className="relative z-10 w-full px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col justify-center items-start max-w-6xl">

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Category tag */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-400 uppercase mb-3 sm:mb-4">
              PHOTOGRAPHER · VIDEOGRAPHER · VIDEO EDITOR
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.05] sm:leading-[1.02] mb-4 md:mb-6">
              Capturing Moment <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Creating Stories
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-neutral-400 font-sans tracking-tight max-w-2xl leading-relaxed mb-6 md:mb-8 font-light">
              Crafting cinematic films, commercial visuals, and compelling narratives from capture to final cut. Based in Bali, Indonesia.
            </p>

            {/* Clean, purposeful CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6">
              <Button href="#photography" className="w-full sm:w-auto">
                LIHAT PORTOFOLIO
                <ArrowUpRight className="w-4 h-4 ml-1 inline" />
              </Button>
              <Button variant="outline" href="#contact" className="w-full sm:w-auto">
                CONTACT
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
