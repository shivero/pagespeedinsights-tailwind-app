import { z } from 'zod';



export const LcpLazyLoadedSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    score: z.number(),
    scoreDisplayMode: z.string(),
    details: z.object({
        items: z.array(
            z.object({
                node: z.object({
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
                })
            })
        ),
        type: z.string(),
        headings: z.array(
            z.object({
                label: z.string(),
                valueType: z.string(),
                key: z.string()
            })
        )
    })
})

export type LcpLazyLoadedType = z.infer<typeof LcpLazyLoadedSchema>;