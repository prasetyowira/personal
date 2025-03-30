export interface Project {
  id: string;
  title: string;
  description: string;
  title_ja?: string;    // Optional Japanese title
  description_ja?: string;  // Optional Japanese description
  featured: boolean;
  image: string;
  technologies: string[];
  link?: string;  // Optional link field
  project_link?: string; // Optional GitHub or external project link
  project_details?: {
    description: string;
    key_features: string[];
    technical_challenges: string[];
  };
  project_details_ja?: {
    description: string;
    key_features: string[];
    technical_challenges: string[];
  };
} 