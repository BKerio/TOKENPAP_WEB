// src/components/ProductHighlightSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const products = [
  {
    title: "Prepaid Electricity Meters",
    category: "Electricity",
    desc: "STS-compliant prepaid electricity meters enabling landlords and utilities to bill tenants accurately with remote token vending and real-time usage monitoring.",
    image: "https://img.freepik.com/premium-photo/digital-smart-electric-meter-white-background-electricity-control-concept_495423-10825.jpg?w=800",
    link: "/products/electricity"
  },
  {
    title: "Prepaid Water Meters",
    category: "Water",
    desc: "Accurate prepaid water metering with automated valve control, leak detection alerts, and seamless token dispensing for residential and commercial properties.",
    image: "https://img.freepik.com/premium-photo/modern-water-meter-isolated-white-background_185193-47125.jpg?w=800",
    link: "/products/water"
  },
  {
    title: "Prepaid Gas Meters",
    category: "Gas",
    desc: "Safe and reliable prepaid gas metering with tamper-proof enclosures, emergency shut-off valves, and remote credit top-up capabilities.",
    image: "https://img.freepik.com/premium-photo/natural-gas-meter-isolated-white-background_185193-35614.jpg?w=800",
    link: "/products/gas"
  },
  {
    title: "LoRa Smart Water Meters",
    category: "IoT · LoRa",
    desc: "Long-range, low-power LoRaWAN water meters delivering real-time consumption data across large estates, campuses, and remote areas without cellular dependency.",
    image: "https://img.freepik.com/premium-photo/modern-water-meter-isolated-white-background_185193-47985.jpg?w=800",
    link: "/products/lora-water"
  },
  {
    title: "NB-IoT Smart Water Meters",
    category: "IoT · NB-IoT",
    desc: "Narrowband IoT water meters leveraging cellular networks for high-density deployments with cloud integration, automated billing, and predictive maintenance insights.",
    image: "https://img.freepik.com/premium-photo/smart-water-meter-isolated-white-background_185193-55014.jpg?w=800",
    link: "/products/nbiot-water"
  },
];

const ProductHighlightSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="Our Products" 
          subtitle="Explore TokenPap's full range of prepaid and smart metering solutions — designed for precision, built for scale, and ready for every utility application."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image area */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h4 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">
                  {product.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {product.desc}
                </p>
                
                <a 
                  href={product.link}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white group/btn"
                >
                  Learn More
                  <div className="p-1 px-2 border border-gray-200 dark:border-gray-700 rounded-sm group-hover/btn:bg-emerald-600 group-hover/btn:border-emerald-600 group-hover/btn:text-white transition-all">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlightSection;
