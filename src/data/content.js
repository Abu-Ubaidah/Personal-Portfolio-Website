export const profile = {
  name: 'Abu Ubaidah',
  role: 'Software, Systems & Robotics Builder',
  subRole: 'Computer Science Graduate',
  credential: 'Certified Full Stack Software Engineer',
  location: 'Hyderabad, Sindh, Pakistan',
  phone: '+92 319 0299797',
  whatsapp: '923190299797',
  email: 'abuubaidahvlogs@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abu-ubaidah/',
  github: 'https://github.com/Abu-Ubaidah',
};

export const heroStatement =
  'I build practical systems, make complex ideas easier to learn, and solve technical problems.';

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate and a certified Full Stack Software Engineer who enjoys turning abstract ideas into things people can see, try and improve. My work spans browser-based robotics tools, visual code generation, embedded electronics, and full-stack applications for real operational problems.",
    "I also bring hands-on experience supporting computer labs and equipment. Whether I am debugging a circuit, tracing a network issue, or shaping a learning tool, I work from first principles, communicate clearly, and keep the experience practical for the person using it.",
  ],
  strengths: [
    'Turns complex technical ideas into practical, visible experiences',
    'Debugs from first principles, not guesswork',
    'Builds across software, hardware and the systems between them',
    'Communicates clearly with technical and non-technical people',
    'Reliable with documentation, testing and equipment records',
  ],
};

export const skillGroups = [
  {
    label: 'Robotics & embedded',
    items: ['ESP32', 'Arduino', 'Sensors & actuators', 'HTML5 Canvas', 'Pathfinding', 'Circuit prototyping'],
  },
  {
    label: 'Full-stack development',
    items: ['React', 'Node.js / Express', 'Python / Flask', 'REST APIs', 'JWT', 'Socket.IO'],
  },
  {
    label: 'Data & systems',
    items: ['MongoDB', 'PostgreSQL', 'Linux / Unix', 'Docker', 'Networking fundamentals', 'Bash scripting'],
  },
  {
    label: 'Ways of working',
    items: ['First-principles debugging', 'Technical documentation', 'Lab support', 'User-focused design', 'Git / GitHub', 'Figma'],
  },
];

export const projects = [
  {
    name: 'RoboSim',
    icon: 'robotics',
    status: 'progress',
    statusLabel: 'Teaching tool',
    role: 'Browser simulator',
    result: 'Safe robot logic practice',
    stack: ['HTML5 Canvas', 'JavaScript', 'BFS pathfinding'],
    description:
      'A browser-based 2D robot simulator where learners practise line-following, obstacle avoidance and robot decision-making without needing hardware.',
    points: [
      'Uses a grid environment and breadth-first search to make pathfinding visible and easy to reason about.',
      'Lets students test, fail and retry quickly before transferring the same sense-decide-act logic to a real robot.',
    ],
    githubHref: 'https://github.com/Abu-Ubaidah',
    featured: true,
  },
  {
    name: 'ArduinoBlock',
    icon: 'code',
    status: 'progress',
    statusLabel: 'Learning tool',
    role: 'Visual code generator',
    result: 'Components mapped to code',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    description:
      'A visual canvas that helps beginners move from a circuit idea to working Arduino code by arranging LEDs, servos, ultrasonic sensors and buzzers.',
    points: [
      'Connects a drag-and-drop component to the code it generates, so the visual model never hides the underlying logic.',
      'Authentication and saved projects create a foundation for repeatable classroom practice.',
    ],
    githubHref: 'https://github.com/Abu-Ubaidah',
    featured: true,
  },
  {
    name: 'Embedded Monitoring System',
    icon: 'hardware',
    status: 'progress',
    statusLabel: 'Hardware build',
    role: 'Embedded systems build',
    result: 'Physical sensing and alerting',
    stack: ['ESP32', 'Displays', 'Speaker amplifier', 'Motor control'],
    description:
      'A demonstration model built from the circuit and enclosure up: an ESP32 web server, local status displays, audible alarms and a controlled water-pump motor.',
    points: [
      'Designed the amplifier, alarm indicators and voltage-control circuit, then integrated the wiring neatly into the physical model.',
      'Shows how software, electronics and physical constraints have to be tested together.',
    ],
    githubHref: 'https://github.com/Abu-Ubaidah',
    featured: true,
  },
  {
    name: 'DevDiary',
    icon: 'blog',
    status: 'progress',
    statusLabel: 'Web application',
    role: 'RESTful platform',
    result: 'Structured public publishing',
    stack: ['Python Flask', 'MongoDB', 'JWT', 'REST API'],
    description:
      'A blogging platform for writing, tagging and publicly sharing posts, built to practise clean API design, authentication and document data modelling.',
    points: [
      'Protected author workflows sit alongside public content sharing.',
      'Demonstrates a complete feature path from user model and API routes to a usable frontend.',
    ],
    githubHref: 'https://github.com/Abu-Ubaidah',
  },
  {
    name: 'LabTrack',
    icon: 'network',
    status: 'live',
    statusLabel: 'Operations app',
    role: 'Asset management system',
    result: 'Clearer lab accountability',
    stack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Socket.IO'],
    description:
      'An IT lab asset manager for inventory, checkouts, faults, repairs and maintenance history, with live updates for staff working from the same dashboard.',
    points: [
      'Makes equipment condition and responsibility visible instead of relying on scattered notes.',
      'Models the practical support workflows behind a reliable teaching or computer lab.',
    ],
    liveHref: 'https://labtrack.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/labtrack-it-lab-asset-manager',
  },
  {
    name: 'IT Helpdesk Portal',
    icon: 'helpdesk',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Support workflow',
    result: 'Issues tracked to resolution',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    description:
      'A support ticket application that gives users and technicians a shared path from issue report to assignment, updates and resolution.',
    points: [
      'Role-based access keeps user, technician and administrator workflows clear.',
      'Comments, priorities and status changes make the work understandable to everyone involved.',
    ],
    liveHref: 'https://helpdesk.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/It-helpdesk-portal',
  },
  {
    name: 'SysMon',
    icon: 'monitoring',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Monitoring dashboard',
    result: 'Historical system visibility',
    stack: ['React', 'Vite', 'Node.js', 'MongoDB', 'Docker'],
    description:
      'A dashboard that collects CPU, memory, disk and network readings over time so performance changes become visible before they become incidents.',
    points: [
      'Separates collection, storage and presentation into understandable system layers.',
      'Historical readings help distinguish gradual capacity problems from one-off spikes.',
    ],
    liveHref: 'https://sysmon.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/sysmon',
  },
  {
    name: 'Pulse',
    icon: 'chat',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Real-time application',
    result: 'Connected team communication',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Socket.IO'],
    description:
      'A real-time team chat with channels, message history, typing indicators, online presence and reactions.',
    points: [
      'Combines REST APIs, protected routes and Socket.IO events in one product.',
      'Persistent history and presence features make the interface useful beyond a simple messaging demo.',
    ],
    liveHref: 'https://pulse.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/pulse-chat-application',
  },
];

export const education = [
  {
    school: 'University of Sindh, Jamshoro',
    credential: 'BSc Computer Science',
    period: 'Jan 2022 – Dec 2025',
    detail: 'GPA 3.01 / 4.00',
    note: 'Operating Systems, Computer Networks, Database Management Systems, Data Structures & Algorithms, OOP, Software Engineering, Web Engineering, Machine Learning',
  },
  {
    school: 'BISEH',
    credential: 'Intermediate — Pre-Engineering',
    period: '2021',
    detail: 'A1 / 94.63%',
  },
  {
    school: 'BISEH',
    credential: 'Matriculation — General Science',
    period: '2019',
    detail: 'A1 / 80.94%',
  },
];

export const achievements = [
  "Awarded a laptop under the Prime Minister's Laptop Scheme — merit-based award for academic performance",
  '2nd position for Best Final Year Project, University of Sindh, recognised by Ahsan Iqbal Chaudhary',
  'Consistent A-grade academic record from matriculation through university-level technical subjects',
];

export const certificates = [
  {
    title: 'Full Stack Software Engineer',
    issuer: 'Coursera',
    type: 'Professional Badge',
    platform: 'Credly',
    href: 'https://www.credly.com/go/tOF4EDME',
  },
  {
    title: 'Google IT Support Professional Certificate',
    type: 'Specialization',
    issuer: 'Google',
    platform: 'Coursera',
    href: 'https://coursera.org/verify/professional-cert/H3ND4PO2J7FO',
    year: '2024',
  },
  {
    title: 'Meta Full Stack Developer Front-End & Back-End from Scratch Specialization',
    type: 'Specialization',
    issuer: 'Meta',
    platform: 'Coursera',
    href: 'https://coursera.org/verify/specialization/8DUJNZCLAW44',
    year: '2024',
  },
  {
    title: 'Meta Back-End Developer Professional Certificate',
    type: 'Specialization',
    issuer: 'Meta',
    platform: 'Coursera',
    href: 'https://coursera.org/verify/professional-cert/5RUMYQEGY3RR',
    year: '2024',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    type: 'Specialization',
    issuer: 'Meta',
    platform: 'Coursera',
    href: 'https://coursera.org/verify/professional-cert/RZSOIAX12RVK',
    year: '2024',
  },
];

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates & Specializations' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
