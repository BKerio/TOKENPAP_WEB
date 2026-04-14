import React, { useLayoutEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { partnersList } from "@/data";
import SectionHeader from "./SectionHeader";

const PartnersSection: React.FC = () => {
  const itemWidth = 140; // Reduced width of each partner card
  const gap = 16; // Reduced gap between cards
  const cardFullWidth = itemWidth + gap;

  // Double the list for seamless infinite loop
  const extendedPartners = partnersList.concat(partnersList);
  const totalOriginalWidth = partnersList.length * cardFullWidth;

  const controls = useAnimation();
  const cycleDuration = 20; // In seconds

  // Start infinite loop animation
  const startAnimation = () => {
    controls.start({
      x: [0, -totalOriginalWidth],
      transition: { duration: cycleDuration, ease: "linear", repeat: Infinity, repeatType: "loop" }
    });
  };

  useLayoutEffect(() => {
    startAnimation();
  }, []);

  // Pause/resume on hover
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => startAnimation();

  return (
    <section className="relative py-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Mesh Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-500" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Our Trusted Partners"
          subtitle="Collaborating with industry-leading technology providers to deliver cutting-edge enterprise solutions."
          align="center"
        />

        <div
          className="relative overflow-hidden py-2 px-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ height: itemWidth + 20 }}
        >
          <motion.div
            className="flex items-center"
            style={{ width: `${totalOriginalWidth * 2}px`, gap: `${gap}px` }}
            animate={controls}
          >
            {extendedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                style={{ width: itemWidth, marginRight: gap, flexShrink: 0 }}
                className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-full h-24 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain max-w-[85%] max-h-[85%] relative z-10"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Removed redundant text block for cleaner Acrel-like layout */}

      </div>
    </section>
  );
};

export default PartnersSection;
