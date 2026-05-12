export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  emoji: string;
  excerpt: string;
  author: string;
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
