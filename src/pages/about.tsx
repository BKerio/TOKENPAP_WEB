import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight, Award, Clock, Settings, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const About: React.FC = () => {
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
              About TokenPap
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              We are a team of passionate engineering experts dedicated to revolutionizing 
              how businesses manage utilities through systemic innovation and industrial-grade technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Placed in a Wider Card */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, amount: 0.3 }}
             className="bg-white dark:bg-gray-900 overflow-hidden"
           >
            <SectionHeader 
              title="Our Industrial Legacy" 
              subtitle="Powering the next generation of utility management across East Africa."
              align="left"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-600 dark:text-gray-400 text-lg leading-relaxed pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="space-y-6">
                <p>
                <strong>TokenPap System</strong> (formerly Millenium Solutions EA) is a dynamic Enterprise Utility IT company, delivering best-in-class industrial solutions. Powered by an innovation-driven workforce, we combine youthful energy with an unwavering focus on engineering precision.
                </p>
                <p>
                We serve as a versatile partner, working with major global OEMs in Smart Grid Infrastructure, Enterprise Applications, Connectivity, Power Solutions, and Industrial Security. Our mission is to bridge the gap between legacy utilities and digital informatization.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                We bring a fresh perspective to providing comprehensive Enterprise IT solutions with a commitment to exceeding expectations. Our strength lies in our guaranteed versatility, reliability, and flexibility—making us the preferred partner for businesses crafting a future-ready infrastructure.
                </p>
                <p>
                Our pride lies in providing successful solutions that not only solve customers’ problems but also provide peace of mind. Our strategic partnerships enable us to offer professional support across the entire product life cycle with a certified engineering team.
                </p>
              </div>
            </div>
           </motion.div>
        </div>
      </section>

       <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The industrial principles that guide our systemic innovation."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Excellence", desc: "We strive for industrial excellence, delivering solutions that exceed expectations and create lasting value." },
              { icon: Users, label: "Collaboration", desc: "We work closely with clients, fostering partnerships built on trust, transparency, and shared systemic goals." },
              { icon: Settings, label: "Innovation", desc: "We embrace digital transformation, exploring new technologies to solve complex industrial challenges." },
              { icon: Clock, label: "Commitment", desc: "We are committed to our clients' success, providing 24/7 support throughout their technology journey." }
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-600/5 dark:bg-emerald-600/10 border border-emerald-600/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xs font-black text-gray-900 dark:text-white mb-4 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">
                    {v.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


       <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Mission & Vision" 
            subtitle="The strategic roadmap driving TokenPap forward."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xs font-black text-emerald-600 uppercase tracking-widest">
                Our Mission
              </h3>
              <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-tight">
                Revolutionizing Resource Efficiency
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pt-2">
              To be the leading provider of cutting-edge utility solutions, revolutionizing how businesses manage and leverage their resources for increased efficiency and success in a rapidly evolving world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xs font-black text-emerald-600 uppercase tracking-widest">
                Our Vision
              </h3>
              <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-tight">
                Empowering the Smart Enterprise
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pt-2">
              To empower businesses with comprehensive and innovative solutions that streamline operations, optimize processes, and drive sustainable growth through smart connectivity.
              </p>
            </motion.div>
          </div>
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

export default About;