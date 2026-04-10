// src/components/HeroSection.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { heroSlides } from "@/data";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  type HeroSlide = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    overrideLink2?: {
      text: string;
      to: string;
    }
  }


  const slides: HeroSlide[] = heroSlides;


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide]; // Use 'slides[currentSlide]'
  const secondButtonText = currentSlideData.overrideLink2 ? currentSlideData.overrideLink2.text : "Reach Us";
  const secondButtonPath = currentSlideData.overrideLink2 ? currentSlideData.overrideLink2.to : "/contact";

  return (
    <section className="relative h-[65vh] md:h-[70vh] min-h-[450px] max-h-[700px] w-full overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => ( // Use 'slides.map'
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Slide Counter — Technical Layout */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col items-end border-r-4 border-emerald-600 pr-4">
          <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Phase</span>
          <div className="text-4xl font-black text-white leading-none">
            0{currentSlide + 1}
          </div>
          <div className="h-[2px] w-12 bg-emerald-600 mt-1" />
        </div>
      </div>

      {/* Bottom Left Progress Bar - (Commented out as it was empty in original) */}

      {/* Hero Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-20">
        <div className="max-w-4xl text-left">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-normal text-white mb-4 drop-shadow-lg leading-tight">
            {currentSlideData.title} {/* Use 'currentSlideData' */}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg">
            {currentSlideData.subtitle} {/* Use 'currentSlideData' */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-emerald-900/20"
            >
              Our Expertise
              <ArrowDownRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondButtonPath}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-gray-900 border border-white/30 font-black uppercase tracking-[0.2em] text-xs transition-all backdrop-blur-sm"
            >
              {secondButtonText}
              <ArrowDownRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down — Technical */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: "smooth" })}
      >
        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-4 group-hover:text-amber-600 transition-colors">
          SCROLL
        </span>
        <div className="relative h-16 w-[1px] bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-amber-500"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;