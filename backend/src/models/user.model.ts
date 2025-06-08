export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // In a real app, this would be hashed
  role: 'admin' | 'user';
  profile: {
    name: string;
    title: string;
    summary: string;
    location: string;
    phone: string;
    website?: string;
    socialLinks?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
    }
  };
  experience: Array<{
    id: string;
    title: string;
    period: string;
    location: string;
    description: string;
    order: number;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    period: string;
    location: string;
    description?: string;
    order: number;
  }>;
  skills: Array<{
    id: string;
    category: string;
    skills: Array<{
      name: string;
      level: number;
    }>;
    order: number;
  }>;
} 