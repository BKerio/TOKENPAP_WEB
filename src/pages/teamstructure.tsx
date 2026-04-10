import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  ArrowDownRight,  Briefcase,  Code,  Handshake,  DollarSign,  Megaphone, User2, Settings } from "lucide-react";

const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []); 

  useEffect(() => {
    if (!isVisible || target <= 0) return;


    const startTime = performance.now();
    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * target);

      setCount(isFinite(currentCount) ? currentCount : target); 

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target); 
      }
    };

    requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(updateCount as any); 
  }, [target, duration, isVisible]);


  
  const displayCount = isFinite(count) ? count : 0;

  return <span ref={ref}>{displayCount}{suffix}</span>;
};

// Leadership team data
const leadershipTeam = [
  { id: 'ceo', role: 'Visionary Vault ', icon: Briefcase, color: 'Red', description: 'Setting the strategic vision and fostering innovation across all company functions.' },
  { id: 'cto', role: 'Chief Technology Officer', icon: Settings, color: 'Blue', description: 'Driving technological innovation, overseeing architecture, and leading the technical teams.' },
  { id: 'coo', role: 'Chief Operating Officer', icon: Briefcase, color: 'white', description: 'Optimizing operational efficiency, managing resources, and ensuring seamless project delivery.' },
  { id: 'cco', role: 'Chief Commercial Officer', icon: Megaphone, color: 'Green', description: 'Leading client engagement, partnership development, and commercial strategy.' },
  { id: 'hr', role: 'Admin & Human Capital', icon: User2, color: 'Black', description: 'Building a strong team culture, fostering growth, and championing employee well-being.' },
];

// Company departments data
const companyDepartments = [
  { id: 'technical', name: 'Technical', icon: Code, color: 'red', description: 'Our engineering core, responsible for solution architecture, software development, cloud infrastructure, and cybersecurity implementation.' },
  { id: 'bizdev', name: 'Business Development', icon: Handshake, color: 'red', description: 'Building partnerships, exploring new market opportunities, and nurturing client relationships from the initial contact.' },
  { id: 'commercial', name: 'Commercial', icon: DollarSign, color: 'red', description: 'Focusing on sales strategy, financial modeling, project proposals, and commercial viability of solutions.' },
];

const TeamStructure: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    {/* Hero Section */}
    <section className="pt-24 pb-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Meet the Visionaries & Builders
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team structure brings together leadership, specialized skills, and a shared commitment to innovation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Leadership Spotlight Section */}
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="flex items-center justify-center mb-12">
          <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
            <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
            <span className="relative inline-block bg-red-600 text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              Our Leadership Team
            </span>
          </div>
        </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Driving the company's vision and strategic direction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {leadershipTeam.map((member, idx) => (
            // Changed outer div structure for better hover effect application
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }} // Increased amount for earlier trigger
              className="group flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden rounded-xl" // Added group, lift on hover, overflow-hidden, increased rounded
            >
               {/* Optional subtle gradient background element based on color */}
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-${member.color}-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* The main card content */}
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 h-full z-10 relative border border-gray-200 dark:border-gray-700 rounded-xl"> {/* Added h-full, border */}

                {/* Icon */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-${member.color}-400 to-${member.color}-600 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}> {/* Icon bg color uses member color, added shadow and hover scale */}
                  <member.icon className="bg-transparent"/>
                </div>

                {/* Role and Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 mt-2 leading-tight">{member.role}</h3> {/* Larger role text */}
               

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm normal mb-4 flex-grow">{member.description}</p> {/* flex-grow helps push social icons down */}

                {/* Social/Contact Links */}
                {/* Hidden by default, visible on group hover */}
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-auto"> {/* mt-auto pushes it to the bottom */}
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Department Breakdown Section (remains the same) */}
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="flex items-center justify-center mb-12">
          <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
            <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow" />
            <span className="relative inline-block bg-red-600 text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              Our Core Departments
            </span>
          </div>
        </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bringing together specialized skills to deliver comprehensive solutions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyDepartments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 + 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-${dept.color}-200 dark:bg-${dept.color}-700/30`}>
                <dept.icon className={`h-8 w-8 text-${dept.color}-600 dark:text-${dept.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 min-h-[3rem] flex items-center justify-center">
                {dept.name} Department
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{dept.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="font-serif mt-20 text-center text-gray-700 dark:text-gray-300 italic text-lg">
          <p className="max-w-2xl mx-auto border-t border-b border-gray-300 dark:border-gray-600 py-4 px-6 rounded-md">
            Beyond the structure, our team shares a core philosophy of <strong className="text-gray-900 dark:text-white">collaboration</strong>, <strong className="text-gray-900 dark:text-white">continuous learning</strong>, and a dedication to our clients' success.
          </p>
        </motion.div>
      </div>
    </section>

    
    <section className="py-12 bg-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-semibold mb-4">
            Our Team Analytics
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise and collaboration powered by diverse backgrounds.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="p-4">
            <div className="text-6xl font-semibold mb-2 text-white">
              <Counter target={21} suffix="+" duration={1500} />
            </div>
            <div className="text-lg font-normal text-gray-200">Dedicated Professionals</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="p-4">
            <div className="text-6xl font-semibold mb-2 text-white">
              <Counter target={250} suffix="+" duration={1500} />
            </div>
            <div className="text-lg font-normal text-gray-200">Professional Certifications</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="p-4">
            <div className="text-6xl font-semibold mb-2 text-white">
              <Counter target={20} suffix="+" duration={1500} />
            </div>
            <div className="text-lg font-normal text-gray-200">Industry Experience</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="p-4">
            <div className="text-6xl font-semibold mb-2 text-white">
              <Counter target={8} suffix="+" duration={1500} />
            </div>
            <div className="text-lg font-normal text-gray-200">Key Areas of Expertise</div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how our team can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* Primary Button: Talk To Experts */}
              <Link
                to="/contact"
                className="group flex items-center justify-center rounded-full border border-red-500 bg-red-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-red-600 hover:border-red-600"
              >
                <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  Talk To Experts
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                </span>
              </Link>

                {/* Secondary Button: Explore Solutions */}
                <Link
                  to="/solutions"
                  className="group flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 px-6 py-2 text-gray-800 dark:text-gray-300 transition-colors duration-300 hover:border-red-500 hover:text-red-500"
                >
                  <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    Explore Solutions
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 transition-all duration-300 group-hover:border-red-500 group-hover:rotate-45">
                    <ArrowDownRight className="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-red-500" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
);
}

export default TeamStructure;