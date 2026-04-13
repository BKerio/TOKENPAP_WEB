// src/components/TestimonialsSection.tsx
import React from "react";
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

// Highlight words/phrases inspired by ferryman.io
const HIGHLIGHT_MAP: Record<string, string> = {
  "exceeded our expectations": "bg-yellow-100 dark:bg-yellow-900/30",
  "outstanding results": "bg-yellow-100 dark:bg-yellow-900/30",
  "remarkable": "bg-yellow-100 dark:bg-yellow-900/30",
  "seamless": "bg-emerald-100 dark:bg-emerald-900/20",
  "modernize": "bg-blue-100 dark:bg-blue-900/20",
  "technical expertise": "bg-indigo-100 dark:bg-indigo-900/20",
  "efficiency": "bg-yellow-100 dark:bg-yellow-900/30",
  "professionalism": "bg-purple-100 dark:bg-purple-900/20",
  "transformed": "bg-blue-100 dark:bg-blue-900/20",
  "future-ready": "bg-emerald-100 dark:bg-emerald-900/20",
  "reliable": "bg-amber-100 dark:bg-amber-900/20",
};

const formatMessage = (message: string) => {
  let formatted = message;
  Object.keys(HIGHLIGHT_MAP).forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, "gi");
    formatted = formatted.replace(
      regex,
      `<mark class="px-0.5 rounded-sm bg-transparent font-semibold border-b-2 border-yellow-400/50 dark:border-yellow-500/50">$1</mark>`
    );
  });
  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
};

const renderStars = (count: number) => {
  const clamped = Math.max(0, Math.min(5, count));
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3 w-3 ${i < clamped ? "text-amber-500 fill-current" : "text-gray-200 dark:text-gray-700"}`}
    />
  ));
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const PlatformIcon = index % 2 === 0 ? Twitter : Linkedin;

  return (
    <div className="p-6 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 shadow-sm hover:shadow-xl transition-all duration-300 relative group mb-6">
      <PlatformIcon className="absolute top-6 right-6 h-4 w-4 text-gray-200 dark:text-gray-800 group-hover:text-blue-500/30 transition-colors" />
      <div className="flex gap-0.5 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        {formatMessage(testimonial.message)}
      </blockquote>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-50 dark:ring-gray-900 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm"
        />
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
            {testimonial.name}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Verified Partner</span>
            <div className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="text-[10px] text-blue-500 dark:text-blue-400">@tokenpap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarqueeColumn: React.FC<{
    testimonials: Testimonial[];
    direction?: "up" | "down";
    duration?: number;
    className?: string;
  }> = ({ testimonials, direction = "up", duration = 40, className = "" }) => {
    const animationClass = direction === "up" ? "animate-marquee-up" : "animate-marquee-down";
    
    return (
      <div className={`flex flex-col gap-6 overflow-hidden ${className}`}>
        {/* Style tag for custom marquee animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-up {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes marquee-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
          .animate-marquee-up {
            animation: marquee-up ${duration}s linear infinite;
          }
          .animate-marquee-down {
            animation: marquee-down ${duration}s linear infinite;
          }
        `}} />
        
        <div 
          className={`flex flex-col gap-6 ${animationClass} hover:[animation-play-state:paused] h-fit`}
        >
          {/* Duplicate set for seamless looping */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    );
  };

const TestimonialsSection: React.FC = () => {
  // Split data into 3 chunks for the columns
  const col1 = testimonialsData.filter((_, i) => i % 3 === 0);
  const col2 = testimonialsData.filter((_, i) => i % 3 === 1);
  const col3 = testimonialsData.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative py-24 bg-[#FCFCFD] dark:bg-[#030712] overflow-hidden border-t border-gray-100 dark:border-gray-900">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
            <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight mb-4">
              Real Impact. Real Results.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Join the elite institutions across Africa leveraging TokenPap's intelligent utility systems.
            </p>
        </div>

        {/* The Parallax Wall with Edge Fading */}
        <div 
          className="relative h-[800px] overflow-hidden" 
          style={{ 
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1: Down */}
            <MarqueeColumn testimonials={col1} direction="down" duration={50} />
            
            {/* Column 2: Up (Hidden on small mobile, shown on md+) */}
            <MarqueeColumn testimonials={col2} direction="up" duration={45} className="hidden md:flex" />
            
            {/* Column 3: Up (Hidden on tablet, shown on lg+) */}
            <MarqueeColumn testimonials={col3} direction="up" duration={55} className="hidden lg:flex" />
          </div>
        </div>

        {/* Global Trust Meter */}
        <div className="mt-20 flex flex-col items-center justify-center gap-6">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-full py-2 px-6 flex items-center gap-3 border border-gray-800 shadow-2xl">
                <div className="flex -space-x-3">
                    {testimonialsData.slice(0, 4).map((t) => (
                    <img 
                        key={t.id} 
                        src={t.image} 
                        className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-800" 
                        alt="" 
                    />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-gray-900 flex items-center justify-center text-[10px] font-black text-white">
                    +15
                    </div>
                </div>
                <div className="h-6 w-px bg-gray-500" />
                <p className="text-white text-sm font-bold tracking-tight">
                    Trusted by <span className="text-red-500">500+</span> Customers
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
