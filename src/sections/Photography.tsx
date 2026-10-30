"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { photography, photoCategories, type Photo } from "@/data/photography";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Photography() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // For "all", take 1 representative photo from each category (wedding, graduation, photoshoot, event)
  const filteredPhotos: Photo[] =
    activeCategory === "all"
      ? photoCategories
        .filter((cat) => cat.id !== "all")
        .map(
          (cat) =>
            photography.find((p) => p.category === cat.id && p.featured) ||
            photography.find((p) => p.category === cat.id)
        )
        .filter((p): p is Photo => Boolean(p))
      : photography.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="photography" className="py-14 md:py-24 px-6 md:px-20 max-w-[1600px] mx-auto bg-black text-white">


      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Through my lens.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans">
            Photography, moments, places, and stories from Bali.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-6 font-mono text-xs tracking-widest"
        >
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setLightboxIndex(null);
                setActiveCategory(cat.id);
              }}
              className={`uppercase transition-colors pb-1 border-b ${activeCategory === cat.id
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
          - "all" shows 4 representative photos (1 per category) in a clean 4-column grid
          - Specific categories use natural Masonry columns so both portrait (9:16 / 2:3) and landscape (16:9 / 3:2) photos keep their exact original aspect ratio without forced cropping */}
      {activeCategory === "all" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10 aspect-[3/4]"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[11px] text-neutral-300 uppercase tracking-[0.2em] mb-1">
                    {photo.category}
                  </p>
                  <h4 className="text-lg font-bold tracking-tight text-white">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3) }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10 break-inside-avoid"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                width={photo.width}
                height={photo.height}
                quality={90}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-xl font-bold tracking-tight">{photo.title}</h4>
                <p className="font-mono text-xs text-neutral-300 mt-1 uppercase tracking-widest">
                  {photo.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="absolute top-6 left-6 md:top-12 md:left-12 font-mono text-sm tracking-widest text-neutral-500">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredPhotos.length).padStart(2, "0")}
            </div>

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white hover:text-neutral-400 transition-colors z-10"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-neutral-400 transition-colors p-4 z-10"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-neutral-400 transition-colors p-4 z-10"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-6xl h-[70vh] md:h-[82vh] px-4 md:px-24 flex items-center justify-center">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                quality={95}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="absolute bottom-6 md:bottom-10 text-center">
              <h4 className="text-xl font-bold tracking-tight">
                {filteredPhotos[lightboxIndex].title}
              </h4>
              <p className="font-mono text-xs text-neutral-400 mt-1 uppercase tracking-widest">
                {filteredPhotos[lightboxIndex].category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
