// ============================================================
// constants/index.js — Single source of truth for all content
// ============================================================

// Navigation Links
export const navLinks = [
  { id: "hero",           label: "Home"         },
  { id: "showcase",       label: "Projects"     },
  { id: "experience",     label: "Experience"   },
  { id: "tech",           label: "Skills"       },
  { id: "certifications", label: "Certifications" },
  { id: "journal",        label: "Journal"      },
  { id: "career",         label: "Career Plan"  },
  { id: "contact",        label: "Contact"      },
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "Medicart - Online Pharmacy",
    description: "MERN stack pharmacy management system with prescription-based medical order management, AI chatbot powered by OpenAI, user management, product management, and a feedback system.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    live: "#",
    github: "https://github.com/it22258380",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "SkillSync - Skill-Sharing Platform",
    description: "Comprehensive skill-sharing platform enabling users to share and learn coding, cooking, photography, and DIY crafts. Features user management, engagement tracking, skill plan sharing, and interactive learning modules.",
    tags: ["Spring Boot", "React.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    live: "#",
    github: "https://github.com/it22258380",
    featured: true,
    size: "medium",
  },
  {
    id: 3,
    title: "Chandika Lights - Event Management",
    description: "Real client-based MERN stack event management system featuring user management, order management, inventory control, maintenance tracking, and customer feedback. Successfully deployed for production use.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    live: "#",
    github: "https://github.com/it22258380",
    featured: false,
    size: "medium",
  },
  {
    id: 4,
    title: "AquaGlow - Laundry Management",
    description: "Web-based laundry management system with order tracking, customer management, service scheduling, and payment processing. Full-stack solution ensuring smooth business operations.",
    tags: ["Java", "Java Servlets", "MySQL", "Apache Tomcat"],
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
    live: "#",
    github: "https://github.com/it22258380",
    featured: false,
    size: "small",
  },
];

// Work & Education Timeline
export const experiences = [
  {
    id: 1,
    type: "work",
    role: "Software Engineering Intern",
    organization: "Internship",
    period: "6 Months",
    icon: "💼",
    points: [
      "Developed and maintained full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built cross-platform mobile applications using React Native with Expo framework.",
      "Implemented server-side applications using Spring Boot with RESTful API design.",
      "Developed modern web applications using Next.js for server-side rendering and optimal performance.",
      "Containerized applications using Docker for consistent development and deployment environments.",
      "Worked with microservices architecture to build scalable and maintainable systems.",
    ],
  },
  {
    id: 2,
    type: "education",
    role: "B.Sc. in Information Technology",
    organization: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "Oct 2022 - Present",
    icon: "🎓",
    points: [
      "Specialized in Information Technology.",
      "Currently conducting research in the AI/ML domain.",
      "Completed AI/ML Engineer Stage 1 certification from SLIIT.",
    ],
  },
  {
    id: 3,
    type: "education",
    role: "G.C.E. Advanced Level - Physical Science",
    organization: "Ananda College, Colombo 10",
    period: "2019 - 2022",
    icon: "🏫",
    points: [
      "Completed Advanced Level in the Physical Science stream.",
    ],
  },
];

// Technologies / Skills
export const technologies = [
  // Frontend
  { name: "React.js", category: "Frontend", icon: "react.png", color: "#61dafb" },
  { name: "Next.js", category: "Frontend", icon: "next js.jfif", color: "#ffffff" },
  { name: "React Native", category: "Frontend", icon: "react native.png", color: "#61dafb" },
  { name: "JavaScript", category: "Frontend", icon: "java script.png", color: "#f7df1e" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind css.png", color: "#38bdf8" },
  { name: "HTML5", category: "Frontend", icon: "html 5.png", color: "#e34f26" },
  // Backend
  { name: "Node.js", category: "Backend", icon: "node js.png", color: "#68a063" },
  { name: "Express.js", category: "Backend", icon: "express js.png", color: "#ffffff" },
  { name: "Spring Boot", category: "Backend", icon: "springboot.png", color: "#6db33f" },
  { name: "FastAPI", category: "Backend", icon: "fast api.png", color: "#009688" },
  { name: "Python", category: "Backend", icon: "python.jfif", color: "#3776ab" },
  { name: "Java", category: "Backend", icon: "java.png", color: "#f89820" },
  // Database
  { name: "MongoDB", category: "Database", icon: "mongo db.png", color: "#4db33d" },
  { name: "MySQL", category: "Database", icon: "my sql.png", color: "#4479a1" },
  // Tools
  { name: "Docker", category: "Tools", icon: "docker.png", color: "#2496ed" },
  { name: "Postman", category: "Tools", icon: "postman.svg", color: "#ff6c37" },
  { name: "VS Code", category: "Tools", icon: "vscode.png", color: "#007acc" },
  { name: "Git", category: "Tools", icon: "gtihub.png", color: "#f05032" },
];

// Certifications & Licenses
export const certifications = [
  {
    id: 1,
    title: "AI/ML Engineer - Stage 2",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "Apr 19, 2026",
    icon: "🧠",
    color: "#10a37f",
    category: "AI / Machine Learning",
    credential: "https://drive.google.com/file/d/1SxaZ13Sug8PgkbhJu_MiK_A6ATM1wOqo/view?usp=drive_link",
  },
  {
    id: 2,
    title: "AI/ML Engineer - Stage 1",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "Jan 27, 2026",
    icon: "🤖",
    color: "#06b6d4",
    category: "AI / Machine Learning",
    credential: "https://drive.google.com/file/d/1yaZX6KArTFEsSY2QTnN-HVOXISFbWv-v/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Microsoft Power Apps Achievement",
    issuer: "Microsoft Learn",
    date: "Apr 01, 2026",
    icon: "⚡",
    color: "#742774",
    category: "Low-Code / Cloud",
    credential: "https://drive.google.com/file/d/1_Lf8i2DrgP0Drib6it6Xk1a4xmtNcaT8/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Generative AI Literacy",
    issuer: "SkillQuest",
    date: "May 01, 2020",
    icon: "✨",
    color: "#f59e0b",
    category: "AI / Machine Learning",
    credential: "https://drive.google.com/file/d/1oB36JV68acoRv-1Fd8uwmcCmBayuJ1cx/view?usp=drive_link",
  },
  {
    id: 5,
    title: "n8n-No Code AI Agent Builder",
    issuer: "n8n",
    date: "May 01, 2020",
    icon: "🔗",
    color: "#ea4b71",
    category: "AI / Automation",
    credential: "https://drive.google.com/file/d/1qAQ0m5l0lnAflq98t3XmOQ4bl0v7otKz/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Python for Beginners",
    issuer: "University of Moratuwa (open.uom.lk)",
    date: "Dec 07, 2024",
    icon: "🐍",
    color: "#3776ab",
    category: "Programming",
    credential: "https://drive.google.com/file/d/1b6IWQIgmd2ar-MSEG8ySyoOl_WnQvW55/view?usp=drive_link",
  },
  {
    id: 7,
    title: "JavaScript",
    issuer: "Great Learning",
    date: "2024",
    icon: "🟨",
    color: "#f7df1e",
    category: "Frontend",
    credential: "https://drive.google.com/file/d/1-spgN89-hJT2r-L3Zp0FqC4Yo0evnCKH/view?usp=drive_link",
  },
  {
    id: 8,
    title: "CSS",
    issuer: "Great Learning",
    date: "2024",
    icon: "🎨",
    color: "#38bdf8",
    category: "Frontend",
    credential: "https://drive.google.com/file/d/11JgagQdb6pFIvHQ5aeMCIk7KDXCbYNKC/view?usp=drive_link",
  },
  {
    id: 9,
    title: "HTML",
    issuer: "Great Learning",
    date: "2024",
    icon: "🌐",
    color: "#e34f26",
    category: "Frontend",
    credential: "https://drive.google.com/file/d/1ELALW0Qd7zENRNh1Nro03NUJo7C0h-ep/view?usp=drive_link",
  },
];

// Social Links
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/it22258380", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sasanka-akash", icon: "💼" },
  { name: "Email", url: "mailto:akashsasanka480@gmail.com", icon: "✉️" },
];
