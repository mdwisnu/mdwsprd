"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { ArrowUpRight } from "lucide-react";

export function Skills() {
  return (
    <section id="expertise" className="py-14 md:py-24 px-6 md:px-20 max-w-[1600px] mx-auto bg-black text-white">



      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            What I do.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans font-light leading-relaxed">
            Specialized visual services spanning photography, cinematic videography, and post-production video editing.
          </p>
        </motion.div>

      </div>

      {/* Editorial Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between bg-[#080808] hover:bg-[#0d0d0d] border border-white/10 hover:border-white/25 p-7 sm:p-9 transition-all duration-500"
          >
            {/* Animated Top Border Line (matches Experience & Navbar aesthetic) */}
            <div className="absolute top-0 left-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full" />

            <div>
              {/* Title & Description */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {category.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
                {category.description}
              </p>

              {/* Clean Editorial Capability List */}
              <div className="mb-8">
                <div className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.2em] mb-3">
                  Selected Capabilities
                </div>
                <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="py-2.5 flex items-center justify-between text-xs sm:text-sm font-sans text-neutral-300 group-hover:text-white transition-colors duration-300"
                    >
                      <span>{item}</span>
                      <span className="w-1.5 h-[1px] bg-neutral-700 group-hover:w-3 group-hover:bg-white transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Minimal Monochrome Footer */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono tracking-wider text-neutral-500 uppercase">
              {category.tags.map((tag, tIdx) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <span>{tag}</span>
                  {tIdx < category.tags.length - 1 && (
                    <span className="text-neutral-700">/</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
