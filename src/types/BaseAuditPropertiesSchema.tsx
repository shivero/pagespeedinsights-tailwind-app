import { z } from 'zod';


export const BaseAuditPropertiesSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    score: z.number().or(z.null()),
    scoreDisplayMode: z.string(),
    displayValue: z.optional(z.string()),
});
