import { isCompositeComponent } from 'react-dom/test-utils';
import { HeadingRR, Item3, ItemRR, SubItemsHeading, SubItemsRR } from '../IFeatureScore';

interface DetailsTableProps {
    items?: ItemRR[];
    headings?: HeadingRR[];
}
const DetailsTable = ({ items, headings }: DetailsTableProps) => {
    if (!items || !headings) {
        return null;
    }
    const allTypes: Record<string, boolean> = { jpg: true, gif: true, png: true, mp4: true };

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
                    <tr className='bg-orange-400' key={index}>
                        {headings.map((heading, index) => {
                            return (
                                <>
                                    {/* <pre>{JSON.stringify(heading.subItemsHeading, null, 2)}</pre> */}
                                    <td className='border border-slate-600 text-sm px-2' key={index}>{(item[heading.key as keyof typeof item])} {heading.valueType}</td>

                                    

                                </>
                            )
                        }
                        )}
                    </tr>
                    <tr className='bg-orange-200'>
                    {headings.map((heading, index) => {
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
                                <div className='truncate w-[400px]'>{(item[subHeading.key as keyof typeof item])} {subHeading.valueType}</div>
                                <SubItems subItems={item.subItems?.items} subHeading={subHeading} />
                            </>
                        )
                    })}
                </div>
            </td>
        </>
    )
}
const SubHeading = ({ subHeading }: { subHeading?: HeadingRR }) => {
    if (!subHeading) {
        return null;
    }
    return (
        <div className='border border-red-500'>
            <span className='label'>{subHeading.key}</span>
            {subHeading.subItemsHeading && <SubHeading subHeading={subHeading.subItemsHeading} />}
        </div>
    )
}

export default DetailsTable;