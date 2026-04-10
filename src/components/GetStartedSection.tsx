// src/components/GetStartedSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  LogIn,
  Home,
  Building2,
  Zap,
  ClipboardList,
  ShoppingBag,
  ArrowUpRight,
  User,
  Search,
  ChevronDown,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Option = {
  label: string;
  desc: string;
  to: string;
  icon: React.ElementType;
};

type Station = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  lottieUrl: string;
  accentColor: string;
  textAccent: string;
  borderAccent: string;
  bgAccent: string;
  options: Option[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const stations: Station[] = [
  {
    id: "account",
    index: "01",
    title: "My Account",
    tagline: "Identity & Access",
    lottieUrl: "https://lottie.host/4db68bbd-2154-4b91-b4bf-9b6faea90816/9HRiEjuwAU.json",
    accentColor: "rgba(52,211,153,0.12)",
    textAccent: "text-emerald-400",
    borderAccent: "border-emerald-500/60",
    bgAccent: "bg-emerald-500/10",
    options: [
      { label: "Sign In",                  desc: "Continue to your dashboard",              to: "/login",               icon: LogIn       },
      { label: "Landlord / Personal",       desc: "Perfect for individuals",                 to: "/register?type=personal", icon: Home     },
      { label: "Business Account",          desc: "For companies & organizations",           to: "/register?type=business", icon: Building2 },
    ],
  },
  {
    id: "meter",
    index: "02",
    title: "Search Meter",
    tagline: "Token Services",
    lottieUrl: "https://lottie.host/b222748d-a935-4dc5-855c-77b0f1ef2985/jEZVvzCIKR.json",
    accentColor: "rgba(251,191,36,0.10)",
    textAccent: "text-amber-400",
    borderAccent: "border-amber-500/60",
    bgAccent: "bg-amber-500/10",
    options: [
      { label: "Purchase Token",            desc: "Top up your prepaid meter now",           to: "/meter/purchase",        icon: Zap         },
      { label: "Last Transactions",         desc: "View your full token history",            to: "/meter/transactions",    icon: ClipboardList },
    ],
  },
  {
    id: "shop",
    index: "03",
    title: "Online Shop",
    tagline: "Smart Utility Store",
    lottieUrl: "https://lottie.host/036de35b-c636-4de8-b462-a2f3a2898820/Eg0XeVuQXJ.json",
    accentColor: "rgba(139,92,246,0.10)",
    textAccent: "text-violet-400",
    borderAccent: "border-violet-500/60",
    bgAccent: "bg-violet-500/10",
    options: [
      { label: "Browse Products",           desc: "Electricity, water & gas meters",         to: "/shop",                  icon: ShoppingBag  },
      { label: "View Cart",                 desc: "Review selected items",                   to: "/shop/cart",             icon: ClipboardList },
    ],
  },
];

// ─── Panel Component ──────────────────────────────────────────────────────────
const Panel: React.FC<{ station: Station; isActive: boolean; onClick: () => void }> = ({
  station, isActive, onClick,
}) => (
  <motion.div
    layout
    onClick={onClick}
    className={`
      relative flex flex-col cursor-pointer select-none overflow-hidden
      rounded-2xl border transition-all duration-500
      bg-gray-900
      ${isActive ? `${station.borderAccent} shadow-2xl` : "border-gray-800/80 hover:border-gray-700"}
    `}
    style={{
      background: isActive
        ? `radial-gradient(ellipse at 50% 0%, ${station.accentColor} 0%, #111827 60%)`
        : "#111827",
    }}
    animate={{ scale: isActive ? 1.015 : 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 28 }}
  >
    {/* Ghost index watermark */}
    <span
      className="absolute bottom-4 right-4 font-black text-[5rem] leading-none text-white/[0.03] select-none pointer-events-none"
      aria-hidden
    >
      {station.index}
    </span>

    {/* Top beacon */}
    <div className="px-6 pt-6 pb-4 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.85 }}
            transition={{ duration: 0.35 }}
            className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${station.textAccent}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? station.bgAccent.replace("bg-", "bg-") : "bg-gray-600"} ${isActive ? "animate-pulse" : ""}`}
              style={{ backgroundColor: isActive ? undefined : "#4B5563" }}
            />
            Station {station.index}
          </motion.span>
        </div>
        <h3 className="text-white font-extrabold text-xl leading-tight tracking-tight">
          {station.title}
        </h3>
        <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wider">{station.tagline}</p>
      </div>

      {/* Expand chevron */}
      <motion.div
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="mt-1 flex-shrink-0"
      >
        <ChevronDown className={`w-5 h-5 transition-colors ${isActive ? station.textAccent : "text-gray-600"}`} />
      </motion.div>
    </div>

    {/* Lottie zone */}
    <div className="flex items-center justify-center px-6 py-3">
      <motion.div
        animate={{ scale: isActive ? 1.08 : 0.9, opacity: isActive ? 1 : 0.45 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Player
          autoplay={isActive}
          loop
          src={station.lottieUrl}
          style={{ height: 110, width: 110 }}
        />
      </motion.div>
    </div>

    {/* Options */}
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="options"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden px-4 pb-4"
        >
          <div className="border-t border-white/5 pt-4 space-y-2">
            {station.options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={opt.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={opt.to}
                    onClick={(e) => e.stopPropagation()}
                    className={`
                      group flex items-center gap-3 p-3 rounded-xl
                      border border-white/5 bg-white/[0.03]
                      hover:bg-white/[0.07] hover:border-white/10
                      transition-all duration-200
                    `}
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg ${station.bgAccent} border border-white/10`}>
                      <Icon className={`w-4 h-4 ${station.textAccent}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white/90 truncate">{opt.label}</p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{opt.desc}</p>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 flex-shrink-0 text-gray-600 group-hover:${station.textAccent} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Closed-state summary */}
    <AnimatePresence>
      {!isActive && (
        <motion.p
          key="summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="px-6 pb-6 text-xs text-gray-600"
        >
          {station.options.length} quick actions →
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

// ─── Main section ─────────────────────────────────────────────────────────────
const GetStartedSection: React.FC = () => {
  const [active, setActive] = useState<string>("account");

  const toggle = (id: string) => setActive((prev) => (prev === id ? "" : id));

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Animated background grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glowing orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(52,211,153,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-emerald-500 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-500 inline-block" />
              Quick Access Portal
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
              Get Started
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-md leading-relaxed">
              Manage your account, top up utility tokens, or shop for smart meters — all in seconds.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 md:justify-end">
            {[
              { Icon: User,         label: "10k+ Accounts"    },
              { Icon: Search,       label: "500+ Meters"       },
              { Icon: ShoppingBag,  label: "Fast Delivery"     },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-xs font-medium"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Panels ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {stations.map((s) => (
            <motion.div
              key={s.id}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            >
              <Panel
                station={s}
                isActive={active === s.id}
                onClick={() => toggle(s.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8"
        >
          <p className="text-xs text-gray-600 tracking-wider uppercase">
            Need help? — <a href="/contact" className="text-emerald-500 hover:text-emerald-400 transition-colors underline underline-offset-4">Talk to support</a>
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All services operational
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
