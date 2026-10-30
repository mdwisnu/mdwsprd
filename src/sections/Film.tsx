"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { films, filmCategories, type FilmItem } from "@/data/film";
import { X, Play } from "lucide-react";

export function Film() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // For "all", pick 1 representative video from each category (wedding, event, film)
  const filteredFilms: FilmItem[] =
    activeCategory === "all"
      ? filmCategories
          .filter((cat) => cat.id !== "all")
          .map(
            (cat) =>
              films.find((f) => f.category === cat.id && f.featured) ||
              films.find((f) => f.category === cat.id)
          )
          .filter((f): f is FilmItem => Boolean(f))
      : films.filter((film) => film.category === activeCategory);

  const openVideo = (id: string) => setActiveVideo(id);
  const closeVideo = () => setActiveVideo(null);

  const activeFilmData = films.find((f) => f.id === activeVideo);

  return (
    <section
      id="film"
      className="relative w-full bg-[#111215] text-white py-14 md:py-24 border-y border-white/[0.07]"
    >
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Stories in motion.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans">
              Cinematic videography and short films.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-6 font-mono text-xs tracking-widest"
          >
            {filmCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveVideo(null);
                  setActiveCategory(cat.id);
                }}
                className={`uppercase transition-colors pb-1 border-b ${
                  activeCategory === cat.id
                    ? "text-white border-white"
                    : "text-neutral-500 border-transparent hover:text-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredFilms.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
              onClick={() => openVideo(film.id)}
              className="relative group cursor-pointer overflow-hidden bg-neutral-950 border border-white/10 aspect-video"
            >
              {film.thumbnail ? (
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <video
                  src={`${film.videoUrl}#t=2`}
                  preload="metadata"
                  muted
                  playsInline
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 2;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-white/60 transition-all duration-500 bg-black/30">
                  <Play className="w-5 h-5 ml-0.5 text-white" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-5 left-6 right-6 pointer-events-none">
                <p className="font-mono text-[11px] text-neutral-300 uppercase tracking-[0.2em] mb-1">
                  {film.category}
                </p>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {film.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && activeFilmData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-neutral-400 transition-colors z-50"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video flex items-center justify-center bg-black border border-white/10 shadow-2xl overflow-hidden"
            >
              {activeFilmData.videoUrl ? (
                <video
                  key={activeFilmData.videoUrl}
                  src={activeFilmData.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain outline-none"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900">
                  <p className="font-mono text-neutral-500 tracking-widest text-sm text-center px-4">
                    VIDEO COMING SOON
                  </p>
                </div>
              )}
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="mt-6 text-center px-6"
            >
              <h4 className="text-xl md:text-3xl font-bold tracking-tight">
                {activeFilmData.title}
              </h4>
              <p className="font-mono text-xs text-neutral-400 mt-2 uppercase tracking-widest">
                {activeFilmData.category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
