// src/pages/SolutionDetail.tsx
import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data";

const SolutionDetail: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();

  // Find the service based on the URL path
  const service = services.find(s => s.path.split("/").pop() === solutionId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  if (!service) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-emerald-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">
                  {service.zone} Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
                {service.title}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/10"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-widest">
                  <Icon className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                  System Integrated
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-600/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight uppercase">
                System Capabilities & <br />
                <span className="text-emerald-600">Technical Features</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Our {service.zone} solutions are engineered to handle industrial-scale utility complexities while providing
                a seamless user experience for both administrators and end-users. Access granular data,
                automate billing, and ensure 100% revenue recovery.
              </p>

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Key Solution Highlights</h4>
                </div>
                <div className="space-y-4">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Uptime", value: "99.9%", desc: "Cloud stability guaranteed." },
                { label: "Accuracy", value: "Class 1.0", desc: "Industrial grade measurement." },
                { label: "Support", value: "24/7", desc: "Expert technical assistance." },
                { label: "Secure", value: "AES-128", desc: "End-to-end encryption." },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm hover:border-emerald-500/30 transition-all"
                >
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">{stat.label}</p>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 dark:bg-emerald-600 p-12 md:p-20 rounded-[30px] text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Ready to modernize <br /> your utility system?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Our engineering team is ready to help you deploy a custom-tailored {service.zone} solution
              that fits your specific infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-gray-900 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/solutions"
                className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
              >
                View Other Systems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
