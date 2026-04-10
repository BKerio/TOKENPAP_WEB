// src/components/TestimonialsSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials as rawTestimonialsData } from "@/data";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  id: number | string;
  message: string;
  name: string;
  rating: number;
  image: string;
  title?: string;
}

const testimonialsData: Testimonial[] = rawTestimonialsData.map((t, i) => ({
  ...t,
  id: t.id ?? i,
}));

const renderStars = (count: number) => {
  const clamped = Math.max(0, Math.min(5, count));
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3.5 w-3.5 ${i < clamped ? "text-amber-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
    />
  ));
};

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);

  // Show 3 cards at a time on desktop, 1 on mobile
  const CARDS_VISIBLE = 3;
  const total = testimonialsData.length;

  useEffect(() => {
    if (!total) return;
    const timer = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  if (!total) return null;

  const handlePrev = () => {
    setDir(-1);
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  };
  const handleNext = () => {
    setDir(1);
    setCurrent((c) => (c + 1) % total);
  };

  // Get indices for the 3 visible cards
  const visibleIndices = Array.from({ length: CARDS_VISIBLE }, (_, i) => (current + i) % total);

  const slipVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 280, damping: 28 } },
    exit: (d: number) => ({ opacity: 0, x: d < 0 ? 60 : -60, transition: { duration: 0.2 } }),
  };

  return (
    <section className="relative py-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-pattern-testimonials" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-500" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mesh-pattern-testimonials)" />
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-48 bg-red-600/10 dark:bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Clients Voice" 
          subtitle="Trusted by leading organizations across the continent. Our systems empower growth through reliable utility management."
          align="center"
        />

        {/* Cards Area */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            <AnimatePresence custom={dir} mode="popLayout">
              {visibleIndices.map((idx, pos) => {
                const d = testimonialsData[idx];
                const isCenter = pos === 1;
                return (
                  <motion.div
                    key={`${d.id}-${pos}`}
                    custom={dir}
                    variants={slipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`relative flex flex-col bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 border transition-all duration-300 shadow-md
                      ${isCenter
                        ? "border-red-200 dark:border-red-900/60 shadow-lg shadow-red-500/10 scale-[1.02]"
                        : "border-gray-100 dark:border-gray-700/60 opacity-80"
                      }`}
                  >
                    {/* Big Quote */}
                    <Quote className="absolute top-3 right-4 w-10 h-10 text-red-500/10 dark:text-red-400/10 rotate-180" />

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">{renderStars(d.rating)}</div>

                    {/* Quote */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-grow mb-4">
                      "{d.message}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/50">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-red-100 dark:ring-red-900/40"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{d.name}</p>
                        {d.title && <p className="text-xs text-gray-500 dark:text-gray-400">{d.title}</p>}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <AnimatePresence custom={dir} mode="wait">
              {(() => {
                const d = testimonialsData[current];
                return (
                  <motion.div
                    key={d.id}
                    custom={dir}
                    variants={slipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 border border-gray-100 dark:border-gray-700/60 shadow-lg"
                  >
                    <Quote className="absolute top-3 right-4 w-10 h-10 text-red-500/10 dark:text-red-400/10 rotate-180" />
                    <div className="flex gap-0.5 mb-3">{renderStars(d.rating)}</div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-4">"{d.message}"</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                      <img src={d.image} alt={d.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-red-100 dark:ring-red-900/40" loading="lazy" />
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{d.name}</p>
                        {d.title && <p className="text-xs text-gray-500 dark:text-gray-400">{d.title}</p>}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-100 dark:border-gray-600 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-100 dark:border-gray-600 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
