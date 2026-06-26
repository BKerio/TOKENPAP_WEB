// src/components/TestimonialsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Star, Twitter, Linkedin } from "lucide-react";
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

const formatMessage = (message: string) => {
  return <span>{message}</span>;
};

const renderStars = (count: number) => {
  const clamped = Math.max(0, Math.min(5, count));
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3 w-3 ${
        i < clamped
          ? "text-amber-500 fill-current"
          : "text-gray-200 dark:text-gray-700"
      }`}
    />
  ));
};

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  active?: boolean;
  index: number;
}> = ({ testimonial, active }) => {
  const PlatformIcon = Math.random() > 0.5 ? Twitter : Linkedin;

  return (
    <div
      className={`min-w-[320px] max-w-[360px] p-6 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 shadow-sm transition-all duration-500
      ${active ? "scale-105 shadow-xl" : "scale-95 opacity-70"}`}
    >
      <PlatformIcon className="absolute top-6 right-6 h-4 w-4 text-gray-300" />

      <div className="flex gap-0.5 mb-4">{renderStars(testimonial.rating)}</div>

      <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        {formatMessage(testimonial.message)}
      </blockquote>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-900"
        />

        <div>
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-[10px] text-gray-500">Verified Partner</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const extended = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 360;
    container.scrollTo({
      left: activeIndex * cardWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section className="py-24 bg-[#FCFCFD] dark:bg-[#030712] overflow-hidden border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
          Real Impact. Real Results.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Trusted by institutions building modern intelligent systems.
        </p>
      </div>

      <div className="relative">
        {/* edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10" />

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-20 snap-x snap-mandatory scrollbar-hide"
        >
          {extended.map((t, i) => (
            <div key={`${t.id}-${i}`} className="snap-center flex-shrink-0">
              <TestimonialCard
                testimonial={t}
                index={i}
                active={i % testimonialsData.length === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex
                ? "w-6 bg-gray-900 dark:bg-white"
                : "w-2 bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarouselSection;