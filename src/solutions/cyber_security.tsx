// src/pages/Cybersecurity.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  ShieldCheck,  ShieldAlert,  Lock,  Activity,  BookOpen,  Network,  Monitor,  Cloud, ScanSearch,  Fingerprint,  ArrowDownRight,  Users } from "lucide-react";

import { partnersList } from "@/data"; 
const cybersecuritySolutions = [
  {
    title: "Data Loss Prevention (DLP)",
    description:
      "Implement policies and technologies to prevent sensitive data from leaving your organization through various channels.",
    icon: ShieldAlert, 
    color: "text-green-600",
  },
  {
    title: "Threat Detection & Response (MDR/XDR)",
    description:
      "Monitor your environment 24/7 to detect malicious activities and respond rapidly to neutralize threats.",
    icon: Activity,
    color: "text-red-600",
  },
  {
    title: "Endpoint Security",
    description:
      "Protect servers, workstations, and mobile devices from malware, ransomware, and targeted attacks.",
    icon: Monitor,
    color: "text-purple-600",
  },
  {
    title: "Network Security",
    description:
      "Deploy firewalls, intrusion prevention systems, and network segmentation to protect your network perimeter and internal traffic.",
    icon: Network,
    color: "text-blue-600",
  },
  {
    title: "Identity & Access Management (IAM)",
    description:
      "Ensure that only authorized users have access to specific resources with strong authentication and access controls.",
    icon: Fingerprint,
    color: "text-orange-600",
  },
  {
    title: "Cloud Security",
    description:
      "Secure your cloud workloads, applications, and data on public, private, and hybrid cloud environments.",
    icon: Cloud,
    color: "text-indigo-600",
  },
  {
    title: "Security Awareness Training",
    description:
      "Educate your employees on common threats like phishing and social engineering to create a human firewall.",
    icon: Users,
    color: "text-cyan-600",
  },
  {
    title: "Vulnerability Management",
    description:
      "Proactively identify and prioritize security weaknesses in your systems and applications before attackers exploit them.",
    icon: ScanSearch,
    color: "text-yellow-600",
  },
  {
    title: "Compliance & Governance",
    description:
      "Navigate complex regulations (GDPR, HIPAA, PCI DSS) and establish governance frameworks to ensure continuous adherence.",
    icon: BookOpen,
    color: "text-gray-600", 
  },
];


const securityProducts = [
  {
    name: "Zecurion DLP",
    description:
      "Comprehensive Data Loss Prevention Suite protecting sensitive data across network, endpoints, and storage.",
    icon: ShieldCheck,
    color: "text-green-700",
    
  },
  {
    name: "Forcepoint ONE (formerly DLP, Web, CASB)",
    description:
      "Integrated cloud-native security platform for DLP, Web Security, and Cloud Access Security Brokerage.",
    icon: Cloud,
    color: "text-blue-700",
  
  },
  {
    name: "Palo Alto Networks Firewalls (e.g., NGFW, CloudGenix)",
    description:
      "Next-generation firewalls providing visibility and control over network traffic and applications.",
    icon: Network,
    color: "text-red-700",
   
  },
  {
    name: "CrowdStrike Falcon Insight XDR",
    description:
      "Extended Detection and Response unifying data from multiple sources to detect advanced threats.",
    icon: Activity,
    color: "text-purple-700",
    
  },
  {
    name: "Microsoft 365 Compliance",
    description:
      "Tools for data governance, eDiscovery, and compliance, including DLP for Microsoft 365 environments.",
    icon: BookOpen,
    color: "text-cyan-700",
  }, 
  {
    name: "Sophos Intercept X",
    description:
      "Advanced endpoint protection (EPP) and detection and response (EDR) against sophisticated threats.",
    icon: Monitor,
    color: "text-orange-700",
    
  },
 
];

const Cybersecurity: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
  const renderSectionBadge = (text: string) => (
       <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md
                     dark:border-gray-700/30 dark:bg-gray-700/10 dark:shadow-xl dark:backdrop-blur-md">
          <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow dark:border-gray-700/20" />
          <span className="relative inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
            {text}
          </span>
      </div>
  );

  return (
    // Overall container - set default light mode and add dark mode bg/text
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">
      {/* Hero Section */}
       <section className="pt-24 pb-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
             {/* Using the section badge for consistency across pages */}
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
                {renderSectionBadge("Cybersecurity Solutions")}
              </h1>
            <p className="text-xl md:text-2xl text-red-100 drop-shadow-sm">
             Fortify Your Defenses in an Ever-Threatening Digital Landscape
            </p>
             {/* Adding the original descriptive text back or a version of it */}
            <p className="mt-4 text-lg text-red-200 drop-shadow-sm max-w-2xl mx-auto">
                We deliver comprehensive strategies and advanced technologies to protect your valuable assets from sophisticated cyber threats and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview / Features Intro - Adjusted dark mode colors */}
       <section className="py-12 bg-gray-100 dark:bg-gray-800"> {/* Slightly lighter bg in light mode than previous section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Approach & Philosophy")} {/* Adjusted badge text */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Defensive Measures - Adjusted dark mode colors */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                Prevent & Protect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Building strong defenses requires a multi-layered approach. We
                focus on preventing breaches and protecting your valuable data
                from compromise at every potential entry point.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Proactive Security Posture:
                    </span>{" "}
                    Identify vulnerabilities and strengthen defenses.
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Robust Data Protection:
                    </span>{" "}
                    Encryption, access controls, and data lifecycle management.
                  </div>
                </li>
                <li className="flex items-start">
                  <Network className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Perimeter & Internal Security:
                    </span>{" "}
                    Secure your network edges and internal segments.
                  </div>
                </li>
                <li className="flex items-start">
                  <Monitor className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Endpoint & Device Hardening:
                    </span>{" "}
                    Securing all connected devices and systems.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
                Detect & Respond
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Even with strong prevention, detecting threats quickly is vital.
                Our strategies focus on continuous monitoring and having
                effective response plans ready when an incident occurs.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Activity className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      24/7 Security Monitoring:
                    </span>{" "}
                    Constant vigilance over your digital environment.
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldAlert className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Rapid Incident Response:</span>{" "}
                    Minimize damage and recovery time.
                  </div>
                </li>
                <li className="flex items-start">
                  <ScanSearch className="w-7 h-7 text-yellow-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Threat Hunting & Analysis:
                    </span>{" "}
                    Actively search for hidden threats in your network.
                  </div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-7 h-7 text-gray-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Post-Incident Analysis:
                    </span>{" "}
                    Learn and strengthen defenses for the future.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Section - Uses the `cybersecuritySolutions` array */}
       <section className="py-12 bg-white dark:bg-gray-900" id="cybersecurity-services"> {/* Added ID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Core Services")} {/* Adjusted badge text */}
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We offer tailored services designed to protect your specific assets,
            meet compliance needs, and build resilience against cyber attacks
            and data breaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cybersecuritySolutions.map((solution, index) => (
              // Card styling with dark mode adjustments
              <div
                key={index} // Using index as key here since no id in cybersecuritySolutions
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                   <solution.icon
                    className={`w-12 h-12 ${solution.color} flex-shrink-0`}
                    strokeWidth={1.5}
                  />
                  <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
       <section className="py-12 bg-gray-100 dark:bg-gray-800" id="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Featured Technology Products")} 
          </h2>
           <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We leverage industry-leading software and hardware products to build
            the best defense for your organization's digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {securityProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <product.icon
                    className={`w-12 h-12 ${product.color} flex-shrink-0`}
                    strokeWidth={1.5}
                  />
                  <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
       <section className="py-12 bg-white dark:bg-gray-900"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center mb-12">
            
            {renderSectionBadge("Our Technology Partners")} 
          </h2>
           <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
              We strategically partner with world-leading technology manufacturers across various domains to integrate
              reliable and performant solutions into our offerings, including cybersecurity.
           </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center">
            
            {partnersList.slice(0, 4).map((p) => (
              <div
                key={p.id} 
                className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full
                            bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"
              >
                 
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="h-12 md:h-14 object-contain transition-all duration-300 ease-in-out mb-4"
                  style={{ maxWidth: '100%', height: 'auto' }} 
                />
               
                 <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mt-auto">
                    {p.name}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Strengthen Your Security?
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Don't wait for a breach. Contact us today to discuss your
            cybersecurity posture and implement robust DLP and security
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-red-500 px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600" 
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To A Security Expert
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            <Link
              to="/solutions"
              className="group flex items-center rounded-full bg-red-500 px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600" 
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Explore Featured Products
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                 <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;