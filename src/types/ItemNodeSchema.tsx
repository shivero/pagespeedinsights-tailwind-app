import { z } from 'zod';



export const ItemNodeSchema = z.object({
    path: z.string(),
    nodeLabel: z.string(),
    type: z.string(),
    boundingRect: z.object({
        width: z.number(),
        left: z.number(),
        bottom: z.number(),
        top: z.number(),
        right: z.number(),
        height: z.number()
    }),
    snippet: z.string(),
    selector: z.string(),
    lhId: z.string()
});
