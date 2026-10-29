export interface SocialLink {
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  designation: string;
  subtitle: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
  shortIntro: string;
}

export interface InterestItem {
  name: string;
  description: string;
}

export interface AboutMe {
  title: string;
  bioParagraphs: string[];
  journey: {
    title: string;
    description: string;
  };
  workPreference: {
    title: string;
    points: string[];
  };
  hobbiesAndInterests: {
    title: string;
    interests: InterestItem[];
  };
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SkillsData {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  brief: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  keyFeatures: string[];
  challenges: string[];
  futurePlans: string[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  phoneDisplay: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface QuickLink {
  name: string;
  href: string;
}

export interface FooterData {
  copyrightText: string;
  builtWith: string;
  quickLinks: QuickLink[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  aboutMe: AboutMe;
  skills: SkillsData;
  education: {
    title: string;
    subtitle: string;
    items: EducationItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  contact: ContactData;
  footer: FooterData;
}

