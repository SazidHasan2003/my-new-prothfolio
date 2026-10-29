export const portfolioData = {
  personalInfo: {
    name: "Sazid Hasan Sarker",
    designation: "Frontend Developer",
    subtitle:
      "Specializing in React.js, Next.js & Modern TypeScript Interfaces",
    email: "sarkersazid123@gmail.com",
    location: "Rajshahi, Bangladesh",
    profileImage: "/profile.jpeg", // public/profile.jpeg
    resumeUrl: "/resume.pdf", // public/resume.pdf
    socials: {
      github: {
        url: "https://github.com/SazidHasan2003",
        icon: "/skills/github.png",
      },
      linkedin: {
        url: "https://www.linkedin.com/in/sazid-hasan-sarker",
        icon: "/skills/linkedin.png",
      },
    },
    shortIntro:
      "Passionate Frontend Developer focused on crafting pixel-perfect, accessible, and highly responsive web applications using React.js and Next.js. Driven by clean code, robust state management, and modern UI/UX principles.",
  },

  aboutMe: {
    title: "About Me",
    bioParagraphs: [
      "Hello! I'm Sazid Hasan Sarker, a Computer Science and Engineering graduate with a core focus on frontend web development. My primary expertise lies in transforming visual designs into highly performant, responsive, and interactive digital interfaces.",
      "I specialize in modern JavaScript and TypeScript workflows, utilizing React.js and Next.js (App Router) to build clean client-side architectures.",
    ],
    journey: {
      title: "My Programming Journey",
      description:
        "My programming journey started with procedural and core logical concepts in C and C++ during my CSE studies at BAUET. As I explored web technologies, I developed a strong foundation in vanilla JavaScript and TypeScript before transitioning to React.js and Next.js. Building functional projects like real-time market price monitoring apps and workout trackers has allowed me to master state persistence, component breakdown, and responsive UI layout systems.",
    },
    workPreference: {
      title: "What I Enjoy Working On",
      points: [
        "Architecting responsive, accessible, and component-driven user interfaces with Next.js and Tailwind CSS.",
        "Managing client-side state efficiently with modern React patterns and React Context.",
        "Integrating Third-Party APIs, Authentication SDKs (Better Auth), and Toast Notifications for interactive UX.",
        "Writing clean, maintainable, and strongly-typed TypeScript code.",
      ],
    },
    hobbiesAndInterests: {
      title: "Outside of Coding",
      interests: [
        {
          name: "Anime & Manga",
          description:
            "Engaging with creative storytelling, complex character developments, and world-building narratives.",
        },
        {
          name: "Tech Exploration & Systems",
          description:
            "Keen interest in computing hardware, developer tools configuration, and workflow optimization.",
        },
        {
          name: "Cinema & Logical Puzzles",
          description:
            "Enthusiastic about historical, sci-fi, and action cinema along with analytical problem-solving.",
        },
      ],
    },
  },

  skills: {
    title: "Skills & Technologies",
    subtitle:
      "A categorized overview of the languages, frameworks, tools, and platforms I work with.",
    categories: [
      {
        category: "Frontend Frameworks & Libraries",
        items: [
          { name: "React.js", icon: "/skills/reactjs.png" },
          { name: "Next.js (App Router)", icon: "/skills/nextjs.png" },
          { name: "HTML5", icon: "/skills/html5.png" },
          { name: "CSS3", icon: "/skills/css3.png" },
        ],
      },
      {
        category: "Programming Languages",
        items: [
          { name: "JavaScript (ES6+)", icon: "/skills/javascript.png" },
          { name: "TypeScript", icon: "/skills/typescript.png" },
        ],
      },
      {
        category: "Authentication & Database (Working Knowledge)",
        items: [
          { name: "Better Auth", icon: "/skills/betterauth.png" },
          { name: "MongoDB Atlas", icon: "/skills/mongodbatlas.png" },
          { name: "REST API Integration", icon: "/skills/restapi.png" },
        ],
      },
      {
        category: "Tools & Deployment Workflow",
        items: [
          { name: "VS Code", icon: "/skills/vscode.png" },
          { name: "GitHub", icon: "/skills/github.png" },
          { name: "Vercel", icon: "/skills/versel.png" },
          { name: "Netlify", icon: "/skills/netlify.png" },
        ],
      },
    ],
  },

  education: {
    title: "Educational Background",
    subtitle:
      "My academic background and qualifications in computer science and engineering.",
    items: [
      {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Bangladesh Army University of Engineering and Technology",
        duration: "Oct 2021 – Oct 2025",
      },
    ],
  },

  experience: {
    title: "Professional Experience",
    subtitle:
      "Hands-on industrial training and practical technology explorations.",
    items: [
      {
        role: "Industrial Trainee",
        company: "Lab AR",
        location: "Dhaka, Bangladesh",
        duration: "Jun 2024 (1 mo)",
        description:
          "Gained foundational insights into software management and IT technology workflows.",
      },
      {
        role: "Industrial Trainee",
        company: "Pentester Space",
        location: "Dhaka, Bangladesh",
        duration: "Jun 2024 (1 mo)",
        description:
          "Learned fundamentals of web application security and cybersecurity concepts.",
      },
    ],
  },

  projects: {
    title: "Featured Projects",
    subtitle:
      "A showcase of my recent web applications, demonstrating responsive design, interactive workflows, and modern technology integration.",
    items: [
      {
        id: "bazar-dor",
        title: "Bazar Dor (বাজার দর)",
        image: "/projects/bazardor.png",
        brief:
          "Real-time daily market price monitoring web application for essential commodities in Bangladesh.",
        description:
          "BazarDor tracks real-time daily market prices for groceries like rice, oil, vegetables, fish, and meat with price trend indicators.",
        techStack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Better Auth",
          "MongoDB Atlas",
        ],
        liveUrl: "https://bazar-dor-5laf.vercel.app/",
        githubUrl: "https://github.com/SazidHasan2003/bazar-dor.git",
        keyFeatures: [
          "Real-Time Price Tracking: Categorized market prices for essential daily commodities with quick access.",
          "Price Fluctuation Insights: Highlights rising/falling items with percentage change indicators.",
          "Secure Authentication: Robust auth system powered by Better Auth & MongoDB Adapter.",
          "Optimized UX & Loaders: Smooth skeleton loaders preventing UI freeze during fetches.",
          "Custom Error Handling: Stylized theme-matched 404 error page for smooth navigation.",
        ],
        challenges: [
          "Handling dynamic real-time price updates while keeping UI responsive.",
          "Integrating secure authentication using Better Auth and MongoDB Adapter.",
        ],
        futurePlans: [
          "Add historical price change charts.",
          "Implement location-based price filtering.",
        ],
      },
      {
        id: "fitlog",
        title: "FitLog - Workout Management Platform",
        image: "/projects/fitlog.png",
        brief:
          "High-performance web app to track, plan, and manage daily workout routines.",
        description:
          "FitLog helps fitness enthusiasts structure workouts with strict daily limits and server-side data fetching.",
        techStack: [
          "Next.js (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "React Context",
          "React Toastify",
        ],
        liveUrl: "https://fit-log-next-js-app.vercel.app/",
        githubUrl: "https://github.com/SazidHasan2003/fit-log-next-js-app-.git",
        keyFeatures: [
          "Server-Side Fetching & Caching: Leverages Next.js Server Components and ISR/SSG caching for instant page loads.",
          "Strict 5-Lift Daily Cap: Enforces a 5-lift daily limit to prevent overtraining with warning toasts.",
          "Dual-State Routine Tracking: Manages active items and saved workouts seamlessly via React Context.",
          "Interactive Workflows: Real-time UI updates for completion and removal with Toast notifications.",
          "Responsive Dark UI: High-contrast dark theme optimized for desktop grids and mobile views.",
        ],
        challenges: [
          "Managing dual-state routine tracking without UI state loss or re-renders.",
          "Enforcing strict 5-lift daily plan restrictions with clear user feedback.",
        ],
        futurePlans: [
          "Add user account persistence for saving long-term workout logs.",
          "Integrate progress charts and exercise video demonstrations.",
        ],
      },
      {
        id: "dev-stack-catalog",
        title: "Dev Stack Catalog",
        image: "/projects/devstack.png",
        brief:
          "Interactive Web Development Technology Catalog to compare and curate ideal tech stacks.",
        description:
          "Provides a seamless UI for browsing popular frontend, backend, and system tooling with real-time dynamic stack creation.",
        techStack: [
          "React",
          "TypeScript",
          "Tailwind CSS v4",
          "React Icons",
          "React Toastify",
        ],
        liveUrl: "https://dev-stack-web-app.netlify.app/",
        githubUrl: "https://github.com/SazidHasan2003/dev-stack-app.git",
        keyFeatures: [
          "Interactive Stack Management: Add, duplicate-check, individually remove, or clear custom tech stacks in one click.",
          "Real-Time Toast Feedback: Visual feedback using React Toastify for additions, duplicate warnings, and resets.",
          "Modern Async UI & Layout: Built with React Suspense, dynamic loading spinners, and multi-device responsive grid systems.",
        ],
        challenges: [
          "Managing dynamic state duplication checks and instant list updates efficiently.",
          "Leveraging asynchronous Promise fetching with React Suspense.",
        ],
        futurePlans: [
          "Allow users to export custom stack configurations as Markdown/PDF.",
          "Add community stack recommendations.",
        ],
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle:
      "Feel free to reach out for collaborations, job opportunities, or just a friendly chat!",
    email: "sarkersazid123@gmail.com",
    phoneDisplay: "+880 1738-426260",
    location: "Rajshahi, Bangladesh",
    socials: {
      github: "https://github.com/SazidHasan2003",
      linkedin: "https://www.linkedin.com/in/sazid-hasan-sarker",
    },
  },

  footer: {
    copyrightText: "Designed & Built by Sazid Hasan Sarker",
    builtWith: "Built with Next.js & Tailwind CSS",
    quickLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Education", href: "#education" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
};
