import { RenderBlockingResources } from '../../IFeatureScore';
import DetailsTable from '../DetailsTable';
import Headings from "../Headings/Headings";
import ScoreIcon from '../ScoreIcon';
interface RenderBlockingResourcesProps {
    audit: RenderBlockingResources;
}
const RenderBlockingResourcesDetails = ({ audit }: RenderBlockingResourcesProps) => {
    return (
        <div className=''>
            <h3 className='mt-4 text-xl'><ScoreIcon score={audit.score} /> {audit.title} - {audit.score} (scoreDisplayMode: {audit.scoreDisplayMode})</h3>
            {/* <p><strong>{audit.displayValue}</strong></p> */}
            <p className='text-slate-500'>{audit.description}</p>
            
            <DetailsTable items={audit.details.items} headings={audit.details.headings} />
        </div>
    );
}

const NestedItem = ({ item }: { item: object }) => {
    return (
        <>

            {Object.entries(item || {}).map(([key, value]: [string, object | string], index) => {
                if (key === 'url') {
                    return (
                        <>
                            <div className='border-l' key={index}>
                                <div className='text-md'><a href={value as string} className='text-blue-500'>{value as string}</a></div>
                            </div>
                        </>
                    )
                }
                return (
                    <div className='border-l' key={index}>
                        <div className='ml-2'>{key}:
                            {typeof (value) === 'object' ? <NestedItem item={value} /> : value}
                        </div>
                    </div>
                )
            })
            }

        </>
    )

}

export default RenderBlockingResourcesDetails;