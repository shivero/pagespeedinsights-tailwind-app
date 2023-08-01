import { z } from 'zod';
import { BaseAuditPropertiesSchema } from './BaseAuditPropertiesSchema';
import { ItemsSchema } from './ItemsSchema';

export const HeadingsSchema = z.array(

    z.object({
        label: z.string(),
        key: z.string(),
        valueType: z.string(),
        granularity: z.optional(z.number())
    })

);
const userStoreSchema = z.record(HeadingsSchema);
export type HeadingsType = z.infer<typeof HeadingsSchema>;
export type UserStore = z.infer<typeof userStoreSchema>;

export const LongTasksSchema = BaseAuditPropertiesSchema.extend({
    details: z.object({
        type: z.string(),
        skipSumming: z.array(z.string()),
        headings: HeadingsSchema,
        items: ItemsSchema,
        sortedBy: z.array(z.string())
    })
})
export type LcpLazyLoadedType = z.infer<typeof LongTasksSchema>;