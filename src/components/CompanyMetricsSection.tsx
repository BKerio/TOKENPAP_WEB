// src/components/CompanyMetricsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Users, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CompanyMetricsSection: React.FC = () => {
  const stats = [
    {
      label: "Smart Meters Deployed",
      value: "50,000+",
      icon: Zap,
      desc: "Providing reliable utility management across the continent.",
    },
    {
      label: "Enterprise Customers",
      value: "1,200+",
      icon: Users,
      desc: "Trusted by property managers, utilities, and organizations.",
    },
    {
      label: "Innovation Hubs",
      value: "10+",
      icon: Globe,
      desc: "Operating in major tech centers to drive local utility innovation.",
    },
    {
      label: "Success Probability",
      value: "99.9%",
      icon: Target,
      desc: "Guaranteed uptime and revenue recovery for our partners.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Narrative Side (Acrel inspired) */}
          <div className="lg:col-span-12">
             <SectionHeader 
                title="Engineering the Future of Utility Management" 
                subtitle="TokenPap is a pioneer enterprise that integrates advanced informatization with industrial-grade utility hardware. Based in the heart of the Silicon Savannah, we focus on the research, production, and service of systemic energy efficiency solutions."
                align="left"
             />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="prose prose-sm dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Founded with a mission to eliminate utility waste and maximize revenue recovery, 
                <strong> TokenPap</strong> has evolved into a high-tech powerhouse. We provide 
                end-to-end solutions—from precision-engineered smart meters and sensors to 
                cloud-based utility management platforms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By combining IoT hardware with AI-driven analytics, we help users realize 
                data-driven visual management, ensuring electrical and water safety while 
                optimizing resource efficiency. Our platforms act as a silent sentinel for your 
                infrastructure, providing 24/7 monitoring and predictive command.
              </p>
            </div>
            
            <div className="pt-4">
               <a 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-emerald-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all group"
               >
                 Learn more about our mission
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>

          {/* RIGHT: Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="mb-6 p-3 w-fit rounded-xl bg-emerald-600/5 dark:bg-emerald-600/10 border border-emerald-600/10">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2 group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-4">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyMetricsSection;
