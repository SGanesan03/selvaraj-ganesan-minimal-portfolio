export interface Project {
  id: string;
  title: string;
  stack: string[];
  context: string;
  bullets: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  demo?: { name: string; tech: string[]; liveUrl: string; repoUrl: string };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Professional' | 'Conversational';
}

export interface Tool {
  name: string;
  category: string;
}


export const PROFILE = {
  name: 'Selvaraj Ganesan',
  role: 'Senior Frontend Developer',
  location: 'Chennai, Tamil Nadu - 600100',
  phone: '+91 9345242342',
  email: 'selvaraj.ganesan.offz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/selvaraj-ganesan-frontend-developer',
  github: 'https://github.com/sganesan03',
  resumeUrl: 'https://sganesan03.github.io/selvaraj-ganesan-minimal-portfolio/Selvaraj_Ganesan_Resume.pdf',
  yearsExp: '5+',
  availability: 'Available',
  noticePeriod: '90-day notice',
  openToRoles: ['Senior Frontend Engineer', 'Frontend Tech Lead', 'React Architect'],
  summary:
    'Senior Frontend Developer with 5+ years of experience delivering production-grade web applications across fintech, industrial automation, and data visualisation domains. Achieved 45% load time improvements, led teams of 4+ engineers, and secured financial platforms serving 8,000+ users. Deep expertise in React, Angular, TypeScript, micro-frontend architectures (Single-SPA), and RBAC-driven security workflows.',
};

export const ACHIEVEMENTS = [
  { metric: '45%',    label: 'Load time reduction',      context: 'via code splitting & lazy loading' },
  { metric: '78%',    label: 'Test coverage achieved',   context: 'up from 42% through mentoring' },
  { metric: '8,000+', label: 'Users secured',            context: 'across JWT + RBAC financial modules' },
  { metric: '60%',    label: 'UI duplication reduced',   context: 'via shared component library' },
];

export const PROJECTS: Project[] = [
  {
    id: 'justtouch-ui',
    title: 'JustTouch UI — React Design System & Component Explorer',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Design Systems', 'Component Libraries'],
    context: 'Built a production-ready React UI design system with 50+ interactive components, live viewport previews, dark mode, and TSX code copy — powered by Vite, TypeScript, and Tailwind CSS.',
    bullets: [
      '8 documentation categories covering 50+ UI components across base, application, and marketing layers.',
      'Live Desktop/Tablet/Mobile viewport previews, Light/Dark mode toggling, and one-click TSX code copy per component.',
      'Strict lib/app boundary, semantic design tokens, and alias-free module resolution for production-grade maintainability.',
    ],
    liveUrl: 'https://sganesan03.github.io/justtouch-ui-design-system/',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Novac Technology Solutions Private Limited',
    location: 'Chennai',
    period: 'Dec 2025 – Present',
    bullets: [
      'Architected and delivered 3+ scalable, transaction-oriented financial web applications using React and TypeScript, reducing UI defect rate by 35% through modular component design.',
      'Built a reusable component library of 40+ UI components with SCSS and Tailwind CSS, cutting cross-team UI duplication by 60% and accelerating feature delivery.',
      'Improved application load performance by 45% via Redux Toolkit optimisation, code splitting, and lazy loading across data-intensive financial dashboards.',
      'Secured 5 financial modules serving 8,000+ users with JWT-based auth and RBAC, achieving zero auth-related incidents post-launch.',
      'Mentored 3 junior developers through structured peer reviews and Jest unit testing practices, raising team code coverage from 42% to 78%.',
    ],
    demo: {
      name: 'automall-pro-auction-workbench',
      tech: ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
      liveUrl: 'https://sganesan03.github.io/automall-pro-auction-workbench/',
      repoUrl: 'https://github.com/sganesan03/automall-pro-auction-workbench',
    },
  },
  {
    role: 'Software Engineer (Angular & React Web Development)',
    company: 'Utthunga Technologies',
    location: 'Bangalore',
    period: 'Mar 2025 – Dec 2025',
    bullets: [
      'Developed and maintained 4 client-facing web applications using Angular, React, and TypeScript, including real-time integrations with industrial PLC controller connectors for robotic devices.',
      'Delivered modular micro-frontend architecture using Single-SPA and Lerna across 3 product teams, reducing inter-team deployment conflicts by 50%.',
      'Led a frontend squad of 4 engineers — distributed tasks, conducted 100+ code reviews, and maintained 95%+ on-time sprint delivery across 8 Agile sprints.',
    ],
    demo: {
      name: 'ftds-enterprise-studio-v3',
      tech: ['Angular', 'TypeScript', 'RxJS', 'IEC 61131-3'],
      liveUrl: 'https://sganesan03.github.io/ftds-enterprise-studio-v3/',
      repoUrl: 'https://github.com/SGanesan03/ftds-enterprise-studio-v3',
    },
  },
  {
    role: 'Software Engineer (Angular Web Development)',
    company: 'Utthunga Technologies',
    location: 'Bangalore',
    period: 'Dec 2022 – Mar 2025',
    bullets: [
      'Built and maintained 6 enterprise Angular + RxJS modules with real-time industrial oil flow device connectivity, supporting 200+ field operators.',
      'Improved cross-browser compatibility and UI/UX workflows, reducing reported UI bugs by 30% and cutting QA cycle time by 1 week per release.',
      'Architected a shared Angular component library used across 4 internal products, standardising UI patterns and reducing per-feature development time by 25%.',
      'Collaborated with backend and embedded teams to design REST API contracts for 3 industrial device integrations, ensuring sub-200ms response SLAs.',
    ],
    demo: {
      name: 'empire-5700e-hybrid-studio',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
      liveUrl: 'https://sganesan03.github.io/empire-5700e-hybrid-studio/#/overview',
      repoUrl: 'https://github.com/SGanesan03/empire-5700e-hybrid-studio',
    },
  },
  {
    role: 'Frontend Engineer (React & Grafana)',
    company: 'Utthunga Technologies',
    location: 'Bangalore',
    period: 'Aug 2021 – Dec 2022',
    bullets: [
      'Engineered custom Grafana plugins using React, TypeScript, and the Grafana Plugin SDK, deployed in client environments monitoring live industrial data.',
      'Optimised plugin rendering performance by 40% and built WCAG-accessible data visualisations integrated with third-party REST APIs.',
    ],
    demo: {
      name: 'grafana-industrial-plugins-demo',
      tech: ['Grafana', 'React', 'TypeScript', 'Grafana Plugin SDK'],
      liveUrl: 'https://play.grafana.org/d/3SWXxreWk/grafana-dashboard?from=now-1h&to=now&timezone=browser',
      repoUrl: 'https://github.com/SGanesan03',
    },
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend Technologies',
    items: ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS/SASS', 'Tailwind CSS', 'Single-SPA (Micro-frontends)', 'Responsive Web Design'],
  },
  {
    category: 'State Management & UI',
    items: ['Redux Toolkit', 'Context API', 'RxJS', 'Material UI (MUI)', 'Angular Material', 'Bootstrap'],
  },
  {
    category: 'Backend, APIs & Security',
    items: ['Node.js', 'GraphQL', 'RESTful APIs', 'SQL / MSSQL', 'JSON', 'JWT', 'Role-Based Access Control (RBAC)'],
  },
  {
    category: 'Data Visualization',
    items: ['Grafana', 'Grafana Plugin SDK', 'Custom Dashboards & Panels', 'Interactive Charts & Graphs'],
  },
  {
    category: 'Testing & Build Tools',
    items: ['Jest', 'React Testing Library', 'Jasmine', 'Karma', 'Webpack', 'Vite', 'Lerna', 'NPM/NVM'],
  },
  {
    category: 'DevOps & Methodologies',
    items: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Jira', 'Azure Workflows', 'Agile/Scrum', 'Frontend Architecture & Design Patterns', 'Code Reviews', 'Web Accessibility (WCAG)'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Alagappa University, Chennai (Distance Learning)',
    period: 'Jun 2022 – Aug 2025',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Ramakrishna Mission Polytechnic College, Chennai',
    period: 'Jun 2018 – Mar 2021',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'English', proficiency: 'Professional' },
  { name: 'Tamil',   proficiency: 'Native'       },
];

export const TOOLS: Tool[] = [
  { name: 'Single-SPA',    category: 'Micro-frontend' },
  { name: 'Lerna',         category: 'Monorepo'       },
  { name: 'Grafana',       category: 'Observability'  },
  { name: 'Redux Toolkit', category: 'State'          },
  { name: 'Jenkins',       category: 'CI/CD'          },
  { name: 'Vite',          category: 'Build'          },
  { name: 'Webpack',       category: 'Build'          },
  { name: 'Jest',          category: 'Testing'        },
];
