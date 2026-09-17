export const profile = {
  name: 'Shiwam Dwivedi',
  role: 'B.Tech Computer Science Student',
  tagline: 'Full Stack Developer',
  bio: 'I build modern and responsive web applications.',
  about:
    'I am a passionate B.Tech Computer Science student with a strong interest in full-stack development. I love building real-world projects that solve meaningful problems. From food delivery platforms to campus recruitment systems, I enjoy turning ideas into working software. I am constantly learning new technologies and improving my problem-solving skills through Data Structures and Algorithms.',
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Pursuing',
      year: '2022 - 2026',
      description:
        'Studying core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Completed',
      year: '2021 - 2022',
      description:
        'Completed higher secondary education with a focus on Science (PCM) and Computer Science fundamentals.',
    },
  ],
  github: 'https://github.com/shiwamdwivedi',
  linkedin: 'https://www.linkedin.com/in/shiwamdwivedi',
  email: 'shiwamdwivedi@gmail.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India',
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Vite', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'Django', level: 70 },
      { name: 'Spring Boot', level: 65 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Programming & DSA',
    icon: 'code',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 78 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
};

export const projects: Project[] = [
  {
    title: 'Dharti Ka Swad',
    description:
      'A full-stack food delivery platform connecting local kitchens with customers. Users can browse menus, place orders, and track deliveries in real time.',
    image:
      'https://images.pexels.com/photos/8939307/pexels-photo-8939307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    github: 'https://github.com/shiwamdwivedi/dharti-ka-swad',
    demo: '#',
    features: [
      'User authentication & profiles',
      'Real-time order tracking',
      'Cart & checkout system',
      'Admin dashboard for restaurants',
    ],
  },
  {
    title: 'Media Gallery',
    description:
      'A responsive media gallery web app with image filtering, lightbox view, and upload capabilities. Built with vanilla JavaScript for performance.',
    image:
      'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shiwamdwivedi/media-gallery',
    demo: '#',
    features: [
      'Category-based filtering',
      'Lightbox image viewer',
      'Drag-and-drop upload',
      'Responsive grid layout',
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio website built with React and Vite. Features smooth animations, dark theme, contact form with database backend, and fully responsive design.',
    image:
      'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/shiwamdwivedi/portfolio',
    demo: '#',
    features: [
      'Animated hero section',
      'Dark theme design',
      'Contact form with database',
      'Responsive across all devices',
    ],
  },
  {
    title: 'Campus Recruitment System',
    description:
      'A full-stack campus placement platform connecting students with recruiters. Students can upload resumes, apply for jobs, and track application status.',
    image:
      'https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['Full Stack', 'Node.js', 'MongoDB', 'React'],
    github: 'https://github.com/shiwamdwivedi/campus-recruitment',
    demo: '#',
    features: [
      'Student & recruiter portals',
      'Resume upload & parsing',
      'Job posting & applications',
      'Application status tracking',
    ],
  },
  {
    title: 'NR Pay',
    description:
      'A digital payment application enabling secure peer-to-peer transactions. Features wallet management, transaction history, and QR code payments.',
    image:
      'https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Node.js', 'Payment API'],
    github: 'https://github.com/shiwamdwivedi/nr-pay',
    demo: '#',
    features: [
      'Digital wallet management',
      'QR code payments',
      'Transaction history',
      'Secure authentication',
    ],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Java Programming Certificate',
    issuer: 'Online Certification',
    year: '2026',
    description:
      'Comprehensive Java programming covering OOP concepts, collections, multithreading, and JDBC.',
  },
  {
    title: 'TCS CodeVita',
    issuer: 'Tata Consultancy Services',
    year: '2026',
    description:
      'Participated in global coding contest focused on problem-solving and algorithmic thinking.',
  },
  {
    title: 'Generative AI',
    issuer: 'Online Certification',
    year: '2025',
    description:
      'Learned fundamentals of Generative AI, LLMs, prompt engineering, and AI application development.',
  },
  {
    title: 'Python Programming',
    issuer: 'Online Certification',
    year: '2024',
    description:
      'Covered Python fundamentals, data structures, file handling, and object-oriented programming.',
  },
];
