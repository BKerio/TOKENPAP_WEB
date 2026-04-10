// src/pages/Infrastructure.tsx 
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Cpu,  Server,  Cloud,  ShieldCheck,  Network,  Layers,  ArrowDownRight } from "lucide-react";

import {  partnersList } from "@/data"; 

import galleryImage1 from "@/assets/storage/picture1.png";
import galleryImage2 from "@/assets/storage/picture2.png";
import galleryImage3 from "@/assets/storage/picture3.png";
import galleryImage4 from "@/assets/storage/picture4.png";
import galleryImage5 from "@/assets/storage/picture5.png";
import galleryImage6 from "@/assets/storage/picture6.png";


const infrastructureSolutions = [
  {
    title: "Hybrid & Multi-Cloud Integration",
    description:
      "Seamlessly integrate private data centers with leading public clouds (AWS, Azure, GCP) for agility and cost optimization.",
    icon: Cloud,
    color: "text-blue-600",
  },
  {
    title: "Modern Data Center Design",
    description:
      "Design and deploy high-density, efficient, and scalable data center infrastructure utilizing hyper-converged solutions.",
    icon: Server,
    color: "text-blue-600",
  },
  {
    title: "Network & Edge Compute",
    description:
      "Establish robust network architectures and deploy edge devices for localized processing and reduced latency.",
    icon: Network,
    color: "text-blue-600",
  },
  {
    title: "Cybersecurity Foundation",
    description:
      "Implement infrastructure-level security measures including firewalls, intrusion detection, and access control.",
    icon: ShieldCheck,
    color: "text-blue-600",
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Utilize Kubernetes, Docker, and other technologies for portable, scalable application deployment.",
    icon: Layers,
    color: "text-blue-600",
  },
  {
    title: "High-Performance Computing",
    description:
      "Build powerful clusters and optimize infrastructure for compute-intensive tasks like AI/ML and simulations.",
    icon: Cpu,
    color: "text-blue-600",
  },
];

const galleryImages = [
  {
    src: galleryImage1,
    alt: "Aisle of server racks in a data center",
  },
  {
    src: galleryImage2,
    alt: "Close-up of a CPU",
  },
  {
    src: galleryImage3,
    alt: "Networking cables connected to a switch",
  },
  {
    src: galleryImage4,
    alt: "Server racks in a modern data center environment",
  },
  {
    src: galleryImage5,
    alt: "View of backend of server racks",
  },
  {
    src: galleryImage6,
    alt: "Dramatic view of dark data center interior",
  },
];
// --- END KEEP LOCAL DATA ---


const Infrastructure: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the section heading badge
  const renderSectionBadge = (text: string) => (
       <div className="relative inline-flex items-center rounded-full p-1 border border-white/30 bg-white/10 shadow-lg backdrop-blur-md
                     dark:border-gray-700/30 dark:bg-gray-700/10 dark:shadow-xl dark:backdrop-blur-md">
          <span className="absolute inset-0 rounded-full border border-white/20 blur-sm opacity-60 pointer-events-none animate-pulse-slow dark:border-gray-700/20" />
          <span className="relative inline-block bg-red-600 text-white font-bold px-6 py-2 rounded-full text-lg shadow-inner hover:from-orange-600 hover:to-red-700 transition-all duration-300">
            {text}
          </span>
      </div>
  );

  return (
    // Overall container: Set default light mode bg/text, add dark mode bg/text
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
              <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
                {renderSectionBadge("Infrastructure Solutions")}
              </h1>
            <p className="text-xl md:text-2xl text-red-100 drop-shadow-sm">
              Build a Solid Foundation for Your Digital Future
            </p>
            <p className="mt-4 text-lg text-red-200 drop-shadow-sm max-w-2xl mx-auto">
              We design, build, and optimize the core hardware and software layers
              essential for modern, scalable, and secure IT operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview (Core Capabilities) */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Our Core Capabilities")}
           </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hardware Section */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-red-700 dark:text-red-400">
                Hardware Infrastructure
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Leveraging the power of leading OEM technologies, we design and
                implement physical infrastructure solutions that form the
                bedrock of your IT operations. High availability, reliability,
                and performance are built-in.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Server className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Data Center Design & Build:
                    </span>{" "}
                    From planning to full operational readiness.
                  </div>
                </li>
                <li className="flex items-start">
                  <Cpu className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      High-Density Compute Solutions:
                    </span>{" "}
                    Rack & blade servers, converged/hyperconverged systems.
                  </div>
                </li>
                <li className="flex items-start">
                  <Network className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Advanced Networking & Security Hardware:
                    </span>{" "}
                    Firewalls, switches, routing for performance and protection.
                  </div>
                </li>
                <li className="flex items-start">
                  <Cloud className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Edge & Remote Office Deployments:
                    </span>{" "}
                    Solutions tailored for distributed environments.
                  </div>
                </li>
              </ul>
            </div>

            {/* Software Section */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-red-700 dark:text-red-400">
                Software Infrastructure
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our expertise extends to the crucial software layers that enable
                applications and manage resources effectively, ensuring
                flexibility, automation, and robust security for modern IT
                environments.
              </p>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Cloud className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Cloud Infrastructure (IaaS, PaaS):
                    </span>{" "}
                    Strategy, migration, and management across platforms.
                  </div>
                </li>
                <li className="flex items-start">
                  <Layers className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Containerization & Orchestration:
                    </span>{" "}
                    Kubernetes, Docker, and ecosystem tools for scalable apps.
                  </div>
                </li>
                <li className="flex items-start">
                  <Server className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Automation & Configuration Management:
                    </span>{" "}
                    CI/CD pipelines, infrastructure-as-code (IaC).
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Software-Defined Everything (SDx):
                    </span>{" "}
                    Implementing flexible, programmatic control.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="infrastructure-solutions" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Our Infrastructure Solutions")}
           </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We deliver comprehensive solutions addressing key business challenges,
            built on a foundation of reliable hardware and smart software
            integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {infrastructureSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200
                              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl">
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

      {/* OEM Partners Section - Displaying only the first 12 */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="flex items-center justify-center mb-12">
            {renderSectionBadge("Some of Our OEM Partners")}
           </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We strategically partner with the world's leading hardware and software
            manufacturers to integrate the most reliable and performant technology
            into our solutions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center">
            {/* *** MODIFIED: Added .slice(0, 12) to limit the displayed partners *** */}
            {partnersList.slice(0, 12).map((p) => (
              <div
                key={p.id} // Use the unique 'id' from the imported data as the key
                className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full
                            bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl">
                 {/* src={p.logo} is correct */}
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                   // Styling ensures image fits within card and maintains aspect ratio
                  className="h-12 md:h-14 object-contain transition-all duration-300 ease-in-out mb-4"
                  style={{ maxWidth: "100%"}} // Keep height h-12/14 from tailwind, adjust max-width here
                />
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Gallery")}
           </h2>
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Browse examples that represent the robust and complex environments we
            design, build, and manage.
          </p>
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group dark:shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                  <p className="text-white text-base md:text-lg font-semibold text-center">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-red-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">
            Unlock the Full Potential of Your Infrastructure
          </h3>
          <p className="mb-10 text-xl text-blue-100 leading-relaxed">
            Stop guessing about your infrastructure needs. Connect with our
            certified experts today for a personalized assessment and discover
            solutions that drive efficiency and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center rounded-full border border-white/20 bg-red-500 px-6 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:border-white"
            >
              <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To Our Experts
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
            {/* Link to the Infrastructure Solutions section ID */}
            <Link
              to="/solutions"
               className="group flex items-center rounded-full border border-white/20 bg-red-500 px-6 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:border-white"
            >
              <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
                View Solutions
              </span>
               <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:rotate-45">
                 <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;