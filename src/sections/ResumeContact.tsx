"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ResumeContact() {
  return (
    <div className="w-full text-white">
      {/* Contact Section (Warm Crimson Charcoal Ambience echoing Hero) */}
      <section
        id="contact"
        className="relative w-full bg-gradient-to-b from-[#140b0b] to-[#080808] py-16 md:py-24 border-t border-white/[0.08] overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8b0000]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 px-6 md:px-20 max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-8xl lg:text-[9.5rem] font-bold tracking-tighter mb-8 leading-[1.08] md:leading-[0.92]"
          >
            Let&apos;s build
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              something meaningful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
          >
            Have an interesting idea? <br className="hidden md:block" /> Let&apos;s
            collaborate and build something great together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <Button
              href="https://wa.me/6281547473104"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
