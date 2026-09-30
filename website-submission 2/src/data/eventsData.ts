import type { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: "evt-01",
    title: "Quantum Leap: AI & Neural Systems Workshop",
    category: "Workshop",
    date: "October 18, 2026",
    time: "10:00 AM - 04:00 PM IST",
    location: "MBITS Central Computing Lab 3 & Online Hybrid",
    status: "Registration Open",
    description: "Hands-on masterclass building Deep Learning pipelines and deploying transformer models on cloud GPUs.",
    longDescription: "Dive deep into modern machine learning architectures. Participants will build convolutional and transformer models, understand tensor operations, and deploy edge-inference APIs using PyTorch and FastAPI.",
    speaker: {
      name: "Dr. Ananya Varma",
      role: "AI Research Scientist & IEEE Senior Member",
      organization: "Cognitive Tech Labs"
    },
    tags: ["Artificial Intelligence", "PyTorch", "Transformers", "Cloud Compute"],
    prerequisites: ["Basic Python knowledge", "Laptop with modern browser"],
    isSample: true
  },
  {
    id: "evt-02",
    title: "CodeSprint 4.0: 24-Hour National Hackathon",
    category: "Hackathon",
    date: "November 05-06, 2026",
    time: "09:00 AM onwards (24 Hours)",
    location: "MBITS Auditorium & Hacker Arena",
    status: "Upcoming",
    description: "The flagship 24-hour hackathon challenging students across the state to engineer innovative solutions for real-world problems.",
    longDescription: "CodeSprint brings together 200+ elite student developers, designers, and innovators. Tracks include Smart Healthcare, Web3/FinTech, Cyber Defense, and Sustainable Cities with cash prizes and incubation opportunities.",
    speaker: {
      name: "Industry Jury Panel",
      role: "Tech Architects & Founders",
      organization: "Leading Tech Startups & IEEE Kerala Section"
    },
    tags: ["Hackathon", "Innovation", "Cash Prizes", "Mentorship"],
    prerequisites: ["Teams of 2-4 members", "Original code repository"],
    isSample: true
  },
  {
    id: "evt-03",
    title: "Defensive Cyber Ops: Ethical Hacking & Security",
    category: "Tech Talk",
    date: "October 26, 2026",
    time: "02:30 PM - 05:00 PM IST",
    location: "Seminar Hall 1, CS Department",
    status: "Registration Open",
    description: "Exploring vulnerability assessments, penetration testing vectors, and zero-trust enterprise security architectures.",
    longDescription: "Get inside the mind of red-team operators and blue-team defenders. Learn live Wireshark analysis, OWASP Top 10 mitigation strategies, and industry certifications roadmap.",
    speaker: {
      name: "Arjun Nair",
      role: "Lead Cybersecurity Analyst",
      organization: "SecurSphere Global"
    },
    tags: ["Cybersecurity", "Network Security", "OWASP", "CTF"],
    prerequisites: ["Basic networking concepts"],
    isSample: true
  },
  {
    id: "evt-04",
    title: "FullStack Nexus: Modern Web Architecture & DevOps",
    category: "Bootcamp",
    date: "November 14-15, 2026",
    time: "10:00 AM - 03:30 PM IST",
    location: "Virtual Hands-on Session (Google Meet & GitHub Classroom)",
    status: "Upcoming",
    description: "From TypeScript and Next.js to containerization with Docker and automated CI/CD pipelines.",
    longDescription: "A comprehensive developer immersion covering modern frontend rendering patterns, scalable serverless backends, Docker containers, and GitHub Actions continuous deployment.",
    speaker: {
      name: "Devika Menon",
      role: "Senior Cloud Engineer",
      organization: "DevScale Solutions"
    },
    tags: ["React", "TypeScript", "Docker", "DevOps", "CI/CD"],
    prerequisites: ["Git basics", "HTML/CSS/JS fundamentals"],
    isSample: true
  },
  {
    id: "evt-05",
    title: "Algorithm Arena: Competitive Coding Showdown",
    category: "Competition",
    date: "December 02, 2026",
    time: "04:00 PM - 07:00 PM IST",
    location: "Online (HackerRank Platform)",
    status: "Upcoming",
    description: "A fast-paced speed-coding tournament testing algorithmic problem solving, dynamic programming, and data structures.",
    longDescription: "Test your speed and algorithmic accuracy across 6 challenging problems ranging from graph theory to combinatorics. Leaderboard ranks eligible for IEEE CS MBITS merit certificates.",
    speaker: {
      name: "IEEE CS MBITS CP Wing",
      role: "Contest Problem Setters",
      organization: "MBITS"
    },
    tags: ["Algorithms", "Data Structures", "C++", "Python", "Contest"],
    prerequisites: ["HackerRank account"],
    isSample: true
  },
  {
    id: "evt-06",
    title: "Embedded IoT & Robotics Prototyping Workshop",
    category: "Workshop",
    date: "September 15, 2026",
    time: "09:30 AM - 04:30 PM IST",
    location: "Robotics & Automation Lab, MBITS",
    status: "Completed",
    description: "Interfacing microcontrollers with cloud telemetry and real-time sensor processing pipelines.",
    longDescription: "Students designed custom firmware for ESP32 and STM32 chips, connected MQTT brokers, and built a live environmental monitoring dashboard.",
    speaker: {
      name: "Prof. George Mathew",
      role: "Embedded Systems Specialist",
      organization: "MBITS Faculty Mentor"
    },
    tags: ["IoT", "ESP32", "MQTT", "Hardware", "Sensors"],
    prerequisites: ["Completed"],
    isSample: true
  }
];
