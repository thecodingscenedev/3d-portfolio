export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Experience",
    link: "#experience",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [6, -11, 0] : isMobile ? [9, -9.5, 0] : isTablet ? [12, -9.5, 0] : [21, -14, -10],
    reactLogoPosition: isSmall ? [6, 8, 0] : isMobile ? [8, 8, 0] : isTablet ? [12, 6, 1] : [14, 6,3],
    // ringPosition: isSmall ? [-27, 30, 0] : isMobile ? [-27, 28, 0] : isTablet ? [-35, 28, 0] : [-40, 28, 8],
    targetPosition: isSmall ? [-6, -11, -10] : isMobile ? [-10, -11, -10] : isTablet ? [-14, -12, -10] : [-20, -15, -8],
  };
};

export const myProjects = [
  {
    title: "E-Commerce Admin Dashboard",
    desc: "A scalable fullstack admin platform designed to help local businesses manage inventory, track orders, and handle multi-vendor processes with ease and efficiency.",
    subdesc:
      "Built with Next.js, Material UI, and Redux, ensuring a highly responsive architecture and seamless state management for real-time operations.",
    href: "#",
    texture: "/textures/project/project1.mp4",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Material UI",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/javascript.svg",
      },
    ],
  },
  {
    title: "Social Community Platform",
    desc: "A production-grade social application featuring secure authentication, dynamic user profiles, interactive post feeds, and in-depth activity tracking.",
    subdesc:
      "Developed leveraging React.js, Express.js, and MongoDB, delivering a secure, real-time environment with optimized global state management.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Material UI",
        path: "/assets/material-ui.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
    ],
  },
  {
    title: "Mobile Utility Application",
    desc: "A cross-platform mobile utility for dynamic scheduling, automatic roster generation, and rapid theme customization specifically tailored for managing local events.",
    subdesc:
      "Engineered with React Native, Redux, and TypeScript to ensure a fast, robust, and completely responsive experience across both iOS and Android.",
    href: "#",
    texture: "/textures/project/project3.mp4",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Typescript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Tech Solutions Inc.",
    pos: "Software Engineer",
    duration: "July, 2024 - Present",
    title:
      "Designed scalable payment APIs using Nest.js and built a webhook to block funds until payment completion, improving transaction reliability. Developed dynamic UIs with Next.js and TypeScript, optimizing performance with memoization and revalidation.",
    icon: "/assets/dummy-logo-1.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Cloud Innovations",
    pos: "DevOps Engineer Intern",
    duration: "October, 2023 - March, 2024",
    title:
      "Built a Grafana dashboard with Prometheus to monitor metrics and reduce GCP costs by 35%. Developed shell scripts for EBS encryption and managed EKS clusters for deployment, enhancing cloud infrastructure and cost tracking with Python automation.",
    icon: "/assets/dummy-logo-2.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Global Freelance platform",
    pos: "Full Stack Developer (Freelancer)",
    duration: "Nov, 2022 - July, 2024",
    title:
      "Built 2 full-stack web apps and 2 cross-platform mobile apps using React.js, React Native, Express.js, and MongoDB. Developed a Next.js Admin Portal and Tailwind-powered app for a laundry startup, boosting profits by ₹1 lakh+ with streamlined operations.",
    icon: "/assets/dummy-logo-3.svg",
    animation: "salute",
  },
];