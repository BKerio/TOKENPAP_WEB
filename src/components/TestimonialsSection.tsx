// src/components/TestimonialsSection.tsx
import React, { useEffect, useState, useRef } from "react";
import { Star, Twitter, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as rawTestimonialsData } from "@/data";

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
      className={`h-4 w-4 ${
        i < clamped
          ? "text-amber-500 fill-current"
          : "text-gray-200 dark:text-gray-700"
      }`}
    />
  ));
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 }
    }
  })
};

const TestimonialsCarouselSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = (page % testimonialsData.length + testimonialsData.length) % testimonialsData.length;
  const testimonial = testimonialsData[activeIndex];

  const paginate = (newDirection: number) => {
    setIsAutoplay(false); // Stop autoplay once user interacts
    setPage([page + newDirection, newDirection]);
  };

  const handleDotClick = (targetIndex: number) => {
    setIsAutoplay(false);
    if (targetIndex === activeIndex) return;
    const newDirection = targetIndex > activeIndex ? 1 : -1;
    // Calculate the page shift needed to reach targetIndex
    const currentWrappedIndex = (page % testimonialsData.length + testimonialsData.length) % testimonialsData.length;
    const shift = targetIndex - currentWrappedIndex;
    setPage([page + shift, newDirection]);
  };

  // Autoplay Logic
  useEffect(() => {
    if (!isAutoplay) return;

    autoplayTimerRef.current = setInterval(() => {
      setPage((prev) => [prev[0] + 1, 1]);
    }, 5000);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, page]);

  // Determine platform icon deterministically based on index to prevent unstable renders
  const PlatformIcon = activeIndex % 2 === 0 ? Twitter : Linkedin;

  return (
    <section className="py-24 bg-[#FCFCFD] dark:bg-[#030712] overflow-hidden border-t border-gray-100 dark:border-gray-900 relative">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 rounded-full">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-4 tracking-tight">
          Real Impact. Real Results.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base">
          Trusted by leading institutions building modern intelligent systems.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        {/* Navigation Buttons (Desktop) */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:scale-110 active:scale-95 z-20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:scale-110 active:scale-95 z-20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Card Container */}
        <div className="relative overflow-hidden min-h-[380px] sm:min-h-[320px] md:min-h-[280px] flex items-center justify-center px-2 py-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/80 rounded-3xl p-8 md:p-10 shadow-xl dark:shadow-2xl/40 flex flex-col md:flex-row gap-8 items-center md:items-start relative"
              onMouseEnter={() => setIsAutoplay(false)}
            >
              {/* Reviewer Image & Info Column */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/3 flex-shrink-0">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-sm opacity-30 dark:opacity-50" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-md"
                  />
                </div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                  {testimonial.name}
                </h3>
                <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mt-1">
                  Verified Partner
                </p>
                <div className="flex gap-0.5 mt-3">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Quote Column */}
              <div className="flex-1 relative w-full">
                {/* Big Quote Mark in Background */}
                <span className="absolute -top-8 -left-4 text-7xl md:text-8xl font-serif text-indigo-500/10 dark:text-indigo-400/10 select-none pointer-events-none">
                  “
                </span>
                <blockquote className="relative text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {testimonial.message}
                </blockquote>
                
                <div className="absolute bottom-0 right-0">
                  <PlatformIcon className="h-5 w-5 text-gray-300 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <button
            onClick={() => paginate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarouselSection;