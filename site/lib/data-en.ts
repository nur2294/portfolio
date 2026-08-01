import type { Project, Service } from "@/types";

export const projectsEn: Project[] = [
  {
    id: "1",
    title: "NephroDesk — Dialysis Clinic Management Platform",
    slug: "nephrodesk-klinik-yonetim",
    description:
      "An end-to-end clinical operations platform for dialysis centres. From patient registration to session management, SGK billing integration to laboratory tracking — every clinical process in one system.",
    longDescription:
      "NephroDesk is a comprehensive platform that digitises every operational and clinical process at dialysis centres. It includes patient management, treatment session tracking, laboratory integration, SGK billing, water analysis and staff management modules. It is actively used at private and chain dialysis centres across Turkey.",
    category: "hasta-takip",
    tags: ["Dialysis", "Clinical Management", "SGK", "LIS", "Billing"],
    image: "/images/projects/dialinelog-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "Apache", "REST API", "SOAP/XML"],
    challenge:
      "Meeting the layered requirements of dialysis centres' complex clinical workflows — SGK billing integration, water quality management and multiple user roles (doctor, nurse, technician, administrator) — within a single, consistent platform.",
    solution:
      "A module-based web platform was built where every clinical unit has its own screen, with role-based access control (RBAC), SGK web-service integration and offline-capable operation.",
    result:
      "Active use across 30+ dialysis centres. 85% reduction in paper use, 95% drop in SGK billing errors, 30% improvement in session completion times.",
    featured: true,
    year: 2022,
    client: "Private Dialysis Centres — Turkey",
    country: ["🇹🇷 Turkey"],
    mockup: "/mockups/dashboard.html",
  },
  {
    id: "2",
    title: "NephroGlobal",
    slug: "dsys-patient-care-global",
    description:
      "A multi-country dialysis patient tracking and clinical management platform active at 30+ centres across Turkey, Qatar and Macedonia. Fully integrated with the local LIS system in Macedonia, with a Cyrillic-alphabet-enabled interface.",
    longDescription:
      "NephroGlobal is a multi-tenant clinical platform that adapts to different countries' healthcare regulations, languages and insurance systems. In Macedonia, integration with the local HIS/LIS system automatically pulls patients' laboratory results (haemoglobin, creatinine, potassium, phosphorus, urea, etc.) from the HIS, transfers them to the patient record with a single click, and generates alerts based on clinical reference ranges. It runs on a dual-language interface supporting Macedonian (Cyrillic) and English. Each country hosts its own configuration, while a centralised reporting infrastructure allows all locations to be monitored from a single point.",
    category: "hasta-takip",
    tags: ["Global", "Multi-tenant", "Patient Management", "Dialysis", "Multilingual"],
    image: "/images/projects/dsys-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "REST API", "JSON", "XML"],
    challenge:
      "Managing the differing compliance requirements, language structures (TR/EN/AR/MK) and currencies of Turkey's (SGK), Qatar's (MOH) and Macedonia's local health authorities within a single codebase.",
    solution:
      "A flexible global infrastructure was built with a country-based configuration layer, a dynamic language system (i18n), local API adapters and a centralised tenant management panel. RTL/Arabic support was additionally developed for Qatar.",
    result:
      "3 countries, 30+ centres, 5,000+ active patients. Local compliance was achieved at every location, and centralised quality reporting was rolled out.",
    featured: true,
    year: 2023,
    client: "Fresenius Medical Care — TR / QA / MK",
    country: ["🇹🇷 Turkey", "🇶🇦 Qatar", "🇲🇰 Macedonia"],
    mockup: "/mockups/dsys-dashboard.html",
    mockups: [
      { label: "Dashboard", src: "/mockups/dsys-dashboard.html" },
      { label: "Daily Treatment", src: "/mockups/dsys-treatment.html" },
      { label: "LIS Integration", src: "/mockups/dsys-lis.html" },
      { label: "LIS — Macedonia", src: "/mockups/dsys-lis-mk.html" },
      { label: "Monthly Lab", src: "/mockups/dsys-monthly-lab.html" },
      { label: "Session Plan", src: "/mockups/dsys-session-plan.html" },
    ],
  },
  {
    id: "9",
    title: "ClinicDesk — Private Clinic Patient & Management System",
    slug: "clinicdesk-ozel-klinik-yonetim",
    description:
      "A fully-featured patient & clinic management platform for private outpatient clinics, managing every clinical process from patient registration to examination, and appointment scheduling to lab test requests.",
    longDescription:
      "ClinicDesk is a patient and clinic management system that brings together all the clinical workflows of private outpatient clinics and practices on a single platform. It covers patient registration, SGK/insurance information, appointment scheduling, examination forms (complaint, history, review of systems, past medical history, family history), ICD-10 diagnosis coding, lab test requests, prescriptions and patient document management. It works with role-based access and personal appointment calendars for multi-doctor clinics.",
    category: "klinik-yonetim",
    tags: ["Outpatient Clinic", "Patient Management", "Appointments", "Examination", "ICD-10", "SGK", "Private Clinic"],
    image: "/images/projects/clinicdesk-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "Apache", "REST API", "ICD-10"],
    challenge:
      "Managing patient tracking, appointment scheduling and examination records in a single system for multi-doctor private clinics with different specialties, integrating with SGK insurance data, and ensuring KVKK-compliant data security.",
    solution:
      "A comprehensive outpatient-clinic platform was built with role-based access control (doctor / assistant / reception), personal appointment calendars, templatable examination forms (review of systems, ICD-10), an SGK insurance module and a bulk patient view panel.",
    result:
      "Clinic paper-file use dropped by 90%. Appointment conflicts were eliminated. Examination documentation time per patient was cut by 60%.",
    featured: true,
    year: 2024,
    client: "🔒 Confidential Client — Turkey",
    country: ["🇹🇷 Turkey"],
    mockup: "/mockups/clinic-patients.html",
    mockups: [
      { label: "Patient List", src: "/mockups/clinic-patients.html" },
      { label: "Appointment Calendar", src: "/mockups/clinic-calendar.html" },
      { label: "Patient Registration", src: "/mockups/clinic-registration.html" },
      { label: "Examination", src: "/mockups/clinic-examination.html" },
      { label: "Medication Treatment", src: "/mockups/clinic-medication.html" },
    ],
  },
  {
    id: "4",
    title: "LIS — Laboratory Integration System & Test Result Tracking",
    slug: "lis-laboratuvar-entegrasyon",
    description:
      "An integration module at a dialysis centre in Macedonia that pulls patient lab results in real time via the Laboratory Integration System (LIS) web service, automatically transfers them to the patient record, and generates clinical alerts for critical values.",
    longDescription:
      "This integration communicates directly with the web service provided by the hospital's Laboratory Integration System (LIS) to automatically pull lab results for dialysis patients. Built on a service-layered PHP architecture, the system consists of LabApiService (LIS web-service communication), LabIntegrationService (business logic and patient matching) and LabMapperService (converting different LIS formats into a standard data model). A repository layer abstracts data access, resulting in an extensible and testable structure. All 28+ parameters — creatinine, haemoglobin, potassium, phosphorus, urea, Kt/V and more — are compared against reference ranges; out-of-range values automatically trigger clinical alerts, and results are transferred to the NephroGlobal patient monthly check-up screen with a single click.",
    category: "entegrasyon",
    tags: ["LIS", "Web Service", "PHP", "Repository Pattern", "Lab Integration", "Macedonia"],
    image: "/images/projects/lis-cover.jpg",
    techStack: ["PHP", "LIS Web Service", "REST API", "Repository Pattern", "Service Layer", "MySQL"],
    challenge:
      "Adapting the different data formats of the hospital's LIS system in Macedonia to the NephroGlobal patient model; handling identity-matching inconsistencies; and incorporating lab results into the clinical workflow in real time and error-free.",
    solution:
      "An adapter layer to the LIS was built using a service-layered architecture (LabApiService + LabIntegrationService + LabMapperService) and the Repository pattern. Patient identity matching, format conversion and error handling were isolated into separate services, ensuring the system's extensibility.",
    result:
      "Access time to lab results dropped from 24 hours to minutes. Missed critical values were eliminated. Manual data entry was completely removed; the monthly 28+ parameter test panel is now processed automatically into the patient record.",
    featured: true,
    year: 2023,
    country: ["🇲🇰 Macedonia"],
    mockup: "/mockups/dsys-lis-mk.html",
    mockups: [
      { label: "LIS — Macedonia", src: "/mockups/dsys-lis-mk.html" },
      { label: "LIS — General", src: "/mockups/dsys-lis.html" },
      { label: "Monthly Lab", src: "/mockups/dsys-monthly-lab.html" },
    ],
  },
  {
    id: "5",
    title: "Competency Assessment System",
    slug: "yetkinlik-degerlendirme-sistemi",
    description:
      "An assessment platform that measures clinical staff's professional competencies, creates development plans, and tracks them centrally.",
    longDescription:
      "A system that conducts periodic competency assessments of nurses, technicians and clinical staff against standard criteria, with question-bank management, automatic scoring and personal development plan generation. Used in clinics across Turkey and Macedonia.",
    category: "klinik-yonetim",
    tags: ["Competency", "HR", "Assessment", "Training"],
    image: "/images/projects/competency-cover.jpg",
    techStack: ["JavaScript", "PHP", "MySQL", "Chart.js", "PDF Export"],
    challenge:
      "Assessing staff across different countries against common standards, transparently reporting results, and tracking individual development plans.",
    solution:
      "A customisable question bank, multiple-choice and observational assessment modules, and an automatic scoring and development-recommendation system.",
    result:
      "Assessment time was reduced by 70%. Standardised clinical training tracking was achieved across Turkey and Macedonia.",
    featured: false,
    year: 2024,
    client: "Fresenius Medical Care — TR / MK",
    country: ["🇹🇷 Turkey", "🇲🇰 Macedonia"],
  },
  {
    id: "6",
    title: "Monthly Clinical Reporting & Quality Metrics",
    slug: "aylik-klinik-raporlama",
    description:
      "An analytics system that automatically calculates dialysis quality indicators such as Kt/V, URR and haemoglobin target range, and reports them in PDF/Excel format.",
    longDescription:
      "Periodically calculates parameters such as dialysis adequacy metrics (Kt/V, URR), anaemia management (Hb, ferritin, EPO dose), bone mineral metabolism and vascular access quality, producing centralised management reports.",
    category: "raporlama",
    tags: ["Quality Metrics", "Kt/V", "Reporting", "Analytics", "PDF"],
    image: "/images/projects/reports-cover.jpg",
    techStack: ["PHP", "MySQL", "PDF Generation", "Excel Export", "Chart.js"],
    challenge:
      "Accurately calculating monthly clinical data for hundreds of patients, comparing it against country-specific quality targets, and presenting meaningful reports to management.",
    solution:
      "Automatic monthly reporting with a parameter-based calculation engine, target-range comparison and a summary dashboard for the clinical director.",
    result:
      "Reporting time reduced by 85%. Zero calculation errors. Active use across 3 countries.",
    featured: false,
    year: 2024,
    country: ["🇹🇷 Turkey", "🇶🇦 Qatar", "🇲🇰 Macedonia"],
  },
];

export const servicesEn: Service[] = [
  {
    id: "1",
    title: "Dialysis Clinical Management System",
    description:
      "End-to-end dialysis centre operations platform — from patient admission to discharge, session management to staff tracking.",
    icon: "Monitor",
    features: [
      "Patient registration & demographic management",
      "Haemodialysis session planning & execution",
      "Machine assignment & technical tracking",
      "Vascular access & complication records",
      "Water analysis & technical quality module",
      "Staff & user management",
    ],
  },
  {
    id: "3",
    title: "Laboratory Integration (LIS)",
    description:
      "Automatic result retrieval from external laboratory systems, clinical parameter trending and intelligent alert mechanisms.",
    icon: "FlaskConical",
    features: [
      "Automatic result fetching from LIS",
      "Kt/V, URR, Hb trend analysis",
      "Critical value alarms",
      "Doctor-nurse notification flow",
      "Monthly quality metric report",
      "Reference range management",
    ],
  },
  {
    id: "4",
    title: "Clinical Reporting & Analytics",
    description:
      "Analytics platform that automatically generates dialysis quality indicators, management metrics and audit reports.",
    icon: "BarChart3",
    features: [
      "Monthly dialysis adequacy report",
      "Anaemia & bone mineral management",
      "Management dashboard & KPIs",
      "Automatic PDF/Excel output",
      "Audit & accreditation reports",
      "Multi-location comparison",
    ],
  },
  {
    id: "5",
    title: "Global & Multilingual Platform",
    description:
      "Multi-tenant clinical software architecture that adapts to different countries' regulations, languages and insurance systems.",
    icon: "Globe",
    features: [
      "Multi-tenant architecture",
      "TR / EN / MK language support",
      "Country-specific compliance layer",
      "Local insurance API adapters",
      "Centralised multi-location management",
    ],
  },
  {
    id: "6",
    title: "Healthcare IT Consulting",
    description:
      "Clinical digital transformation strategy, process analysis and healthcare software selection consulting.",
    icon: "Lightbulb",
    features: [
      "Clinical process analysis & mapping",
      "Digital transformation roadmap",
      "GDPR / data security compliance",
      "Software selection & procurement consulting",
      "Staff training & onboarding",
      "System migration & data migration",
    ],
  },
  {
    id: "7",
    title: "Multilingual Corporate Website",
    description:
      "Professional website development with full localisation support in Turkish, English and other languages, aligned with corporate identity.",
    icon: "Languages",
    features: [
      "Multilingual (i18n) content management",
      "Corporate identity & brand alignment",
      "SEO optimisation",
      "Mobile-responsive design",
      "CMS integration & content management",
      "Speed & performance optimisation",
    ],
  },
  {
    id: "8",
    title: "Custom Web Application Development",
    description:
      "Tailored to your company's business processes — dashboard, CRM or operations management applications.",
    icon: "Code2",
    features: [
      "Business-process-specific software design",
      "Admin panel & dashboard",
      "User role & permission management",
      "REST API integration",
      "Database design & optimisation",
      "Maintenance & technical support",
    ],
  },
  {
    id: "9",
    title: "Landing Page & Promotional Site",
    description:
      "Conversion-focused, fast-loading professional landing page for a product, service or campaign.",
    icon: "Rocket",
    features: [
      "Conversion-focused page design",
      "Fast loading & Core Web Vitals",
      "Form & lead capture integration",
      "Google Analytics & tracking",
      "A/B testing support",
      "Mobile-first design",
    ],
  },
];

export const workflowStepsEn = [
  {
    id: 1,
    title: "Patient Registration & Admission",
    description: "Patient registration processes, identity verification, insurance/provision checks and digital patient file management.",
    icon: "UserPlus",
    color: "#1e3a5f",
  },
  {
    id: 2,
    title: "Treatment Planning & Prescription Management",
    description: "Haemodialysis prescriptions, treatment parameters, session planning and doctor approval process management.",
    icon: "FileText",
    color: "#2a4f7c",
  },
  {
    id: 3,
    title: "Clinical Operations Management",
    description: "Multi-clinic structures, machine-plan assignments, resource management and daily operations tracking.",
    icon: "Cpu",
    color: "#1e3a5f",
  },
  {
    id: 4,
    title: "Session Tracking & Patient Monitoring",
    description: "Vital sign tracking, nursing observations, complication records and real-time patient monitoring processes.",
    icon: "Activity",
    color: "#2a4f7c",
  },
  {
    id: 5,
    title: "Laboratory & Integration Management",
    description: "LIS integrations, automatic result transfer, critical value notifications and health data integrations.",
    icon: "FlaskConical",
    color: "#1e3a5f",
  },
  {
    id: 6,
    title: "Reporting & Decision Support Systems",
    description: "Clinical reports, quality indicators, performance analyses, management dashboards and AI-powered decision mechanisms.",
    icon: "FileCheck",
    color: "#c9a84c",
  },
];

export const countriesEn = [
  {
    code: "TR",
    flag: "🇹🇷",
    name: "Turkey",
    description: "Patient & session management platform integrated with Medula, used in dialysis clinics.",
  },
  {
    code: "QA",
    flag: "🇶🇦",
    name: "Qatar",
    description: "English-interface platform compliant with the Qatar Ministry of Health.",
  },
  {
    code: "MK",
    flag: "🇲🇰",
    name: "North Macedonia",
    description: "Patient registration and session management compliant with local health authority.",
  },
];
