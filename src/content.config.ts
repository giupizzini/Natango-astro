import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    address: z.string(),
    mapsLink: z.string().url().optional(),
  }),
});

export const collections = {
  courses,
  locations,
};
