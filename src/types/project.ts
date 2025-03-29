export interface Project {
  id: string;
  title: string;
  description: string;
  title_ja?: string;    // Optional Japanese title
  description_ja?: string;  // Optional Japanese description
  featured: boolean;
  image: string;
  technologies: string[];
  link: string;
} 