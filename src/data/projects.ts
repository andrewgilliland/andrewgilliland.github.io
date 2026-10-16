export interface Project {
  title: string;
  description: string;
  /** One line for compact listings such as the home page. */
  summary: string;
  stack: string[];
  href: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoClass?: string;
}

export const projects: Project[] = [
  {
    title: "Manchester United Hospitality",
    description:
      "The official Manchester United hospitality storefront, built by Elevate. I worked on the launch, from the production go-live cutover to the payments and catalogue APIs behind checkout.",
    summary:
      "Launch of the club's official hospitality storefront: go-live cutover, payments, and catalogue APIs.",
    stack: ["AWS", "TanStack Start", "FastAPI"],
    href: "/projects/manchester-united-hospitality",
    logo: "/projects/manchester-united-hospitality-logo.webp",
    // The partnership lockup is wide, so it keeps its aspect ratio.
    logoAlt: "Manchester United and Elevate logos",
    logoWidth: 600,
    logoHeight: 128,
    logoClass: "h-12 w-auto",
  },
  {
    title: "SmartScout",
    description:
      "Precision Planting SmartScout is an app that uses machine vision and augmented reality to automatically assess emergence and plant spacing in a 3D space.",
    summary:
      "Machine vision and AR to assess plant emergence and spacing, on iOS and iPadOS.",
    stack: ["React Native", "Swift", "ARKit"],
    href: "/projects/smartscout",
    logo: "/projects/smartscout-icon-1.webp",
  },
  {
    title: "blono.dev",
    description:
      "blono.dev is a website for Bloomington-Normal Developers, a local developer community in Central Illinois. Built with Next.js and Tailwind CSS.",
    summary:
      "Website for Bloomington-Normal Developers, a local developer community.",
    stack: ["Next.js", "Tailwind CSS"],
    href: "/projects/blono-dev",
    logo: "/projects/blono-dev-icon-1.svg",
  },
];
