// src/pages/Networking.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Network,
  Wifi,
  Cloud,
  ShieldCheck,
  Activity,
  PieChart,
  Settings,
  Cable,
  ArrowDownRight,
  ClubIcon, // Used for Campus/Branch
} from "lucide-react";


const networkingPartnerLogos = [
   {
    name: "Cisco", // Major networking leader
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  },
    {
    name: "Fortinet", // Strong in Network Security & SD-WAN
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
  },
    {
    name: "Palo Alto Networks", // Major Security, includes Network Security
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/PaloAltoNetworks_2020_Logo.svg",
  },
   {
    name: "Aruba (HPE)", // Strong in Campus & Wireless Networking
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Hpe-aruba-networking-logo.svg", // HPE logo, often used for Aruba too
  },
  {
    name: "Juniper Networks", // Another major networking player
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg",
  },
   {
     name: "Cisco Meraki", // Cloud-managed networking
     logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Meraki_Logo_2016_transparent.svg",
   },
   {
      name: "VMware", // Significant in Network Virtualization/SDN (NSX)
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
   },
    {
      name: "Ubiquiti", // Popular for value-focused SMB/Enterprise wireless & routing
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Ubiquiti_Logo.png",
    },
];


// Data for the specific Networking Solutions/Offerings section
const networkingSolutions = [
  {
    title: "Network Design & Architecture",
    description:
      "Design resilient, scalable, and performant network architectures tailored to your business needs, covering LAN, WAN, WLAN, and Cloud Connectivity.",
    icon: Network, // Network icon
    color: "text-green-600", // Icon color for solutions grid
  },
  {
    title: "Campus & Branch Networking",
    description:
      "Implement robust switching and routing solutions for offices, campus environments, and remote branches.",
    icon: ClubIcon, // Building icon for campus/branch - keeping ClubIcon as in original
    color: "text-teal-600",
  },
   {
    title: "Data Center Networking",
    description:
      "Architect and implement high-density, low-latency network infrastructure within modern data centers, including Spine-Leaf architectures.",
    icon: Cable, // Cable for data center density
    color: "text-blue-600",
  },
   {
    title: "Wireless (WLAN) Solutions",
    description:
      "Design, deploy, and manage secure and high-performing wireless networks across various environments.",
    icon: Wifi, // Wifi icon
    color: "text-cyan-600",
  },
  {
    title: "Software-Defined Networking (SDN/SD-WAN)",
    description:
      "Implement agile and centralized network management using SDN and SD-WAN technologies for optimized traffic routing and control.",
    icon: Cloud, // Cloud icon for SDN/SD-WAN often cloud-managed
    color: "text-purple-600",
  },
  {
    title: "Network Security Implementation",
    description:
      "Deploy and configure network-level security devices including Firewalls, Intrusion Prevention Systems (IPS), and Secure Web Gateways.",
    icon: ShieldCheck, // Shield for security
    color: "text-red-600", // Red for security/firewall, adjust if preferred
  },
  {
    title: "Network Performance Optimization",
    description:
      "Analyze network traffic, identify bottlenecks, and implement optimizations for maximum speed and reliability.",
    icon: Activity, // Activity for traffic/performance
    color: "text-orange-600",
  },
   {
    title: "Network Monitoring & Analytics",
    description:
      "Implement comprehensive monitoring solutions and analytics tools for proactive identification of issues and capacity planning.",
    icon: PieChart, // Pie chart for analytics
    color: "text-yellow-600",
  },
   {
    title: "Managed Network Services",
    description:
      "Offload the burden of day-to-day network management to our experts for consistent performance and stability.",
    icon: Settings, // Settings for management
    color: "text-gray-700", // Neutral color
  },
];


const Networks: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to render the section heading badge
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
    // Overall container: Set default light mode bg/text, add dark mode bg/text
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">
      {/* Hero Section - Networking Theme. Gradient works, text already light. */}
      {/* Hero Section - Networking Theme */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
            {/* Networking Hero Title with badge */}
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
               {renderSectionBadge("Networking Solutions")}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 drop-shadow-sm">
               Building the Backbone of Your Digital Operations with Robust Networking
            </p>
            <p className="mt-4 text-lg text-red-200 drop-shadow-sm max-w-2xl mx-auto">
               We design, implement, and manage reliable, high-performance, and secure
               network infrastructures essential for modern business connectivity and communication.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview / Capabilities - Networking Focus. Adjust backgrounds and text for dark mode. */}
      <section className="py-12 bg-white dark:bg-gray-800"> {/* Default bg-white, add dark:bg-gray-800 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading with Networking Color Theme Gradient. Adjust border/bg of the container. */}
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Our Networking Capabilities")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {/* Network Infrastructure & Design. Adjust heading and text color for dark mode. */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-400"> {/* Default green-700, add dark:text-green-400 */}
                Infrastructure & Design
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Default text-gray-600, add dark:text-gray-300 */}
                We build the physical and logical foundation of your network, designing architectures
                that are scalable, resilient, and optimized for performance.
              </p>
              {/* List text - inheriting text color from parent ul/li or using dark:text-gray-300 */}
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300"> {/* Default text-gray-700, add dark:text-gray-300 */}
                <li className="flex items-start">
                  {/* Icons keep their specific colors */}
                  <Network className="w-7 h-7 text-green-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Architecture Planning:</span> High-level design for enterprise networks.
                  </div>
                </li>
                <li className="flex items-start">
                  {/* Icons keep their specific colors */}
                  <Cable className="w-7 h-7 text-teal-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">LAN/WAN Design & Implementation:</span> Connecting offices, branches, and data centers.
                  </div>
                </li>
                 <li className="flex items-start">
                   {/* Icons keep their specific colors */}
                   <Wifi className="w-7 h-7 text-blue-600 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                     <span className="font-semibold">Wireless Design & Deployment:</span> Secure and pervasive Wi-Fi coverage.
                   </div>
                 </li>
                <li className="flex items-start">
                   {/* Icons keep their specific colors */}
                   <Cloud className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                    <span className="font-semibold">Cloud Connectivity & SD-WAN:</span> Integrating cloud resources and optimizing WAN performance.
                   </div>
                 </li>
              </ul>
            </div>

            {/* Network Management & Security. Adjust heading and text color for dark mode. */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-teal-700 dark:text-teal-400"> {/* Default teal-700, add dark:text-teal-400 */}
                Management & Security
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Default text-gray-600, add dark:text-gray-300 */}
                Ongoing management, proactive monitoring, and integrated security are critical
                to maintaining a healthy and protected network environment.
              </p>
               {/* List text - inheriting text color from parent ul/li or using dark:text-gray-300 */}
               <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300"> {/* Default text-gray-700, add dark:text-gray-300 */}
                <li className="flex items-start">
                  {/* Icons keep their specific colors */}
                  <Activity className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Network Monitoring:</span> 24/7 vigilance over network health and traffic.
                  </div>
                </li>
                 <li className="flex items-start">
                  {/* Icons keep their specific colors */}
                  <ShieldCheck className="w-7 h-7 text-red-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Security Layer Implementation:</span> Firewalls, Access Control, Intrusion Prevention.
                  </div>
                </li>
                <li className="flex items-start">
                  {/* Icons keep their specific colors */}
                  <PieChart className="w-7 h-7 text-yellow-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Performance Tuning & Troubleshooting:</span> Identifying and resolving network issues.
                  </div>
                </li>
                <li className="flex items-start">
                  {/* Icon is gray-700, will need dark mode adjustment */}{/* Default text-gray-700, add dark:text-gray-300 */}
                   <Settings className="w-7 h-7 text-gray-700 dark:text-gray-300 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                     <span className="font-semibold">Configuration Management:</span> Maintaining consistent and secure network device settings.
                   </div>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Networking Solutions Grid. Add ID for anchor. Adjust background, card styles for dark mode. */}
      <section id="solutions-section" className="py-12 bg-white dark:bg-gray-900"> {/* Default bg-white, add dark:bg-gray-900 and ID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Section Heading with Networking Color Theme Gradient. Adjust border/bg of the container. */}
           <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Key Networking Solution Offerings")}
          </h2>
           {/* Intro Paragraph. Adjust text color for dark mode. */}
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"> {/* Default text-gray-600, add dark:text-gray-300 */}
             We provide specialized solutions designed to address common networking challenges and
             meet the connectivity demands of modern businesses.
          </p>
          {/* Grid displaying Solution Cards. Adjust card styles for dark mode. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {networkingSolutions.map((solution, index) => (
              <div key={index}
                   className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200
                              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"> {/* Dark mode bg, border, hover shadow */}
                <div className="flex items-center mb-6">
                   {/* Icons keep their specific colors */}
                   <solution.icon className={`w-12 h-12 ${solution.color} flex-shrink-0`} strokeWidth={1.5} />
                   {/* Heading text. Adjust for dark mode. */}
                   <h3 className="ml-5 text-2xl font-semibold text-gray-900 dark:text-gray-100">{solution.title}</h3> {/* Default text-gray-900, add dark:text-gray-100 */}
                </div>
                {/* Description text. Adjust for dark mode. */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"> {/* Default text-gray-700, add dark:text-gray-300 */}
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section - Using Networking Partner list. Adjust background, card styles for dark mode. */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800"> {/* Default bg-gray-100, add dark:bg-gray-800 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           {/* Section Heading with Networking Color Theme Gradient. Adjust border/bg of the container. */}
          <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Some of Our Strategic Networking Partners")}
          </h2>
           {/* Intro Paragraph. Adjust text color for dark mode. */}
           <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"> {/* Default text-gray-600, add dark:text-gray-300 */}
              We partner with the world's leading network hardware, software, and security
              vendors to deliver cutting-edge and reliable networking solutions.
          </p>
           {/* Grid displaying Partner Logos. Adjust card styles for dark mode. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center">
            {networkingPartnerLogos.map((p) => ( // Using the Networking partner list
              <div
                key={p.name}
                className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full
                            bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"> {/* Dark mode bg, border, hover shadow */}
                 {/* Logos (images). Cannot change color easily with CSS. Dark card background helps, but may not be perfect. */}
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="h-12 md:h-14 object-contain transition-all duration-300 ease-in-out mb-4"
                  style={{ maxWidth: '100%', height: 'auto' }} // Keep existing styles for responsiveness
                />
                 {/* Partner Name text. Adjust text color for dark mode. */}
                 <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mt-auto">{p.name}</p> {/* Default text-gray-700, add dark:text-gray-300 */}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call To Action - Networking Focus. Gradient and text are suitable for dark mode. Button styles are fine. */}
       {/* Section background matching Hero - Green/Teal */}
      <section className="py-12 bg-gradient-to-r from-green-700 to-teal-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          {/* CTA Title & Paragraph - already light text, no changes needed */}
          <h3 className="text-4xl font-bold mb-6">
             Ensure Reliable Connectivity for Your Business
          </h3>
           {/* CTA paragraph - text is already light green, suitable for dark mode */}
          <p className="mb-10 text-xl text-green-100 leading-relaxed">
            Whether you need to design a new network, optimize existing infrastructure,
            or enhance security, our networking experts are here to help.
          </p>

           {/* Buttons. Red background and white text work well in dark mode. Border and icon are white. */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Talk To Experts button - no changes needed for dark mode styling */}
            <Link
              to="/contact" // Link to contact page
              className="group flex items-center rounded-full bg-[#e94c51] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To A Network Expert
              </span>
              {/* Icon circle - white border works */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            {/* Explore Solutions button. Anchor link updated. */}
            <Link
              to="/solutions" // Anchor link to the solutions grid on this page ID
               className="group flex items-center rounded-full bg-[#e94c51] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Networking Solutions
              </span>
              {/* Icon circle - white border works */}
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

export default Networks;