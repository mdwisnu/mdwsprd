"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#111010] text-white py-14 md:py-24 border-y border-white/[0.07] overflow-hidden"
    >
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b0000]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-8 md:gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter"
            >
              A little about me.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6 md:gap-8 text-lg sm:text-xl md:text-2xl text-neutral-400 font-sans font-light leading-relaxed max-w-2xl"
            >
              <p>
                Saya adalah <span className="text-white">fotografer</span>,{" "}
                <span className="text-white">videografer</span>, dan{" "}
                <span className="text-white">video editor</span> berbasis di Bali yang berfokus pada penciptaan karya visual sinematik dan bercerita secara emosional.
              </p>
              <p>
                Dari mengabadikan foto komersial dan potret editorial hingga menyutradarai film pendek serta memoles color grading dan ritme di ruang editing, saya menikmati proses menyatukan{" "}
                <span className="text-white">estetika visual & cerita yang kuat</span>.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4 border-t border-white/10 pt-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-bold tracking-tighter">21</span>
                <span className="font-mono text-xs tracking-widest text-neutral-500 mt-2 uppercase">Years Old</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter">BALI</span>
                <span className="font-mono text-xs tracking-widest text-neutral-500 mt-2 uppercase">Indonesia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter">3+</span>
                <span className="font-mono text-xs tracking-widest text-neutral-500 mt-2 uppercase">Visual Disciplines</span>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-5 relative h-[350px] sm:h-[450px] md:h-[600px] w-full group overflow-hidden border border-white/10"
          >
            <Image
              src="/images/aboutfoto.jpeg"
              alt="Wisnu Pradnya"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
