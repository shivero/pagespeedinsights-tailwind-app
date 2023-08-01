import { z } from 'zod';
import { ItemNodeSchema } from './ItemNodeSchema';



export const ItemsSchema = z.array(z.object({
    duration: z.optional(z.number()),
    startTime: z.optional(z.number()),
    url: z.optional(z.string()),
    node: z.optional(ItemNodeSchema),

}));

export type ItemType = z.infer<typeof ItemsSchema>;
