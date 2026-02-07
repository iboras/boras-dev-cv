export const personalInfo = {
  name: "Igor Boras",
  title: "Full-Stack Developer",
  tagline: "Building modern web applications with clean code and great user experiences.",
  bio: "I'm a passionate full-stack developer with experience building scalable web applications. I enjoy working with modern technologies and solving complex problems. When I'm not coding, you can find me exploring new tools, contributing to open source, or writing about software development.",
  email: "ivan@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/iboras" },
    { label: "LinkedIn", url: "https://linkedin.com/in/iboras" },
    { label: "Twitter", url: "https://twitter.com/iboras" },
  ],
} as const;

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", ".NET", "C#", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "CI/CD", "Azure", "AWS", "Linux"],
  },
] as const;

export const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Full-Stack Developer",
    period: "2022 — Present",
    bullets: [
      "Led development of a customer-facing dashboard used by 10k+ users",
      "Migrated legacy jQuery codebase to React with TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    company: "TechStart Inc.",
    role: "Full-Stack Developer",
    period: "2019 — 2022",
    bullets: [
      "Built RESTful APIs serving 1M+ requests per day",
      "Developed responsive UI components with React and Tailwind CSS",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    company: "WebWorks Studio",
    role: "Junior Developer",
    period: "2017 — 2019",
    bullets: [
      "Developed and maintained client websites using React and Node.js",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Wrote unit and integration tests improving code coverage to 85%",
    ],
  },
] as const;

export const projects = [
  {
    name: "TaskFlow",
    description: "A real-time project management app with drag-and-drop boards, team collaboration, and automated workflows.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    url: "https://github.com/iboras/taskflow",
    live: "https://taskflow.example.com",
  },
  {
    name: "DevBlog",
    description: "A markdown-powered developer blog with syntax highlighting, RSS feed, and full-text search.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    url: "https://github.com/iboras/devblog",
  },
  {
    name: "CloudDeploy CLI",
    description: "A command-line tool for deploying containerized applications to multiple cloud providers with a single config file.",
    tech: ["Node.js", "Docker", "AWS SDK", "Azure SDK"],
    url: "https://github.com/iboras/clouddeploy",
  },
  {
    name: "Expense Tracker",
    description: "A personal finance app with budget tracking, visual charts, and bank account integration.",
    tech: ["React", "C#", ".NET", "SQL Server", "Chart.js"],
    url: "https://github.com/iboras/expense-tracker",
    live: "https://expenses.example.com",
  },
] as const;
