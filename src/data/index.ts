// src/data/index.ts
import { Home, Building2, Building, Briefcase, Droplets, Landmark, GraduationCap, Factory, Shield, LucideChevronUpSquare } from "lucide-react";

// hero section slides
import HeroImage1 from "@/assets/tokenpap.avif";
import HeroImage2 from "@/assets/meters1.avif";
import HeroImage3 from "@/assets/sunset-savannah.avif";
import HeroImage4 from "@/assets/meters.avif";
import HeroImage5 from "@/assets/4166127.avif";

import FeaturedImage1 from "@/assets/data-center.avif";
import FeaturedImage2 from "@/assets/cybersec.avif";
import FeaturedImage3 from "@/assets/ai_case.avif";
// Local partner logos
import TsavoLogo from "@/assets/partners/tsavo.png";
import KenyaPowerLogo from "@/assets/partners/kenyapower.png";
import MilleniumLogo from "@/assets/partners/millenium.png";
import AfosiLogo from "@/assets/partners/afosi_logo.png";
import SafaricomLogo from "@/assets/partners/safaricom.png";
import SignvrseLogo from "@/assets/partners/signvrse.png";




// Local testimonial images
import PrecisionDrones from "@/assets/testimonials/Picture5.png";
import EleganceDesigners from "@/assets/testimonials/Picture2.png";
import VilcomNetwork from "@/assets/testimonials/Picture11.png";
import KenyaPower from "@/assets/testimonials/Picture20.png";
import SignVrse from "@/assets/testimonials/signvrse.png";
import SRC from "@/assets/testimonials/Picture9.png";
import IndoEmbassy from "@/assets/testimonials/Picture18.png";
import KenyaPort from "@/assets/testimonials/Picture1.png";
import CooperativeBank from "@/assets/testimonials/Picture3.png";
import KenyaRailways from "@/assets/testimonials/Picture12.png";




export const partnersList = [
  { id: 1, name: "Tsavo Energy", logo: TsavoLogo},
  { id: 2, name: "Kenya Power", logo: KenyaPowerLogo },
  { id: 3, name: "Millenium", logo: MilleniumLogo },
  { id: 4, name: "Afosi", logo: AfosiLogo },
  { id: 5, name: "Safaricom", logo: SafaricomLogo },
  { id: 6, name: "Signvrse", logo: SignvrseLogo },




];

export const testimonials = [
  {
    id: 1,
    name: "Kenya Ports Authortiy",
    image: KenyaPort,
    message: "Working with this team exceeded our expectations in every way. Their innovative problem solving, clear communication, and deep industry expertise helped us modernize operations, streamline workflows, and unlock new efficiencies. We now view them as a strategic partner for ongoing success.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kenya Railways Corporation",
    image: KenyaRailways,
    message: "Their dedication to excellence shone through from day one. They listened carefully to our challenges, designed tailored solutions, and executed flawlessly. Thanks to their responsiveness and technical prowess, our rail network’s IT infrastructure is now faster, more reliable, and future-ready.",
    rating: 5,
  },
  {
    id: 3,
    name: "Co-operative Bank of Kenya",
    image: CooperativeBank,
    message: "This team delivered outstanding results under tight timelines. Their expert guidance, agile development approach, and proactive support transformed our digital banking platform. Customer satisfaction has soared and internal processes are vastly more efficient. We couldn’t be happier with the partnership.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kenya Power & Lighting Company",
    image: KenyaPower,
    message: "We engaged them to modernize our billing and grid-management systems, and the impact has been remarkable. Their deep technical expertise, collaborative spirit, and unwavering commitment to quality gave us a robust, scalable solution that serves customers more reliably than ever.",
    rating: 5,
  },
  {
    id: 5,
    name: "Elegance Designers & Printers",
    image: EleganceDesigners,
    message: "They tackled our complex print workflow challenges with creativity and precision. Their team designed custom software that seamlessly integrates design approvals, scheduling, and print-run monitoring. As a result, production errors have plummeted and turnaround times have improved dramatically.",
    rating: 5,
  },

  {
    id: 6,
    name: "Vilcom Networks",
    image: VilcomNetwork,
    message: "We partnered with them to overhaul our network monitoring and client portal. Their team delivered intuitive dashboards, automated alerting, and robust security features. The result is a more transparent, efficient service that our customers love and trust.",
    rating: 5,
  },
  {
    id: 7,
    name: "Precision Drones",
    image: PrecisionDrones,
    message: "Their expertise in IoT and aerial data analytics took our drone operations to the next level. They built a custom flight-planning tool and real-time image-processing pipeline that drastically improved mission efficiency and data accuracy. Collaboration was seamless throughout.",
    rating: 5,
  },
  {
    id: 8,
    name: "SignVrse",
    image: SignVrse,
    message: "From initial consultation through deployment, their professionalism and design sensibility impressed us. They delivered an interactive signage platform with powerful remote management features and rich analytics. Our digital displays have never looked better or been easier to control.",
    rating: 5,
  },
  {
    id: 9,
    name: "Salaries & Remuneration Commission",
    image: SRC,
    message: "They modernized our compensation-management system with meticulous attention to data integrity and user experience. The new platform streamlines salary benchmarking, approvals, and reporting, delivering greater transparency and faster decision cycles across our organization.",
    rating: 5,
  },
  {
    id: 10,
    name: "Indonesian Embassy",
    image: IndoEmbassy,
    message: "Their team created a secure, multilingual events and visa-processing portal for our diplomatic mission. They handled sensitive data with the utmost professionalism and compliance. The resulting system is intuitive for users and has significantly reduced processing times.",
    rating: 5,
  },
];

export const services = [
  {
    title: "For Property Owners",
    subtitle: "Landlord & Residential Solutions",
    icon: Home,
    path: "/solutions/property-owners",
    image: "https://img.freepik.com/premium-photo/modern-apartment-building-exterior-urban-setting_185193-47125.jpg?w=800",
    description: "Eliminate billing disputes and stop subsidising your tenants' utility costs. TokenPap's prepaid metering platform lets property owners install, manage, and profit from electricity, water, and gas meters across multiple units — all from one dashboard. Tenants buy their own tokens; you focus on your returns.",
    highlights: [
      "Zero-debt billing — tenants prepay for utilities",
      "Remote meter monitoring and control",
      "Automated token vending via SMS, USSD, or App",
      "Multi-property portfolio management",
      "Detailed consumption reports per unit"
    ]
  },
  {
    title: "For Property Managers",
    subtitle: "Estate & Block Management",
    icon: Building2,
    path: "/solutions/property-managers",
    image: "https://img.freepik.com/premium-photo/business-people-meeting-modern-office_185193-55014.jpg?w=800",
    description: "Managing multiple landlords and hundreds of tenants is complex. TokenPap simplifies utility management with a single platform where property managers can onboard new units, issue tokens, track consumption, and resolve disputes instantly — reducing operational overhead and boosting tenant satisfaction.",
    highlights: [
      "Centralised multi-landlord dashboard",
      "Automated billing and token issuance",
      "Tenant self-service portal",
      "Escalation alerts for tamper or low-credit events",
      "Audit trails and compliance reporting"
    ]
  },
  {
    title: "For Property Developers",
    subtitle: "New Development Integration",
    icon: Building,
    path: "/solutions/property-developers",
    image: "https://img.freepik.com/premium-photo/construction-site-with-cranes-modern-buildings_185193-47985.jpg?w=800",
    description: "Future-proof your developments from day one. We work alongside developers to specify, supply, and commission prepaid and smart metering infrastructure during construction — ensuring every unit is IoT-ready, KPLC/AWSB-compliant, and attractive to modern buyers and tenants.",
    highlights: [
      "Metering design and specification consulting",
      "Bulk supply and on-site commissioning",
      "Integration with property management software",
      "Compliance with local regulatory standards",
      "Handover training for estate management teams"
    ]
  },
  {
    title: "For Business Parks",
    subtitle: "Commercial Estate Solutions",
    icon: Briefcase,
    path: "/solutions/business-parks",
    image: "https://img.freepik.com/premium-photo/modern-business-park-aerial-view_185193-47126.jpg?w=800",
    description: "Large commercial estates demand precision utility cost allocation across dozens of tenants. TokenPap delivers sub-metering for electricity, water, and gas — enabling transparent billing by actual consumption, reducing disputes, and helping park managers demonstrate sustainability commitments to investors.",
    highlights: [
      "Sub-metering per tenant or floor",
      "Real-time consumption dashboards",
      "Automated invoicing integration",
      "Leak and waste detection alerts",
      "Carbon footprint and sustainability reporting"
    ]
  },
  {
    title: "For Water Utilities",
    subtitle: "Revenue Protection & AMI",
    icon: Droplets,
    path: "/solutions/water-utilities",
    image: "https://img.freepik.com/premium-photo/water-treatment-plant-infrastructure_185193-47127.jpg?w=800",
    description: "Non-revenue water is one of the biggest threats to utility profitability. TokenPap's smart metering solutions — including LoRaWAN and NB-IoT network meters — help water utilities detect leaks, eliminate illegal connections, enforce prepayment, and build an Advanced Metering Infrastructure (AMI) for complete network visibility.",
    highlights: [
      "AMI rollout with LoRa and NB-IoT technologies",
      "Real-time leak and burst detection",
      "Prepaid enforcement to eliminate debt",
      "District metered area (DMA) management",
      "Revenue assurance analytics"
    ]
  },
  {
    title: "For Municipalities",
    subtitle: "Smart City Utility Management",
    icon: Landmark,
    path: "/solutions/municipalities",
    image: "https://img.freepik.com/premium-photo/smart-city-infrastructure-aerial-view_185193-47128.jpg?w=800",
    description: "Local authorities managing water and power distribution across large populations need reliable, scalable metering infrastructure. TokenPap supports municipalities with bulk smart meter deployments, centralised AMI platforms, and data analytics tools that improve revenue collection and service delivery to citizens.",
    highlights: [
      "Large-scale smart meter procurement and deployment",
      "Centralised AMI data management platform",
      "Citizen self-service payment portals",
      "Revenue collection and arrears management",
      "Regulatory compliance and audit reporting"
    ]
  },
  {
    title: "For Schools",
    subtitle: "Education Sector Utility Control",
    icon: GraduationCap,
    path: "/solutions/schools",
    image: "https://img.freepik.com/premium-photo/modern-school-campus-exterior_185193-47129.jpg?w=800",
    description: "Schools and universities often face uncontrolled utility expenditure. TokenPap's prepaid metering system enables institutions to set budgets per hostel block, laboratory, or facility — ensuring consumption stays within budget and helping finance teams accurately allocate utility costs across departments.",
    highlights: [
      "Budget-controlled prepaid metering per block",
      "Hostel and facility-level sub-metering",
      "Mobile token purchase for students",
      "Finance team reporting and cost allocation",
      "Tamper alerts and security notifications"
    ]
  },
  {
    title: "For Factories",
    subtitle: "Industrial Utility Optimisation",
    icon: Factory,
    path: "/solutions/factories",
    image: "https://img.freepik.com/premium-photo/modern-factory-interior-industrial-plant_185193-47130.jpg?w=800",
    description: "Manufacturing facilities consume enormous amounts of electricity, water, and gas. TokenPap's smart metering platform provides production managers with granular consumption data per machine or production line, enabling energy audits, waste reduction, and integration with ERP and SCADA systems.",
    highlights: [
      "Machine and line-level sub-metering",
      "Energy audit data and efficiency reporting",
      "ERP and SCADA integration",
      "Peak demand management and alerts",
      "Gas and steam metering for process industries"
    ]
  },
  {
    title: "For Hospitals",
    subtitle: "Healthcare Facility Solutions",
    icon: LucideChevronUpSquare,
    path: "/solutions/hospitals",
    image: "https://img.freepik.com/premium-photo/modern-hospital-building-exterior_185193-47131.jpg?w=800",
    description: "Hospitals cannot afford power interruptions or unplanned utility costs. TokenPap provides hospitals with reliable prepaid metering, backup power monitoring, and ward-level consumption tracking — helping finance teams control costs while ensuring critical care infrastructure remains energised at all times.",
    highlights: [
      "Ward and department-level consumption tracking",
      "Critical load monitoring and priority alerts",
      "Backup power and generator integration",
      "Detailed utility cost allocation for audits",
      "Compliance with health facility energy regulations"
    ]
  },
  {
    title: "For Gated Communities",
    subtitle: "Residential Estate Management",
    icon: Shield,
    path: "/solutions/gated-communities",
    image: "https://img.freepik.com/premium-photo/luxury-gated-community-residential-estate_185193-47132.jpg?w=800",
    description: "Gated communities and homeowner associations need fair, transparent utility billing for every household. TokenPap delivers individual prepaid meters for electricity, water, and gas with a resident-facing app for token purchases, consumption tracking, and direct communication with the estate management office.",
    highlights: [
      "Per-household prepaid metering",
      "Resident self-service app for token purchases",
      "Estate management oversight dashboard",
      "Communal area utility monitoring",
      "Automated levy and billing integration"
    ]
  },
];

export interface ProjectResult {
  value: number;
  unit: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  results: ProjectResult[];
  path: string;
}

export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  path?: string;
  linkText?: string;
}

// --- PROJECTS DATA ---
export const projectsList: Project[] = [
  {
    id: 1,
    category: "Infrastructure",
    title: "Kenya Ports Authority – ICT Modernization",
    description: "Led the modernization of Kenya Ports Authority’s IT infrastructure, implementing robust hardware systems and secure networking to enhance operational efficiency and communication across port facilities.",
    challenge: "The Authority faced challenges with outdated hardware, frequent system downtimes, and limited inter-departmental communication due to legacy infrastructure and minimal disaster recovery capabilities.",
    solution: "We upgraded the data center with modern servers, implemented a secure LAN/WAN architecture, deployed enterprise-grade firewalls, and set up backup and disaster recovery solutions. Workstations and network equipment were standardized for consistent performance and easier maintenance.",
    technologies: [
      "Dell PowerEdge Servers",
      "Cisco Switches & Firewalls",
      "Fiber Optic Backbone",
      "HP ProDesk Workstations",
      "VMware vSphere",
      "Windows Server 2022",
      "Structured Cabling Systems"
    ],
    highlights: [
      "Established a redundant and secure network backbone",
      "Centralized IT resources through server virtualization",
      "Enhanced system uptime with proactive monitoring tools",
      "Improved user support with standardized hardware deployments"
    ],
    results: [
      { value: 99.9, unit: "%", description: "Network uptime after deployment" },
      { value: 80, unit: "%", description: "Reduction in hardware-related incidents" },
      { value: 50, unit: "%", description: "Faster internal communication and data access" },
      { value: 3, unit: "x", description: "Increase in overall IT capacity and performance" }
    ],
    path: "/casestudy1"
  },
  {
    id: 2,
    category: "Infrastructure",
    title: "Kenya Railways Corporation – ICT Systems Revamp",
    description: "Partnered with Kenya Railways Corporation to overhaul their outdated ICT infrastructure, enhancing communication systems, hardware reliability, and centralized operations across regional stations.",
    challenge: "Kenya Railways relied on legacy systems that suffered frequent hardware failures, lacked secure connectivity between offices, and could not support modern enterprise software or real-time communication. This caused delays in internal processes and limited digital transformation efforts.",
    solution: "We executed a structured ICT infrastructure upgrade including installation of industrial-grade servers, network backbone modernization, high-speed internet connectivity, surveillance systems, and reliable power backup solutions. The overhaul supported future scalability and integration of smart transport systems.",
    technologies: [
      "Lenovo ThinkSystem Servers",
      "Fortinet Network Firewalls",
      "Fiber Optic Backbone",
      "Access Control & CCTV Systems",
      "Enterprise Wi-Fi (Ubiquiti/Aruba)",
      "Smart Power Backup & UPS Systems"
    ],
    highlights: [
      "Established secure, high-speed LAN/WAN across stations",
      "Minimized hardware downtime through industrial-grade replacements",
      "Enabled centralized user and asset management",
      "Improved data security and system resilience"
    ],
    results: [
      { value: 85, unit: "%", description: "Increase in system reliability" },
      { value: 60, unit: "%", description: "Reduction in network-related delays" },
      { value: 50, unit: "%", description: "Boost in internal communication efficiency" }
    ],
    path: "/casestudy1"
  },

  {
    id: 3,
    category: "Healthcare",
    title: "Nairobi Metropolitan Services – Digital Health Platform",
    description: "Developed a comprehensive, secure telehealth platform to modernize service delivery for Nairobi Metropolitan Services (NMS), enhancing patient experience and operational efficiency.",
    challenge: "NMS faced fragmented health systems with no centralized data sharing, delays in patient care coordination, and limited remote service capabilities. There was also a growing need to integrate real-time monitoring and communication tools for better public health outcomes.",
    solution: "We engineered a full-stack digital platform connecting patients, providers, and health centers via real-time communication tools. Core features included online ticketing, live monitoring, fleet and asset tracking, and integrated electronic health records. The platform centralized information flow through a Command & Control system with intuitive dashboards for improved decision-making.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "Twilio Video",
      "AWS (EC2, Shield, RDS)",
      "Docker"
    ],
    highlights: [
      "Secure real-time video consultations and appointment scheduling",
      "Integrated EHR and patient data synchronization",
      "Live dashboards for Command & Control visibility",
      "Fleet and asset management with geolocation tracking",
      "Role-based access control and end-to-end encryption"
    ],
    results: [
      { value: 98, unit: "%", description: "Patient satisfaction rate reported" },
      { value: 50, unit: "%", description: "Reduction in missed appointments" },
      { value: 70, unit: "%", description: "Increase in remote healthcare access" },
      { value: 65, unit: "%", description: "Improved operational decision-making speed" }
    ],
    path: "/projects/nms-digital-health"
  },

  {
    id: 4,
    category: "Finance",
    title: "DFID Project – BioSIM Supply Chain Finance Platform",
    description: "Developed an intelligent financial and operational planning system to optimize supply chain performance, align business objectives, and automate sales invoicing for the confectionery industry.",
    challenge: "The project required a dynamic platform capable of aligning strategic, financial, commercial, and operational goals across supply chains in the confectionery sector. The client faced difficulties in planning inventory, responding to real-time demand changes, and tracking invoicing efficiency.",
    solution: "We implemented a centralized planning system that integrates cross-functional inputs to generate short-, mid-, and long-term supply forecasts. The system leverages real-time demand and supply signals to optimize inventory levels and mitigate constraints. A built-in finance module automates sales invoicing and aligns production targets with financial and operational KPIs.",
    technologies: ["Power BI", "Python", "Microsoft Dynamics 365", "Azure SQL Database", "SAP FICO", "Excel Macros"],
    highlights: [
      "Integrated financial planning and supply chain alignment",
      "Automated sales invoicing across channels",
      "Real-time inventory and demand-supply visibility",
      "Improved planning accuracy through data-driven insights",
      "Collaborative cross-functional platform for business units"
    ],
    results: [
      { value: 80, unit: "%", description: "Reduction in supply-demand mismatches" },
      { value: 65, unit: "%", description: "Increase in invoicing efficiency" },
      { value: 40, unit: "%", description: "Decrease in inventory holding costs" },
      { value: 90, unit: "%", description: "Alignment between financial and operational KPIs" }
    ],
    path: "/projects/finance-biosim"
  },

  {
    id: 5,
    category: "Cybersecurity",
    title: "Salaries & Remuneration Commission – Data Protection and Cybersecurity Platform",
    description: "Implemented a government-grade cybersecurity framework to safeguard sensitive payroll data, ensure regulatory compliance, and mitigate risks associated with insider threats and external breaches.",
    challenge: "SRC faced growing cybersecurity threats targeting sensitive salary structures, payroll data, and internal communications. There was a lack of centralized threat detection, inadequate data loss prevention controls, and compliance gaps with emerging data protection laws.",
    solution: "We developed and deployed a secure digital infrastructure focused on Data Loss Prevention (DLP), identity and access management (IAM), and continuous monitoring. The platform includes automated encryption protocols, user behavior analytics, and incident response workflows. We also ensured alignment with Kenya's Data Protection Act and ISO/IEC 27001 standards.",
    technologies: [
      "Microsoft Defender for Endpoint",
      "Fortinet DLP",
      "Zecurion DLP",
      "AWS KMS (Key Management Service)",
      "SIEM (Security Information and Event Management)",
      "OAuth 2.0 / SAML",
      "Zero Trust Network Access (ZTNA)"
    ],
    highlights: [
      "Implemented real-time DLP and access control across endpoints",
      "Encrypted sensitive payroll and personnel records",
      "Automated threat detection and mitigation system",
      "Role-based access management and policy enforcement",
      "Auditable compliance logs and reporting"
    ],
    results: [
      { value: 100, unit: "%", description: "Regulatory compliance with Kenya’s Data Protection Act" },
      { value: 75, unit: "%", description: "Reduction in potential data breach vectors" },
      { value: 60, unit: "%", description: "Decrease in internal data access violations" },
      { value: 90, unit: "%", description: "Improved visibility into cybersecurity posture" }
    ],
    path: "/casestudy2"
  }

];

// --- SUCCESS STORIES DATA ---
export const successStories: SuccessStory[] = [
  {
    id: 1,
    category: "FinTech",
    title: "Automating Financial Reporting",
    description: "Built an automated system for a financial institution to generate complex regulatory reports, significantly reducing manual effort and error rates.",
    path: "/projects/fintech-reporting",
    linkText: "Learn More"
  },
  {
    id: 2,
    category: "Education",
    title: "Developing a Remote Learning Portal",
    description: "Created a robust and interactive online learning platform for a university, facilitating virtual classes, assignment submission, and progress tracking.",
    path: "/projects/education-portal",
    linkText: "View Details"
  },
  {
    id: 3,
    category: "Real Estate",
    title: "Launching a Property Management App",
    description: "Designed and developed a mobile application simplifying property listing, tenant communication, and maintenance request management for real estate agents.",
    path: "/projects/realestate-app"
  },
  {
    id: 4,
    category: "Manufacturing",
    title: "Implementing an IoT Monitoring Solution",
    description: "Deployed an IoT solution to monitor factory equipment in real-time, enabling predictive maintenance and optimizing production efficiency.",
    // path: null // Example of a story with no link yet
  },
  {
    id: 5,
    category: "Non-Profit",
    title: "Building a Donor Management System",
    description: "Created a custom CRM to streamline donor relations, manage campaigns, and track contributions effectively for a large non-profit organization.",
    // path: null
  },
  {
    id: 6,
    category: "Legal Tech",
    title: "Developing Case Management Software",
    description: "Engineered a secure web application for law firms to manage cases, documents, deadlines, and client communication in a single platform.",
    // path: null
  },
];



export const featuredProjects = [
  { image: FeaturedImage1, category: "Infrastructure", title: "Enterprise Hardware & Software Infrastructure", description: "Protect networks, applications, and data by identifying vulnerabilities, preventing breaches, encrypting sensitive information, implementing policies and technologies to effectively monitor, mitigate, recover from threats.", path: "/casestudy1" },
  { image: FeaturedImage2, category: "Cybersecurity", title: "Cyber Security & Data Loss Prevention", description: "Establishes secure, scalable, resilient IT environments by integrating robust servers, storage, networking, virtualization, operating systems, middleware, and management tools to support critical business applications.", path: "/casestudy2" },
  { image: FeaturedImage3, category: "AI & Machine Learning", title: "Predictive & Generative Artificial Intelligence", description: "Leverages machine learning algorithms to analyze large-scale historical data, forecast trends, and autonomously generate creative content, solutions, and insights, driving innovation and informed decision-making.", path: "/casestudy3" },
];


// index.ts (Assuming this is where heroSlides is defined)

export const heroSlides = [
  {
    id: 1,
    title: "Welcome to TokenPap",
    subtitle: "Your trusted prepaid and smarter metering solution for efficient energy management",
    image: HeroImage1
  },
  {
    id: 2,
    title: "For Landlords",
    subtitle: "Boost your income, eliminate billing disputes, and manage tenants with ease",
    image: HeroImage2
  },
  {
    id: 3,
    title: "For Utilities",
    subtitle: "Improve revenue collection and streamline operations with smart metering solutions",
    image: HeroImage3
  },
  {
    id: 4,
    title: "For Tenants",
    subtitle: "Pay only for what you use and take full control of your energy budget",
    image: HeroImage4
  },
  {
    id: 5,
    title: "Token-As-A-Service",
    subtitle: "Seamlessly request and manage tokens through secure system-to-system integration",
    image: HeroImage5,
    overrideLink2: {
      text: "Learn More",
      to: "/token-service",
    },
  },
];


export interface EcosystemCompany {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  learnMoreUrl: string; // <-- NEW PROPERTY
  themeColor: string;
}


export const cardHoverVariant = {
  rest: {
    y: 0,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
    scale: 1,
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};