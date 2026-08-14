export const personalInfo = {
  name: "P. R. Matthew",
  tagline: "// aspiring security engineer & ai developer",
  heroSubtitle: "Fourth-year Engineering student from Tamil Nadu, India — passionate about Cybersecurity, AI, and Software Development. Building intelligent systems that solve real-world problems.",
  aboutTitle: "Aspiring SOC Analyst & Security Engineer",
  aboutParagraphs: [
    "I am a fourth-year Engineering student from Tamil Nadu, India, deeply passionate about cybersecurity, AI, automation, cloud technologies, and software engineering. I enjoy building practical projects that solve real-world problems using artificial intelligence and modern development frameworks.",
    "I continuously improve my technical skills through certifications, hands-on labs, Capture the Flag (CTF) challenges, security research, and personal projects. I love learning about new attack techniques, defensive security strategies, SIEM technologies, threat detection, and cloud security.",
    "My long-term goal is to become a Security Engineer or SOC Analyst working for a leading technology company — contributing to protecting enterprise infrastructure while continuously learning emerging security technologies."
  ],
  typingPhrases: [
    "Aspiring SOC Analyst",
    "Security Engineer",
    "AI Developer",
    "Software Engineer",
    "CTF Player"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/p-r-matthew-728870373/",
    github: "https://github.com/matzcoder",
    email: "mailto:prmatthew2005@gmail.com",
    emailAddress: "prmatthew2005@gmail.com",
    githubUser: "matzcoder",
    linkedinUser: "p-r-matthew-728870373"
  },
  location: "Tamil Nadu, India",
  profileImage: "/profile-photoaidcom-cropped.jpg",
  fallbackImage: "/profile.jpg"
};

export const aboutTags = [
  "SOC Operations",
  "Threat Detection",
  "MITRE ATT&CK",
  "AI Security",
  "LangChain / RAG",
  "FastAPI",
  "CTF Challenges",
  "Cloud Security"
];

export const statsData = [
  { id: "projects", num: 4, label: "Projects Built" },
  { id: "certs", num: 5, label: "Certifications Earned" },
  { id: "tech", num: 15, label: "Technologies Learned" },
  { id: "ctf", num: 10, label: "CTF Challenges" },
  { id: "problems", num: 50, label: "Coding Problems Solved" }
];


export const certificationsData = [
  {
    title: "Certified in Cybersecurity (CC)",
    org: "ISC2",
    date: "In Progress — 2026",
    badge: "Cybersecurity",
    icon: "ShieldCheck"
  },
  {
    title: "Java Programming Certification",
    org: "Oracle / NPTEL",
    date: "Completed",
    badge: "Programming",
    icon: "Coffee"
  },
  {
    title: "Python Programming Certification",
    org: "Coursera / PCEP",
    date: "Completed",
    badge: "Programming",
    icon: "Terminal"
  },
  {
    title: "Security+ / CompTIA",
    org: "CompTIA",
    date: "Upcoming",
    badge: "Cybersecurity",
    icon: "Lock"
  },
  {
    title: "AWS / Cloud Security Certification",
    org: "Amazon Web Services",
    date: "Upcoming",
    badge: "Cloud",
    icon: "Cloud"
  },
  {
    title: "SOC Analyst Certification",
    org: "TryHackMe / EC-Council",
    date: "Upcoming",
    badge: "SOC",
    icon: "Target"
  }
];

export const projectsData = [
  {
    id: "modal-p1",
    title: "AI-Powered Bug Report Triage System",
    icon: "Bug",
    description: "Automatically analyzes software bug reports, classifies severity, detects duplicates, prioritizes issues using LLMs and intelligent automation.",
    tags: ["Python", "FastAPI", "LLM", "PostgreSQL", "AI Agents"],
    github: "https://github.com/matzcoder",
    features: [
      "Automatic bug report severity classification using LLMs",
      "Duplicate detection to prevent redundant issues",
      "Intelligent prioritization and queue management",
      "AI-assisted analysis and suggested fix categories",
      "FastAPI backend with PostgreSQL data persistence"
    ]
  },
  {
    id: "modal-p2",
    title: "NGO AI Chatbot",
    icon: "Bot",
    description: "Intelligent chatbot for NGOs using Retrieval-Augmented Generation (RAG) — answers queries, assists volunteers, streamlines communication.",
    tags: ["LangChain", "FAISS", "FastAPI", "Python", "LLM"],
    github: "https://github.com/matzcoder",
    features: [
      "RAG architecture for accurate, context-aware responses",
      "FAISS vector store for efficient document retrieval",
      "LangChain orchestration for LLM pipeline management",
      "FastAPI REST API for easy integration",
      "Volunteer and donor query automation"
    ]
  },
  {
    id: "modal-p3",
    title: "AI-Powered SOC Incident Dashboard",
    icon: "Search",
    description: "Intelligent SOC dashboard correlating alerts, investigating incidents, mapping MITRE ATT&CK, risk-scoring threats, and summarizing attack chains.",
    tags: ["Python", "FastAPI", "LangChain", "MITRE", "Dashboard"],
    github: "https://github.com/matzcoder",
    features: [
      "Alert correlation and intelligent grouping",
      "MITRE ATT&CK framework mapping for each incident",
      "AI-powered investigation summaries and recommendations",
      "Risk scoring and severity prioritization",
      "Real-time dashboard analytics and visualization"
    ]
  },
  {
    id: "modal-p4",
    title: "Security Alert Triage Platform",
    icon: "Siren",
    description: "Automates security alert classification, prioritization, and investigation workflows using AI — reducing analyst workload and response time.",
    tags: ["Python", "AI", "Security", "Automation"],
    github: "https://github.com/matzcoder",
    features: [
      "Automated alert classification by type and severity",
      "AI-assisted investigation workflow automation",
      "False positive reduction through intelligent filtering",
      "Priority queue management for analyst workloads",
      "Integration-ready REST API architecture"
    ]
  }
];

export const experienceData = [
  {
    title: "Software Development Intern",
    org: "Software Plus Solutions Private Limited",
    date: "📅 Internship · Tamil Nadu, India",
    bullets: [
      "Worked on WordPress development, SEO optimization, and digital marketing strategies",
      "Assisted in client management and business-oriented technology solutions",
      "Strengthened problem-solving abilities and professional communication skills",
      "Gained hands-on experience in full website delivery and content strategies"
    ],
    tags: ["WordPress", "SEO", "Digital Marketing", "Client Management"]
  },
  {
    title: "Personal Projects & Research",
    org: "Independent · AI & Cybersecurity",
    date: "📅 Ongoing · 2023 – Present",
    bullets: [
      "Built AI-powered security tools combining LLMs with SOC workflows",
      "Developed RAG-based chatbots using LangChain, FAISS, and FastAPI",
      "Participated in CTF challenges and security research activities",
      "Continuously learning SIEM platforms, threat detection, and cloud security"
    ],
    tags: ["Python", "LangChain", "FastAPI", "CTF", "AI"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering",
    institution: "Prince K. Vasudevan College of Engineering",
    date: "📅 2023 – 2027 · Tamil Nadu, India",
    description: "Fourth-year Engineering student with a focus on cybersecurity, AI, and software development. Consistently engaged in practical projects, technical clubs, and self-directed learning to complement coursework.",
    tags: [
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Software Engineering",
      "Web Technologies"
    ]
  }
];

export const githubStatsData = [
  { num: 4, label: "Public Repositories" },
  { num: 3, label: "Stars Earned" },
  { num: 5, label: "Languages Used" },
  { num: 12, label: "Commits This Month" }
];

export const githubReposData = [
  {
    name: "ai-bug-triage-system",
    url: "https://github.com/matzcoder",
    description: "AI-powered bug report classification and prioritization using LLMs",
    lang: "Python",
    langColor: "#3572A5",
    stars: 2,
    forks: 1
  },
  {
    name: "ngo-ai-chatbot",
    url: "https://github.com/matzcoder",
    description: "RAG-based intelligent chatbot for NGO communication and volunteer assistance",
    lang: "Python",
    langColor: "#3572A5",
    stars: 1,
    forks: 0
  },
  {
    name: "soc-ai-dashboard",
    url: "https://github.com/matzcoder",
    description: "Intelligent SOC incident investigation dashboard with MITRE ATT&CK mapping",
    lang: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0
  },
  {
    name: "security-alert-triage",
    url: "https://github.com/matzcoder",
    description: "Automated security alert classification and investigation workflow platform",
    lang: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0
  }
];
