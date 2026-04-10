import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building,
  Workflow,
  Scale,
  LayoutGrid,
  FileText,
  Calculator,
  Users,
  Package,
  PlaneTakeoff,
  Target,
  RefreshCcw,
  Combine,
  Presentation,
  ArrowDownRight,
  DatabaseIcon, // Using DatabaseIcon as it fits migration well
} from "lucide-react";

const erpPartnerLogos = [
  {
    name: "SAP", // A major ERP vendor
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  {
    name: "Oracle", // Major ERP (EBS, Fusion) and Database vendor
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png",
  },
   {
    name: "Microsoft", // General Microsoft, covers Dynamics 365, Navision etc.
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
   },
    {
    name: "Microsoft Dynamics 365", // Specific Dynamics 365 branding (optional, can use generic MS)
     logo: "https://sourceedge.com/wp-content/uploads/2018/09/ms-nav.png" // Often used for Dynamics NAV/365 Business Central
  },
];


// Data for the specific ERP Solutions/Offerings section
const erpSolutions = [
  {
    title: "ERP System Implementation",
    description:
      "End-to-end services covering planning, configuration, data migration, testing, and go-live for new ERP deployments.",
    icon: Building, // Enterprise building icon
    color: "text-indigo-600", // Icon color for solutions grid
  },
  {
    title: "ERP Upgrades & Migrations",
    description:
      "Seamlessly upgrade existing ERP versions or migrate from legacy systems to modern platforms (cloud or on-prem).",
    icon: DatabaseIcon, // Migration icon
    color: "text-purple-600",
  },
   {
    title: "Financial Management Modules",
    description:
      "Implementation and customization of modules like General Ledger, Accounts Payable/Receivable, Fixed Assets, Cost Accounting.",
    icon: Calculator, // Calculator for finance
    color: "text-green-600",
  },
   {
    title: "Supply Chain Management (SCM)",
    description:
      "Implementing and optimizing modules for Procurement, Inventory Management, Warehousing, Logistics, and Planning.",
    icon: Package, // Package for supply chain
    color: "text-orange-600",
  },
  {
    title: "Human Capital Management (HCM)",
    description:
      "Deploying HR, Payroll, Talent Management, and Workforce Planning functionalities within or integrated with ERP.",
    icon: Users, // Users for HR
    color: "text-cyan-600",
  },
  {
    title: "Sales & Customer Service (CRM within ERP)",
    description:
      "Leveraging integrated CRM capabilities within ERP to manage sales cycles, customer interactions, and service.",
    icon: Target, // Target for sales/goals
    color: "text-red-600", // Red for sales/focus, adjust if preferred
  },
  {
    title: "Business Process Re-engineering",
    description:
      "Analyzing and redesigning core business processes to align with ERP best practices for increased efficiency.",
    icon: Workflow, // Workflow icon
    color: "text-teal-600",
  },
   {
    title: "ERP Integrations",
    description:
      "Connecting your ERP system with other enterprise applications (BI, E-commerce, custom apps) for unified data flow.",
    icon: Combine, // Combine icon
    color: "text-pink-600", // Pink for integration, adjust
  },
   {
    title: "Business Intelligence & Reporting",
    description:
      "Building dashboards, reports, and analytics pulling data from ERP for informed decision-making.",
    icon: Presentation, // Presentation/report icon
    color: "text-yellow-600",
  },
];


const ERP: React.FC = () => {
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
      {/* Hero Section - ERP Color Theme */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
            {/* Hero Title using section badge */}
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
               {renderSectionBadge("Enterprise Solutions")}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 drop-shadow-sm">
               Streamline Your Business Operations with Powerful ERP Systems
            </p>
            <p className="mt-4 text-lg text-red-200 drop-shadow-sm max-w-2xl mx-auto">
               We specialize in implementing, optimizing, and managing integrated Enterprise Resource Planning systems
               that drive efficiency, transparency, and growth across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview / Capabilities - ERP Focus. Adjust backgrounds and text for dark mode. */}
      <section className="py-12 bg-white dark:bg-gray-800"> {/* Default bg-white, add dark:bg-gray-800 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading with ERP Color Theme Gradient */}
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Our End-to-End ERP Expertise")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {/* Implementation Services. Adjust heading and text color for dark mode. */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400"> {/* Default indigo-700, add dark:text-indigo-400 */}
                Implementation & Deployment
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Default text-gray-600, add dark:text-gray-300 */}
                Navigating a successful ERP implementation requires deep process knowledge and technical expertise.
                We guide you from selecting the right solution to achieving a smooth go-live and user adoption.
              </p>
              {/* List text - inheriting text color from parent ul/li or using dark:text-gray-300 */}
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300"> {/* Default text-gray-700, add dark:text-gray-300 */}
                <li className="flex items-start">
                  {/* Icons keep their color classes */}
                  <Target className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Requirements Gathering & Scoping:</span> Define business needs and system requirements.
                  </div>
                </li>
                <li className="flex items-start">
                  {/* Icons keep their color classes */}
                  <LayoutGrid className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">System Configuration & Customization:</span> Tailoring the ERP to your specific workflows.
                  </div>
                </li>
                 <li className="flex items-start">
                   {/* Icons keep their color classes */}
                   <DatabaseIcon className="w-7 h-7 text-teal-600 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                     <span className="font-semibold">Data Migration Planning & Execution:</span> Safely transfer legacy data to the new system.
                   </div>
                 </li>
                <li className="flex items-start">
                   {/* Icons keep their color classes */}
                   <PlaneTakeoff className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                    <span className="font-semibold">User Training & Go-Live Support:</span> Ensuring readiness and providing support during launch.
                   </div>
                 </li>
              </ul>
            </div>

            {/* Optimization & Support Services. Adjust heading and text color for dark mode. */}
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-purple-700 dark:text-purple-400"> {/* Default purple-700, add dark:text-purple-400 */}
                Optimization & Management
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Default text-gray-600, add dark:text-gray-300 */}
                To maximize ROI, your ERP system needs ongoing care, optimization, and strategic evolution
                as your business grows and changes.
              </p>
              {/* List text - inheriting text color from parent ul/li or using dark:text-gray-300 */}
               <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300"> {/* Default text-gray-700, add dark:text-gray-300 */}
                <li className="flex items-start">
                  {/* Icons keep their color classes */}
                  <RefreshCcw className="w-7 h-7 text-indigo-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">ERP Upgrades & Updates:</span> Keeping your system current with the latest features and security.
                  </div>
                </li>
                 <li className="flex items-start">
                  {/* Icons keep their color classes */}
                  <Scale className="w-7 h-7 text-purple-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">Performance Tuning & Audit:</span> Optimizing system speed and reviewing configurations.
                  </div>
                </li>
                <li className="flex items-start">
                   {/* Icons keep their color classes */}
                  <Combine className="w-7 h-7 text-teal-600 flex-shrink-0 mr-4 mt-0.5" />
                  <div>
                    <span className="font-semibold">System Integration:</span> Connecting ERP with other crucial business applications.
                  </div>
                </li>
                <li className="flex items-start">
                  {/* Icons keep their color classes */}
                  <FileText className="w-7 h-7 text-orange-600 flex-shrink-0 mr-4 mt-0.5" />
                   <div>
                     <span className="font-semibold">Reporting & Analytics Enhancements:</span> Developing custom reports and BI capabilities.
                   </div>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific ERP Solutions Grid. Add ID for anchor. Adjust background, card styles for dark mode. */}
      <section id="solutions-section" className="py-12 bg-white dark:bg-gray-900"> {/* Default bg-white, add dark:bg-gray-900 and ID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Section Heading with ERP Color Theme Gradient */}
           <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Specialized ERP Implementations")}
          </h2>
           {/* Intro Paragraph. Adjust text color for dark mode. */}
          <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"> {/* Default text-gray-600, add dark:text-gray-300 */}
             We offer specialized expertise in implementing and tailoring ERP solutions across various
             functional areas critical to enterprise operations.
          </p>
          {/* Grid displaying Solution Cards. Adjust card styles for dark mode. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {erpSolutions.map((solution, index) => (
              <div key={index}
                   className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200
                              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"> {/* Dark mode bg, border, hover shadow */}
                <div className="flex items-center mb-6">
                   {/* Icons keep their color classes */}
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

      {/* Partner Section - Using ERP Partner list. Adjust background, card styles for dark mode. */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800"> {/* Default bg-gray-100, add dark:bg-gray-800 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           {/* Section Heading with ERP Color Theme Gradient */}
          <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Our Leading ERP Technology Partners")}
          </h2>
           {/* Intro Paragraph. Adjust text color for dark mode. */}
           <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"> {/* Default text-gray-600, add dark:text-gray-300 */}
              We are certified partners and experts in implementing solutions from the world's
              leading Enterprise Resource Planning software providers.
          </p>
           {/* Grid displaying Partner Logos. Adjust card styles for dark mode. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center">
            {erpPartnerLogos.map((p) => (
              <div
                key={p.name}
                // Ensure items are centered within the flex column
                className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full
                            bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl"> {/* Dark mode bg, border, hover shadow */}
                 {/* Images don't automatically change in dark mode. The dark card background helps, but may not be perfect. */}
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  // Reduced height classes slightly (h-12, md:h-14).
                  className="h-12 md:h-14 object-contain transition-all duration-300 ease-in-out mb-4"
                />
                 {/* Partner Name text. Adjust text color for dark mode. */}
                 <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mt-auto">{p.name}</p> {/* Default text-gray-700, add dark:text-gray-300 */}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call To Action - ERP Focus. Gradient works well in dark mode, text is already light. */}
       <section className="py-12 bg-gradient-to-r from-indigo-700 to-purple-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          {/* CTA Title - already white, no change needed */}
          <h3 className="text-4xl font-bold mb-6">
             Elevate Your Business Operations with the Right ERP
          </h3>
           {/* CTA paragraph - text is already light indigo, suitable for dark mode */}
          <p className="mb-10 text-xl text-indigo-100 leading-relaxed">
            Considering a new ERP system, need to optimize your current one,
            or planning a major upgrade? Our ERP experts are ready to help.
          </p>

           {/* Buttons. Red background and white text work well in dark mode. Border and icon are white. */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Talk To Experts button - no changes needed for dark mode styling */}
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-[#e94c51] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Discuss Your ERP Needs
              </span>
              {/* Icon circle - white border works */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                 {/* Icon inside is white */}
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            {/* Explore Solutions button - no changes needed for dark mode styling. Anchor link updated. */}
            <Link
              to="/solutions" // Anchor link to the solutions grid section ID
               className="group flex items-center rounded-full bg-[#e94c51] px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Explore Our ERP Services
              </span>
              {/* Icon circle - white border works */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                {/* Icon inside is white */}
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ERP;