import type { CollectionEntry } from "astro:content";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const imageSchema = z.object({
  src: z.string(),
  mobileVariant: z.string().optional(),
  alt: z.string(),
  caption: z.string().optional(),
});

const index = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/index" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    featuredPaths: z
      .array(z.object({ path: z.string(), name: z.string() }))
      .optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/about" }),
  schema: z.object({
    featured: z.boolean(),
    title: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    images: z.array(imageSchema).optional(),
    link: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    featured: z.boolean(),
    prototype: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    releaseDate: z.coerce.date(),
    tech: z.array(z.string()),
    repo: z.string().optional(),
    demo: z.string().optional(),
    images: z.array(imageSchema).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/experience" }),
  schema: z.object({
    featured: z.boolean(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    endDate: z.coerce.date().optional(),
  }),
});

export const collections = { index, about, projects, experience };
export type IndexEntry = CollectionEntry<"index">;
export type AboutEntry = CollectionEntry<"about">;
export type ProjectEntry = CollectionEntry<"projects">;
export type ExperienceEntry = CollectionEntry<"experience">;
export type ImageSchema = z.infer<typeof imageSchema>;
