export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

const asset = import.meta.env.BASE_URL;

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    type: 'Game',
    desc:
      'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created...',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS...',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: `${asset}textures/project/project1.mp4`,
    logo: `${asset}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${asset}assets/spotlight1.png`,
    tags: [
      { id: 1, name: 'React.js', path: `${asset}assets/react.svg` },
      { id: 2, name: 'TailwindCSS', path: `${asset}assets/tailwindcss.png` },
      { id: 3, name: 'TypeScript', path: `${asset}assets/typescript.png` },
      { id: 4, name: 'Framer Motion', path: `${asset}assets/framer.png` },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    type: 'Mobile',
    desc:
      'LiveDoc is a powerful collaborative app that elevates the capabilities...',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration...',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: `${asset}textures/project/project2.mp4`,
    logo: `${asset}assets/project-logo2.png`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${asset}assets/spotlight2.png`,
    tags: [
      { id: 1, name: 'React.js', path: `${asset}assets/react.svg` },
      { id: 2, name: 'TailwindCSS', path: `${asset}assets/tailwindcss.png` },
      { id: 3, name: 'TypeScript', path: `${asset}assets/typescript.png` },
      { id: 4, name: 'Framer Motion', path: `${asset}assets/framer.png` },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    type: 'Game',
    desc: 'An innovative healthcare platform...',
    subdesc:
      'With a focus on efficiency, CarePulse integrates complex forms...',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: `${asset}textures/project/project3.mp4`,
    logo: `${asset}assets/project-logo3.png`,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: `${asset}assets/spotlight3.png`,
    tags: [
      { id: 1, name: 'React.js', path: `${asset}assets/react.svg` },
      { id: 2, name: 'TailwindCSS', path: `${asset}assets/tailwindcss.png` },
      { id: 3, name: 'TypeScript', path: `${asset}assets/typescript.png` },
      { id: 4, name: 'Framer Motion', path: `${asset}assets/framer.png` },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    type: 'Web',
    desc: 'Horizon is a comprehensive online banking platform...',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid...',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: `${asset}textures/project/project4.mp4`,
    logo: `${asset}assets/project-logo4.png`,
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: `${asset}assets/spotlight4.png`,
    tags: [
      { id: 1, name: 'React.js', path: `${asset}assets/react.svg` },
      { id: 2, name: 'TailwindCSS', path: `${asset}assets/tailwindcss.png` },
      { id: 3, name: 'TypeScript', path: `${asset}assets/typescript.png` },
      { id: 4, name: 'Framer Motion', path: `${asset}assets/framer.png` },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    type: 'Game',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service...',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe...',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: `${asset}textures/project/project5.mp4`,
    logo: `${asset}assets/project-logo5.png`,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: `${asset}assets/spotlight5.png`,
    tags: [
      { id: 1, name: 'React.js', path: `${asset}assets/react.svg` },
      { id: 2, name: 'TailwindCSS', path: `${asset}assets/tailwindcss.png` },
      { id: 3, name: 'TypeScript', path: `${asset}assets/typescript.png` },
      { id: 4, name: 'Framer Motion', path: `${asset}assets/framer.png` },
    ],
  },
];

export const technologies = [
  { id: 1, name: 'C++', icon: `${asset}textures/technologies/cpp-logo.png` },
  { id: 2, name: 'Unity', icon: `${asset}textures/technologies/unity-logo.png` },
  { id: 3, name: 'Unreal Engine', icon: `${asset}textures/technologies/ue-logo.png` },
  { id: 4, name: 'C#', icon: `${asset}textures/technologies/csharp-logo.png` },
  { id: 5, name: 'Javascript', icon: `${asset}textures/technologies/js-logo.png` },
  { id: 6, name: 'React.js', icon: `${asset}textures/technologies/react-logo.png` },
  { id: 7, name: 'Express.js', icon: `${asset}textures/technologies/express-logo.png` },
  { id: 8, name: 'MongoDB', icon: `${asset}textures/technologies/mongodb-logo.png` },
  { id: 9, name: 'Git', icon: `${asset}textures/technologies/git-logo.png` },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Merkur Dosniha',
    pos: 'C++ Software Engineer',
    duration: '2024 - Present',
    title: 'Development of slot games using a proprietary game engine on Linux and C++ environments.',
    icon: `${asset}assets/experience/merkur-dosniha-logo.png`,
    details: [
      'Participated in full-cycle game development from scratch to final release.',
      'Created and maintained core systems within the proprietary engine.',
      'Designed and implemented new engine systems to enhance functionality.',
      'Collaborated closely with design, art, and QA teams to ensure product quality and consistency.',
      'Identified and resolved bugs to improve overall performance and stability.'
    ],
  },
  {
    id: 2,
    name: 'Universidad Europea',
    pos: 'Educational Content Creator – Game Programming Master',
    duration: '2024 - 2025',
    title: 'Development of educational content for a master’s program in video game programming.',
    icon: `${asset}assets/experience/ue-logo.png`,
    details: [
      'Designed and structured educational slides aligned with the course syllabus.',
      'Recorded instructional videos covering game development concepts.',
      'Created exercises and exams to assess student understanding and progress.',
      'Preparing for future delivery and teaching of the course material.'
    ],
  },
  {
    id: 3,
    name: 'Netspot Hub',
    pos: 'Game Developer',
    duration: '2020 - 2021',
    title: 'Full prototyping of a real-time multiplayer game with an authoritative server in GO and Unity client for browsers.',
    icon: `${asset}assets/experience/netspot-logo.png`,
    details: [
      'Prototyped a real-time multiplayer game with an authoritative server built in GO and a Unity client for browser-based play.',
      'Developed the entire game from scratch, including core mechanics, user interactions, and server-client communication.',
      'Balanced game features to ensure fairness and smooth gameplay across all users.',
      'Integrated external APIs to enhance gameplay and improve functionality.'
    ],
  },
  {
    id: 4,
    name: 'Spika Tech',
    pos: 'Unity Developer',
    duration: '2022 - 2023',
    title: 'Development and optimization of a VR Cardio: a medical software application for preoperative cardiac planning.',
    icon: `${asset}assets/experience/spikatech-logo.png`,
    details: [
      'Worked on VR-Cardio, a medical tool used for pre-surgical cardiac planning in virtual reality.',
      'Refactored the entire project to enable real-time multi-user online sessions across different platforms.',
      'Developed custom shaders and modified the render pipeline to efficiently display complex medical data.',
      'Focused on maintaining high performance and visual clarity in a resource-intensive VR environment.'
    ],
  },
  {
    id: 5,
    name: 'Welme',
    pos: 'Unity Developer (Internship)',
    duration: '2022',
    title: 'Development of VR interactions and mini-games for a metaverse environment with online multiplayer functionality.',
    icon: `${asset}assets/experience/welme-logo.png`,
    details: [
      'Developed various VR interactions and mini-games within a metaverse environment.',
      'Implemented real-time multiplayer features using Mirror and company APIs.',
      'Worked on improving UI design, user interactivity, and navigation in a virtual reality space.',
    ],
  },
  {
    id: 6,
    name: '5th Element Gaming',
    pos: 'Unity Developer (Internship)',
    duration: '2021 - 2022',
    title: 'Started a game project from the ground up, focusing on architecture and core gameplay mechanics.',
    icon: `${asset}assets/experience/fifthelement-logo.png`,
    details: [
      'Designed the game’s architecture and developed the core gameplay loop from scratch.',
      'Worked closely with the design team to create tools that streamlined the level-building process.',
      'Contributed to the game’s prototyping and iterative development cycle.'
    ],
  },
];
