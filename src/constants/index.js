export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

const asset = import.meta.env.BASE_URL;

export const myProjects = [
  {
    title: 'Block Dasher',
    type: 'Game',
    desc:
      'Complete the levels in the possible least moves number, to get three stars and unlock new worlds.',
    subdesc:
      'In Block Dasher, you will solve different puzzles in many different environments, from a calm garden full of trees and vegetation to a hot lava-filled volcano.',
    href: 'https://github.com/Slow-Heat-Index/BlockDasher',
    texture: `${asset}textures/project/blockdasher-video.mp4`,
    logo: `${asset}assets/blockdasher-logo.png`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${asset}assets/spotlight1.png`,
    tags: [
      { id: 1, name: 'Unity', path: `${asset}textures/technologies/unity-logo.png` },
      { id: 2, name: 'C#', path: `${asset}textures/technologies/csharp-logo.png` },
    ],
  },
  {
    title: 'Crush Crush Match!',
    type: 'Mobile',
    desc:
      'Match 3 game where you try to conquer your crush\'s heart!',
    subdesc:
      'You will conquer the heart of your beloved by overcoming fun levels with many challenges! You can customize your appearance and that of the person you like and buy exciting boosters to make everything easier! Developed for Level Up Advanced Unity Mobile Programming bootcamp.',
    href: 'https://github.com/darsay/crush-crush-match',
    texture: `${asset}textures/project/crushcrushmatch-video.mp4`,
    logo: `${asset}assets/crushcrushmatch-logo.png`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${asset}assets/spotlight2.png`,
    tags: [
      { id: 1, name: 'Unity', path: `${asset}textures/technologies/unity-logo.png` },
      { id: 2, name: 'C#', path: `${asset}textures/technologies/csharp-logo.png` },
    ],
  },
  {
    title: 'Dunk Nation',
    type: 'Web',
    desc: 'Checkout NBA stats and results in real time!',
    subdesc:
      'Follow your favorite team, check out the calendar for the next games, and see the results of the last ones in an interactive way! Developed for Ironhack Web Development bootcamp using frontend technologies and an NBA API from Rapid API.',
    href: 'https://github.com/iron-guardians/nba-results',
    texture: `${asset}textures/project/dunknation-video.mp4`,
    logo: `${asset}assets/dn-logo.png`,
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
      { id: 3, name: 'TypeScript', path: `${asset}textures/technologies/js-logo.png` },
    ],
  },
  {
    title: 'Dress Code',
    type: 'Game',
    desc: 'DressCode is a little funky rhythm game developed in 48 hours where you play as the doorman of a club.',
    subdesc:
      'The line will move along at the rythm of the music, but not every customer will follow the party\'s dress code! Your mission is to kick those rebel people out of the line before they get in! Winner of the GameGen Game Jam 2!',
    href: 'https://darsay.itch.io/dresscode',
    texture: `${asset}textures/project/dresscode-video.mp4`,
    logo: `${asset}assets/dresscode-logo.png`,
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: `${asset}assets/spotlight4.png`,
    tags: [
      { id: 1, name: 'Unity', path: `${asset}textures/technologies/unity-logo.png` },
      { id: 2, name: 'C#', path: `${asset}textures/technologies/csharp-logo.png` },
    ],
  },
  {
    title: 'Zombie Horde - UE5 Prototype',
    type: 'Game',
    desc: 'Survive a horde of zombies in this prototype developed in Unreal Engine 5.',
    subdesc:
      'In this prototype, takes influence from modern 3rd person shooter gameplay from games like Fortnite, where there are fluid procedural animations, a pickable weapon and items system, and detailed enemies with different AIs and details like blood decals.',
    href: 'https://gitlab.com/nachOneal/unrealzombieproject',
    texture: `${asset}textures/project/zombie-video.mp4`,
    logo: `${asset}textures/technologies/ue-logo.png`,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: `${asset}assets/spotlight5.png`,
    tags: [
      { id: 1, name: 'Unreal Engine', path: `${asset}textures/technologies/ue-logo.png` },
      { id: 2, name: 'C++', path: `${asset}textures/technologies/cpp-logo.png` },
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
    duration: '2023',
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
