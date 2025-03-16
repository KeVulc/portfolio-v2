export const heroContent = {
  title: "Kevin Vulcano",
  subtitle: {
    pretitle: ["Full-Stack", "Data", "Artifical Intelligence"],
    posttitle: "Engineer",
  },
  socialLinks: [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/kevin-vulcano-8ab26b256",
      text: "LinkedIn",
    },
    {
      icon: "email",
      url: "mailto:Kevin_Vulcano@hotmail.com",
      text: "Email",
    },
    {
      icon: "pdf",
      url: "src/assets/final_resume.pdf",
      text: "Resume",
    },
  ],
};

const rawSkills = [
  { name: "Python", level: "expert" },
  { name: "Java", level: "expert" },
  { name: "JavaScript", level: "expert" },
  { name: "HTML", level: "expert" },
  { name: "CSS", level: "expert" },
  { name: "Pandas", level: "expert" },
  { name: "NumPy", level: "expert" },
  { name: "React", level: "expert" },
  { name: "ArcPy", level: "expert" },
  { name: "ArcGIS", level: "expert" },
  { name: "Git", level: "expert" },
  { name: "PyTorch", level: "expert" },
  { name: "CrewAI", level: "intermediate" },
  { name: "LaTeX", level: "intermediate" },
  { name: "Django", level: "expert" },
  { name: "Docker", level: "expert" },
  { name: "Firebase", level: "expert" },
  { name: "GH Actions", level: "intermediate" },
  { name: "SQLite", level: "intermediate" },
  { name: "MongoDB", level: "intermediate" },
  { name: "GraphQL", level: "intermediate" },
  { name: "ExpressJS", level: "intermediate" },
  { name: "Vite", level: "intermediate" },
  { name: "TensorFlow", level: "intermediate" },
  { name: "Sci-Kit", level: "intermediate" },
  { name: "Matplotlib", level: "intermediate" },
  { name: "Seaborn", level: "intermediate" },
  { name: "PostgreSQL", level: "expert" },
  { name: "NextJS", level: "intermediate" },
  { name: "Vue", level: "intermediate" },
  { name: "C++", level: "intermediate" },
  { name: "Kotlin", level: "intermediate" },
  { name: "C#", level: "intermediate" },
  { name: "JUnit", level: "intermediate" },
  { name: "Jest", level: "intermediate" },
  { name: "Cypress", level: "intermediate" },
  { name: "Manim", level: "intermediate" },
  { name: "OpenAPI", level: "intermediate" },
  { name: "REST", level: "intermediate" },
  { name: "OpenCV", level: "intermediate" },
  { name: "Tailwind CSS", level: "intermediate" },
  { name: "ChromaDB", level: "intermediate" },
  { name: "Scheme", level: "beginner" },
  { name: "Haskell", level: "beginner" },
  { name: "Raku", level: "beginner" },
  { name: "Prolog", level: "beginner" },
  { name: "Postscript", level: "beginner" },
  { name: "Go", level: "beginner" },
  { name: "MATLAB", level: "beginner" },
  { name: "Azure", level: "beginner" },
  { name: "AWS", level: "beginner" },
  { name: "Hadoop", level: "beginner" },
];

const levelOrder = { expert: 1, intermediate: 2, beginner: 3 };

export const skills = rawSkills.sort((a, b) => {
  if (levelOrder[a.level] === levelOrder[b.level]) {
    return a.name.localeCompare(b.name);
  }
  return levelOrder[a.level] - levelOrder[b.level];
});

export const projects = [
  {
    title: "Geospatial Data Pipeline",
    description:
      "Developed ETL processes for geospatial datasets with containerized backend systems",
    tech: "Python/Docker/ArcGIS",
    link: "#",
  },
  {
    title: "Log Anomaly Detection",
    description:
      "Implemented Volume Hypersphere Minimization research for log analysis",
    tech: "PyTorch/TensorFlow",
    link: "#",
  },
  {
    title: "Educational Portal",
    description: "Built React-based learning platform for university courses",
    tech: "React/Node.js/Tailwind",
    link: "#",
  },
];

export const experiences = [
  {
    company: "Horrocks",
    role: "Data Engineer",
    period: "Jun 2024 - Present",
    points: [
      "Developed and maintained ETL processes and data pipelines for geospatial datasets",
      "Engineered automation tools that streamlined workflows",
      "Created a retrieval-augmented generation (RAG) model and implemented the backend system that supports the RAG model for a web application",
      "Refactored, debugged and optimized a predictive algorithm for pavement deterioration and treatment planning",
    ],
  },
  {
    company: "Horrocks",
    role: "Junior Software Developer",
    period: "Feb 2024 - Jun 2024",
    points: [
      "Transformed raw data into structured formats and developed custom applications for rapid data labeling, supporting deep learning model training and evaluation",
      "Implemented efficient database transfer processes and feature mapping techniques to ensure data integrity",
      "Converted CAD data into GIS-compatible formats",
    ],
  },
  {
    company: "Utah State University",
    role: "Graduate Teaching Assistant",
    period: "Jan 2023 - Dec 2023",
    points: [
      "Provided detailed feedback on student assignments and facilitated learning in React web and Android application development courses",
    ],
  },
  {
    company: "Utah State University",
    role: "Graduate Research Assistant",
    period: "May 2023 - Aug 2023",
    points: [
      "Collaborated on research applying Volume Hypersphere Minimization to log anomaly detection",
      "Designed and executed experiments, documented findings, and contributed to academic publications",
    ],
  },
  {
    company: "Utah State University",
    role: "Computer Science Tutor",
    period: "Apr 2021 - Aug 2022",
    points: [
      "Offered personalized guidance to enhance student understanding of complex computer science concepts and collaborated on program improvements",
    ],
  },
];

export const education = [
  {
    institution: "Utah State University",
    degree: "M.S. Computer Science",
    year: "2023",
    thesis: {
      title:
        "Adversarially Reweighted Sequence Anomaly Detection With Limited Log Data",
      link: "https://digitalcommons.usu.edu/etd2023/70/",
      icon: "FaFileAlt",
    },
  },
  {
    institution: "Utah State University",
    degree: "B.S. Computer Science, Minor in Psychology",
    year: "2018 - 2022",
    honors: ["Magna Cum Laude", "Dean's List"],
  },
];

export const footer = {
  fullName: "Kevin Vulcano",
  email: "Kevin_Vulcano@hotmail.com",
};
