// All site content lives here. Replace anything in [square brackets] with your real details.
export const profile = {
  name: "Sachini Sharadi",
  title: "Management Information Systems Undergraduate",
  intro:
    "I study how technology supports better business decisions. I'm looking for an internship in business analysis, MIS or project coordination.",
  photo: "/photo.jpg", // put your photo at public/photo.jpg
  cv: "/Sachini-Sharadi-CV.pdf", // put your CV at public/Sachini-Sharadi-CV.pdf
  links: {
    linkedin: "www.linkedin.com/in/sachini-sharadi]",
    github: "https://github.com/sharadi2002]",
    email: "sachinisharadi86@gmail.com]",
  },
};

export const about = {
  paragraphs: [
    "I am a Management Information Systems undergraduate at NSBM Green University with an interest in business analysis, digital transformation and technology-driven business solutions.",
    "My passion for MIS stems from a desire to bridge the gap between business needs and technological solutions. I enjoy understanding business needs, analysing processes and exploring how technology can improve organisational performance. Through academic projects, I have developed experience in UI design, frontend development and requirements analysis. I am looking forward to gaining industry experience and developing my career in business analysis and MIS.",
  ],
  interests: ["Business analysis", "Requirements analysis", "UI design", "Frontend development", "Digital transformation", "Project coordination"],
  goals:[
    "To secure an internship in business analysis, MIS or project coordination.",
    "To gain practical experience in analysing business processes and supporting technology-driven solutions.",
    "To develop my skills in project management and digital transformation."
  ]
};

export const education = [
  {
    degree: "BSc (Hons) in Management Information Systems",
    school: "NSBM Green University, Sri Lanka",
    period: "currently pursuing",
    notes: "Academic coursework covers Business Management, Business Process Management, Enterprise Systems, Systems Analysis and Design, Database Management, Statistics, Programming, Software Development and Computer Networks.",
  },
];

export const skills = [
  {
    group: "Business & Analysis",
    items: [
      "Business Analysis",
      "Requirements Analysis",
      "Systems Analysis and Design",
      "Business Process Management"
    ]
  },
  {
    group: "Design",
    items: [
      "UI Design",
      "Figma"
    ]
  },
  {
    group: "Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Java",
      "Python"
    ]
  },
  {
    group: "Database & Data",
    items: [
      "SQL",
      "Database Management"
    ]
  },
  {
    group: "Tools & Platforms",
    items: [
      "VS Code",
      "Git",
      "GitHub"
    ]
  }
];



export const projects = [
  {
    slug: "construction-management-system",
    name: "Construction Management System",
    summary: "A web-based Construction Management System designed to help construction teams manage vehicles, vehicle assignments and project operations through a centralised platform.",
    role: "UI Design and Frontend Development",
    objectives: [
      "To provide a centralised platform for managing construction project operations.",
      "To simplify vehicle management and vehicle assignment processes.",
      "To improve accessibility and usability through an organised user interface."
    ],
    responsibilities: [
     "Designed user interfaces and screen layouts for the Construction Management System.",
  "Developed frontend components to create an interactive and user-friendly experience.",
  "Worked on vehicle management and vehicle assignment interfaces.",
  "Focused on consistent layouts, usability and visual presentation across the system."
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "tailwind css","figma","git","github"
    ],
    screenshots: [
      { src: "/screens/dashboard.png", label: "Vehicle Dashboard" },
      { src: "/screens/manage-vehicle.png", label: "Manage Vehicle" },
  { src: "/screens/vehicle-assignment.png", label: "Vehicle Assignment" }
    ],
    links: { repo: "", demo: "" }, // add URLs to show the buttons
  },
];

