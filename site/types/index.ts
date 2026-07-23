export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: "klinik-yonetim" | "hasta-takip" | "entegrasyon" | "raporlama" | "diger";
  tags: string[];
  image: string;
  demoVideo?: string;
  screenshots?: string[];
  techStack: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  featured: boolean;
  year: number;
  client?: string;
  country?: string[];
  mockup?: string;
  mockups?: { label: string; src: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
