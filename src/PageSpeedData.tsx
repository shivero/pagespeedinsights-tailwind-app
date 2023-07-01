import data from '../product_data.json';
import FeatureScore from './FeatureScore'
const PageSpeedData = () => {
    return (
        <>
        
        <div>Requested url: {data.lighthouseResult.requestedUrl}</div>
        <div>Final url: {data.lighthouseResult.finalUrl}</div>
        <div>Final displayed url: {data.lighthouseResult.finalDisplayedUrl}</div>
        <h3>ConfigSettings</h3>
        <ul>
            <li>{data.lighthouseResult.configSettings.emulatedFormFactor}</li>
            <li>{data.lighthouseResult.configSettings.formFactor}</li>
            <li>{data.lighthouseResult.configSettings.locale}</li>
            <li>{data.lighthouseResult.configSettings.onlyCategories.map(x=>x)}</li>
            <li>{data.lighthouseResult.configSettings.channel}</li>
        </ul>
        <div>
            {data.lighthouseResult.runWarnings.map((item) => (
                <div key={item}></div>
            ))}
        </div>
        <h2>Audits:</h2>
        <div><FeatureScore {...data.lighthouseResult.audits['lcp-lazy-loaded']} /></div>
        <div><FeatureScore {...data.lighthouseResult.audits['uses-long-cache-ttl']} /></div>
        {/* <div><FeatureScore {...data.lighthouseResult.audits['render-blocking-resources']} /></div> */}
        </>
    )
};
export default PageSpeedData;