
import { FontDisplay } from '../../IFeatureScore';
import Headings from "../Header/Header";
import ScoreIcon from '../ScoreIcon';
interface FontDisplayProps {
    audit: FontDisplay;
}
const FontDisplayDetails = ({ audit }: FontDisplayProps) => {
    return (
        <div className=''>
            <h3 className='mt-4 text-xl'><ScoreIcon score={audit.score} /> {audit.title} - {audit.score} (scoreDisplayMode: {audit.scoreDisplayMode})</h3>
            {/* <p><strong>{audit.displayValue}</strong></p> */}
            <p className='text-slate-500'>{audit.description}</p>
            <Headings heading={audit.details?.headings} />

            <div className="text-xl">Details:</div>
            {audit.details.items && audit.details.items.map((item, index) => (
                <details className='mb-2'>
                    <NestedItem key={index} item={item} />
                </details>
            ))}
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

export default FontDisplayDetails;