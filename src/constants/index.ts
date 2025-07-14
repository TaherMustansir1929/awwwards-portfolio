// index.js

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 853,
  tablet: 1024,
  desktop: 1440,
  large: 1920,
} as const;

export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web apps (React/Next.JS) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Discord Bot",
    description:
      "An AI powered Discord bot that provides a wide range of features including chat messaging, image generation, voice generation, moderation and fun commands, enhancing the user experience on Discord servers.",
    href: "https://discord.gg/xJtvpNxekF",
    image: "/assets/projects/discord-bot.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "LangChain" },
      { id: 3, name: "LangGraph" },
      { id: 4, name: "UV" },
      { id: 5, name: "Discord.py" },
    ],
  },
  {
    id: 2,
    name: "URL Shortener",
    description:
      "A simple and efficient URL shortening service with sleek design and custom aliases.",
    href: "https://shawty-io.vercel.app/",
    image: "/assets/projects/url-shortener.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "University Guidance Platform",
    description:
      "A platform providing support for university students, including course recommendations and career advice based on High School GPA and major interest.",
    href: "https://uni-vise.vercel.app/",
    image: "/assets/projects/university-guidance.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Framer" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "AI Powered LMS Platform",
    description:
      "A purpose-specific platform that leverages AI capabilities to induce voice-based AI interactions for learning management systems, enhancing user experience through complete customizations.",
    href: "https://converso-five.vercel.app/",
    image: "/assets/projects/ai-powered-lms.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Shadcn/ui" },
      { id: 4, name: "Vapi" },
    ],
  },
  {
    id: 5,
    name: "AI Powered Interview Platform",
    description:
      "Practice interviews with AI-powered mock sessions, personalized feedback, and performance tracking.",
    href: "https://prep-wisee.vercel.app/",
    image: "/assets/projects/ai-powered-interview.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "Vapi" },
      { id: 4, name: "Shadcn/ui" },
    ],
  },
  {
    id: 6,
    name: "Zentry Clone",
    description:
      "A frontend clone of Zentry, a platform for sharing and discovering creative content, built with Vite and GSAP.",
    href: "https://zentry-clone-murex-xi.vercel.app/",
    image: "/assets/projects/zentry-clone.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/taher_m.16/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@zeo-xd",
  },
  { name: "GitHub", href: "https://github.com/TaherMustansir1929" },
];