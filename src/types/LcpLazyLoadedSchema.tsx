import { z } from 'zod';
import { BaseAuditPropertiesSchema } from './BaseAuditPropertiesSchema';
import { HeadingsSchema } from './LongTasksSchema';

import { ItemsSchema } from './ItemsSchema';


export const LcpLazyLoadedSchema = BaseAuditPropertiesSchema.extend({
    details: z.object({
        items: ItemsSchema,
        type: z.string(),
        headings: HeadingsSchema,
        
    })
})

export type LcpLazyLoadedType = z.infer<typeof LcpLazyLoadedSchema>;