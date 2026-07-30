import type { Service } from "@/types";

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
