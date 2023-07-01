export interface IFeatureScore {
  captchaResult:        string;
  kind:                 string;
  id:                   string;
  loadingExperience:    LoadingExperience;
  lighthouseResult:     LighthouseResult;
  analysisUTCTimestamp: Date;
}

export interface LighthouseResult {
  requestedUrl:       string;
  finalUrl:           string;
  mainDocumentUrl:    string;
  finalDisplayedUrl:  string;
  lighthouseVersion:  string;
  userAgent:          string;
  fetchTime:          Date;
  environment:        Environment;
  runWarnings:        any[];
  configSettings:     ConfigSettings;
  audits:             Audits;
  categories:         Categories;
  categoryGroups:     CategoryGroups;
  timing:             Timing;
  i18n:               I18N;
  entities:           Entity[];
  fullPageScreenshot: FullPageScreenshot;
}

export interface Audits {
  "speed-index":                      BootupTime;
  "uses-rel-preconnect":              BootupTime;
  "font-display":                     BootupTime;
  "lcp-lazy-loaded":                  BootupTime;
  "uses-long-cache-ttl":              BootupTime;
  "total-blocking-time":              BootupTime;
  "render-blocking-resources":        BootupTime;
  "largest-contentful-paint":         BootupTime;
  "unminified-css":                   BootupTime;
  "server-response-time":             BootupTime;
  "legacy-javascript":                BootupTime;
  "largest-contentful-paint-element": BootupTime;
  "main-thread-tasks":                BootupTime;
  "long-tasks":                       BootupTime;
  "no-document-write":                BootupTime;
  "unsized-images":                   BootupTime;
  "uses-text-compression":            BootupTime;
  "screenshot-thumbnails":            BootupTime;
  "duplicated-javascript":            BootupTime;
  "bootup-time":                      BootupTime;
  redirects:                          BootupTime;
  "script-treemap-data":              BootupTime;
  "final-screenshot":                 BootupTime;
  "cumulative-layout-shift":          BootupTime;
  "layout-shift-elements":            BootupTime;
  viewport:                           BootupTime;
  "max-potential-fid":                BootupTime;
  "network-requests":                 BootupTime;
  interactive:                        BootupTime;
  "first-contentful-paint":           BootupTime;
  "efficient-animated-content":       BootupTime;
  metrics:                            BootupTime;
  "prioritize-lcp-image":             BootupTime;
  "uses-rel-preload":                 BootupTime;
  "first-meaningful-paint":           BootupTime;
  "uses-optimized-images":            BootupTime;
  "network-rtt":                      BootupTime;
  "unminified-javascript":            BootupTime;
  "third-party-facades":              BootupTime;
  diagnostics:                        BootupTime;
  "network-server-latency":           BootupTime;
  "user-timings":                     BootupTime;
  "timing-budget":                    BootupTime;
  "mainthread-work-breakdown":        BootupTime;
  "unused-css-rules":                 BootupTime;
  "uses-passive-event-listeners":     BootupTime;
  "resource-summary":                 BootupTime;
  "offscreen-images":                 BootupTime;
  "critical-request-chains":          BootupTime;
  "third-party-summary":              BootupTime;
  "performance-budget":               BootupTime;
  "dom-size":                         BootupTime;
  "total-byte-weight":                BootupTime;
  "unused-javascript":                BootupTime;
  "non-composited-animations":        BootupTime;
  "uses-responsive-images":           BootupTime;
  "modern-image-formats":             BootupTime;
}

export interface BootupTime {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: string;
  displayValue?:    string;
  details?:         BootupTimeDetails;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  warnings?:        any[];
  
}

export interface BootupTimeDetails {
  sortedBy?:            string[];
  headings:             Heading[];
  summary?:             Summary;
  items:                Item[];
  type:                 DetailsType;
  skipSumming?:         string[];
  overallSavingsMs?:    number;
  debugData?:           PurpleDebugData;
  overallSavingsBytes?: number;
}

export interface PurpleDebugData {
  initiatorPath: InitiatorPath[];
  pathLength:    number;
  type:          DebugDataType;
}

export interface InitiatorPath {
  initiatorType: string;
  url:           string;
}

export enum DebugDataType {
  Debugdata = "debugdata",
}

export interface Heading {
  valueType:        string;
  key:              string;
  label?:           string;
  granularity?:     number;
  subItemsHeading?: SubItemsHeading;
  displayUnit?:     string;
}

export interface SubItemsHeading {
  valueType?: string;
  key:        string;
}

export interface Item {
  url?:                string;
  total?:              number;
  scripting?:          number;
  scriptParseCompile?: number;
  duration?:           number;
  startTime?:          number;
  wastedMs?:           number;
  totalBytes?:         number;
  transferSize?:       number;
  resourceType?:       string;
  label?:              string;
  requestCount?:       number;
  wastedPercent?:      number;
  wastedBytes?:        number;
  node:               ItemNode;
  headings?:            Heading[];
  items?:               ItemItem[];
  type?:                DetailsType;
  group?:               string;
  groupLabel?:          string;
  responseTime?:        number;
  cacheHitProbability?: number;
  cacheLifetimeMs?:     number;
  debugData?:           ItemDebugData;
}

export type ItemsIndex = {
  [key: string]: Heading;
};
export type HeadingsIndex = {
  [key: string]: Item;
}

export interface Summary {
  wastedMs?: number;
  wastedBytes?: number;
}

export enum DetailsType {
  Opportunity = "opportunity",
  Table = "table",
}

export enum NumericUnit {
  Millisecond = "millisecond",
}

export enum ScoreDisplayMode {
  Informative = "informative",
  Numeric = "numeric",
  Binary = "binary",
}

export interface CriticalRequestChains {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: string;
  displayValue:     string;
  details?:         CriticalRequestChainsDetails;
  numericValue?:    number;
  numericUnit?:     string;
}

export interface CriticalRequestChainsDetails {
  type:              string;
  longestChain?:     LongestChain;
  chains?:           Chains;
  items?:            FluffyItem[];
  headings?:         Heading[];
  sortedBy?:         string[];
  overallSavingsMs?: number;
  skipSumming?:      string[];
  summary?:          FluffySummary;
}

export interface Chains {
  "8DE8482D227813ECE35E9E174D10DD8B": The8De8482D227813Ece35E9E174D10Dd8B;
}

export interface The8De8482D227813Ece35E9E174D10Dd8B {
  children: { [key: string]: Child };
  request:  Request;
}

export interface Child {
  request: Request;
}

export interface Request {
  url:                  string;
  responseReceivedTime: number;
  endTime:              number;
  transferSize:         number;
  startTime:            number;
}

export interface FluffyItem {
  headings?:            Heading[];
  items?:               ItemItem[];
  type?:                DetailsType;
  group?:               string;
  duration?:            number;
  groupLabel?:          string;
  responseTime?:        number;
  url?:                 string;
  cacheHitProbability?: number;
  totalBytes?:          number;
  wastedBytes?:         number;
  cacheLifetimeMs?:     number;
  debugData?:           ItemDebugData;
}

export interface ItemDebugData {
  public?:   boolean;
  type:      DebugDataType;
  "max-age": number;
}

export interface ItemItem {
  node: ItemNode;
}

export interface ItemNode {
  boundingRect: NodeValue;
  type:         string;
  nodeLabel:    string;
  snippet:      string;
  path:         string;
  selector:     string;
  lhId:         string;
}

export interface NodeValue {
  width:  number;
  left:   number;
  bottom: number;
  top:    number;
  right:  number;
  height: number;
}

export enum NodeType {
  Node = "node",
}

export interface LongestChain {
  transferSize: number;
  duration:     number;
  length:       number;
}

export interface FluffySummary {
  wastedBytes: number;
}

export interface CumulativeLayoutShift {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  displayValue?:    string;
  details?:         CumulativeLayoutShiftDetails;
  numericValue:     number;
  numericUnit:      string;
  warnings?:        any[];
}

export interface CumulativeLayoutShiftDetails {
  type:                 string;
  items:                TentacledItem[];
  headings?:            Heading[];
  sortedBy?:            string[];
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
}

export interface TentacledItem {
  totalCumulativeLayoutShift?:                number;
  cumulativeLayoutShiftMainFrame?:            number;
  speedIndex?:                                number;
  observedLargestContentfulPaintTs?:          number;
  observedLargestContentfulPaintAllFramesTs?: number;
  observedFirstContentfulPaintTs?:            number;
  cumulativeLayoutShift?:                     number;
  observedFirstPaint?:                        number;
  observedTotalCumulativeLayoutShift?:        number;
  observedDomContentLoadedTs?:                number;
  totalBlockingTime?:                         number;
  observedCumulativeLayoutShiftMainFrame?:    number;
  observedSpeedIndex?:                        number;
  observedFirstPaintTs?:                      number;
  interactive?:                               number;
  observedFirstContentfulPaintAllFrames?:     number;
  observedTraceEndTs?:                        number;
  observedTraceEnd?:                          number;
  observedFirstMeaningfulPaintTs?:            number;
  firstContentfulPaint?:                      number;
  observedCumulativeLayoutShift?:             number;
  maxPotentialFID?:                           number;
  observedLoadTs?:                            number;
  observedFirstVisualChangeTs?:               number;
  observedFirstContentfulPaintAllFramesTs?:   number;
  observedLargestContentfulPaintAllFrames?:   number;
  observedNavigationStart?:                   number;
  observedLoad?:                              number;
  observedLastVisualChange?:                  number;
  firstMeaningfulPaint?:                      number;
  observedFirstContentfulPaint?:              number;
  observedLastVisualChangeTs?:                number;
  observedFirstVisualChange?:                 number;
  observedTimeOriginTs?:                      number;
  observedLargestContentfulPaint?:            number;
  observedTimeOrigin?:                        number;
  observedNavigationStartTs?:                 number;
  observedFirstMeaningfulPaint?:              number;
  observedSpeedIndexTs?:                      number;
  largestContentfulPaint?:                    number;
  observedDomContentLoaded?:                  number;
  lcpInvalidated?:                            boolean;
  totalBytes?:                                number;
  url?:                                       string;
  wastedPercent?:                             number;
  node?:                                      ItemNode;
  wastedBytes?:                               number;
}

export interface Diagnostics {
  id:               string;
  title:            string;
  description:      string;
  score:            null;
  scoreDisplayMode: string;
  details?:         DiagnosticsDetails;
}

export interface DiagnosticsDetails {
  type:   string;
  items?: StickyItem[];
  scale?: number;
  nodes?: NodeElement[];
}

export interface StickyItem {
  totalByteWeight?:          number;
  numScripts?:               number;
  numTasks?:                 number;
  numStylesheets?:           number;
  maxServerLatency?:         null;
  mainDocumentTransferSize?: number;
  rtt?:                      number;
  numTasksOver50ms?:         number;
  numFonts?:                 number;
  throughput?:               number;
  maxRtt?:                   number;
  numRequests?:              number;
  totalTaskTime?:            number;
  numTasksOver100ms?:        number;
  numTasksOver25ms?:         number;
  numTasksOver500ms?:        number;
  numTasksOver10ms?:         number;
  data?:                     string;
  timing?:                   number;
  timestamp?:                number;
}

export interface NodeElement {
  unusedBytes?:  number;
  name:          string;
  resourceBytes: number;
  children?:     NodeElement[];
}

export interface DOMSize {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  displayValue:     string;
  details:          DOMSizeDetails;
  numericValue?:    number;
  numericUnit?:     string;
}

export interface DOMSizeDetails {
  type:     DetailsType;
  headings: Heading[];
  items:    IndigoItem[];
}

export interface IndigoItem {
  value?:     Value;
  statistic?: string;
  node?:      ItemNode;
  subItems?:  PurpleSubItems;
}

export interface PurpleSubItems {
  type:  SubItemsType;
  items: IndecentItem[];
}

export interface IndecentItem {
  animation:     string;
  failureReason: string;
}

export enum SubItemsType {
  Subitems = "subitems",
}

export interface Value {
  type:        ScoreDisplayMode;
  value:       number;
  granularity: number;
}

export interface DuplicatedJavascript {
  id:               string;
  title:            string;
  description:      string;
  score:            number;
  scoreDisplayMode: string;
  details?:         DuplicatedJavascriptDetails;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  displayValue?:    string;
  warnings?:        any[];
}

export interface DuplicatedJavascriptDetails {
  items:                HilariousItem[];
  sortedBy?:            string[];
  headings:             Heading[];
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
  type:                 DetailsType;
  summary?:             TentacledSummary;
  isEntityGrouped?:     boolean;
}

export interface HilariousItem {
  totalBytes?:       number;
  url?:              string;
  subItems?:         FluffySubItems;
  wastedBytes?:      number;
  wastedWebpBytes?:  number;
  isCrossOrigin?:    boolean;
  fromProtocol?:     boolean;
  node?:             ItemNode;
  wastedPercent?:    number;
  requestStartTime?: number;
  mainThreadTime?:   number;
  entity?:           string;
  transferSize?:     number;
  blockingTime?:     number;
}

export interface FluffySubItems {
  items: AmbitiousItem[];
  type:  SubItemsType;
}

export interface AmbitiousItem {
  signal?:         string;
  location?:       Source;
  transferSize?:   number;
  blockingTime?:   number;
  url?:            string;
  mainThreadTime?: number;
}

export interface Source {
  url:         string;
  line:        number;
  urlProvider: URLProvider;
  column:      number;
  type:        SourceType;
}

export enum SourceType {
  SourceLocation = "source-location",
}

export enum URLProvider {
  Network = "network",
}

export interface TentacledSummary {
  wastedMs:    number;
  wastedBytes: number;
}

export interface FinalScreenshot {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: string;
  details?:         FinalScreenshotDetails;
}

export interface FinalScreenshotDetails {
  type:       string;
  data?:      string;
  timing?:    number;
  timestamp?: number;
  headings?:  Heading[];
  items?:     CunningItem[];
}

export interface CunningItem {
  node: ItemNode;
  url:  string;
}

export interface FontDisplay {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: string;
  details?:         FontDisplayDetails;
  warnings?:        string[];
  displayValue?:    string;
}

export interface FontDisplayDetails {
  type:              DetailsType;
  items:             MagentaItem[];
  headings:          Heading[];
  overallSavingsMs?: number;
}

export interface MagentaItem {
  score?:     number;
  node?:      ItemNode;
  duration?:  number;
  startTime?: number;
  source?:    Source;
}

export interface NetworkRequests {
  id:               string;
  title:            string;
  description:      string;
  score:            null;
  scoreDisplayMode: ScoreDisplayMode;
  details:          NetworkRequestsDetails;
}

export interface NetworkRequestsDetails {
  type:      DetailsType;
  items:     FriskyItem[];
  debugData: FluffyDebugData;
  headings:  Heading[];
}

export interface FluffyDebugData {
  networkStartTimeTs: number;
  type:               DebugDataType;
}

export interface FriskyItem {
  rendererStartTime:          number;
  networkRequestTime:         number;
  networkEndTime:             number;
  mimeType:                   string;
  experimentalFromMainFrame?: boolean;
  finished:                   boolean;
  protocol:                   Protocol;
  statusCode:                 number;
  priority:                   Priority;
  resourceSize:               number;
  transferSize:               number;
  resourceType?:              ResourceType;
  url:                        string;
  sessionTargetType:          SessionTargetType;
  isLinkPreload?:             boolean;
}

export enum Priority {
  High = "High",
  Low = "Low",
  Medium = "Medium",
  VeryHigh = "VeryHigh",
  VeryLow = "VeryLow",
}

export enum Protocol {
  Data = "data",
  H2 = "h2",
  HTTP11 = "http/1.1",
}

export enum ResourceType {
  Document = "Document",
  Fetch = "Fetch",
  Font = "Font",
  Image = "Image",
  Script = "Script",
  Stylesheet = "Stylesheet",
  Xhr = "XHR",
}

export enum SessionTargetType {
  Page = "page",
}

export interface Categories {
  performance: Performance;
}

export interface Performance {
  id:        string;
  title:     string;
  score:     number;
  auditRefs: AuditRef[];
}

export interface AuditRef {
  id:              string;
  weight:          number;
  group?:          Group;
  acronym?:        string;
  relevantAudits?: string[];
}

export enum Group {
  Budgets = "budgets",
  Hidden = "hidden",
  Metrics = "metrics",
}

export interface CategoryGroups {
  "load-opportunities":            A11YAria;
  "best-practices-ux":             BestPracticesBrowserCompat;
  "seo-crawl":                     A11YAria;
  "best-practices-browser-compat": BestPracticesBrowserCompat;
  "seo-content":                   A11YAria;
  "a11y-aria":                     A11YAria;
  diagnostics:                     A11YAria;
  "a11y-names-labels":             A11YAria;
  "best-practices-general":        BestPracticesBrowserCompat;
  "seo-mobile":                    A11YAria;
  metrics:                         BestPracticesBrowserCompat;
  "a11y-tables-lists":             A11YAria;
  "a11y-audio-video":              A11YAria;
  "a11y-language":                 A11YAria;
  "a11y-navigation":               A11YAria;
  budgets:                         A11YAria;
  "pwa-optimized":                 BestPracticesBrowserCompat;
  "pwa-installable":               BestPracticesBrowserCompat;
  "best-practices-trust-safety":   BestPracticesBrowserCompat;
  "a11y-best-practices":           A11YAria;
  "a11y-color-contrast":           A11YAria;
}

export interface A11YAria {
  title:       string;
  description: string;
}

export interface BestPracticesBrowserCompat {
  title: string;
}

export interface ConfigSettings {
  emulatedFormFactor: string;
  formFactor:         string;
  locale:             string;
  onlyCategories:     string[];
  channel:            string;
}

export interface Entity {
  name:            string;
  isFirstParty?:   boolean;
  isUnrecognized?: boolean;
  origins:         string[];
  homepage?:       string;
  category?:       string;
}

export interface Environment {
  networkUserAgent: string;
  hostUserAgent:    string;
  benchmarkIndex:   number;
}

export interface FullPageScreenshot {
  nodes:      { [key: string]: NodeValue };
  screenshot: Screenshot;
}

export interface Screenshot {
  width:  number;
  height: number;
  data:   string;
}

export interface I18N {
  rendererFormattedStrings: RendererFormattedStrings;
}

export interface RendererFormattedStrings {
  varianceDisclaimer:               string;
  opportunityResourceColumnLabel:   string;
  opportunitySavingsColumnLabel:    string;
  errorMissingAuditInfo:            string;
  errorLabel:                       string;
  warningHeader:                    string;
  passedAuditsGroupTitle:           string;
  notApplicableAuditsGroupTitle:    string;
  manualAuditsGroupTitle:           string;
  toplevelWarningsMessage:          string;
  crcLongestDurationLabel:          string;
  crcInitialNavigation:             string;
  lsPerformanceCategoryDescription: string;
  labDataTitle:                     string;
  warningAuditsGroupTitle:          string;
  snippetExpandButtonLabel:         string;
  snippetCollapseButtonLabel:       string;
  thirdPartyResourcesLabel:         string;
  runtimeDesktopEmulation:          string;
  runtimeMobileEmulation:           string;
  runtimeNoEmulation:               string;
  runtimeSettingsBenchmark:         string;
  runtimeSettingsCPUThrottling:     string;
  runtimeSettingsDevice:            string;
  runtimeSettingsNetworkThrottling: string;
  runtimeSettingsUANetwork:         string;
  runtimeUnknown:                   string;
  dropdownCopyJSON:                 string;
  dropdownDarkTheme:                string;
  dropdownPrintExpanded:            string;
  dropdownPrintSummary:             string;
  dropdownSaveGist:                 string;
  dropdownSaveHTML:                 string;
  dropdownSaveJSON:                 string;
  dropdownViewer:                   string;
  footerIssue:                      string;
  throttlingProvided:               string;
  calculatorLink:                   string;
  runtimeSettingsAxeVersion:        string;
  viewTreemapLabel:                 string;
  showRelevantAudits:               string;
}

export interface Timing {
  total: number;
}

export interface LoadingExperience {
  initial_url: string;
}
