export const profile = {
  name: 'Abu Ubaidah',
  role: 'IT Support & Systems Technician',
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
  'I build reliable systems, solve technical problems, and keep people productive.';

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate and a verified Full Stack Software Engineer with a solid grounding in Linux and Unix systems, networking fundamentals, and hands-on software deployment. I have a genuine interest in how infrastructure works at the physical and system level — configuring servers, managing network connectivity, diagnosing hardware faults before they disrupt people's work.",
    "Alongside that, I've built and maintained real applications end-to-end, which means I understand what software actually needs from the hardware underneath it. I work methodically under pressure, communicate clearly with both technical and non-technical people, and pick up new tools without needing to be walked through everything.",
  ],
  strengths: [
    'Debugs from first principles, not guesswork',
    'Stays calm when systems are down',
    'Communicates clearly with technical and non-technical people',
    'Picks up new tools fast without needing to be walked through everything',
    'Reliable with documentation and equipment records',
  ],
};

export const skillGroups = [
  {
    label: 'Systems & infrastructure',
    items: ['Linux / Unix', 'Windows OS', 'Server administration basics', 'Virtualisation (Docker)', 'Bash scripting'],
  },
  {
    label: 'Networking',
    items: ['TCP/IP', 'LAN/WAN fundamentals', 'Network troubleshooting', 'DNS', 'DHCP'],
  },
  {
    label: 'Hardware',
    items: ['PC assembly & maintenance', 'Peripheral setup', 'Printer / scanner configuration', 'Server room basics'],
  },
  {
    label: 'Databases',
    items: ['MongoDB (primary)', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'Dev & tools',
    items: ['Git / GitHub', 'Docker', 'Postman', 'Vim / CLI', 'Figma'],
  },
  {
    label: 'Languages',
    items: ['Python', 'JavaScript / TypeScript', 'HTML / CSS', 'Java'],
  },
];

export const projects = [
  {
    name: 'IT Helpdesk',
    icon: 'helpdesk',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Full-stack product',
    result: 'Centralized ticket operations',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'REST API'],
    description:
      'A fully featured help desk application with ticket creation, assignment, status tracking, and role-based access for agents and admins.',
    points: [
      'PostgreSQL backend with proper relational schema — tickets, users, comments, categories.',
      'Containerised with Docker for reproducible local development and straightforward production deployment.',
    ],
    href: 'https://helpdesk.bedaah.me',
    liveHref: 'https://helpdesk.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/It-helpdesk-portal',
  },
  {
    name: 'Sysmon',
    icon: 'monitoring',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Monitoring dashboard',
    result: 'Real-time system visibility',
    stack: ['Python', 'psutil', 'Flask', 'React', 'MongoDB'],
    description:
      'A web dashboard that collects CPU, RAM, disk, and network stats from the local machine in real time and stores history in MongoDB — exactly what an IT technician monitors daily.',
    points: [
      'Separate React frontend and Python/Flask backend, cleanly organised and ready to host.',
      'Historical data stored in MongoDB makes it easy to spot gradual degradation rather than just one-off spikes.',
    ],
    href: 'https://sysmon.bedaah.me',
    liveHref: 'https://sysmon.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/sysmon',
    featured: false,
  },
  {
    name: 'Pulse',
    icon: 'chat',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Full-stack product',
    result: 'Real-time team communication',
    stack: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'JWT'],
    description:
      'A full-stack chat application built to demonstrate WebSockets, REST API design, authentication, and MongoDB — with a React frontend and a clean Node backend.',
    points: [
      'JWT-based authentication flow with protected routes and session management.',
      'Persistent message history stored in MongoDB, delivered to new joiners on connection.',
    ],
    href: 'https://nexus.bedaah.me',
    liveHref: 'https://nexus.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/pulse-chat-application',
    featured: false,
  },
  {
    name: 'Labtrack',
    icon: 'network',
    status: 'live',
    statusLabel: 'Live website',
    role: 'Network monitoring tool',
    result: 'Faster lab issue detection',
    stack: ['Python', 'Flask', 'MongoDB', 'ICMP', 'LAN'],
    description:
      'A dashboard that continuously pings every machine on a local subnet and shows live status — online, offline, response time — the kind of visibility a lab manager actually needs day to day.',
    points: [
      'Health-check results stored in MongoDB with timestamps, so recurring issues stand out instead of being treated as one-off faults.',
      'Email alert fires automatically the moment a machine drops off the network, cutting diagnosis time.',
    ],
    href: 'https://github.com/Abu-Ubaidah/labtrack-it-lab-asset-manager',
    liveHref: 'https://labtrack.bedaah.me',
    githubHref: 'https://github.com/Abu-Ubaidah/labtrack-it-lab-asset-manager',
    featured: false,
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
