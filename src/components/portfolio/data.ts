export const PROFILE = {
  name: "Manigandla Supriya",
  role: "Python Full Stack & Generative AI Developer",
  tagline: [
    "Welcome to my portfolio ✨",
    "Python Full Stack & Generative AI Developer",
    "FastAPI • Flask • React.js • RAG • AWS",
    "Building AI-powered products end-to-end",
    "I turn ideas into production-ready software",
  ],
  email: "rupasupriya27183@gmail.com",
  phone: "+91 8008232140",
  location: "Machilipatnam, Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/manigandla-supriya",
  github: "https://github.com/Manigandlasupriya",
  resume: "/Supriya_Manigandla_Resume.pdf",
  summary:
    "I'm a Computer Science graduate and Python Full Stack & Generative AI Developer with hands-on experience building and deploying production-grade web applications and AI-driven systems across the full software development lifecycle. I build scalable backends with FastAPI and Flask, integrate AI (Gemini AI, OpenAI API, LLMs, RAG), and bring root-cause analysis, SQL optimization, REST API design, and cloud deployment on AWS and Vercel to Agile teams.",
};

export const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { category: "Backend", items: ["FastAPI", "Flask", "RESTful APIs"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS"] },
  { category: "Databases", items: ["MySQL", "Firebase"] },
  { category: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "Docker", "Render", "Vercel"] },
  { category: "AI / ML", items: ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "Gemini AI API", "OpenAI API", "Ollama", "ChromaDB", "CNN", "NumPy", "Pandas"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "Visual Studio", "Agile / SDLC"] },
];


export const EXPERIENCE = [
  {
    role: "Python Full Stack Intern",
    company: "Motive Computer Education, Guntur, India",
    period: "Apr 2025 – Mar 2026",
    points: [
      "Developed and maintained end-to-end full-stack applications using Python, FastAPI, React.js, and MySQL, prioritizing availability, security, and performance (apps with user login, dashboards, and stored data)",
      "Designed and integrated secure, low-latency RESTful APIs so the React.js frontend and FastAPI backend could exchange data smoothly, such as submitting a form and receiving results instantly",
      "Performed debugging and root-cause analysis to resolve user-reported issues quickly, e.g. tracing a failed request through the API and database to fix the underlying bug",
      "Refactored legacy code and optimized SQL queries so data-heavy pages loaded faster, making the application easier to scale",
      "Participated in all phases of the Agile SDLC, driving continuous improvement through code reviews, automated unit testing, and deployment monitoring",
    ],
  },
  {
    role: "Software Development Intern (Remote)",
    company: "KodNest Technologies",
    period: "Jul 2024 – Mar 2025",
    points: [
      "Built and supported web applications using Python (Flask) and MySQL, following enterprise code quality standards",
      "Improved response speed by optimizing database schemas, indexing, and complex queries, e.g. adding indexes to frequently searched columns",
      "Collaborated with cross-functional engineering teams on feature development, third-party API integration, peer code reviews, testing, and deployment",
      "Used Git and GitHub for version control, release management, and issue tracking in Agile sprints, developing on feature branches and merging through pull requests",
    ],
  },
  {
    role: "Cloud Intern (Remote)",
    company: "AWS Virtual Internship",
    period: "Jan 2024 – May 2024",
    points: [
      "Provisioned, deployed, and managed scalable cloud infrastructure using AWS services (EC2, S3, Lambda, and RDS)",
      "Configured EC2 virtual servers and RDS databases to build fault-tolerant hosting and testing environments, e.g. hosting a web app with a managed database",
      "Built serverless workflows with AWS Lambda and managed object storage using Amazon S3, e.g. triggering a function when a file is uploaded",
      "Designed environment configurations aligned with the AWS Well-Architected Framework, focusing on security, reliability, cost optimization, and operational efficiency",
    ],
  },
];

export const PROJECT_CATEGORIES = ["All", "AI / ML", "Full Stack", "Computer Vision"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS = [
  {
    title: "Retrivana",
    subtitle: "AI Chat with Private Company PDFs",
    description:
      "An AI app where users upload private company PDFs (like HR policies) and ask questions such as \"How many leave days do I get?\" to get the answer along with the page it came from. Hybrid retrieval — keyword search and meaning-based search combined, then re-ranked — makes answers more accurate, while running the AI locally with Ollama keeps all data private. Includes login, Google sign-in and password reset so users only see their own files, plus a usage dashboard, saved chat history with PDF download, automated tests, and Docker for an easy setup.",
    tech: ["Python", "FastAPI", "React.js", "Ollama", "ChromaDB", "Docker"],
    categories: ["AI / ML", "Full Stack"] as ProjectCategory[],
    github: "https://github.com/Manigandlasupriya/Retrivana",
    demo: "/retrivana-demo.mp4",
    poster: "/retrivana-poster.jpg",
    image: "/src/assets/project-retrivana.jpg",
    gradient: "from-[oklch(0.78_0.16_195)] to-[oklch(0.68_0.22_305)]",
  },
  {
    title: "CareerNova AI",
    subtitle: "AI-Powered Career Assistant",
    description:
      "A full-stack AI platform tested with 50+ users, combining 7+ career workflows: dashboard, ATS analysis, AI resume optimization, job tracking, interview prep, outreach emails and history. FastAPI REST APIs power ATS scoring, resume analysis, interview prep, job tracking and user history, with Google Gemini AI for resume rewriting, career recommendations and job suggestions based on skill gaps. React.js dashboard with MySQL storage and EmailJS for job outreach, deployed on Vercel and validated end-to-end with 50+ test cases.",
    tech: ["Python", "FastAPI", "React.js", "MySQL", "Google Gemini AI", "Vercel", "EmailJS"],
    categories: ["AI / ML", "Full Stack"] as ProjectCategory[],
    live: "https://careernova-ai-virid.vercel.app/",
    github: "https://github.com/Manigandlasupriya/careernova-ai",
    image: "/src/assets/project-careernova.jpg",
    gradient: "from-[oklch(0.72_0.19_255)] to-[oklch(0.68_0.22_305)]",
  },
  {
    title: "AI Code Mastery Hub",
    subtitle: "AI Quiz Prep Platform",
    description:
      "An AI quiz prep platform tested with 50+ users, with automated quiz evaluation, instant feedback, performance tracking and learning videos covering C, Python and other programming topics. Integrates the OpenAI API for AI explanations and personalized recommendations, with REST APIs and a MySQL database managing users, quizzes, results and progress dashboards.",
    tech: ["Python", "Flask", "HTML", "CSS", "MySQL", "OpenAI API"],
    categories: ["AI / ML", "Full Stack"] as ProjectCategory[],
    github: "https://github.com/Manigandlasupriya/AI-CodeMastery-Hub",
    image: "/src/assets/project-codemastery.jpg",
    gradient: "from-[oklch(0.68_0.22_305)] to-[oklch(0.78_0.16_195)]",
  },
  {
    title: "Medicine Identification for the Blind",
    subtitle: "Computer Vision Accessibility System",
    description:
      "A deep learning system that helps visually impaired users identify medicines from images. The dataset was prepared with Python, NumPy and Pandas (data cleaning and image preprocessing), and a CNN was trained to classify medicine images into categories, achieving ~92% accuracy on test data.",
    tech: ["Python", "NumPy", "Pandas", "Deep Learning", "CNN"],
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
