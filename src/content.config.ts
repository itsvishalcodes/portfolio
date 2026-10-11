import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const AREAS = ['Distributed systems', 'Reliability', 'Backend', 'Frontend', 'AI', 'Performance & cost'] as const;

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    // Used for sorting (newest first).
    date: z.coerce.date(),
    role: z.string(),
    // Business context in one line, e.g. "Third-party video ads API".
    context: z.string().optional(),
    areas: z.array(z.enum(AREAS)).min(1),
    stack: z.array(z.string()),
    metric: z.object({ value: z.string(), label: z.string() }).optional(),
    // Name of an architecture diagram in src/components/diagrams.
    diagram: z.enum(['pipeline', 'reconciliation', 'async-media']).optional(),
    featured: z.boolean().default(false),
    // Lower = earlier on the home page.
    rank: z.number().default(100),
  }),
});

export const collections = { work };
