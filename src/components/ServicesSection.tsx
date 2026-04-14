// src/components/ServicesSection.tsx
import React, { useState } from "react";
import {  ArrowUpRight, ChevronDownCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data";
import SectionHeader from "./SectionHeader";

const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Mesh Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-pattern-services" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-500" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mesh-pattern-services)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto w-full max-w-2xl lg:max-w-none bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50">
          <SectionHeader 
            title="Our Solutions" 
            subtitle="TokenPap serves a wide spectrum of customers — from individual landlords to national utilities. Explore tailored prepaid and smart metering solutions built for your sector."
            align="center"
          />

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = expandedIndex === index;
              return (
                <div key={service.title} className="border-b border-gray-200/60 dark:border-gray-700/60 last:border-0 pb-3 group">
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`content-${index}`}
                    className="w-full flex items-center justify-between py-2 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className="flex-shrink-0 text-gray-500 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                      )}
                      <h3 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        {service.title}
                      </h3>
                    </div>
                    <span className={`transform transition-transform duration-300 border border-gray-200 dark:border-gray-700 rounded-full p-1 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 group-hover:border-gray-300 dark:group-hover:border-gray-500 ${isOpen ? 'rotate-180 bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-500' : ''}`}>
                      <ChevronDownCircleIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </span>
                  </button>
                  <div
                    id={`content-${index}`}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className={`pt-2 text-gray-700 dark:text-gray-300 text-sm md:text-base-3xl ${isOpen ? 'pl-14 pr-2' : 'px-2'}`}>
                      <p className="mb-4">{service.description}</p>
                      <Link
                         to={service.path}
                         className="group inline-flex items-center px-6 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                       >
                         Learn More
                         <span
                           className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-white transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:animate-bounce"                   
                         >
                           <ArrowUpRight className="w-4 h-4" />
                         </span>
                       </Link>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
