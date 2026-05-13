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
  description: string;
  url: string;
  logoUrl?: string; // Optional logo image
};

export const portfolio: PortfolioCompany[] = [
  {
    name: "Company One",
    description:
      "Advised on commercial strategy and provider partnerships during the company's expansion across the U.S.",
    url: "https://example.com",
  },
  {
    name: "Company Two",
    description:
      "Led go-to-market planning and clinical workflow design for a digital therapeutics platform.",
    url: "https://example.com",
  },
  {
    name: "Company Three",
    description:
      "Supported fundraising diligence and product positioning ahead of a successful acquisition.",
    url: "https://example.com",
  },
];
