import { z } from 'zod';
import { HeadingRR, ItemRR } from '../IFeatureScore';
import { AuditSchema, AuditType } from '../types/LcpLazyLoadedSchema';

interface DetailsTableProps {
    items?: ItemRR[];
    headings?: HeadingRR[];
}

const DetailsTable = ({ items, headings }: AuditType) => {
    if (!items || !headings) {
        return null;
    }

    return (
        <table className='w-full border'>
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th className='border border-slate-600 text-sm px-2 text-left' key={index}>{heading.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <>
                        <tr className='bg-orange-300' key={index}>
                            {headings.map((heading, index) => {
                                const key = heading.key as keyof typeof item;
                                return (
                                    <td className='border border-slate-600 text-sm px-2 truncate max-w-xs' key={index}>
                                        <>{(item[key])} {heading.valueType}</>
                                        <div className></div>
                                    </td>
                                )
                            }
                            )}
                        </tr>
                        <tr className='bg-orange-200'>
                            {headings.map((heading) => {
                                return (
                                    <>
                                        {item.subItems && <SubItems subItems={item.subItems.items} subHeading={heading.subItemsHeading} />}
                                    </>
                                )
                            }
                            )}
                        </tr>
                    </>
                ))}

            </tbody>
        </table>
    )
}

const SubItems = ({ subItems, subHeading }: { subItems?: ItemRR[], subHeading?: HeadingRR }) => {
    if (!subItems) {
        return null;
    }
    if (!subHeading) {
        return null;
    }
    return (
        <>
            <td>
                {/* <div className='border border-blue-500'><SubHeading subHeading={subHeading} /></div> */}
                <div className='ml-2 text-sm'>
                    {subItems.map((item) => {
                        return (
                            <>
                                <div className='truncate w-[200px]'>
                                    <>{(item[subHeading.key as keyof typeof item])}</>
                                    {subHeading.valueType}
                                </div>
                                <SubItems subItems={item.subItems?.items} subHeading={subHeading} />
                            </>
                        )
                    })}
                </div>
            </td>
        </>
    )
}


export default DetailsTable;