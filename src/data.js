// ---------------------------------------------------------------
// All placeholder copy lives here. Replace with real resume/CV
// content — nothing else in the codebase needs to change.
// ---------------------------------------------------------------

export const profile = {
  name: 'Kevin Chen',
  roles: ['Visual Designer', 'AI Designer', 'Brand Designer'],
  location: 'New York, NY',
  email: 'kevin.chen.tech@outlook.com',
  phone: '(347) 235-3539',
  availability: 'Open to select freelance & full-time roles',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevinchen-tech/' },
    { label: 'GitHub', href: 'https://github.com/m1371339094' },
  ],
  bio: [
    "I design brand systems and visual identities, then use AI-driven tooling to push them further: faster iteration, sharper craft, and interfaces that feel considered rather than automated.",
    'Grounded in classic design fundamentals, applied with a technologist\'s curiosity about what tools like generative models, prompt-driven workflows, and custom pipelines can add to the process without letting them replace judgment.',
  ],
}

export const education = [
  {
    org: 'COOP Careers',
    role: 'Data Analytics Fellow',
    location: 'New York, NY',
    dates: 'Feb 2026 - Jun 2026',
  },
  {
    org: 'University at Buffalo',
    role: 'B.S. in Computer Science',
    location: 'Buffalo, NY',
    dates: 'Aug 2022 - May 2025',
  },
]

export const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Jul 2026 · Expires Jul 2029',
    url: 'https://www.credly.com/badges/4b3f1dbb-3d14-4dcb-88a4-e675c8ed0e8c/linked_in_profile',
  },
  {
    name: 'Google AI Essentials V1',
    issuer: 'Coursera',
    date: 'Issued May 2026',
    url: 'https://www.credly.com/badges/b5e0338e-3c17-4830-88ec-8bb061b8c64c/linked_in_profile',
  },
  {
    name: 'Google Data Analytics Professional Certificate (v.3)',
    issuer: 'Coursera',
    date: 'Issued May 2026',
    url: 'https://www.credly.com/badges/37bad581-9e7e-4262-8735-22079c3e675d/linked_in_profile',
  },
  {
    name: 'Networking Devices and Initial Configuration',
    issuer: 'Cisco',
    date: 'Issued Feb 2026',
    url: 'https://www.credly.com/earner/earned/badge/b03fa69e-98d1-4822-aa08-fc9aaf054425',
  },
  {
    name: 'CompTIA Cloud+ Advanced',
    issuer: 'Alison / EduLink Academy',
    date: 'Issued Feb 2026',
    url: 'https://alison.com/verify/3bdfab7f15',
  },
]

export const skills = {
  Languages: 'Python, JavaScript, HTML/CSS, Java, C, C#',
  Tools: 'Excel, SQL, Spark, Windows, Tableau, Hadoop, Wireshark',
}

export const experience = [
  {
    index: '01',
    org: 'Nova Skincare LLC',
    role: 'Web & Marketing Specialist',
    location: 'New York, NY',
    dates: 'Jan 2026 - Present',
    bullets: [
      'Develop and maintain interactive KPI dashboards tracking click rates, open rates, and conversion funnels for data-driven marketing decisions.',
      'Enhance email segmentation by evaluating Shopify and Klaviyo campaign data to improve targeting precision and engagement.',
      'Integrate and maintain 3+ third-party analytics tools into the existing web ecosystem, supporting continuous site optimization.',
    ],
  },
  {
    index: '02',
    org: 'Quakeade',
    role: 'IT Technician, Network Infrastructure',
    location: 'New York, NY',
    dates: 'Nov 2025 - Dec 2025',
    bullets: [
      'Configured and deployed 8 routers and 12 Wi-Fi extenders across the venue, establishing reliable network infrastructure for high-traffic environments.',
      'Gathered and analyzed device information across networked machines using scanning tools (arp, ipconfig, nmap) to monitor connectivity.',
      'Assigned and managed 10+ static IP addresses across cameras, extenders, security systems, and terminals, logging them into a SQL database.',
    ],
  },
  {
    index: '03',
    org: 'New York City Department of Correction',
    role: 'IT Infrastructure',
    location: 'New York, NY',
    dates: 'Jan 2025 - Sep 2025',
    bullets: [
      'Automated data uploads for 1,000+ body-worn cameras to the EAM database using Java JDBC, reducing manual entry time and improving accuracy.',
      'Configured firmware updates and security certificates for enterprise devices using Genetec Security Center.',
      'Diagnosed and resolved hardware failures across 12+ facilities, minimizing downtime and improving operational reliability.',
    ],
  },
]



export const projects = [
  {
    index: '01',
    year: '2026',
    title: 'Nova Skincare Tech',
    subtitle: 'E-Commerce: Shopify, Klaviyo, Analytics',
    description:
      'Built and maintain a complete Shopify storefront for a B2B aesthetic medical device company. Integrated Klaviyo email marketing flows, third-party analytics tooling, and optimized the product catalog across four categories: laser systems, body contouring, skin analysis, and plasma devices.',
    tags: ['Shopify', 'Klaviyo', 'E-Commerce', 'Analytics'],
    tone: 'indigo',
    live: 'https://novaskincare.tech/',
  },
  {
    index: '02',
    year: '2024',
    title: 'NYC Traffic Collision Severity Predictor',
    subtitle: 'Machine Learning: Python, Flask, Scikit-learn',
    description:
      'A Flask web app that predicts motor vehicle collision severity using 10,000+ NYC crash records. A 100-tree Random Forest classifier trained on geospatial and categorical features with 87% accuracy. Users upload CSV files for batch predictions with severity distribution charts.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'ML'],
    tone: 'gold',
    github: 'https://github.com/m1371339094/NYC-Traffic-Collision-Severity-Predictor',
  },
  {
    index: '03',
    year: '2024',
    title: 'School Safety Simulation',
    subtitle: 'Game Theory & Simulation: Unity, C#',
    description:
      'A Unity-based school safety simulation modeling dynamic patroller-attacker interactions with randomly behaving NPCs. Applies game theory to mimic real-world school shooter behavior, informed by FBI data analysis of 50+ cases.',
    tags: ['Unity', 'C#', 'Game Theory', 'Simulation'],
    tone: 'indigo',
    github: 'https://github.com/m1371339094/UB-School-Safety-Simulation',
  },
  {
    index: '04',
    year: '2024',
    title: 'Maze Solver with A* Search',
    subtitle: 'Algorithms & Pathfinding: Python',
    description:
      'A maze-solving tool built during the UB Hacking 24-hour hackathon. Solves black-and-white maze images up to 2048×2048 pixels using A* search and BFS, with rainbow or gradient solution-path visualization. Supports custom mazes with configurable entrance and exit points.',
    tags: ['Python', 'A*', 'BFS', 'Pathfinding', 'Hackathon'],
    tone: 'mono',
    github: 'https://github.com/m1371339094/ubhacking-Maze_with_AStar',
  },
  {
    index: '05',
    year: '2025',
    title: 'ns-3 Network Simulation Projects',
    subtitle: 'Networking: ns-3, Python, C++',
    description:
      'Course projects for CSE 489: Modern Networking at University at Buffalo. Built network simulations using ns-3 discrete-event simulator, configuring topologies, analyzing packet flows, and visualizing results with NetAnim across multiple networking scenarios.',
    tags: ['ns-3', 'Python', 'C++', 'NetAnim', 'Networking'],
    tone: 'split',
    github: 'https://github.com/m1371339094/ns-allinone',
  },
  {
    index: '06',
    year: '2025',
    title: 'Full-Stack Chat & Game Platform',
    subtitle: 'Full-Stack: Flask, Docker, NGINX, DigitalOcean',
    description:
      'A real-time web application featuring live chat with scheduled message delivery, a number-guessing game, leaderboards, media uploads, and user authentication with hashed passwords. Deployed on DigitalOcean with Docker, NGINX reverse proxy, and HTTPS via Let\'s Encrypt.',
    tags: ['Flask', 'Docker', 'NGINX', 'DigitalOcean', 'Auth'],
    tone: 'gold',
    github: 'https://github.com/The-interns-2-0/CSE-312-Project-group',
  },
]

export const strengths = [
  {
    title: 'Brand Identity & Systems',
    description:
      'Marks, type systems, color logic, and the documentation that keeps a brand consistent long after the first delivery.',
  },
  {
    title: 'AI-Augmented Workflows',
    description:
      'Custom pipelines and prompt systems that speed up production without flattening the craft. Tools built to serve a vision, not replace one.',
  },
  {
    title: 'Visual & UI Design',
    description:
      'Interfaces and layouts that hold up at both the pixel level and the system level, across product and marketing surfaces.',
  },
  {
    title: 'Art Direction',
    description:
      'Setting the visual point of view for a project and holding the line on it: photography, motion, illustration, and type working as one voice.',
  },
  {
    title: 'Motion & Prototyping',
    description:
      'Interaction and micro-motion that clarify rather than decorate, prototyped fast enough to test ideas before they’re fully built.',
  },
  {
    title: 'Design Systems & Docs',
    description:
      'Component libraries and guidelines written so other people (human or model) can extend the work correctly without you in the room.',
  },
]

export const nav = [
  { label: 'Index', href: '#hero' },
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#strengths' },
  { label: 'Contact', href: '#contact' },
]
