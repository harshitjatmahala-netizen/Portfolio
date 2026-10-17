/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Hello Harshit! You can easily update your information, social links,
 * photo, projects, and skills in this single file.
 */

export const personalInfo = {
  name: "Harshit Kumar",
  title: "First-Year B.Tech CSE Student | Excel Enthusiast | Aspiring Entrepreneur",
  status: "First-Year Student (Graduation: 2030)",
  college: "JECRC University, Jaipur, Rajasthan",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: 2030,
  
  // ==========================================
  // EDIT YOUR PHOTO & SOCIAL LINKS HERE:
  // ==========================================
  // Place your photo in the public/ folder (e.g. public/harshit.jpg) and update the path below:
  profilePhoto: "/profile-placeholder.jpg",
  
  // Your official contact email:
  email: "harshitjatmahala@gmail.com",
  
  // Your LinkedIn profile link:
  linkedin: "https://www.linkedin.com/in/harshit-kumar-160b18408/",
  
  // Your GitHub profile link:
  github: "https://github.com/harshitjatmahala-netizen",

  // Location:
  location: "Jaipur, Rajasthan, India",
  
  // Quick metrics:
  typingSpeed: "30 WPM",
  certificationScore: "90% Distinction",

  // Short hero introduction (as requested):
  heroBio: "I am a first-year Computer Science student at JECRC University, passionate about technology, problem-solving, and learning new skills. I enjoy working with Excel and developing my programming knowledge. I am always looking for opportunities to learn, contribute, and grow.",

  // About me detailed narrative:
  aboutMe: {
    story: "I am currently pursuing my B.Tech in Computer Science and Engineering at JECRC University in Jaipur. As a first-year student, I am building strong fundamentals in computing and logic. My journey started with hands-on spreadsheet modeling in Microsoft Excel and foundational programming in C.",
    mission: "My long-term ambition is to become an entrepreneur who leverages technology to build practical solutions. I believe in honest, consistent learning — taking on practice exercises, mastering data tools, and expanding into modern computer science step-by-step.",
    careerInterests: [
      "Data Entry & Data Processing",
      "Advanced Excel & Analytics",
      "Computer Science Fundamentals",
      "Data Science Concepts",
      "Technology Entrepreneurship"
    ]
  }
};

export const skillsData = {
  technical: [
    {
      name: "Microsoft Excel",
      level: "Intermediate",
      category: "Spreadsheet & Data",
      description: "Data formatting, arithmetic formulas, VLOOKUP, SUMIFS, tables, and structured practice exercises.",
      badgeColor: "emerald",
      percentage: 65,
    },
    {
      name: "C Programming",
      level: "Basic",
      category: "Programming",
      description: "Syntax fundamentals, variables, loops, conditionals, functions, arrays, and basic problem solving.",
      badgeColor: "blue",
      percentage: 40,
    },
    {
      name: "Microsoft Word",
      level: "Proficient",
      category: "Productivity",
      description: "Professional document formatting, reports, tables, layout styling, and documentation.",
      badgeColor: "indigo",
      percentage: 75,
    },
    {
      name: "Microsoft PowerPoint",
      level: "Proficient",
      category: "Productivity",
      description: "Visual slide decks, presentation flow, graphic alignment, and academic/project showcases.",
      badgeColor: "purple",
      percentage: 70,
    },
  ],
  softSkills: [
    {
      name: "Communication",
      type: "Interpersonal",
      description: "Clear and respectful verbal and written communication in academic and collaborative environments.",
      icon: "MessageSquare",
    },
    {
      name: "Teamwork",
      type: "Collaboration",
      description: "Active listener and reliable teammate who values mutual learning, shared goals, and accountability.",
      icon: "Users",
    },
    {
      name: "Time Management",
      type: "Productivity",
      description: "Disciplined scheduling between college coursework, coding practice, and personal skill development.",
      icon: "Clock",
    },
    {
      name: "Typing & Accuracy",
      type: "30 WPM",
      description: "Consistent typing speed of 30 words per minute with strong focus on data entry accuracy.",
      icon: "Keyboard",
    }
  ]
};

export const projectsData = [
  {
    id: "proj-1",
    title: "Project Management Sheet",
    category: "Excel",
    tag: "Practice Project",
    tools: ["Microsoft Excel", "Task Tracking", "Formulas", "Conditional Formatting"],
    purpose: "Designed to organize and monitor project timelines, task assignments, deadlines, and completion statuses in one clean spreadsheet.",
    description: "Built a practical task tracking sheet featuring automated status highlights (Not Started, In Progress, Completed), deadline countdowns, and progress calculation formulas. Helps develop structured data organization skills.",
    highlights: [
      "Task breakdown with owner assignments and due dates",
      "Conditional formatting for status indicators and overdue warnings",
      "Dynamic completion percentage formula",
    ],
    // EDIT HERE: Insert link to your file or Google Sheets preview when ready
    linkText: "Practice Spreadsheet",
    demoUrl: null, 
  },
  {
    id: "proj-2",
    title: "Budget Tracker Sheet",
    category: "Excel",
    tag: "Practice Project",
    tools: ["Microsoft Excel", "SUM / AVERAGE Formulas", "Expense Categorization", "Charts"],
    purpose: "Created to help record monthly income, track itemized expenses, and calculate remaining savings automatically.",
    description: "A financial tracking spreadsheet exercise dividing expenses into categories (Food, Study, Utilities, Miscellaneous). Automatically calculates monthly totals, expense percentages, and net savings.",
    highlights: [
      "Automated total income vs total expense calculations",
      "Category-wise expenditure breakdown with percentage share",
      "Visual chart representation of monthly spending habits",
    ],
    demoUrl: null,
  },
  {
    id: "proj-3",
    title: "Salary Management Sheet",
    category: "Excel",
    tag: "Practice Project",
    tools: ["Microsoft Excel", "Payroll Formulas", "Deductions Logic", "Data Validation"],
    purpose: "Simulates an organizational payroll sheet calculating basic salary, allowances, deductions, and final net pay.",
    description: "Developed a multi-column employee salary sheet incorporating basic pay, HRA/DA allowances, tax/provident deductions, and automated net salary computation for multiple staff rows.",
    highlights: [
      "Multi-field employee records with structured column layout",
      "Automated allowance and deduction calculation formulas",
      "Final Net Payable salary summary with currency formatting",
    ],
    demoUrl: null,
  },
  {
    id: "proj-4",
    title: "ID Card Data Management",
    category: "Excel",
    tag: "Practice Project",
    tools: ["Microsoft Excel", "VLOOKUP", "Data Validation", "Lookup Tables"],
    purpose: "Implements automated record retrieval for student/employee ID cards using Excel's VLOOKUP function.",
    description: "Created an automated lookup sheet where entering an ID number instantly pulls the student/employee name, department, blood group, and contact details from a master database table without manual searching.",
    highlights: [
      "Master database table with unique ID keys",
      "Instant multi-attribute retrieval using VLOOKUP formula",
      "Dropdown list integration via Data Validation to avoid typo errors",
    ],
    demoUrl: null,
  },
  {
    id: "proj-5",
    title: "Basic C Programming Exercises",
    category: "Programming",
    tag: "Practice Project",
    tools: ["C Language", "GCC Compiler", "Control Structures", "Loops", "Functions"],
    purpose: "A collection of foundational C programs written to strengthen logical thinking, mathematical problem solving, and algorithmic reasoning.",
    description: "Hands-on console programs implementing arithmetic calculators, prime number verification, Fibonacci sequence generation, array traversal, and pattern printing algorithms.",
    highlights: [
      "Clean syntax following structured programming principles",
      "Exercises covering loops (for, while), nested conditions, and switches",
      "Function modularity and user input validation via standard I/O",
    ],
    demoUrl: null,
  }
];

export const educationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "JECRC University, Jaipur, Rajasthan",
  status: "First Year Student",
  expectedGraduation: "2030",
  highlights: [
    "Focusing on computer programming fundamentals, computational thinking, and mathematics.",
    "Active participant in campus learning sessions and technical exploration.",
    "Aiming to build a strong foundation for software engineering and entrepreneurship.",
  ]
};

export const certificationData = {
  title: "RS-CIT (Rajasthan State Certificate in Information Technology)",
  authority: "VMOU Kota (Vardhman Mahaveer Open University, Kota)",
  score: "90% (Distinction)",
  date: "Completed with Excellence",
  description: "A prestigious state-certified course covering computer fundamentals, office automation tools (Word, Excel, PowerPoint), database basics, cybersecurity awareness, and internet technologies.",
  // Path to Harshit Kumar's authentic RS-CIT certificate:
  image: "/harshit-rscit-certificate.jpeg",
  verified: true,
};

export const opportunitiesData = [
  {
    title: "Data Entry Internships",
    description: "Accurate, fast-typing data entry, record digitization, spreadsheet cleaning, and database maintenance.",
    icon: "FileSpreadsheet",
  },
  {
    title: "Excel-Related Work",
    description: "Developing structured templates, formula modeling (VLOOKUP, IF, SUMIFS), and organizing messy records.",
    icon: "Table",
  },
  {
    title: "Remote Internships",
    description: "Reliable remote contributor eager to assist tech teams, maintain documentation, and support operations.",
    icon: "Laptop",
  },
  {
    title: "Part-Time Student Roles",
    description: "Flexible hours aligned with college schedule to gain hands-on professional exposure.",
    icon: "Calendar",
  },
  {
    title: "Freelance Projects",
    description: "Custom Excel sheets, data organization, document formatting, and entry-level digital tasks.",
    icon: "Briefcase",
  }
];
