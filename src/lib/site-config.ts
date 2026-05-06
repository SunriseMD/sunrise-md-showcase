// Edit this file to update your site content.

export const siteConfig = {
  company: "SunriseMD",
  name: "Your Name",
  tagline: "Founder, SunriseMD — Healthcare Consulting",
  bio: "I'm a healthcare consultant helping early- and growth-stage health technology companies sharpen strategy, accelerate go-to-market, and navigate the complexities of modern healthcare. Through SunriseMD, I partner with founders and operators to translate clinical insight into scalable products.",
  email: "hello@sunrisemd.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  cvUrl: "/cv.pdf", // Drop your CV at public/cv.pdf
  portraitUrl: "/portrait.jpg", // Optional: drop a photo at public/portrait.jpg
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
