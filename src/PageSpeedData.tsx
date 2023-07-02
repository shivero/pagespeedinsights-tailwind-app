import data from '../product_data.json';
import LcpLazyLoaded from './LcpLazyLoadedDetails'
import AuditDetails from './components/Audit/Audit';
import FontDisplayDetails from './components/FontDisplay/FontDisplayDetails';
import LongTasksDetails from './components/LongTasks/LongTasks';
import RenderBlockingResources from './components/RenderBlockingResources/RenderBlockingResources';
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
                <li>{data.lighthouseResult.configSettings.onlyCategories.map(x => x)}</li>
                <li>{data.lighthouseResult.configSettings.channel}</li>
            </ul>
            <div>
                {data.lighthouseResult.runWarnings.map((item) => (
                    <div key={item}></div>
                ))}
            </div>
            <h2>Audits:</h2>
            <div><LcpLazyLoaded audit={data.lighthouseResult.audits['lcp-lazy-loaded']} /></div>
            <div><FontDisplayDetails audit={data.lighthouseResult.audits['font-display']} /></div>
            <div><RenderBlockingResources audit={data.lighthouseResult.audits['render-blocking-resources']} /></div>
            <div><LongTasksDetails audit={data.lighthouseResult.audits['long-tasks']} /></div>
            <div><AuditDetails audit={data.lighthouseResult.audits['bootup-time']} /></div>
            <div><AuditDetails audit={data.lighthouseResult.audits['critical-request-chains']} /></div>
            <div><AuditDetails audit={data.lighthouseResult.audits['third-party-summary']} /></div>
        </>
    )
};
export default PageSpeedData;