export interface EventItem {
  id: string;
  title: string;
  category: 'Workshop' | 'Hackathon' | 'Competition' | 'Seminar' | 'Tech Talk' | 'Bootcamp';
  date: string;
  time: string;
  location: string;
  status: 'Upcoming' | 'Registration Open' | 'Completed';
  description: string;
  longDescription?: string;
  speaker?: {
    name: string;
    role: string;
    avatar?: string;
    organization?: string;
  };
  tags: string[];
  registrationUrl?: string;
  prerequisites?: string[];
  isSample?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Faculty' | 'Executive' | 'Technical' | 'Creative & Operations';
  bio: string;
  avatar: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  isSample?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  category: 'Competitions' | 'Hackathons' | 'Projects' | 'Awards' | 'Community';
  description: string;
  badge: string;
  impactMetrics?: string;
  isSample?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Workshops' | 'Hackathons' | 'Tech Talks' | 'Team' | 'Community';
  imageUrl: string;
  date: string;
  caption: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface TechDomain {
  id: string;
  name: string;
  code: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  skills: string[];
  activeProjects: {
    title: string;
    description: string;
    status: 'In Development' | 'Completed' | 'Research';
    tech: string[];
  }[];
  roadmap: string[];
}
