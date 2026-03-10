
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  provider?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: {
    address: string;
    linkedin: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  skills: string[];
}
