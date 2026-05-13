// Edit this file to update your site content.

import portraitUrl from "@/assets/tahir-portrait.jpg";

export const siteConfig = {
  company: "SunriseMD",
  name: "Tahir",
  tagline: "Founder, SunriseMD — Healthcare Consulting",
  subTagline:
    "Chief Fellow — Pulmonary, Critical Care, and Sleep Medicine Fellowship — NYC",
  bio: "I'm a healthcare consultant helping early- and growth-stage health technology companies sharpen strategy, accelerate go-to-market, and navigate the complexities of modern healthcare. Through SunriseMD, I partner with founders and operators to translate clinical insight into scalable products.",
  email: "tahir@sunriseMD.com",
  linkedin: "https://www.linkedin.com/in/tahir-malik-6770901b1/",
  cvUrl: "https://drive.google.com/file/d/1J10O7tHVcm5q0n_dxQW-3hM6kivWhTf9/view?usp=sharing",
  portraitUrl,
};

export type PortfolioCompany = {
  name: string;
  tags: string[];
  paragraphs: string[];
  focusAreas: string[];
  url: string;
  logoUrl?: string;
};

export const portfolio: PortfolioCompany[] = [
  {
    name: "Regard",
    tags: ["Clinical AI", "Documentation", "Diagnosis Capture", "EHR Workflow"],
    paragraphs: [
      "At Regard, I advise on the development of clinically accurate diagnosis logic designed to support hospital billing workflows and help physicians create more complete, efficient clinical notes.",
      "My work includes building diagnoses for the product, reviewing diagnoses created by other physician consultants, and ensuring that clinical content is accurate, streamlined, and practical for real-world use. I also collaborate with the engineering team to suggest product improvements, refine the diagnosis-builder workflow, and identify features that would make the platform more intuitive for clinicians.",
      "Beyond product and content development, I have helped Regard identify additional physician builders, supporting the expansion of a clinically grounded content development team.",
    ],
    focusAreas: [
      "Clinical diagnosis logic and content development",
      "Documentation and billing workflow support",
      "Review and quality assurance of physician-built diagnoses",
      "Product feedback and diagnosis-builder refinement",
      "Physician builder recruitment",
    ],
    url: "https://withregard.com",
  },
  {
    name: "Impiricus",
    tags: ["Physician Engagement", "Life Sciences", "Clinical Communication"],
    paragraphs: [
      "Impiricus is a healthcare technology company focused on improving how physicians access relevant pharmaceutical and clinical resources through ethical, technology-enabled engagement.",
      "As an advisor, I help bring a physician's perspective to questions of clinical relevance, communication design, and real-world adoption. My work centers on how busy clinicians receive, filter, and act on information — and how digital tools can make those interactions more useful, respectful, and aligned with patient care.",
    ],
    focusAreas: [
      "Physician engagement and communication strategy",
      "Clinical relevance of educational and pharmaceutical resources",
      "Specialist physician workflow and information needs",
      "Ethical, useful, and non-disruptive HCP engagement",
    ],
    url: "https://impiricus.com",
  },
];
