// src/components/ServicesSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { services, CityMapImage } from "@/data";
import SectionHeader from "./SectionHeader";

type Service = (typeof services)[number];

// ─── Zone Badge ────────────────────────────────────────────────────────────────
const ZoneBadge: React.FC<{
  service: Service;
  isActive: boolean;
  onClick: () => void;
  positionOverride?: { top: string; left: string };
}> = ({ service, isActive, onClick, positionOverride }) => {
  const Icon = service.icon;
  const pos = positionOverride ?? service.position;
  return (
    <motion.button
      onClick={onClick}
      aria-label={`View ${service.zone} services`}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      animate={isActive ? { scale: 1.15 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={`
        flex items-center gap-1.5 px-2.5 py-1.5 rounded-full select-none
        font-bold text-white whitespace-nowrap border-2 shadow-lg
        transition-colors duration-150 cursor-pointer
        ${isActive
          ? "bg-green-500 border-white shadow-green-500/60"
          : "bg-green-500/90 border-green-300/60 hover:bg-green-500"
        }
      `}
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/25 flex-shrink-0">
        <Icon className="w-3 h-3 text-white" strokeWidth={2.5} />
      </span>
      <span className="text-[11px] sm:text-xs leading-none">{service.zone}</span>
    </motion.button>
  );
};

// ─── Detail Card ───────────────────────────────────────────────────────────────
const DetailCard: React.FC<{
  service: Service;
  onClose: () => void;
  variant: "panel" | "card";
}> = ({ service, onClose, variant }) => {
  const Icon = service.icon;

  const panelCls =
    "absolute top-0 right-0 h-full w-[340px] z-30 flex flex-col overflow-y-auto " +
    "bg-white/95 dark:bg-slate-900/97 backdrop-blur-xl " +
    "border-l border-gray-200 dark:border-white/10";

  const cardCls =
    "w-full rounded-2xl border shadow-xl flex flex-col overflow-hidden " +
    "bg-white dark:bg-slate-800/90 " +
    "border-gray-200 dark:border-white/10";

  return (
    <motion.div
      key={service.zone}
      initial={variant === "panel" ? { opacity: 0, x: "100%" } : { opacity: 0, y: 16 }}
      animate={variant === "panel" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      exit={variant === "panel" ? { opacity: 0, x: "100%" } : { opacity: 0, y: 16 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={variant === "panel" ? panelCls : cardCls}
    >
      {/* ── Header ── */}
      <div className="relative p-4 pb-3 flex-shrink-0 border-b border-gray-100 dark:border-white/10">
        {/* Green accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500 rounded-l" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full
            bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20
            transition-colors"
        >
          <X className="w-3.5 h-3.5 text-gray-600 dark:text-white" />
        </button>

        {/* Zone pill */}
        <div className="flex items-center gap-2 mb-2.5 pl-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
            bg-green-500/10 dark:bg-green-500/15
            border border-green-500/30 dark:border-green-500/30
            text-green-600 dark:text-green-400
            text-[10px] font-bold uppercase tracking-wider">
            <Icon className="w-2.5 h-2.5" strokeWidth={2.5} />
            {service.zone}
          </span>
        </div>

        <h3 className="text-base font-black leading-tight pr-7 pl-1
          text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-green-600 dark:text-green-400 text-[11px] font-semibold mt-0.5 pl-1">
          {service.subtitle}
        </p>
      </div>

      {/* ── Body ── */}
      <div className="p-4 flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {service.description}
        </p>

        {/* Highlights */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2.5
            flex items-center gap-2 text-gray-800 dark:text-white">
            <span className="h-[2px] w-3 bg-green-500 inline-block" />
            Key Capabilities
          </h4>
          <ul className="space-y-1.5">
            {service.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.22 }}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          to={service.path}
          className="group inline-flex items-center justify-center gap-2 mt-1
            px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400
            text-white font-bold text-sm shadow-md shadow-green-500/25
            transition-all duration-200 hover:shadow-green-400/40 hover:-translate-y-0.5"
        >
          Explore {service.zone} Solutions
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};

// ─── Zone Nav Pills ─────────────────────────────────────────────────────────────
const ZoneNavPills: React.FC<{
  active: Service | null;
  onSelect: (s: Service) => void;
}> = ({ active, onSelect }) => (
  <div className="flex flex-wrap gap-2 justify-center px-4 py-3
    border-t
    bg-gray-50/80 dark:bg-slate-900/70
    border-gray-200 dark:border-white/10
    backdrop-blur-md">
    {services.map((service) => {
      const Icon = service.icon;
      const isAct = active?.zone === service.zone;
      return (
        <button
          key={service.zone}
          onClick={() => onSelect(service)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-full
            text-xs font-semibold transition-all duration-200 border
            ${isAct
              ? "bg-green-500 text-white border-green-400 shadow-md shadow-green-500/30"
              : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-800 dark:hover:text-white"
            }
          `}
        >
          <Icon className="w-3 h-3" strokeWidth={2.5} />
          {service.zone}
        </button>
      );
    })}
  </div>
);

// ─── Hint Bubble ────────────────────────────────────────────────────────────────
const HintBubble: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: mobile ? 6 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`
        absolute z-20 flex items-center gap-1.5 rounded-full
        bg-black/55 backdrop-blur-sm border border-white/20 text-white
        ${mobile
          ? "bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[11px]"
          : "bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 text-xs"
        }
      `}
    >
      {mobile
        ? <><MapPin className="w-3 h-3 text-green-400" /> Tap a zone badge to explore</>
        : <><ChevronRight className="w-3.5 h-3.5 text-green-400" /> Click any zone badge to explore TokenPap solutions</>
      }
    </motion.div>
  </AnimatePresence>
);

// ─── Main Section ───────────────────────────────────────────────────────────────
const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleBadgeClick = (s: Service) =>
    setActiveService((prev) => (prev?.zone === s.zone ? null : s));

  const handleClose = () => setActiveService(null);

  // Shared map overlay tint — lighter in light mode, darker in dark mode
  const overlayClass = "absolute inset-0 bg-black/15 dark:bg-black/25";

  // Mobile badges use mobilePosition; desktop badges use position
  const MobileBadges = services.map((s) => (
    <ZoneBadge
      key={s.zone}
      service={s}
      isActive={activeService?.zone === s.zone}
      onClick={() => handleBadgeClick(s)}
      positionOverride={s.mobilePosition}
    />
  ));

  const DesktopBadges = services.map((s) => (
    <ZoneBadge
      key={s.zone}
      service={s}
      isActive={activeService?.zone === s.zone}
      onClick={() => handleBadgeClick(s)}
    />
  ));

  return (
    <section className="relative py-10 overflow-hidden
      bg-gradient-to-br from-gray-50 via-white to-gray-100
      dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">

      {/* Grid texture — adapts opacity per theme */}
      <div
        className="absolute inset-0 z-0 pointer-events-none
          opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Where We Serve"
          subtitle="TokenPap's smart metering solutions operate across every sector of the urban landscape — from factories and hospitals to campuses and airports. Click a zone to explore our solutions."
          align="center"
        />

        {/* ═══════════════════════════════════════
            MOBILE  (< md)
            ═══════════════════════════════════════ */}
        <div className="block md:hidden rounded-2xl overflow-hidden shadow-2xl
          border border-gray-200 dark:border-white/10">

          {/* Map */}
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <img
              src={CityMapImage}
              alt="Isometric city service map"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className={overlayClass} />
            {MobileBadges}
            {!activeService && <HintBubble mobile />}
          </div>

          {/* Zone pills */}
          <ZoneNavPills active={activeService} onSelect={handleBadgeClick} />

          {/* Detail card — stacks below map */}
          <AnimatePresence mode="wait">
            {activeService && (
              <div className="p-3 bg-gray-50 dark:bg-slate-900/60">
                <DetailCard
                  service={activeService}
                  onClose={handleClose}
                  variant="card"
                />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP  (≥ md)
            ═══════════════════════════════════════ */}
        <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl
          border border-gray-200 dark:border-white/10">

          {/* Map + overlay panel */}
          <div className="relative w-full" style={{ aspectRatio: "16/7.5" }}>
            <img
              src={CityMapImage}
              alt="Isometric city service map"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className={overlayClass} />
            {DesktopBadges}

            <AnimatePresence>
              {activeService && (
                <DetailCard service={activeService} onClose={handleClose} variant="panel" />
              )}
            </AnimatePresence>

            {!activeService && <HintBubble />}
          </div>

          {/* Desktop zone pills */}
          <ZoneNavPills active={activeService} onSelect={handleBadgeClick} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
