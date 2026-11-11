"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { designs, designCategories, type DesignItem } from "@/data/design";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function GraphicDesign() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // For "all", display the 3 featured Poster & Flyer items (Flyer 3, Flyer 4, QR)
  const filteredDesigns: DesignItem[] =
    activeCategory === "all"
      ? designs.filter((item) => item.featured)
      : designs.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextDesign = () => {
    if (lightboxIndex !== null && filteredDesigns.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredDesigns.length);
    }
  };

  const prevDesign = () => {
    if (lightboxIndex !== null && filteredDesigns.length > 0) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredDesigns.length) % filteredDesigns.length
      );
    }
  };

  return (
    <section
      id="design"
      className="py-14 md:py-24 px-6 md:px-20 max-w-[1600px] mx-auto bg-black text-white border-b border-white/[0.07]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Visual craft &amp; design.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans">
            Graphic design, posters, social media creatives, and visual identity.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-6 font-mono text-xs tracking-widest"
        >
          {designCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setLightboxIndex(null);
                setActiveCategory(cat.id);
              }}
              className={`uppercase transition-colors pb-1 border-b ${
                activeCategory === cat.id
                  ? "text-white border-white"
                  : "text-neutral-600 border-transparent hover:text-neutral-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Layout:
          - "all" shows 3 featured designs (Flyer 3, Flyer 4, QR) in a 3-column grid
          - "desain-sosmed" uses a 3-column horizontal grid so connected feeds line up side-by-side
          - "poster-flyer" uses natural Masonry columns */}
      {activeCategory === "all" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDesigns.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10 aspect-[4/5]"
            >
              <Image
                src={item.image}
                alt="Graphic Design Work"
                fill
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      ) : activeCategory === "desain-sosmed" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-start">
          {filteredDesigns.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3) }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10"
            >
              <Image
                src={item.image}
                alt="Graphic Design Work"
                width={item.width}
                height={item.height}
                quality={90}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {filteredDesigns.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3) }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10 break-inside-avoid"
            >
              <Image
                src={item.image}
                alt="Graphic Design Work"
                width={item.width}
                height={item.height}
                quality={90}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredDesigns[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="absolute top-6 left-6 md:top-12 md:left-12 font-mono text-sm tracking-widest text-neutral-500">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredDesigns.length).padStart(2, "0")}
            </div>

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white hover:text-neutral-400 transition-colors z-10"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button
              onClick={prevDesign}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-neutral-400 transition-colors p-4 z-10"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
              onClick={nextDesign}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-neutral-400 transition-colors p-4 z-10"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-6xl h-[75vh] md:h-[85vh] px-4 md:px-24 flex items-center justify-center">
              <Image
                src={filteredDesigns[lightboxIndex].image}
                alt="Graphic Design Work"
                fill
                quality={95}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
