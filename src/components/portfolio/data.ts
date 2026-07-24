export const PROFILE = {
  name: "Manigandla Supriya",
  role: "Python Full Stack AI Developer",
  tagline: [
    "Welcome to my portfolio ✨",
    "Python Full Stack AI Developer",
    "FastAPI • Django • React.js • AWS",
    "Building AI-powered products end-to-end",
    "I turn ideas into production-ready software",
  ],
  email: "rupasupriya27183@gmail.com",
  phone: "+91 8008232140",
  location: "Machilipatnam, Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/manigandla-supriya-64b7a3250",
  github: "https://github.com/Manigandlasupriya",
  resume: "/Manigandla_Supriya_Full_Stack_Python_Developer.pdf",
  summary:
    "I'm a Computer Science graduate and Python Full Stack AI Developer who builds elegant, production-grade software end-to-end — from clean database schemas and secure FastAPI/Django backends to fast, delightful React interfaces deployed on AWS. I've shipped AI-powered products with Google Gemini and OpenAI, engineered computer-vision systems that create real-world accessibility, and thrive in Agile teams where craft, ownership, and clarity matter. I write code the way a seasoned engineer would: readable, tested, performant, and built to scale.",
};

export const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "SQL", "Java"] },
  { category: "Backend", items: ["FastAPI", "Django", "Flask", "REST APIs"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Databases", items: ["MySQL", "Firebase"] },
  { category: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "Docker", "Git", "GitHub"] },
  { category: "AI / ML", items: ["Google Gemini AI", "OpenAI API", "CNN", "Keras", "OpenCV", "NumPy", "Pandas", "scikit-learn", "Matplotlib"] },
  { category: "Tools", items: ["Postman", "EmailJS", "Agile / SDLC"] },
];


export const EXPERIENCE = [
  {
    role: "Python Full Stack Intern",
    company: "Motive Computer Education",
    period: "Apr 2025 – Mar 2026",
    points: [
      "Built full-stack applications using FastAPI, React.js and MySQL",
      "Designed secure REST APIs with authentication and validation",
      "Performed debugging & root cause analysis to ship reliable releases",
      "Optimized backend query performance and API latency",
    ],
  },
  {
    role: "Software Development Intern (Remote)",
    company: "KodNest Technologies",
    period: "Jul 2024 – Mar 2025",
    points: [
      "Developed Flask + MySQL applications with clean architecture",
      "Wrote optimized SQL queries and integrated third-party APIs",
      "Collaborated in Agile teams using Git/GitHub workflows",
    ],
  },
  {
    role: "Cloud Intern (Remote)",
    company: "AWS Virtual Internship",
    period: "Jan 2024 – May 2024",
    points: [
      "Deployed workloads on EC2, S3, Lambda and RDS",
      "Built serverless functions and event-driven pipelines",
      "Applied AWS Well-Architected best practices",
    ],
  },
];

export const PROJECT_CATEGORIES = ["All", "AI / ML", "Full Stack", "Computer Vision"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS = [
  {
    title: "CareerNova AI",
    subtitle: "AI-Powered Career Assistant",
    description:
      "End-to-end platform for resume analysis, interview prep and cold-email generation using Gemini AI. Full-stack app with authenticated flows and email automation.",
    tech: ["FastAPI", "React.js", "MySQL", "Gemini AI", "EmailJS", "Vercel"],
    categories: ["AI / ML", "Full Stack"] as ProjectCategory[],
    live: "https://careernova-ai-virid.vercel.app/",
    github: "https://github.com/Manigandlasupriya/careernova-ai",
    image: "/src/assets/project-careernova.jpg",
    gradient: "from-[oklch(0.72_0.19_255)] to-[oklch(0.68_0.22_305)]",
  },
  {
    title: "AI Code Mastery Hub",
    subtitle: "Coding Prep Platform",
    description:
      "Interactive coding practice with real-time AI feedback, hint generation and progress tracking. Powered by OpenAI API, Flask and MySQL.",
    tech: ["Flask", "OpenAI API", "MySQL", "HTML5, CSS"],
    categories: ["AI / ML", "Full Stack"] as ProjectCategory[],
    github: "https://github.com/Manigandlasupriya/AI-CodeMastery-Hub",
    image: "/src/assets/project-codemastery.jpg",
    gradient: "from-[oklch(0.68_0.22_305)] to-[oklch(0.78_0.16_195)]",
  },
  {
    title: "Medicine Identification for the Blind",
    subtitle: "Computer Vision Accessibility System",
    description:
      "A deep-learning powered computer vision system that identifies medicines from a live camera feed with ~92% accuracy and speaks the result aloud — restoring independence and safety for visually impaired users. Trained end-to-end on a custom dataset with Keras CNNs and OpenCV image pipelines.",
    tech: ["Python", "Keras", "OpenCV", "Computer Vision", "NumPy", "Pandas", "Matplotlib", "scikit-learn"],
    categories: ["AI / ML", "Computer Vision"] as ProjectCategory[],
    github: "https://github.com/Manigandlasupriya/-Medicine-Identification-for-Blind-People-by-Deep-Learning-Techniques",
    image: "/src/assets/project-medicine.jpg",
    gradient: "from-[oklch(0.78_0.16_195)] to-[oklch(0.72_0.19_255)]",
  },
];


export const CERTIFICATIONS = [
  { title: "Cloud Computing A+", issuer: "Honeywell", year: "2023" },
  { title: "SQL Certification", issuer: "HackerRank", year: "2024" },
  { title: "Python Essentials I", issuer: "Cisco", year: "2023" },
  { title: "Academic Topper — B.Tech", issuer: "Sri Vasavi Institute", year: "2020–2024" },
  { title: "National Finalist", issuer: "Kavach Cyber Security Hackathon", year: "2023" },
  { title: "National Finalist", issuer: "Flipkart GRID 5.0", year: "2023" },
];

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
