import DOMPurify from 'dompurify';
import { BootupTime, Heading } from './IFeatureScore';

const FeatureScore = (audit: BootupTime) => {

    return (
        <div>
            <h3 className='text-2xl'>{audit.title} - {audit.score} (scoreDisplayMode: {audit.scoreDisplayMode})</h3>
            <p><strong>{audit.displayValue}</strong></p>
            <p>{audit.description}</p>
            <div>Details:</div>
            {audit.details && audit.details.headings && audit.details.headings.map((heading: Heading, index: number) => {
                return (
                    <>
                        <li key={index}>{heading.label} - {heading.key} ({heading.valueType})</li>
                    </>
                )
            })}
            <table className='table-auto table border'>
                <thead>
                    <tr>
                        {audit.details && audit.details.headings && audit.details.headings.map((heading: Heading, index: number) => {
                            return (
                                <>
                                    <th>{heading.label} ({heading.valueType})</th>
                                </>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {audit.details && audit.details.items.map((item, index) => (
                        <>
                        <NestedItem key={index} item={item} />
                            {/* {Object.entries(item).map((heading: Heading, index: number) => {
                                return (
                                    <>
                                    </>
                                )
                            })
                            } */}
                        </>
                    ))}
                </tbody>
            </table>
            <ul style={{ outline: '1px solid orange' }}>
                {audit.details && audit.details.items.map((item, index) => (
                    <>
                        {item.node?.nodeLabel && <li key={index}>{item.node?.nodeLabel}</li>}
                        {item.node?.snippet && (
                            <>
                                <li key={index}>{item.node?.snippet}</li>
                                <li key={index}><ImageFromSnippet snippet={item.node?.snippet} /></li>
                            </>
                        )}
                        {item.node?.selector && <li key={index}>Selector: <pre>{item.node?.selector}</pre></li>}
                        <li>{item.url}</li>
                        <li>
                            <ul>
                                <li>total: {item.totalBytes} wasted: {item.wastedBytes} cacheLifetime: {item.cacheLifetimeMs} cacheProb: {item.cacheHitProbability}</li>
                            </ul>
                        </li>
                    </>
                ))}
                <ul>
                    <li>{audit.details?.skipSumming?.map(x => x)}</li>
                    <li>{audit.details?.summary && audit.details?.summary?.wastedBytes}</li>
                    <li>{audit.details?.sortedBy}</li>
                </ul>
                <li>type: {audit.details?.type}</li>
                <li>type: {audit.details?.headings.map((heading: Heading, index: number) => {
                    return (
                        <>
                            <span key={index}>{heading.label} - {heading.valueType} - {heading.key}</span>
                        </>
                    )
                })}
                </li>
            </ul>
        </div>
    );
}
function isObject(obj: object) {
    return obj === Object(obj);
}

const ImageFromSnippet = ({ snippet }: { snippet?: string }) => {
    if (!snippet) return null;
    const htmlValue = DOMPurify.sanitize(snippet);
    return (<div dangerouslySetInnerHTML={{ __html: htmlValue }}></div>);
}

const NestedItem = ({ item }: { item: object }) => {
    // console.log(item);
    // console.log('pathObject', item[heading.key as keyof typeof item])
    return (
        <>

            {Object.entries(item || {}).map(([key, value]: [string, object | string], index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{key}</td>
                        <td>{typeof (value) === 'object' ? <NestedItem item={value} /> : value}</td>
                    </tr>
                )
            })
            }

        </>
    )

}

export default FeatureScore;