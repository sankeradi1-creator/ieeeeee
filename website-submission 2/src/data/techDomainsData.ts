import type { TechDomain } from '../types';

export const techDomainsData: TechDomain[] = [
  {
    id: "domain-ai",
    name: "Artificial Intelligence & ML",
    code: "NODE-AI/ML",
    iconName: "BrainCircuit",
    shortDesc: "Neural architectures, computer vision, natural language processing, and edge inference.",
    fullDesc: "Our AI Wing focuses on deep learning architectures, LLM fine-tuning, autonomous agent pipelines, and deployment on edge TPU/GPU hardware.",
    color: "#00f2fe",
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "Computer Vision", "LangChain", "CUDA"],
    activeProjects: [
      {
        title: "AgroVision Diagnostics",
        description: "Edge-AI plant leaf pathogen detection using MobileNetV3 with real-time mobile inference.",
        status: "In Development",
        tech: ["PyTorch", "ONNX", "FastAPI", "React Native"]
      },
      {
        title: "Campus AI Semantic Assistant",
        description: "Retrieval-augmented generation (RAG) agent trained on MBITS syllabus and academic circulars.",
        status: "Completed",
        tech: ["ChromaDB", "Llama-3", "FastAPI", "Next.js"]
      }
    ],
    roadmap: ["Transformer Attention Mechanics", "Model Quantization & Pruning", "Vision-Language Models (VLMs)"]
  },
  {
    id: "domain-cyber",
    name: "Cybersecurity & DefOps",
    code: "NODE-SEC/OPS",
    iconName: "ShieldAlert",
    shortDesc: "Ethical hacking, binary exploitation, zero-trust architectures, and network defense.",
    fullDesc: "Dedicated to training students in offensive security, vulnerability assessment, cryptography, and competing in global CTFs (Capture The Flag).",
    color: "#a855f7",
    skills: ["Wireshark", "BurpSuite", "Metasploit", "Cryptography", "Reverse Engineering", "Linux Hardening"],
    activeProjects: [
      {
        title: "Sentinel Honeypot Network",
        description: "Distributed SSH and HTTP honeypot cluster capturing live attack vectors and telemetry.",
        status: "Research",
        tech: ["Python", "Docker", "ELK Stack", "Grafana"]
      },
      {
        title: "CTF Challenge Arena Platform",
        description: "Internal sandbox platform for weekly chapter cybersecurity jeopardy-style challenges.",
        status: "Completed",
        tech: ["Go", "React", "Docker Sandbox", "PostgreSQL"]
      }
    ],
    roadmap: ["Web Exploitation (OWASP Top 10)", "Memory Corruption & Buffer Overflows", "Active Directory Defense"]
  },
  {
    id: "domain-webcloud",
    name: "Full-Stack & Cloud Systems",
    code: "NODE-SYS/CLOUD",
    iconName: "Server",
    shortDesc: "High-concurrency distributed systems, serverless backends, and micro-frontend architectures.",
    fullDesc: "Building resilient web applications, mastering containerization, Kubernetes orchestration, and continuous integration pipelines.",
    color: "#38bdf8",
    skills: ["React", "TypeScript", "Node.js", "Docker", "Kubernetes", "GraphQL", "AWS/GCP"],
    activeProjects: [
      {
        title: "MBITS Student Hub & Event Gateway",
        description: "Unified digital portal for student clubs, event registrations, and real-time announcements.",
        status: "In Development",
        tech: ["React", "TypeScript", "Node.js", "Redis", "Docker"]
      },
      {
        title: "Micro-Services Telemetry Mesh",
        description: "Observability pipeline tracking latency, distributed tracing, and automated fault alerts.",
        status: "Research",
        tech: ["OpenTelemetry", "Prometheus", "Golang"]
      }
    ],
    roadmap: ["Event-Driven Architectures", "Kubernetes Operator Patterns", "Edge Computing & CDN Caching"]
  },
  {
    id: "domain-iot",
    name: "Embedded IoT & Robotics",
    code: "NODE-IOT/ROB",
    iconName: "Cpu",
    shortDesc: "Microcontrollers, RTOS, sensor arrays, autonomous rovers, and industrial automation.",
    fullDesc: "Bridging software with hardware reality: custom PCB fabrication, ESP32/ARM firmware development, ROS (Robot Operating System), and telemetry.",
    color: "#34d399",
    skills: ["Embedded C/C++", "FreeRTOS", "ESP32", "ROS2", "MQTT", "PCB Design", "KiCad"],
    activeProjects: [
      {
        title: "Autonomous Obstacle Avoidance Rover",
        description: "SLAM-based navigation vehicle using LiDAR and ultrasonic telemetry for indoor mapping.",
        status: "Completed",
        tech: ["ROS2", "Raspberry Pi", "Arduino", "Python"]
      },
      {
        title: "Smart Campus Energy Monitor",
        description: "LoRaWAN sensor nodes monitoring laboratory power consumption with real-time anomaly alerts.",
        status: "In Development",
        tech: ["ESP32", "LoRa", "InfluxDB", "Grafana"]
      }
    ],
    roadmap: ["RTOS Task Scheduling & Mutexes", "LiDAR Point Cloud Processing", "Drone Flight Controller Firmware"]
  },
  {
    id: "domain-datasci",
    name: "Data Science & Quantum",
    code: "NODE-DS/QUANT",
    iconName: "Binary",
    shortDesc: "Big data engineering, predictive modeling, statistical inference, and quantum computing.",
    fullDesc: "Exploring vast datasets, mathematical foundations of computing, Qiskit quantum algorithms, and predictive analytics.",
    color: "#f59e0b",
    skills: ["Python", "Pandas", "Qiskit", "Spark", "SQL", "Scikit-Learn", "Data Viz"],
    activeProjects: [
      {
        title: "Kerala Rainfall & Hydrology Predictor",
        description: "Time-series forecasting model analyzing multi-decadal meteorological patterns.",
        status: "Research",
        tech: ["Prophet", "Python", "Streamlit", "XGBoost"]
      },
      {
        title: "Quantum Key Distribution Simulator",
        description: "Visual BB84 protocol simulator demonstrating photon polarization and eavesdropping detection.",
        status: "Completed",
        tech: ["Qiskit", "Python", "React Canvas"]
      }
    ],
    roadmap: ["Quantum Gate Superposition", "Big Data Streaming with Kafka", "Bayesian Statistical Analysis"]
  },
  {
    id: "domain-web3",
    name: "Web3 & Distributed Ledgers",
    code: "NODE-W3/LEDGER",
    iconName: "Blocks",
    shortDesc: "Smart contracts, decentralized storage, zero-knowledge proofs, and peer-to-peer protocols.",
    fullDesc: "Investigating decentralized identity, verifiable credentials, Solidity smart contract auditing, and IPFS distributed systems.",
    color: "#ec4899",
    skills: ["Solidity", "Ethers.js", "IPFS", "Hardhat", "Zero Knowledge", "Rust"],
    activeProjects: [
      {
        title: "Verifiable IEEE Certificate Ledger",
        description: "Tamper-proof student certificate issuance and instant verification on EVM testnet.",
        status: "In Development",
        tech: ["Solidity", "IPFS", "Ethers.js", "Next.js"]
      }
    ],
    roadmap: ["Smart Contract Security Auditing", "Zero-Knowledge Rollups", "P2P Gossip Protocols"]
  }
];
