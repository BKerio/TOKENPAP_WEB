// src/components/Solutions.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data";
import SectionHeader from "@/components/SectionHeader";

const Solutions: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="pt-32 pb-24 bg-gray-950 text-white border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">Enterprise Utility</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
              Our Systems
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              From conception to industrial deployment, we power your vision with smart, 
              scalable technological systems engineered for any infrastructure complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.3em] mb-4">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                    {service.title}
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    <p>{service.description}</p>
                    {service.highlights && (
                      <div className="pt-6">
                        <h3 className="text-xs font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest">
                          System Capabilities:
                        </h3>
                        <ul className="grid grid-cols-1 gap-4">
                          {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm font-medium">
                            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="pt-10">
                    <Link
                         to={service.path}
                         className="inline-flex items-center gap-3 bg-gray-900 dark:bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-sm text-xs font-black uppercase tracking-widest transition-all"
                       >
                         Learn More
                         <ArrowUpRight className="w-4 h-4" />
                       </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl border-4 border-white dark:border-gray-800"
                  />
                </motion.div>
              </div>

              {index < services.length - 1 && (
                <div className="border-t border-gray-200 dark:border-gray-800 my-20 mx-auto w-4/5" />
              )}
            </div>
          ))}
        </div>
      </section>

       <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-950 rounded-sm p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/5 blur-[100px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-emerald-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">Get Quick</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                Ready to Deploy<br />Your Smart Grid?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                Let's discuss how our engineering team can help you achieve 100% revenue 
                recovery and seamless utility command.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-emerald-900/20"
                >
                  Talk To Our Engineers
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 hover:bg-white hover:text-gray-900 text-white px-10 py-5 rounded-sm text-xs font-black uppercase tracking-widest transition-all backdrop-blur-sm"
                >
                  Explore Systems
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;