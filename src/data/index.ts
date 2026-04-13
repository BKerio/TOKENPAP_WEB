// src/data/index.ts
import { Cpu, Shield, WifiIcon, Code } from "lucide-react";

// hero section slides
import HeroImage1 from "@/assets/africa.avif";
import HeroImage2 from "@/assets/innovate.avif";
import HeroImage3 from "@/assets/savannah.avif";
import HeroImage4 from "@/assets/meters.avif";
import HeroImage5 from "@/assets/iso.avif";

import FeaturedImage1 from "@/assets/data-center.avif";
import FeaturedImage2 from "@/assets/cybersec.avif";
import FeaturedImage3 from "@/assets/ai_case.avif";
// Local partner logos
import HuaweiLogo from "@/assets/partners/Picture4.png";
import DellLogo from "@/assets/partners/Picture2.png";
import CheckPointLogo from "@/assets/partners/Picture16.png";
import OracleLogo from "@/assets/partners/Picture5.png";
import HpeLogo from "@/assets/partners/Picture3.png";




// Local testimonial images
import PrecisionDrones from "@/assets/testimonials/Picture5.png";
import EleganceDesigners from "@/assets/testimonials/Picture2.png";
import VilcomNetwork from "@/assets/testimonials/Picture11.png";
import KenyaPower from "@/assets/testimonials/Picture20.png";
import SignVrse from "@/assets/testimonials/signvrse.png";
import SRC from "@/assets/testimonials/Picture9.png";
import IndoEmbassy from "@/assets/testimonials/Picture18.png";
import KenyaPort from "@/assets/testimonials/Picture1.png";
import HealthStrat from "@/assets/testimonials/Picture17.png"
import CooperativeBank from "@/assets/testimonials/Picture3.png";
import Afosi from "@/assets/testimonials/Picture8.png";
import KSMS from "@/assets/testimonials/Picture7.png";
import PCEA from "@/assets/testimonials/Picture10.png";
import KenyaRailways from "@/assets/testimonials/Picture12.png";
import KSB from "@/assets/testimonials/Picture19.png";




export const partnersList = [
  { id: 1, name: "Huawei", logo: HuaweiLogo },
  { id: 2, name: "Dell", logo: DellLogo },
  { id: 3, name: "CheckPoint", logo: CheckPointLogo },
  { id: 4, name: "Oracle", logo: OracleLogo },
  { id: 5, name: "HPE", logo: HpeLogo },




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
  {
    id: 11,
    name: "Health Strat",
    image: HealthStrat,
    message: "Working with them elevated our telehealth platform’s reliability and user engagement. They implemented seamless video-consultation features, secure patient records, and real-time analytics dashboards. Their responsive support and medical-grade expertise have been invaluable.",
    rating: 5,
  },
  {
    id: 12,
    name: "Africa For Sustainability Initiative",
    image: Afosi,
    message: "Their custom sustainability-reporting tool has transformed how we measure and showcase our impact across multiple projects. With intuitive graphs, automated data feeds, and robust export options, our stakeholder communications are now clearer, more compelling, and fully auditable.",
    rating: 5,
  },
  {
    id: 13,
    name: "Kenya School for Monetary Studies",
    image: KSMS,
    message: "They designed an e-learning platform tailored to our advanced finance curriculum. Features like interactive case studies, secure assessments, and real-time instructor feedback have enhanced student engagement and learning outcomes. Implementation was smooth and on schedule.",
    rating: 5,
  },
  {
    id: 14,
    name: "Presbyterian Church of East Africa",
    image: PCEA,
    message: "Their thoughtful approach to community-engagement technology helped us create a mobile app for congregation management and outreach. With prayer requests, event calendars, and donation tracking, our members feel more connected than ever. Support has been prompt and reliable.",
    rating: 5,
  },
  {
    id: 15,
    name: "Kenya Society For The Blind",
    image: KSB,
    message: "They delivered an accessible information portal optimized for screen readers, audio navigation, and large-print options. Their focus on universal design principles ensures that our visually impaired members can easily access resources, events, and support services.",
    rating: 5,
  },

];

export const services = [
  {
    title: "Applications, Databases & Software Development",
    subtitle: "Custom Software Solutions",
    icon: Code,
    path: "/Applications",
    image: "https://img.freepik.com/premium-photo/curios-it-engineer-standing-middle-working-data-center-server-room_488220-873.jpg?w=900",
    description: "Your challenges demand more than code; you require bespoke digital artistry. We engineer cutting-edge applications and databases that don’t just solve problems; they redefine industries. From AI-driven analytics to mission-critical databases, our solutions are precision-tuned to your ambitions. Think faster decisions, seamless scalability, and a competitive edge sharpened to perfection.",
    highlights: [
      "Custom software development",
      "Database design & management",
      "Web & mobile application development",
      "API integration & development",
      "Cloud-native application development"
    ]
  },
  {
    title: "Networking Solutions",
    subtitle: "Networking & Connectivity",
    icon: WifiIcon,
    path: "/Networking",
    image: "https://img.freepik.com/free-photo/network-switch-with-cables_1137-6.jpg?t=st=1746780783~exp=1746784383~hmac=88c3651063496308bc4341432619a5e2a709edbaa5b9b578f849235c31ade6aa&w=900",
    description: "Your empire spans continents. Our selection of zero-latency networking fabric from reliable OEMs will ensure every user, whether in the boardroom or halfway across the globe, to operate like they’re at the heart of your infrastructure. With integration of software-defined networking (SDN) and multi-layered redundancy, we will turn complexity into seamless, lightning-fast access.",
    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration"
    ]
  },
  {
    title: "Cyber Security & Data Loss Prevention",
    subtitle: "Advanced Threat Protection",
    icon: Shield,
    path: "/Cybersecurity",
    image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?t=st=1746781511~exp=1746785111~hmac=e4ccaafcf3d05fffa67177860d0abbed45cc6a9e470f1174349ea1e0399fc145&w=996",
    description: "In a world of wolves, we are your war machines. Our cybersecurity suite isn’t just a shield - it’s an AI-powered sentinel that hunts threats before they breathe. From quantum-resistant encryption to behavior - based anomaly detection, we guard your data with a brutality that leaves no room for error.",
    highlights: [
      "Real-time threat detection & response",
      "Compliance management",
      "Security awareness training",
      "Penetration testing & audits",
      "Incident response planning"
    ]

  },
  {
    title: "Enterprise Resource Planning",
    subtitle: "ERP & Business Process Automation",
    icon: Code,
    path: "/Enterprisesolutions",
    image: "https://img.freepik.com/premium-photo/enterprise-resource-management-erp-software-system-business-resources-plan_31965-6467.jpg?w=996",
    description: "Your business isn't just processes - it's a battlefield of ambition. Our AI-driven Enterprise Resource Planning systems don't just streamline workflows; they orchestrate empires. We transform fragmented operations into a weaponized advantage through ruthless operational efficiency and predictive command.",

    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration"
    ]
  },
  {
    title: "Software & Hardware Infrastructure",
    subtitle: "Infrastructure",
    icon: Cpu,
    path: "/Infrastructure",
    image: "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?t=st=1746692093~exp=1746695693~hmac=ac9e278e20f4a920c47a2abd440d65e9107334b35adb78c1c81f0098d05e7e46&w=996",
    description: "We understand that behind every revolution lies infrastructure engineered to perfection. Our carefully selected and optimized high-availability compute and storage platforms are the silent titans of your success; our aim is to make your enterprise relentless, resilient, and ready to scale at the speed of your ambition. With 99.999% uptime and enterprise-grade redundancy, your applications will not just run; they will dominate.",
    highlights: [
      "Full-stack cloud migration services",
      "Multi-cloud management & optimization",
      "Disaster recovery planning",
      "Cost management & optimization",
      "Kubernetes & container orchestration"
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