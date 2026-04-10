// src/pages/Applications.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code, Database, Cloud, Layers, RefreshCcw, Warehouse, GitBranch, Combine, ArrowDownRight,
  Brain, Sparkles, Settings, SearchCheck, LayoutPanelTop,
} from "lucide-react";


const appDataAIPartnerLogos = [
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1024px-Microsoft_Azure_Logo.svg.png"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
  },
  {
    name: "VMware",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
  },
  // Corrected problematic links to use upload.wikimedia.org or similar direct paths
  {
    name: "Snowflake",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg"
  },
  {
    name: "Redis Database",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"
  },
  {
    name: "Mysql Server",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
  },
  {
    name: "TensorFlow",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
  }
];


const appDataAISolutionsCapabilities = {
    appAIDev: [
        {
            title: "Custom Software Development:",
            description: 'Leveraging <strong class="text-gray-800 dark:text-gray-100">.NET (C#, MVC, WCF, LINQ, EF)</strong>, <strong class="text-gray-800 dark:text-gray-100">Java/J2EE (Spring, Hibernate, Servlets, JSF, JSP, Struts, Eclipse)</strong>, <strong class="text-gray-800 dark:text-gray-100">LAMP (PHP, MySQL, Apache, Linux)</strong>, Node.js, Python, and other frameworks.',
            icon: Code,
            color: "text-blue-600",
        },
        {
            title: "AI/ML Integration:",
            description: 'Building intelligent apps using predictive modeling, cognitive services, NLP, and platforms like <strong class="text-gray-800 dark:text-gray-100">Azure AI</strong>, <strong class="text-gray-800 dark:text-gray-100">AWS AI/ML</strong>, <strong class="text-gray-800 dark:text-gray-100">GCP AI Platform</strong>.',
            icon: Brain,
            color: "text-purple-600",
        },
        {
            title: "Frontend & UI/UX Development:",
            description: 'Expert in <strong class="text-gray-800 dark:text-gray-100">HTML, CSS, JavaScript (jQuery, Angular, React, Vue)</strong>, responsive design, and UI component libraries like <strong class="text-gray-800 dark:text-gray-100">Infragistics</strong> and <strong class="text-gray-800 dark:text-gray-100">Telerik</strong>.',
            icon: LayoutPanelTop,
            color: "text-yellow-600",
        },
        {
             title: "Quality Assurance & Testing:",
             description: 'Comprehensive testing including unit, integration, regression, and performance testing using tools like <strong class="text-gray-800 dark:text-gray-100">JMeter</strong>, <strong class="text-gray-800 dark:text-gray-100">Selenium</strong>, <strong class="text-gray-800 dark:text-gray-100">SoapUI</strong>, and enterprise testing suites.',
             icon: SearchCheck,
             color: "text-gray-700", // Neutral color - Adjusted below in the return statement for dark mode
        },
         {
             title: "Application Modernization:",
             description: 'Updating legacy systems to modern architectures (Microservices, Cloud-Native), often enhancing with AI capabilities.',
             icon: RefreshCcw,
             color: "text-teal-600",
         },
         {
            title: "MLOps & DevOps Implementation:",
            description: 'Establishing pipelines for <strong class="text-gray-800 dark:text-gray-100">CI/CD</strong> and AI model deployment, monitoring, and lifecycle management.',
            icon: GitBranch,
            color: "text-purple-600",
        },
    ],
    dataAIDataEng: [ // Grouping related capabilities
        {
            title: "Database Design & Optimization:",
            description: 'Expertise in relational databases (<strong class="text-gray-800 dark:text-gray-100">Microsoft SQL Server</strong>, <strong class="text-gray-800 dark:text-gray-100">Oracle</strong>, <strong class="text-gray-800 dark:text-gray-100">MySQL</strong>, <strong class="text-gray-800 dark:text-gray-100">PostgreSQL</strong>, <strong class="text-gray-800 dark:text-gray-100">SQLite</strong>) including <strong class="text-gray-800 dark:text-gray-100">PL/SQL</strong>, and NoSQL databases like <strong class="text-gray-800 dark:text-gray-100">MongoDB</strong>.',
            icon: Database,
            color: "text-blue-600",
        },
         {
            title: "Data Engineering for AI/ML:",
            description: 'Building ETL/ELT pipelines, data preparation, processing large datasets (<strong class="text-gray-800 dark:text-gray-100">Hadoop ecosystem</strong>) for Data Science and Machine Learning.',
            icon: Sparkles,
            color: "text-indigo-600",
        },
        {
            title: "Data Warehousing & Business Intelligence:",
            description: 'Designing and implementing solutions on platforms like <strong class="text-gray-800 dark:text-gray-100">Snowflake</strong>, <strong class="text-gray-800 dark:text-gray-100">Redshift</strong>, using tools like <strong class="text-gray-800 dark:text-gray-100">Power BI</strong>, <strong class="text-gray-800 dark:text-gray-100">SSRS</strong>, <strong class="text-gray-800 dark:text-gray-100">Google Analytics</strong>, and other BI tools.',
            icon: Warehouse,
            color: "text-cyan-600",
        },
         {
            title: "Cloud Data & AI Platforms:",
            description: 'Implementing solutions on cloud-native services on <strong class="text-gray-800 dark:text-gray-100">Azure</strong>, <strong class="text-gray-800 dark:text-gray-100">AWS</strong>, and <strong class="text-gray-800 dark:text-gray-100">GCP</strong> for data storage, processing, and AI model deployment.',
            icon: Cloud,
            color: "text-green-600",
        },
    ]
};


// This list combines some items for the Solutions Grid section
const appDataAISolutionsGrid = [
    // Mapping base solutions/offerings for the grid display
    {
        title: "Custom Application Development",
        description: "Build bespoke web, mobile, or enterprise applications tailored precisely to your unique business processes.",
        icon: Code,
        color: "text-blue-600",
    },
     {
        title: "AI-Powered Application Development",
        description: "Integrate Machine Learning models, NLP, Computer Vision, and AI services.",
        icon: Brain,
        color: "text-purple-600",
     },
     {
        title: "Data Science & ML Model Development",
        description: "Develop, train, and deploy Machine Learning, Deep Learning, and statistical models.",
        icon: Sparkles,
        color: "text-indigo-600",
     },
    {
        title: "Database Design & Optimization",
        description: "Architect and fine-tune scalable, high-performance database solutions.",
        icon: Database,
        color: "text-teal-600",
    },
     {
       title: "MLOps Implementation & Management",
       description: "Establish robust MLOps pipelines for automated ML model lifecycle management.",
       icon: Settings,
       color: "text-orange-600",
     },
    {
        title: "Data Warehouse & AI/BI Implementation",
        description: "Design and build data warehouses, data lakes, and integrated BI tools for intelligent analytics.",
        icon: Warehouse,
        color: "text-cyan-600",
    },
     {
      title: "Cloud Migration (Apps, Data, AI)",
      description: "Seamlessly migrate your legacy applications, databases, and workloads to leading cloud platforms.",
      icon: Cloud,
      color: "text-green-600",
    },
    {
      title: "API Development & Integration",
      description: "Build secure, efficient APIs and integrate disparate applications, data sources, and AI services.",
      icon: Combine,
      color: "text-red-600",
    },
     {
      title: "Web & Mobile Frontend Development",
      description: "Craft intuitive and responsive user interfaces for web and mobile.",
      icon: LayoutPanelTop,
      color: "text-yellow-600",
     },
      {
      title: "Software Testing & Quality Assurance",
      description: "Ensure application reliability and performance through comprehensive testing strategies.",
      icon: SearchCheck,
      color: "text-gray-700", // Adjusted below in the return statement for dark mode
      },

    // Adding explicit solutions derived from the context/discussion, not the original image domains list specifically
     {
        title: "ERP, CRM & CMS Implementation/Integration",
        description: "Expertise in implementing, customizing, and integrating platforms like Microsoft Dynamics 365 (ERP/CRM), SAP, WordPress, Drupal, and more.",
        icon: Layers, // Relevant icon for enterprise systems
        color: "text-blue-700", // Using a slightly different blue for distinction
     },
      {
        title: "E-commerce & Mobile Development",
        description: "Develop custom e-commerce platforms or work with leaders like Magento, Shopify. Build native (Android, iOS) and cross-platform mobile apps (Xamarin).",
        icon: Code, // Reusing Code as relevant for development
        color: "text-blue-600", // Keeping the code icon color
     },
];


const Applications: React.FC = () => {
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
    // Added min-h-screen to ensure dark mode covers the viewport minimum
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">

      {/* Hero Section - Application, Data, AI Theme. Updated Gradient, text already light. */}
      {/* Kept structure: good responsive padding and text scaling */}
      {/* Hero Section - Software Development Theme */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto mt-10">
            {/* Hero Title with badge */}
            <h1 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 drop-shadow">
               {renderSectionBadge("Software & AI Solutions")}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 drop-shadow-sm">
               Transforming Data into Insight and Code into Innovation
            </p>
            <p className="mt-4 text-lg text-red-200 drop-shadow-sm max-w-2xl mx-auto">
              We design, develop, and implement cutting-edge software solutions, unlock
              the value of your data, and build intelligent systems powered by Artificial Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview / Capabilities - Application, Data, AI Focus. */}
      {/* Kept structure: good responsive padding */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - Container layout handles centering */}
          <h2 className="flex items-center justify-center mb-12">
             {renderSectionBadge("Our Core Software & AI Capabilities")}
          </h2>
          {/* Capability Lists Grid - Good responsive grid structure (stacks on mobile, two columns on medium+) */}
          {/* Increased vertical gap slightly for better separation on smaller screens when stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-16"> {/* Adjusted gap-y */}
            {/* Application & AI Development */}
            <div>
              {/* Heading - Good responsive text scaling */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-400"> {/* Added responsive text sizing */}
                Software Engineering & AI Integration
                </h3>
              {/* Intro Paragraph - Good responsive text scaling */}
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Added responsive text sizing */}
                We engineer robust, scalable applications and integrate Artificial Intelligence to create intelligent solutions using modern software development lifecycle (SDLC) methodologies.
              </p>
              {/* List Items */}
               <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg"> {/* Added responsive text sizing to list items */}
                 {appDataAISolutionsCapabilities.appAIDev.map((item, index) => (
                   <li key={index} className="flex items-start">
                     {/* Icons - explicitly handle gray icon for dark mode contrast */}
                     <item.icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color === 'text-gray-700' ? 'text-gray-700 dark:text-gray-300' : item.color} flex-shrink-0 mr-3 md:mr-4 mt-1`} strokeWidth={1.5} /> {/* Adjusted icon size slightly and margin */}
                     <div>
                       {/* Text includes strong tags which handle their dark mode color */}
                       <span className="font-semibold">{item.title}</span>{" "}
                       <span dangerouslySetInnerHTML={{ __html: item.description }} />
                     </div>
                   </li>
                ))}
              </ul>
            </div>

            {/* Database, Data Science & AI Platforms */}
            <div>
               {/* Heading - Good responsive text scaling */}
               <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-700 dark:text-teal-400"> {/* Added responsive text sizing */}
                Data, Database, & AI Platforms
              </h3>
              {/* Intro Paragraph - Good responsive text scaling */}
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Added responsive text sizing */}
                We build scalable, performant database systems, data platforms (including Big Data solutions),
                and the infrastructure needed for advanced Data Science and Artificial Intelligence workloads.
              </p>
              {/* List Items */}
              <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg"> {/* Added responsive text sizing to list items */}
                {appDataAISolutionsCapabilities.dataAIDataEng.map((item, index) => (
                    <li key={index} className="flex items-start">
                       {/* Icons - explicitly handle gray icon for dark mode contrast */}
                       <item.icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color === 'text-gray-700' ? 'text-gray-700 dark:text-gray-300' : item.color} flex-shrink-0 mr-3 md:mr-4 mt-1`} strokeWidth={1.5} /> {/* Adjusted icon size slightly and margin */}
                       <div>
                         {/* Text includes strong tags which handle their dark mode color */}
                           <span className="font-semibold">{item.title}</span>{" "}
                            <span dangerouslySetInnerHTML={{ __html: item.description }} />
                       </div>
                    </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

        {/* Specific Solutions Section (Grid). Added ID for anchor. */}
        {/* Kept structure: good responsive padding */}
      <section id="solutions-section" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - Container layout handles centering */}
           <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Integrated App, Data, & AI Solutions")}
          </h2>
           {/* Intro Paragraph - max-w helps readability, good text scaling */}
           <p className="mt-4 text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"> {/* Added responsive text sizing */}
              We deliver end-to-end solutions covering the full lifecycle of applications, data management, and AI integration, built on proven technologies.
          </p>
          {/* Solution Cards Grid - Good responsive grid structure (stacks on mobile, 2 columns on medium, 3 on large) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Slightly reduced base gap, md gap increased */}
            {/* Mapping over the specific solutions list for the grid */}
            {appDataAISolutionsGrid.map((solution, index) => (
              <div key={index}
                   className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200
                              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl flex flex-col"> {/* Added flex-col to make card content vertically arranged */}
                <div className="flex items-center mb-4 md:mb-6"> {/* Adjusted bottom margin */}
                   {/* Icons - explicitly handle gray icon for dark mode contrast, added responsive size */}
                   <solution.icon
                     className={`w-10 h-10 md:w-12 md:h-12 ${solution.color === 'text-gray-700' ? 'text-gray-700 dark:text-gray-300' : solution.color} flex-shrink-0`}
                     strokeWidth={1.5}
                   />
                   {/* Heading text - Good responsive text scaling */}
                   <h3 className="ml-4 md:ml-5 text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">{solution.title}</h3> {/* Adjusted text size, ml, added leading-tight */}
                </div>
                {/* Description text - Good responsive text scaling */}
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed flex-grow"> {/* Added responsive text size, flex-grow to make descriptions take up space */}
                  {solution.description}
                </p>
                 {/* Added empty div with flex-grow to push text up if needed, optional. */}
                 {/* Or ensure min-height if descriptions are very short/vary greatly, not needed here due to flex-grow on paragraph */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section - Using comprehensive partner list. */}
      {/* Kept structure: good responsive padding */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           {/* Section Heading - Container layout handles centering */}
           <h2 className="flex items-center justify-center mb-12">
              {renderSectionBadge("Our Key Technology Alliances")}
          </h2>
           {/* Intro Paragraph - max-w helps readability, good text scaling */}
           <p className="mt-4 text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"> {/* Added responsive text sizing */}
              We partner with the world's leading technology providers across Cloud, Data, AI, Development Platforms, and Enterprise Software to build innovative solutions.
          </p>
           {/* Partner Logos Grid - Good responsive grid structure (more columns on larger screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 items-stretch justify-center"> {/* Added lg/xl columns */}
            {appDataAIPartnerLogos.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-start p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full
                            bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl">
                 {/* Logos (images) - ENSURE FLEXIBLE SCALING */}
                 {/* Use max-width-full and h-auto along with max-height to prevent distortion and control maximum size */}
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  // Adjusted image sizing for better responsiveness
                  className="max-w-full h-auto object-contain max-h-12 md:max-h-14 transition-all duration-300 ease-in-out mb-3 md:mb-4" // Added max-h, replaced hard h/w, adjusted mb
                  // Removed inline style height: auto as max-w-full h-auto handles this better
                />
                 {/* Partner Name text - Good responsive text scaling, mt-auto keeps name at bottom */}
                 <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mt-auto leading-tight">{p.name}</p> {/* Added leading-tight */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action. */}
      {/* Kept structure: gradient background, responsive padding, and centered content */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added standard responsive px */}
          {/* CTA Title - Good responsive text scaling */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6"> {/* Added responsive text sizing */}
             Build the Future with Intelligent Applications & Data
          </h3>
           {/* CTA paragraph - Good responsive text scaling */}
          <p className="mb-10 text-base md:text-xl text-teal-100 leading-relaxed"> {/* Added responsive text sizing */}
            Ready to innovate with custom applications, optimize your data infrastructure, unlock
            the power of Artificial Intelligence, or integrate powerful enterprise platforms?
            Connect with our experts.
          </p>

           {/* Buttons - Already uses sm:flex-row for stacking */}
           {/* Buttons themselves have padding suitable for mobile, they get wider with text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Talk To Experts button */}
            <Link
              to="/contact"
              className="group flex items-center rounded-full bg-red-500 px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Talk To An Expert
              </span>
              {/* Icon circle */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                {/* Icon inside */}
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>

            {/* Explore Solutions button - Link to anchor */}
            <Link
              to="/solutions"
               className="group flex items-center rounded-full bg-red-500 px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-red-600"
            >
              <span className="mr-4 transform transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Capabilities
              </span>
              {/* Icon circle */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                {/* Icon inside */}
                <ArrowDownRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Applications;