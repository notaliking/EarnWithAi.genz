export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  emoji: string;
  excerpt: string;
  author: string;
  authorProfile?: string;
  featuredImage: string;
  content: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  socials: {
    twitter: string;
    tiktok: string;
  };
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
  hasAffiliate: boolean;
  emoji: string;
  content?: string;
}
