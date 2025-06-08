export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  phone: string;
  website: string;
  socialLinks: SocialLinks;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  profile: Profile;
  experience: any[];
  education: any[];
  skills: any[];
}

export interface UsersData {
  users: User[];
} 