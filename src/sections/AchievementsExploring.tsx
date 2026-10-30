"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export function AchievementsExploring() {
  return (
    <div className="bg-[#121010] text-white w-full overflow-hidden border-y border-white/[0.07]">
      {/* Achievements Section */}
      <section className="py-14 md:py-24 px-6 md:px-20 max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-10 md:mb-12"
        >
          A few things I&apos;m proud of.
        </motion.h2>

        <div className="border-t border-white/10">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group relative border-b border-white/10 py-7 md:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300 cursor-default"
            >
              {/* Subtle hover line */}
              <div className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />

              {/* Left: Index & Title */}
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-300 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Right: Subtitle */}
              <div className="flex items-center justify-between md:justify-end pl-11 md:pl-0 gap-4">
                <span className="font-mono text-xs sm:text-sm tracking-[0.18em] text-neutral-300 uppercase">
                  {item.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
