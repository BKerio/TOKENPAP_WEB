// src/components/GetStartedSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GetStartedSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Animated background grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(16,185,129,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-500 mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-amber-500 inline-block" />
            Quick Access Portal
            <span className="w-6 h-px bg-amber-500 inline-block" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
            Get Started
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Manage your account, top up utility tokens, or shop for smart meters — all in seconds.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            id="get-started-btn"
            href="https://app.tokenpap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              boxShadow: "0 0 32px rgba(16,185,129,0.30), 0 4px 16px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "0 0 48px rgba(16,185,129,0.50), 0 8px 24px rgba(0,0,0,0.25)";
              el.style.transform = "translateY(-2px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "0 0 32px rgba(16,185,129,0.30), 0 4px 16px rgba(0,0,0,0.15)";
              el.style.transform = "translateY(0) scale(1)";
            }}
          >
            Get Started
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-gray-200 dark:border-white/5 pt-8 w-full"
        >
          <p className="text-xs text-gray-400 dark:text-gray-600 tracking-wider uppercase">
            Need help? —{" "}
            <a
              href="/contact"
              className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors underline underline-offset-4"
            >
              Talk to support
            </a>
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All services operational
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
