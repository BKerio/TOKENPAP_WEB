// src/components/SectionHeader.tsx
import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: string; // e.g. "bg-emerald-600" or "bg-red-600"
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  accentColor = "bg-emerald-600",
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${isCenter ? "text-center" : "text-left"}`}
    >
      <div className={`flex flex-col ${isCenter ? "items-center" : "items-start"} gap-3`}>
        {/* Accent Line + Tagline */}
        <div className="flex items-center gap-3">
          <div className={`h-[2px] w-8 ${accentColor}`} />
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${accentColor.replace("bg-", "text-")}`}>
            Enterprise Utility
          </span>
          {isCenter && <div className={`h-[2px] w-8 ${accentColor}`} />}
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;
