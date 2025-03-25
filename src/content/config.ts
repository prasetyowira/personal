import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Wira'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(['en', 'ja']).default('en'),
  }),
});

// Projects collection schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'ja']).default('en'),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
}; 