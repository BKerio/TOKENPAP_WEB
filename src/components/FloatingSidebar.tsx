// src/components/FloatingSidebar.tsx
// Acrel-inspired "Get Quick" floating contact sidebar
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Phone, X, ChevronLeft } from "lucide-react";

const FloatingSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+254 741 099 909",
      href: "tel:+254741099909",
      color: "bg-emerald-600 hover:bg-emerald-500",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@tokenpap.com",
      href: "mailto:info@tokenpap.com",
      color: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/254741099909",
      color: "bg-[#25D366] hover:bg-[#1EBC57]",
    },
  ];

  return (
    <>
      {/* Tab trigger */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mr-0 flex flex-col gap-2 bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 rounded-l-2xl p-4 w-64"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                    Get Quick
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Reach us instantly
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Contact options */}
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-white transition-all duration-200 ${color} group`}
                >
                  <div className="flex-shrink-0 p-1.5 bg-white/20 rounded-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold">{label}</p>
                    <p className="text-[10px] opacity-80 truncate">{value}</p>
                  </div>
                </a>
              ))}

              {/* Agent card */}
              <div className="mt-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center">
                    <span className="text-emerald-700 dark:text-emerald-400 text-xs font-black">TP</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-100">TokenPap Support</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Online now</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab button */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-col items-center justify-center gap-1 w-9 bg-emerald-600 hover:bg-emerald-500 text-white rounded-l-xl py-5 shadow-xl transition-colors relative"
          aria-label="Quick Contact"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span
                  className="text-[9px] font-black uppercase tracking-widest"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                >
                  Quick
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingSidebar;
