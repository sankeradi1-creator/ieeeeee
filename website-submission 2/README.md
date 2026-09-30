# IEEE Computer Society MBITS — WebNova Competition Entry ⚡

> **"Where Technology Meets Imagination."**  
> Official student chapter website entry for the **WebNova • IEEE Computer Society MBITS Website Competition**.

---

## 🌟 Executive Overview & Design Philosophy

This platform is engineered to break away from traditional collegiate website templates. It embodies a **futuristic, professional, and interactive command center** representing the identity of the **IEEE Computer Society Student Chapter at Mar Baselios Institute of Technology and Science (MBITS), Kothamangalam**.

### Aesthetic & Technical Signatures:
- **Dark-First Spatial Palette**: Deep space obsidian (`#030712`), rich navy (`#060B1B`), electric cyan (`#00f2fe`), neon violet (`#a855f7`), and amber accents.
- **Interactive Constellation Canvas**: Real-time canvas particle mesh reacting smoothly to mouse velocity and cursor proximity (60 FPS).
- **Glassmorphic Depth**: Backdrop blur layers with cybernetic borders and glowing drop shadows.
- **Synthesizer Web Audio API FX**: Subtle futuristic audio feedback for micro-interactions, with instant global mute/unmute control in the navbar.
- **Zero Placeholder Broken Assets**: Curated imagery and vector assets with fallbacks and clean sample data markers.

---

## 🚀 Key Sections & Features

### 1. Sticky Cyber Navigation
- Glassmorphic header with IEEE Computer Society MBITS glowing badge.
- Active section spy with smooth scrolling.
- Quick audio FX toggle, Easter Egg CLI launcher button, and "Join Chapter" CTA.
- Responsive mobile drawer menu.

### 2. Hero Landing & Live Metrics
- High-impact typography (`Space Grotesk`, `Inter`, `JetBrains Mono`).
- WebNova competition submission badge.
- Live Chapter Stats ribbon: Active Members (350+), Tech Workshops (30+), Hackathons (8+), Campus Projects (20+).
- Animated scroll-down visual indicator.

### 3. About Section & Student Growth Matrix
- Chapter mission, vision, and IEEE Kerala Section (R10) affiliation.
- **4 Core Pillars**: Innovation, Technical Excellence, Community, and Continuous Learning.
- Interactive chapter blueprint panel and student outcomes matrix.

### 4. 🛰️ SPECIAL INNOVATION FEATURE: Digital Command Center & Interactive Tech Network
Dual-mode interactive platform:
- **Domain Explorer**: Users explore the 6 computing verticals:
  1. *Artificial Intelligence & ML* (`NODE-AI/ML`)
  2. *Cybersecurity & DefOps* (`NODE-SEC/OPS`)
  3. *Full-Stack & Cloud Systems* (`NODE-SYS/CLOUD`)
  4. *Embedded IoT & Robotics* (`NODE-IOT/ROB`)
  5. *Data Science & Quantum Computing* (`NODE-DS/QUANT`)
  6. *Web3 & Distributed Ledgers* (`NODE-W3/LEDGER`)
  - Real-time active student prototypes (e.g. *AgroVision Diagnostics*, *Sentinel Honeypot Network*).
  - Tech stack tags, roadmap milestones, and direct wing application.
- **Chapter Telemetry Dashboard**: Real-time community pulse, sprint audit metrics, and terminal status monitor.

### 5. Events & Hackathons
- Category filtering: *All*, *Workshop*, *Hackathon*, *Competition*, *Tech Talk*, *Bootcamp*.
- Status badges: *Registration Open* (animated pulse), *Upcoming*, *Completed*.
- **Interactive EventModal**: Complete schedule, venue, prerequisites, speaker profile, and interactive registration flow with celebratory confetti!

### 6. Achievements Timeline
- Milestone chronicle showcasing National Smart India Hackathon finalists, IEEE Kerala Section recognitions, State CodeFest, and open-source infrastructure projects.
- Impact metrics and badge categories.

### 7. Leadership & Mentors (Team)
- Faculty Coordinator & Branch Counselor, Chairperson, Vice Chairperson, Secretary, Tech Lead, Webmaster, Events Lead, Creative Lead.
- Category filters: *All*, *Faculty*, *Executive*, *Technical*, *Creative & Operations*.
- High-fidelity profile cards with LinkedIn, GitHub, and email links.
- "Join Core Team" recruitment callout banner.

### 8. Visual Gallery & Lightbox
- Responsive grid showcasing workshops, keynote talks, hardware labs, and hackathons.
- Fullscreen **LightboxModal** with previous/next navigation, keyboard arrow/escape controls, and event captions.

### 9. Why Join Us (Value Proposition)
- 5 Pillars of Student Growth: *Learn*, *Build*, *Connect*, *Lead*, *Compete*.
- Interactive benefits card and priority membership portal.

### 10. Contact Chapter Headquarters
- MBITS campus address, email channels, phone, and social handles.
- **Frontend-validated contact form** with domain routing selector, character limits, error feedback, and clear note on backend webhook readiness.

### 11. 🕹️ EASTER EGG: Retro-Futuristic Cyber Terminal CLI
- Accessible via shortcut **`~` (backtick)** or **`Ctrl + K` / `Cmd + K`**, or via the **`CLI [~]`** button in navbar/hero/footer.
- Functional interactive commands:
  - `help`: lists all available terminal commands
  - `about`: chapter background and location
  - `events`: live schedule of workshops and hackathons
  - `team`: directory of chapter leads
  - `domains`: list active computing nodes
  - `stats`: chapter telemetry
  - `matrix`: toggle digital green/cyan cyber rain mode
  - `sudo`: permission denial simulation
  - `join`: launches student membership modal
  - `contact`: correspondence coordinates
  - `clear`: clears scrollback buffer
  - `exit`: closes terminal session

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom cybernetic utilities & glassmorphism
- **Icons**: Lucide React + custom inline brand SVG icons
- **Audio**: Web Audio API Synthesizer (Zero external audio file latency)
- **Effects**: HTML5 Canvas Constellation + Canvas Confetti
- **Typography**: Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`)

### Folder Structure:
```
src/
├── types/
│   └── index.ts                 # Strict TypeScript schemas
├── data/
│   ├── siteConfig.ts            # Central branding, college, socials
│   ├── eventsData.ts            # Structured events (sample / editable)
│   ├── teamData.ts              # Office bearers & faculty advisors
│   ├── achievementsData.ts      # Milestones & awards
│   ├── galleryData.ts           # Media items & captions
│   └── techDomainsData.ts       # 6 computing nodes & student projects
├── utils/
│   └── soundEffects.ts          # Web Audio API procedural sound FX
└── components/
    ├── Navbar.tsx               # Sticky nav with audio toggle & active spy
    ├── Hero.tsx                 # Canvas interactive mesh & stats ribbon
    ├── About.tsx                # 4 pillars & blueprint
    ├── InnovationFeature.tsx    # Command Center & Tech Network
    ├── Events.tsx               # Filterable event cards
    ├── EventModal.tsx           # Registration modal + confetti
    ├── Achievements.tsx         # Milestone timeline
    ├── WhyJoinUs.tsx            # Value proposition cards
    ├── Team.tsx                 # Leadership profiles
    ├── Gallery.tsx              # Media gallery
    ├── LightboxModal.tsx        # Keyboard-navigable lightbox
    ├── Contact.tsx              # Validated contact form
    ├── TerminalModal.tsx        # Easter egg interactive CLI
    ├── JoinChapterModal.tsx     # Student application modal
    ├── Footer.tsx               # Footer with links & back-to-top
    └── Icons.tsx                # Brand icons (LinkedIn, GitHub, Instagram)
```

---

## 💻 Running Locally

```bash
# Navigate to project directory
cd /Users/phobias/.gemini/antigravity-ide/scratch/ieee-cs-mbits

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Server will run on `http://127.0.0.1:5173/`.

---

## 📝 Content Customization Notice

All chapter details (events, executive committee, achievements, gallery photos, and contact addresses) are organized in `src/data/` as clean JavaScript/TypeScript objects. To update the website with live chapter information:
1. Edit `src/data/siteConfig.ts` for college address and social links.
2. Edit `src/data/teamData.ts` to add or update office bearers.
3. Edit `src/data/eventsData.ts` to post new workshops or hackathons.
4. Edit `src/data/galleryData.ts` with local or hosted campus photos.
