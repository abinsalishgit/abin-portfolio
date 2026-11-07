export const personalInfo = {
  name: "Abin Salish",
  firstName: "Abin",
  lastName: "Salish",
  tagline: "Curious Mind. Creative Soul. Future Entrepreneur.",
  headline: "Exploring Technology. Building Ideas. Creating the Future.",
  description: "Developer, technology enthusiast, creative editor, musician and aspiring entrepreneur. Always curious. Always building.",
  publicLocation: "Kerala, India",
  grade: "Grade 9 Student",
  status: "Exploring New Tech & Inventions",
  ambition: "To become a successful entrepreneur, build innovative businesses, create something meaningful, and achieve extraordinary financial success.",
  heroImage: `${import.meta.env.BASE_URL}images/abin-workspace.png`,
  aboutHeading: "THE MIND BEHIND THE BUILDS.",
  aboutStory: [
    "I am Abin Salish, a Grade 9 student based in Kerala, India. I have an insatiable fascination with technology, computers, and how systems function beneath the surface.",
    "Rather than passively consuming technology, I love coding, building websites, and taking on hands-on experiments. I spend time exploring cybersecurity tools like Kali Linux, understanding digital security principles, and experimenting with new inventions.",
    "Beyond software, I have a deep affinity for mathematics and logic, a creative pulse in video editing and music, and a strong athletic drive. Most of all, I am driven by the entrepreneurial mindset: turning curious ideas into real, tangible impact."
  ],
  stats: [
    { label: "Academic Level", value: "Grade 9", detail: "Kerala, India" },
    { label: "Core Mindset", value: "Curious & Extroverted", detail: "Always Building" },
    { label: "Athletic Honor", value: "Silver Medal", detail: "CISCE Games Cricket" },
    { label: "Vision", value: "Future Entrepreneur", detail: "Innovation & Tech Ventures" }
  ],
  contact: {
    phone: "9188855265",
    phoneHref: "tel:+919188855265",
    whatsappUrl: "https://wa.me/919188855265",
    email: "abinsalishcvn@gmail.com",
    emailHref: "mailto:abinsalishcvn@gmail.com",
    githubUrl: "https://github.com/abinsalishgit",
    githubHandle: "abinsalishgit",
    instagramUrl: "https://instagram.com/abi_n_salish",
    instagramHandle: "abi_n_salish"
  }
};

export const techPillars = [
  {
    id: "programming",
    title: "Programming & Development",
    subtitle: "Architecting interactive digital products",
    accent: "crimson",
    description: "Crafting modern web interfaces, responsive architectures, and interactive digital experiences with clean code and modern workflows.",
    skills: [
      { name: "Website Development", level: "Active Focus" },
      { name: "Modern Frontend (React/HTML/CSS)", level: "Building Projects" },
      { name: "JavaScript / Scripting", level: "Core Logic" },
      { name: "Responsive UI/UX Systems", level: "Design Implementation" }
    ],
    highlights: [
      "Building fast, visually engaging websites and responsive interfaces.",
      "Writing clean, maintainable logic and experimenting with frontend state.",
      "Bridging design aesthetics with functional code structure."
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Security Exploration",
    subtitle: "Understanding defensive & offensive concepts",
    accent: "amber",
    description: "Actively studying digital security fundamentals, exploring security distributions like Kali Linux, and understanding how data and networks are protected.",
    skills: [
      { name: "Kali Linux Environment", level: "Active Exploration" },
      { name: "Cybersecurity Fundamentals", level: "Beginner / Learning" },
      { name: "Ethical Hacking Concepts", level: "Conceptual Knowledge" },
      { name: "Network & Digital Safety", level: "Core Focus" }
    ],
    highlights: [
      "Hands-on terminal exploration and system commands inside Kali Linux.",
      "Learning ethical penetration testing principles and digital hygiene.",
      "Deconstructing attack vectors to build more resilient web systems."
    ]
  },
  {
    id: "exploration",
    title: "Technology & Hardware Exploration",
    subtitle: "Deconstructing systems to invent the future",
    accent: "silver",
    description: "Dissecting real-world consumer technology products, understanding how silicon and software harmoniously interact, and testing prototype inventions.",
    skills: [
      { name: "Hardware & Architecture Studies", level: "Active Curiosity" },
      { name: "Product Analysis & Teardowns", level: "Hands-on Study" },
      { name: "Emerging Tech & AI Systems", level: "Continuous Learning" },
      { name: "Invention Experimentation", level: "Creative Prototyping" }
    ],
    highlights: [
      "Analyzing how commercial tech products are designed, built, and scaled.",
      "Experimenting with hardware components, circuits, and mechanical prototypes.",
      "Tracking bleeding-edge consumer electronics and tomorrow's breakthrough tech."
    ]
  }
];

export const creativeProduction = {
  title: "CREATIVE PRODUCTION",
  subtitle: "Visual storytelling through precision cuts and cinematic color",
  description: "Technology provides the canvas, but cinema provides the emotion. I study high-end post-production workflows to tell stories that captivate and inspire.",
  disciplines: [
    {
      title: "Video Editing",
      software: "DaVinci Resolve",
      description: "Trained in professional non-linear video editing workflows with DaVinci Resolve. Focusing on narrative pacing, rhythm, visual transitions, and multi-track audio synchronization.",
      tags: ["DaVinci Resolve", "Timeline Pacing", "Story Beats", "Dynamic Cuts"]
    },
    {
      title: "Color Grading",
      software: "Color Wheels & Node Pipelines",
      description: "Dedicated to the art of color science: color correction, skin-tone isolation, shot matching, mood creation, and crafting high-contrast cinematic looks that evoke atmosphere.",
      tags: ["Color Science", "Node Graph", "Cinematic Moods", "LUT Workflows"]
    },
    {
      title: "Filmmaking & Creative Vision",
      software: "Visual Direction",
      description: "Exploring composition, framing, camera dynamics, lighting setups, and visual experimentation to convert conceptual ideas into compelling moving images.",
      tags: ["Visual Storytelling", "Cinematography", "Creative Framing", "Sound Design"]
    }
  ]
};

export const instruments = [
  {
    id: "guitar",
    name: "Guitar",
    type: "Electric & Acoustic",
    description: "Exploring chords, melodic fingerpicking, and rhythmic strumming. Bridging raw acoustic resonance with amplified electric tones.",
    vibe: "Rhythm & Harmony",
    icon: "Music"
  },
  {
    id: "violin",
    name: "Violin",
    type: "Classical & Melodic",
    description: "Trained in the discipline of precision intonation, bowing dynamics, and expressive vibrato that sharpens auditory focus.",
    vibe: "Precision & Emotion",
    icon: "Sparkles"
  },
  {
    id: "keyboard",
    name: "Keyboard / Piano",
    type: "Digital & Synthesizer",
    description: "Understanding musical theory, harmonic structures, chord progressions, and multi-layered synthesizer arrangements.",
    vibe: "Harmony & Architecture",
    icon: "Layers"
  },
  {
    id: "clapbox",
    name: "Clapbox / Cajón",
    type: "Percussion",
    description: "Mastering syncopated beats, acoustic percussion textures, and timing control that anchors musical ensembles.",
    vibe: "Pulse & Tempo",
    icon: "Activity"
  }
];

export const sportsData = {
  title: "DISCIPLINE ON THE FIELD",
  subtitle: "Sports cultivate competitive stamina, teamwork, and mental resilience.",
  sports: [
    {
      name: "Cricket",
      role: "School Cricket Team Member",
      achievement: "CISCE Games Silver Medalist",
      isHighlight: true,
      description: "Represented my school at the prestigious CISCE Games, competing at an elite inter-school level and earning a Silver Medal. Cricket has taught me tactical patience, quick decision-making under pressure, and the value of team synergy.",
      stat: "Silver Medal",
      category: "CISCE Games"
    },
    {
      name: "Basketball",
      role: "Active Court Player",
      achievement: "Fast-Break & Court Vision",
      isHighlight: false,
      description: "Playing basketball fuels my high-intensity stamina, rapid spatial awareness, and decisive teamwork. The swift transitions from defensive pressure to fast breaks mirror entrepreneurial agility.",
      stat: "Court Agility",
      category: "Athletics & Team Sports"
    }
  ]
};

export const interestsList = [
  {
    title: "Technology Products",
    category: "Hardware & Design",
    description: "Studying industrial design, specs, and engineering choices in flagship consumer tech.",
    icon: "Smartphone",
    color: "from-red-500/20 to-transparent"
  },
  {
    title: "Entrepreneurship",
    category: "Business & Vision",
    description: "Fascinated by high-growth startups, business models, monetization, and market disruption.",
    icon: "TrendingUp",
    color: "from-amber-500/20 to-transparent"
  },
  {
    title: "Inventions & Prototyping",
    category: "Engineering",
    description: "Experimenting with creative ideas and physical/digital prototypes that solve everyday problems.",
    icon: "Cpu",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Mathematics & Logic",
    category: "Analytical Mind",
    description: "Fascinated by numerical patterns, geometric logic, and structural problem-solving.",
    icon: "Compass",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Cooking & Culinary Arts",
    category: "Creative Craft",
    description: "Experimenting with recipes, flavors, knife skills, and culinary presentation in the kitchen.",
    icon: "Flame",
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Music & Composition",
    category: "Audio Expression",
    description: "Playing multi-instruments and exploring how tones, timbre, and rhythms blend.",
    icon: "Headphones",
    color: "from-rose-500/20 to-transparent"
  },
  {
    title: "Athletics & Sports",
    category: "Physical Fitness",
    description: "Channeling energy into cricket, basketball, and continuous physical stamina.",
    icon: "Medal",
    color: "from-yellow-500/20 to-transparent"
  },
  {
    title: "Rapid Learning",
    category: "Constant Growth",
    description: "Voraciously picking up new software tools, technical skills, and creative disciplines.",
    icon: "Zap",
    color: "from-emerald-500/20 to-transparent"
  }
];

export const projectCategories = [
  "All",
  "Websites & Apps",
  "Coding Experiments",
  "Tech & Inventions",
  "Cybersecurity",
  "Creative Editing"
];

export const projectsList = [
  {
    id: "personal-portfolio",
    title: "Abin Salish Digital Portfolio",
    category: "Websites & Apps",
    description: "A cinematic, ultra-modern personal portfolio built with React, Tailwind CSS, and Framer Motion featuring custom dark aesthetics, metallic medal cards, and interactive tech pillars.",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "Vite"],
    isPlaceholder: false,
    githubUrl: "https://github.com/abinsalishgit/abin-portfolio",
    liveUrl: "#",
    badge: "Featured Build",
    imageAccent: "crimson"
  },
  {
    id: "web-dev-workspace",
    title: "Interactive Web Experience Hub",
    category: "Websites & Apps",
    description: "[Project Slot] Modern web application exploring interactive user experiences, reactive layouts, dynamic themes, and API data fetching.",
    techStack: ["React", "JavaScript", "CSS3", "Responsive UI"],
    isPlaceholder: true,
    githubUrl: "https://github.com/abinsalishgit",
    liveUrl: "#",
    badge: "In Development",
    imageAccent: "amber"
  },
  {
    id: "code-lab-experiments",
    title: "Algorithmic Code Experiments",
    category: "Coding Experiments",
    description: "[Project Slot] A repository of mathematical logic experiments, mini algorithms, sorting visualization scripts, and interactive puzzle solvers.",
    techStack: ["JavaScript", "Mathematics", "Algorithms", "Logic"],
    isPlaceholder: true,
    githubUrl: "https://github.com/abinsalishgit",
    liveUrl: "#",
    badge: "Experiments",
    imageAccent: "slate"
  },
  {
    id: "kali-linux-lab",
    title: "Cybersecurity & Kali Linux Lab",
    category: "Cybersecurity",
    description: "[Project Slot] Documented exploration of network security fundamentals, penetration testing workflows, and defensive practices inside a safe virtualized Kali Linux environment.",
    techStack: ["Kali Linux", "Bash", "Network Security", "VirtualBox"],
    isPlaceholder: true,
    githubUrl: "https://github.com/abinsalishgit",
    liveUrl: "#",
    badge: "Security Lab",
    imageAccent: "crimson"
  },
  {
    id: "davinci-color-reel",
    title: "Cinematic Grade & Edit Reel",
    category: "Creative Editing",
    description: "[Project Slot] Visual showcase of high-contrast cinematic color grading, custom node LUT styling, and narrative pacing edited entirely in DaVinci Resolve.",
    techStack: ["DaVinci Resolve", "Color Science", "Node Graph", "Video Edit"],
    isPlaceholder: true,
    githubUrl: "https://github.com/abinsalishgit",
    liveUrl: "#",
    badge: "Media Showcase",
    imageAccent: "amber"
  },
  {
    id: "hardware-invention-prototype",
    title: "Tech Invention & Prototyping Lab",
    category: "Tech & Inventions",
    description: "[Project Slot] Hands-on hardware experiments investigating electronics, circuit assembly, and innovative gadget prototypes designed for real-world utility.",
    techStack: ["Hardware Study", "Electronics", "Prototyping", "Innovation"],
    isPlaceholder: true,
    githubUrl: "https://github.com/abinsalishgit",
    liveUrl: "#",
    badge: "Invention Lab",
    imageAccent: "slate"
  }
];

export const journeyMilestones = [
  {
    phase: "Milestone 01",
    title: "The Initial Spark",
    focus: "Technology & Hardware Curiosity",
    description: "Fell in love with computers, studying how operating systems boot, disassembling technology to understand hardware components, and exploring how electronics shape daily life."
  },
  {
    phase: "Milestone 02",
    title: "The Code Genesis",
    focus: "Learning to Code & Building Websites",
    description: "Wrote the very first lines of code. Transitioned from simply using software to building interactive websites and digital web experiences with modern markup and styling."
  },
  {
    phase: "Milestone 03",
    title: "Into the Terminal",
    focus: "Cybersecurity & Kali Linux",
    description: "Ventured into the realm of digital security and Kali Linux. Began studying command-line networking, ethical hacking concepts, and defensive digital awareness."
  },
  {
    phase: "Milestone 04",
    title: "Mastering the Visual Cut",
    focus: "DaVinci Resolve & Color Grading",
    description: "Stepped into professional post-production. Mastered DaVinci Resolve's editing timeline and node-based color grading wheels to craft cinematic looks and visual stories."
  },
  {
    phase: "Milestone 05",
    title: "Harmonizing Logic with Sound",
    focus: "Multi-Instrumental Mastery",
    description: "Explored musical instruments: electric/acoustic guitar, violin, keyboard, and clapbox. Discovering that musical composition shares the same harmonic logic as software architecture."
  },
  {
    phase: "Milestone 06",
    title: "Silver on the Pitch",
    focus: "CISCE Games Silver Medalist",
    description: "Represented school in the prestigious CISCE Games Cricket tournament, battling to the finals and winning a Silver Medal. Cemented discipline, team collaboration, and competitive fire."
  },
  {
    phase: "Milestone 07",
    title: "The Entrepreneurial Horizon",
    focus: "Building Future Ventures",
    description: "Currently in Grade 9, continuously learning, experimenting with novel inventions, and laying the groundwork to build game-changing businesses and innovative technology startups."
  }
];

export const philosophies = [
  {
    quote: "DISCIPLINE TODAY. FREEDOM TOMORROW.",
    tagline: "Unwavering Execution",
    description: "True independence and mastery aren't handed over; they are earned through persistent daily routines, disciplined study, and relentless focus."
  },
  {
    quote: "LEARN. BUILD. EXPERIMENT. REPEAT.",
    tagline: "The Builder's Loop",
    description: "Theory without execution remains dormant. I believe in writing code, building prototypes, testing hypotheses, and learning directly from outcomes."
  },
  {
    quote: "STAY CURIOUS. THINK BIG. START SMALL.",
    tagline: "Exponential Vision",
    description: "Every great enterprise starts with a single curious question and a humble prototype. Dream at the scale of the world, but execute with immediate action."
  },
  {
    quote: "THE FUTURE BELONGS TO THOSE WHO BUILD IT.",
    tagline: "Active Creation",
    description: "Rather than waiting for the future to happen, the greatest privilege is to invent it with your own hands, mind, and determination."
  }
];

