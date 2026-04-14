// ============================================================
// constants/index.js — Single source of truth for all content
// ============================================================

// Navigation Links
export const navLinks = [
  { id: "hero",         label: "Home" },
  { id: "showcase",     label: "Projects" },
  { id: "experience",   label: "Experience" },
  { id: "tech",         label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact",      label: "Contact" },
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "AI SaaS Dashboard",
    description: "A full-stack AI-powered analytics platform with real-time data visualisation, user management, and a GPT-4 chat assistant built into the dashboard.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    live: "#",
    github: "#",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A modern e-commerce storefront with Stripe payments, inventory management, and a blazing-fast Next.js front-end.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    live: "#",
    github: "#",
    featured: true,
    size: "medium",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A real-time social platform with WebSocket-powered messaging, Stories, and a recommendation engine.",
    tags: ["React", "Socket.io", "Redis", "Express"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    live: "#",
    github: "#",
    featured: false,
    size: "medium",
  },
  {
    id: 4,
    title: "3D Portfolio Builder",
    description: "A drag-and-drop portfolio builder that exports beautiful static sites with embedded Three.js scenes.",
    tags: ["Three.js", "React", "GSAP", "Vite"],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80",
    live: "#",
    github: "#",
    featured: false,
    size: "small",
  },
  {
    id: 5,
    title: "DevOps Pipeline Tool",
    description: "A CI/CD monitoring dashboard that aggregates GitHub Actions, Docker, and AWS deployments into one unified view.",
    tags: ["Vue.js", "Docker", "AWS", "GraphQL"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    live: "#",
    github: "#",
    featured: false,
    size: "small",
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    description: "A cross-platform React Native app for workout tracking, nutrition logging, and AI-generated training plans.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    live: "#",
    github: "#",
    featured: false,
    size: "small",
  },
];

// Work & Education Timeline
export const experiences = [
  {
    id: 1,
    type: "work",
    role: "Senior Full-Stack Developer",
    organization: "TechCorp Inc.",
    period: "Jan 2023 - Present",
    icon: "💼",
    points: [
      "Led a team of 6 engineers to build a microservices platform serving 200k+ users.",
      "Reduced API latency by 40% through Redis caching and database query optimisation.",
      "Architected a real-time notification system using WebSockets and RabbitMQ.",
    ],
  },
  {
    id: 2,
    type: "work",
    role: "Frontend Engineer",
    organization: "StartupXYZ",
    period: "Jun 2021 - Dec 2022",
    icon: "🚀",
    points: [
      "Built and shipped 12+ React features including a complex drag-and-drop kanban board.",
      "Improved page load speed by 60% via code-splitting and lazy loading.",
      "Collaborated with design to build a reusable component library used across 4 products.",
    ],
  },
  {
    id: 3,
    type: "work",
    role: "Junior Developer",
    organization: "Digital Agency Co.",
    period: "Aug 2020 - May 2021",
    icon: "💻",
    points: [
      "Delivered 20+ client web projects using React, Vue.js, and WordPress.",
      "Integrated third-party APIs including Stripe, Google Maps, and Twilio.",
    ],
  },
  {
    id: 4,
    type: "education",
    role: "BSc Computer Science",
    organization: "State University of Technology",
    period: "2016 - 2020",
    icon: "🎓",
    points: [
      "Graduated First Class Honours — GPA 3.92/4.0.",
      "Final year thesis: Optimising Neural Network Inference with WebAssembly.",
      "President of the Coding Society; organised annual hackathon (300+ participants).",
    ],
  },
];

// Technologies / Skills
export const technologies = [
  { name: "React",      category: "Frontend", icon: "⚛️", color: "#61dafb" },
  { name: "Next.js",    category: "Frontend", icon: "▲",  color: "#ffffff" },
  { name: "TypeScript", category: "Frontend", icon: "🔷", color: "#3178c6" },
  { name: "Three.js",   category: "Frontend", icon: "🌐", color: "#ffffff" },
  { name: "Tailwind",   category: "Frontend", icon: "🎨", color: "#38bdf8" },
  { name: "GSAP",       category: "Frontend", icon: "⚡", color: "#88ce02" },
  { name: "Node.js",    category: "Backend",  icon: "🟢", color: "#68a063" },
  { name: "Express",    category: "Backend",  icon: "🚂", color: "#ffffff" },
  { name: "PostgreSQL", category: "Backend",  icon: "🐘", color: "#336791" },
  { name: "MongoDB",    category: "Backend",  icon: "🍃", color: "#4db33d" },
  { name: "Redis",      category: "Backend",  icon: "🔴", color: "#dc382d" },
  { name: "GraphQL",    category: "Backend",  icon: "💜", color: "#e10098" },
  { name: "Docker",     category: "DevOps",   icon: "🐳", color: "#2496ed" },
  { name: "AWS",        category: "DevOps",   icon: "☁️", color: "#ff9900" },
  { name: "Git",        category: "Tools",    icon: "🔀", color: "#f05032" },
  { name: "Figma",      category: "Tools",    icon: "🎭", color: "#f24e1e" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO at TechCorp Inc.",
    feedback: "Absolutely exceptional work. Alex delivered our microservices platform ahead of schedule and the code quality was outstanding. Our team productivity increased by 35% after the rollout.",
    avatar: "SM",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    role: "Product Manager at StartupXYZ",
    feedback: "Working with Alex was a pleasure. He understood the product vision immediately and translated it into a beautiful, performant UI. The team loved the component library he built.",
    avatar: "JC",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Lead Designer at Digital Agency Co.",
    feedback: "Rare to find a developer who truly understands design. Alex brought our Figma designs to life pixel-perfectly with smooth animations we did not even ask for. Remarkable work.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Founder at LaunchFast",
    feedback: "Alex built our entire MVP in 3 weeks. The codebase is clean, well-documented, and scalable. I will definitely be working with him again on our next product.",
    avatar: "MW",
    rating: 5,
  },
  {
    id: 5,
    name: "Aiko Tanaka",
    role: "Engineering Manager at ScaleUp",
    feedback: "His problem-solving skills are unmatched. When we hit a critical WebSocket scaling issue at 3 a.m., Alex jumped in and had it resolved within the hour. Total professional.",
    avatar: "AT",
    rating: 5,
  },
  {
    id: 6,
    name: "David Okonkwo",
    role: "Co-Founder at BuildBetter",
    feedback: "The 3D portfolio website Alex created for our studio blew every client away. It is a masterpiece of engineering and design. Highly, highly recommended.",
    avatar: "DO",
    rating: 5,
  },
];

// Social Links
export const socialLinks = [
  { name: "GitHub",   url: "https://github.com",   icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
  { name: "Twitter",  url: "https://twitter.com",  icon: "🐦" },
];
