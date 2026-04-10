import React from "react";
import { motion } from "framer-motion";
import { Orbit } from "lucide-react";
import { ecosystemCompanies, cardHoverVariant } from "@/data/index";
import { Link } from "react-router-dom";

const DigitalEcosystemSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="flex items-center justify-center my-8">
            <div className="relative inline-flex items-center rounded-full px-2 py-1 border border-white/10 bg-black/50 shadow-md backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border border-white/5 blur-sm opacity-30 pointer-events-none" />
              <div className="relative inline-flex items-center bg-gray-400 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-inner">
                <Orbit className="h-6 w-6 mr-3 text-blue-700" />
                <span>Our Digital Ecosystem</span>
              </div>
            </div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We collaborate with specialized firms leading innovation in their domains — powering future-ready solutions together.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-12">
          {ecosystemCompanies.map((company, index) => {
            const isSignverse = company.name === "Signverse";
            const isPrecision = company.name === "Precision Drones";

            return (
              <motion.div
                key={index}
                variants={cardHoverVariant}
                initial="rest"
                whileHover="hover"
                className="group relative flex-1 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden p-10 transition-all duration-500"
              >
                {/* Soft Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${company.themeColor}33 0%, transparent 70%)`,
                  }}
                />

                <div className="flex flex-col h-full justify-between">
                  {/* Logo & Company Info */}
                  <div className="flex items-center mb-12 flex-col sm:flex-row text-center sm:text-left">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white mx-auto sm:mx-0 flex-shrink-0 flex items-center justify-center shadow-md">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="object-contain w-24 h-24 sm:w-full sm:h-full mx-auto"
                      />
                    </div>
                    <div className="mt-6 sm:mt-0 sm:ml-8">
                      <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                      <p className="text-lg sm:text-xl font-medium" style={{ color: company.themeColor }}>{company.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-serif text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {company.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {/* Internal navigation for Learn More */}
                    <Link
                      to={company.learnMoreUrl}
                      className={`px-5 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 transform
                        ${
                          isSignverse
                            ? "bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
                            : isPrecision
                            ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400"
                            : "bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
                        }
                        text-white hover:scale-105 hover:shadow-xl active:scale-95`}
                    >
                      Learn More
                    </Link>

                    {/* External navigation for Visit Website */}
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 transform
                        ${
                          isSignverse
                            ? "bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600"
                            : isPrecision
                            ? "bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-600"
                            : "bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
                        }
                        text-white hover:scale-105 hover:shadow-xl active:scale-95`}
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalEcosystemSection;
