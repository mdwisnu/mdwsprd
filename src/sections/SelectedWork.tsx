"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative w-full bg-[#130d0d] text-white py-14 md:py-24 border-y border-white/[0.07] overflow-hidden"
    >
      {/* Subtle deep crimson ambient glow matching Inferno Creative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#8b0000]/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Businesses I run.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-sans max-w-2xl leading-relaxed">
            Creative businesses and services that I currently manage and operate.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${!isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center group`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col">
                  {(project.number || project.category) && (
                    <div className="font-mono text-xs md:text-sm tracking-widest text-neutral-500 mb-4 flex items-center gap-4">
                      {project.number && <span>{project.number}</span>}
                      {project.number && project.category && (
                        <span className="w-8 h-[1px] bg-neutral-700" />
                      )}
                      {project.category && (
                        <span className="uppercase">{project.category}</span>
                      )}
                    </div>
                  )}

                  <Link href={project.link || `#work`}>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 transition-transform duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Mobile-only Image Container */}
                  <Link
                    href={project.link || `#work`}
                    className="lg:hidden w-48 h-48 sm:w-56 sm:h-56 block relative overflow-hidden rounded-full mx-auto flex-shrink-0 mb-8 mt-2 bg-black/60 border border-white/10"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 224px, 300px"
                      className="object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Link>

                  <p className="text-neutral-400 text-lg leading-relaxed lg:mb-6 transition-all duration-500 opacity-85 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>

                {/* Desktop-only Image Container */}
                <Link
                  href={project.link || `#work`}
                  className="hidden lg:block w-full lg:w-1/3 relative overflow-hidden aspect-square rounded-full mx-auto lg:mx-0 flex-shrink-0 bg-black/50 border border-white/10"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Arrow indicator on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10 pointer-events-none">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
