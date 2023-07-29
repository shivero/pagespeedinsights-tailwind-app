import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from 'react'

export interface IFeatureScore {
  captchaResult: string
  kind: string
  id: string
  loadingExperience: LoadingExperience
  lighthouseResult: LighthouseResult
  analysisUTCTimestamp: string
}

export interface LoadingExperience {
  initial_url: string
}

export interface LighthouseResult {
  requestedUrl: string
  finalUrl: string
  mainDocumentUrl: string
  finalDisplayedUrl: string
  lighthouseVersion: string
  userAgent: string
  fetchTime: string
  environment: Environment
  runWarnings: any[]
  configSettings: ConfigSettings
  audits: Audits
  categories: Categories
  categoryGroups: CategoryGroups
  timing: Timing
  i18n: I18n
  entities: Entity[]
  fullPageScreenshot: FullPageScreenshot
}

export interface Environment {
  networkUserAgent: string
  hostUserAgent: string
  benchmarkIndex: number
}

export interface ConfigSettings {
  emulatedFormFactor: string
  formFactor: string
  locale: string
  onlyCategories: string[]
  channel: string
}
export interface DetailsRR {
  items?: ItemRR[]
  type?: string
  headings?: HeadingRR[]
  skipSumming?: string[]
  summary?: Summary
  sortedBy?: string[]
  overallSavingsMs?: number
  overallSavingsBytes?: number
  longestChain?: LongestChain
  signal?: string
  location?: Location
}
export interface ItemRR {
  mainThreadTime?: number
  entity?: string
  transferSize?: number
  blockingTime?: number
  subItems?: SubItemsRR
  // node?: Node
  // debugData?: DebugData
  url?: string
  cacheHitProbability?: number
  totalBytes?: number
  wastedBytes?: number
  cacheLifetimeMs?: number
  wastedMs?: number
  responseTime?: number
  totalCumulativeLayoutShift?: number
  cumulativeLayoutShiftMainFrame?: number
  duration?: number
  startTime?: number,
  // source?: Source
  rendererStartTime?: number
  networkRequestTime?: number
  networkEndTime?: number
  mimeType?: string
  experimentalFromMainFrame?: boolean
  finished?: boolean
  protocol?: string
  statusCode?: number
  priority?: string
  resourceSize?: number
  resourceType?: string
  sessionTargetType?: string
  isLinkPreload?: boolean
  speedIndex?: number
  observedLargestContentfulPaintTs?: number
  observedLargestContentfulPaintAllFramesTs?: number
  observedFirstContentfulPaintTs?: number
  cumulativeLayoutShift?: number
  observedFirstPaint?: number
  observedTotalCumulativeLayoutShift?: number
  observedDomContentLoadedTs?: number
  totalBlockingTime?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedSpeedIndex?: number
  observedFirstPaintTs?: number
  interactive?: number
  observedFirstContentfulPaintAllFrames?: number
  observedTraceEndTs?: number
  observedTraceEnd?: number
  observedFirstMeaningfulPaintTs?: number
  firstContentfulPaint?: number
  observedCumulativeLayoutShift?: number
  maxPotentialFID?: number
  observedLoadTs?: number
  observedFirstVisualChangeTs?: number
  observedFirstContentfulPaintAllFramesTs?: number
  observedLargestContentfulPaintAllFrames?: number
  observedNavigationStart?: number
  observedLoad?: number
  observedLastVisualChange?: number
  firstMeaningfulPaint?: number
  observedFirstContentfulPaint?: number
  observedLastVisualChangeTs?: number
  observedFirstVisualChange?: number
  observedTimeOriginTs?: number
  observedLargestContentfulPaint?: number
  observedTimeOrigin?: number
  observedNavigationStartTs?: number
  observedFirstMeaningfulPaint?: number
  observedSpeedIndexTs?: number
  largestContentfulPaint?: number
  observedDomContentLoaded?: number
  lcpInvalidated?: boolean
  totalByteWeight?: number
  numScripts?: number
  numTasks?: number
  numStylesheets?: number
  maxServerLatency?: number | null
  mainDocumentTransferSize?: number
  rtt?: number
  numTasksOver50ms?: number
  numFonts?: number
  throughput?: number
  maxRtt?: number
  numRequests?: number
  totalTaskTime?: number
  numTasksOver100ms?: number
  numTasksOver25ms?: number
  numTasksOver500ms?: number
  numTasksOver10ms?: number
  group?: string
  groupLabel?: string
  label?: string
  requestCount?: number
  statistic?: string
  animation?: string
  failureReason?: string
  wastedWebpBytes?: number
  isCrossOrigin?: boolean
  fromProtocol?: boolean
}
export interface SubItemsRR {
  items?: ItemRR[]
  type?: string
}
export interface HeadingRR {
  label?: string
  valueType?: string
  key: string
  displayUnit?: string
  granularity?: number,
  subItemsHeading?: HeadingRR
}
export interface AuditsRR {
  id: string
  title: string
  description: string
  score?: number | null
  scoreDisplayMode: string
  details: DetailsRR
  displayValue?: string
  numericValue?: number
  numericUnit?: string
  warnings?: string[]
}
export interface Audits2 {

  "speed-index": AuditsRR
  "uses-rel-preconnect": AuditsRR
  "font-display": AuditsRR
  "lcp-lazy-loaded": AuditsRR
  "uses-long-cache-ttl": AuditsRR
  "total-blocking-time": AuditsRR
  "render-blocking-resources": AuditsRR
  "largest-contentful-paint": AuditsRR
  "unminified-css": AuditsRR
  "server-response-time": AuditsRR
  "legacy-javascript": AuditsRR
  "largest-contentful-paint-element": AuditsRR
  "main-thread-tasks": AuditsRR
  "long-tasks": AuditsRR
  "no-document-write": AuditsRR
  "unsized-images": AuditsRR
  "uses-text-compression": AuditsRR
  "screenshot-thumbnails": AuditsRR
  "duplicated-javascript": AuditsRR
  "bootup-time": AuditsRR
  "redirects": AuditsRR
  "script-treemap-data": AuditsRR
  "final-screenshot": AuditsRR
  "cumulative-layout-shift": AuditsRR
  "layout-shift-elements": AuditsRR
  "viewport": AuditsRR
  "max-potential-fid": AuditsRR
  "network-requests": AuditsRR
  "interactive": AuditsRR
  "first-contentful-paint": AuditsRR
  "efficient-animated-content": AuditsRR
  "metrics": AuditsRR
  "prioritize-lcp-image": AuditsRR
  "uses-rel-preload": AuditsRR
  "first-meaningful-paint": AuditsRR
  "uses-optimized-images": AuditsRR
  "network-rtt": AuditsRR
  "unminified-javascript": AuditsRR
  "third-party-facades": AuditsRR
  "diagnostics": AuditsRR
  "network-server-latency": AuditsRR
  "user-timings": AuditsRR
  "timing-budget": AuditsRR
  "mainthread-work-breakdown": AuditsRR
  "unused-css-rules": AuditsRR
  "uses-passive-event-listeners": AuditsRR
  "resource-summary": AuditsRR
  "offscreen-images": AuditsRR
  "critical-request-chains": AuditsRR
  "third-party-summary": AuditsRR
  "performance-budget": AuditsRR
  "dom-size": AuditsRR
  "total-byte-weight": AuditsRR
  "unused-javascript": AuditsRR
  "non-composited-animations": AuditsRR
  "uses-responsive-images": AuditsRR
  "modern-image-formats": AuditsRR

}
export interface Audits {
  "speed-index": SpeedIndex
  "uses-rel-preconnect": UsesRelPreconnect
  "font-display": FontDisplay
  "lcp-lazy-loaded": LcpLazyLoaded
  "uses-long-cache-ttl": UsesLongCacheTtl
  "total-blocking-time": TotalBlockingTime
  "render-blocking-resources": RenderBlockingResources
  "largest-contentful-paint": LargestContentfulPaint
  "unminified-css": UnminifiedCss
  "server-response-time": ServerResponseTime
  "legacy-javascript": LegacyJavascript
  "largest-contentful-paint-element": LargestContentfulPaintElement
  "main-thread-tasks": MainThreadTasks
  "long-tasks": LongTasks
  "no-document-write": NoDocumentWrite
  "unsized-images": UnsizedImages
  "uses-text-compression": UsesTextCompression
  "screenshot-thumbnails": ScreenshotThumbnails
  "duplicated-javascript": DuplicatedJavascript
  "bootup-time": BootupTime
  redirects: Redirects
  "script-treemap-data": ScriptTreemapData
  "final-screenshot": FinalScreenshot
  "cumulative-layout-shift": CumulativeLayoutShift
  "layout-shift-elements": LayoutShiftElements
  viewport: Viewport
  "max-potential-fid": MaxPotentialFid
  "network-requests": NetworkRequests
  interactive: Interactive
  "first-contentful-paint": FirstContentfulPaint
  "efficient-animated-content": EfficientAnimatedContent
  metrics: Metrics
  "prioritize-lcp-image": PrioritizeLcpImage
  "uses-rel-preload": UsesRelPreload
  "first-meaningful-paint": FirstMeaningfulPaint
  "uses-optimized-images": UsesOptimizedImages
  "network-rtt": NetworkRtt
  "unminified-javascript": UnminifiedJavascript
  "third-party-facades": ThirdPartyFacades
  diagnostics: Diagnostics
  "network-server-latency": NetworkServerLatency
  "user-timings": UserTimings
  "timing-budget": TimingBudget
  "mainthread-work-breakdown": MainthreadWorkBreakdown
  "unused-css-rules": UnusedCssRules
  "uses-passive-event-listeners": UsesPassiveEventListeners
  "resource-summary": ResourceSummary
  "offscreen-images": OffscreenImages
  "critical-request-chains": CriticalRequestChains
  "third-party-summary": ThirdPartySummary
  "performance-budget": PerformanceBudget
  "dom-size": DomSize
  "total-byte-weight": TotalByteWeight
  "unused-javascript": UnusedJavascript
  "non-composited-animations": NonCompositedAnimations
  "uses-responsive-images": UsesResponsiveImages
  "modern-image-formats": ModernImageFormats
}

export interface SpeedIndex {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UsesRelPreconnect {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  warnings: string[]
}

export interface FontDisplay {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details
  warnings: any[]
}

export interface Details {
  type: string
  items: any[]
  headings: any[]
}

export interface LcpLazyLoaded {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details2
}

export interface Details2 {
  items: Item[]
  type: string
  headings: Heading[]
}

export interface Item {
  node: Node
}

export interface Node {
  path: string
  nodeLabel: string
  type: string
  boundingRect: BoundingRect
  snippet: string
  selector: string
  lhId: string
}

export interface BoundingRect {
  width: number
  left: number
  bottom: number
  top: number
  right: number
  height: number
}

export interface Heading {
  label: string
  valueType: string
  key: string
}

export interface UsesLongCacheTtl {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details3
  numericValue: number
  numericUnit: string
}

export interface Details3 {
  headings: Heading2[]
  skipSumming: string[]
  summary: Summary
  sortedBy: string[]
  items: Item2[]
  type: string
}

export interface Heading2 {
  label: string
  valueType: string
  key: string
  displayUnit?: string
  granularity?: number
}

export interface Summary {
  wastedBytes?: number
  wastedMs?: number
}

export interface Item2 {
  url: string
  cacheHitProbability: number
  totalBytes: number
  wastedBytes: number
  cacheLifetimeMs: number
  debugData?: DebugData
}

export interface DebugData {
  type: string
  "max-age": number
  public?: boolean
}

export interface TotalBlockingTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface RenderBlockingResources {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details4
  numericValue: number
  numericUnit: string
}

export interface Details4 {
  headings: Heading3[]
  items: Item3[]
  overallSavingsMs: number
  type: string
}


export interface Heading3 {
  label: string
  valueType: string
  key: string
}

export interface Item3 {
  url: string
  wastedMs: number
  totalBytes: number
}

export interface LargestContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UnminifiedCss {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details5
  numericValue: number
  numericUnit: string
}

export interface Details5 {
  overallSavingsBytes: number
  items: any[]
  overallSavingsMs: number
  headings: any[]
  sortedBy: string[]
  type: string
}

export interface ServerResponseTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details6
  numericValue: number
  numericUnit: string
}

export interface Details6 {
  headings: Heading4[]
  items: Item4[]
  overallSavingsMs: number
  type: string
}

export interface Heading4 {
  label: string
  valueType: string
  key: string
}

export interface Item4 {
  responseTime: number
  url: string
}

export interface LegacyJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details7
  numericValue: number
  numericUnit: string
}

export interface Details7 {
  items: Item5[]
  overallSavingsBytes: number
  headings: Heading5[]
  sortedBy: string[]
  type: string
  overallSavingsMs: number
}

export interface Item5 {
  totalBytes: number
  url: string
  subItems: SubItems
  wastedBytes: number
}

export interface SubItems {
  items: Item6[]
  type: string
}

export interface Item6 {
  signal: string
  location: Location
}

export interface Location {
  url: string
  line: number
  urlProvider: string
  column: number
  type: string
}

export interface Heading5 {
  valueType: string
  subItemsHeading?: SubItemsHeading
  label?: string
  key?: string
}

export interface SubItemsHeading {
  valueType?: string
  key: string
}

export interface LargestContentfulPaintElement {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details8
}

export interface Details8 {
  items: Item7[]
  type: string
}

export interface Item7 {
  headings: Heading6[]
  items: Item8[]
  type: string
}

export interface Heading6 {
  label: string
  key: string
  valueType: string
}

export interface Item8 {
  node: Node2
}

export interface Node2 {
  snippet: string
  path: string
  type: string
  selector: string
  boundingRect: BoundingRect2
  nodeLabel: string
  lhId: string
}

export interface BoundingRect2 {
  width: number
  left: number
  right: number
  height: number
  top: number
  bottom: number
}

export interface MainThreadTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details9
}

export interface Details9 {
  headings: Heading7[]
  items: Item9[]
  type: string
}

export interface Heading7 {
  granularity: number
  key: string
  valueType: string
  label: string
}

export interface Item9 {
  duration: number
  startTime: number
}

export interface LongTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details10
}

export interface Details10 {
  type: string
  skipSumming: string[]
  headings: Heading8[]
  items: Item10[]
  sortedBy: string[]
}

export interface Heading8 {
  valueType: string
  label: string
  key: string
  granularity?: number
}

export interface Item10 {
  duration: number
  startTime: number
  url: string
}

export interface NoDocumentWrite {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details11
}

export interface Details11 {
  headings: Heading9[]
  type: string
  items: Item11[]
}

export interface Heading9 {
  key: string
  valueType: string
  label: string
}

export interface Item11 {
  source: Source
}

export interface Source {
  type?: string
  urlProvider?: string
  line?: number
  column?: number
  url?: string
}

export interface UnsizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details12
}

export interface Details12 {
  headings: Heading10[]
  items: Item12[]
  type: string
}

export interface Heading10 {
  valueType: string
  key: string
  label?: string
}

export interface Item12 {
  node: Node3
  url: string
}

export interface Node3 {
  snippet: string
  lhId: string
  nodeLabel: string
  type: string
  path: string
  selector: string
  boundingRect: BoundingRect3
}

export interface BoundingRect3 {
  top: number
  height: number
  width: number
  left: number
  bottom: number
  right: number
}

export interface UsesTextCompression {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details13
  numericValue: number
  numericUnit: string
}

export interface Details13 {
  headings: any[]
  sortedBy: string[]
  items: any[]
  type: string
  overallSavingsBytes: number
  overallSavingsMs: number
}

export interface ScreenshotThumbnails {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details14
}

export interface Details14 {
  scale: number
  type: string
  items: Item13[]
}

export interface Item13 {
  data: string
  timing: number
  timestamp: number
}

export interface DuplicatedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details15
  numericValue: number
  numericUnit: string
}

export interface Details15 {
  items: any[]
  sortedBy: string[]
  headings: any[]
  overallSavingsMs: number
  overallSavingsBytes: number
  type: string
}

export interface BootupTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details16
  numericValue: number
  numericUnit: string
}

export interface Details16 {
  sortedBy: string[]
  headings: Heading11[]
  summary: Summary2
  items: Item14[]
  type: string
}

export interface Heading11 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface Summary2 {
  wastedMs: number
}

export interface Item14 {
  url: string
  total: number
  scripting: number
  scriptParseCompile: number
}

export interface Redirects {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details17
  numericValue: number
  numericUnit: string
}

export interface Details17 {
  items: any[]
  headings: any[]
  overallSavingsMs: number
  type: string
}

export interface ScriptTreemapData {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details18
}

export interface Details18 {
  nodes: Node4[]
  type: string
}

export interface Node4 {
  unusedBytes?: number
  name: string
  resourceBytes: number
  children?: Children[]
}

export interface Children {
  resourceBytes: number
  name: string
  unusedBytes?: number
}

export interface FinalScreenshot {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details19
}

export interface Details19 {
  type: string
  data: string
  timing: number
  timestamp: number
}

export interface CumulativeLayoutShift {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details20
  numericValue: number
  numericUnit: string
}

export interface Details20 {
  type: string
  items: Item15[]
}

export interface Item15 {
  totalCumulativeLayoutShift: number
  cumulativeLayoutShiftMainFrame: number
}

export interface LayoutShiftElements {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details21
}

export interface Details21 {
  type: string
  headings: Heading12[]
  items: Item16[]
}

export interface Heading12 {
  valueType: string
  label: string
  key: string
  granularity?: number
}

export interface Item16 {
  score: number
  node: Node5
}

export interface Node5 {
  nodeLabel: string
  snippet: string
  selector: string
  path: string
  boundingRect: BoundingRect4
  lhId: string
  type: string
}

export interface BoundingRect4 {
  left: number
  height: number
  top: number
  bottom: number
  width: number
  right: number
}

export interface Viewport {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  warnings: any[]
}

export interface MaxPotentialFid {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface NetworkRequests {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details22
}

export interface Details22 {
  type: string
  items: Item17[]
  debugData: DebugData2
  headings: Heading13[]
}

export interface Item17 {
  rendererStartTime: number
  networkRequestTime: number
  networkEndTime: number
  mimeType: string
  experimentalFromMainFrame?: boolean
  finished: boolean
  protocol: string
  statusCode: number
  priority: string
  resourceSize: number
  transferSize: number
  resourceType?: string
  url: string
  sessionTargetType: string
  isLinkPreload?: boolean
}

export interface DebugData2 {
  networkStartTimeTs: number
  type: string
}

export interface Heading13 {
  valueType: string
  key: string
  label: string
  granularity?: number
  displayUnit?: string
}

export interface Interactive {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface FirstContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface EfficientAnimatedContent {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details23
  numericValue: number
  numericUnit: string
}

export interface Details23 {
  overallSavingsBytes: number
  overallSavingsMs: number
  headings: any[]
  type: string
  items: any[]
  sortedBy: string[]
}

export interface Metrics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details24
  numericValue: number
  numericUnit: string
}

export interface Details24 {
  type: string
  items: Item18[]
}

export interface Item18 {
  speedIndex?: number
  observedLargestContentfulPaintTs?: number
  observedLargestContentfulPaintAllFramesTs?: number
  observedFirstContentfulPaintTs?: number
  totalCumulativeLayoutShift?: number
  cumulativeLayoutShift?: number
  observedFirstPaint?: number
  observedTotalCumulativeLayoutShift?: number
  observedDomContentLoadedTs?: number
  totalBlockingTime?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedSpeedIndex?: number
  observedFirstPaintTs?: number
  interactive?: number
  observedFirstContentfulPaintAllFrames?: number
  observedTraceEndTs?: number
  observedTraceEnd?: number
  observedFirstMeaningfulPaintTs?: number
  firstContentfulPaint?: number
  observedCumulativeLayoutShift?: number
  cumulativeLayoutShiftMainFrame?: number
  maxPotentialFID?: number
  observedLoadTs?: number
  observedFirstVisualChangeTs?: number
  observedFirstContentfulPaintAllFramesTs?: number
  observedLargestContentfulPaintAllFrames?: number
  observedNavigationStart?: number
  observedLoad?: number
  observedLastVisualChange?: number
  firstMeaningfulPaint?: number
  observedFirstContentfulPaint?: number
  observedLastVisualChangeTs?: number
  observedFirstVisualChange?: number
  observedTimeOriginTs?: number
  observedLargestContentfulPaint?: number
  observedTimeOrigin?: number
  observedNavigationStartTs?: number
  observedFirstMeaningfulPaint?: number
  observedSpeedIndexTs?: number
  largestContentfulPaint?: number
  observedDomContentLoaded?: number
  lcpInvalidated?: boolean
}

export interface PrioritizeLcpImage {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details25
  numericValue: number
  numericUnit: string
}

export interface Details25 {
  items: any[]
  type: string
  overallSavingsMs: number
  debugData: DebugData3
  headings: any[]
  sortedBy: string[]
}

export interface DebugData3 {
  initiatorPath: InitiatorPath[]
  pathLength: number
  type: string
}

export interface InitiatorPath {
  initiatorType: string
  url: string
}

export interface UsesRelPreload {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details26
}

export interface Details26 {
  items: any[]
  overallSavingsMs: number
  type: string
  headings: any[]
}

export interface FirstMeaningfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UsesOptimizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details27
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details27 {
  headings: any[]
  items: any[]
  type: string
  overallSavingsMs: number
  overallSavingsBytes: number
  sortedBy: string[]
}

export interface NetworkRtt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details28
  numericValue: number
  numericUnit: string
}

export interface Details28 {
  headings: any[]
  type: string
  items: any[]
}

export interface UnminifiedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details29
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details29 {
  sortedBy: string[]
  overallSavingsBytes: number
  type: string
  overallSavingsMs: number
  headings: any[]
  items: any[]
}

export interface ThirdPartyFacades {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Diagnostics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details30
}

export interface Details30 {
  type: string
  items: Item19[]
}

export interface Item19 {
  totalByteWeight: number
  numScripts: number
  numTasks: number
  numStylesheets: number
  maxServerLatency: number | null
  mainDocumentTransferSize: number
  rtt: number
  numTasksOver50ms: number
  numFonts: number
  throughput: number
  maxRtt: number
  numRequests: number
  totalTaskTime: number
  numTasksOver100ms: number
  numTasksOver25ms: number
  numTasksOver500ms: number
  numTasksOver10ms: number
}

export interface NetworkServerLatency {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details31
  numericValue: number
  numericUnit: string
}

export interface Details31 {
  items: any[]
  type: string
  headings: any[]
}

export interface UserTimings {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details32
}

export interface Details32 {
  type: string
  headings: any[]
  items: any[]
}

export interface TimingBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface MainthreadWorkBreakdown {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details33
  numericValue: number
  numericUnit: string
}

export interface Details33 {
  type: string
  items: Item20[]
  headings: Heading14[]
  sortedBy: string[]
}

export interface Item20 {
  group: string
  duration: number
  groupLabel: string
}

export interface Heading14 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface UnusedCssRules {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details34
  numericValue: number
  numericUnit: string
}

export interface Details34 {
  sortedBy: string[]
  headings: Heading15[]
  type: string
  items: Item21[]
  overallSavingsBytes: number
  overallSavingsMs: number
}

export interface Heading15 {
  valueType: string
  key: string
  label: string
}

export interface Item21 {
  wastedPercent: number
  wastedBytes: number
  totalBytes: number
  url: string
}

export interface UsesPassiveEventListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details35
}

export interface Details35 {
  type: string
  items: any[]
  headings: any[]
}

export interface ResourceSummary {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details36
}

export interface Details36 {
  type: string
  items: Item22[]
  headings: Heading16[]
}

export interface Item22 {
  transferSize: number
  resourceType: string
  label: string
  requestCount: number
}

export interface Heading16 {
  label: string
  key: string
  valueType: string
}

export interface OffscreenImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details37
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details37 {
  overallSavingsBytes: number
  items: Item23[]
  overallSavingsMs: number
  sortedBy: string[]
  type: string
  headings: Heading17[]
}

export interface Item23 {
  wastedBytes: number
  url: string
  totalBytes: number
  node: Node6
  wastedPercent: number
  requestStartTime: number
}

export interface Node6 {
  boundingRect: BoundingRect5
  type: string
  selector: string
  path: string
  lhId: string
  nodeLabel: string
  snippet: string
}

export interface BoundingRect5 {
  height: number
  bottom: number
  right: number
  top: number
  left: number
  width: number
}

export interface Heading17 {
  key: string
  valueType: string
  label?: string
}

export interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details38
}

export interface Details38 {
  type: string
  longestChain: LongestChain
  chains: Chains
}

export interface LongestChain {
  transferSize: number
  duration: number
  length: number
}

export interface Chains {
  "8DE8482D227813ECE35E9E174D10DD8B": N8De8482D227813Ece35E9E174D10Dd8B
}

export interface N8De8482D227813Ece35E9E174D10Dd8B {
  children: Children2
  request: Request5
}

export interface Children2 {
  "41.39": N4139
  "41.3": N413
  "41.77": N4177
  "41.2": N412
}

export interface N4139 {
  request: Request
}

export interface Request {
  startTime: number
  responseReceivedTime: number
  transferSize: number
  url: string
  endTime: number
}

export interface N413 {
  request: Request2
}

export interface Request2 {
  url: string
  responseReceivedTime: number
  endTime: number
  transferSize: number
  startTime: number
}

export interface N4177 {
  request: Request3
}

export interface Request3 {
  responseReceivedTime: number
  endTime: number
  url: string
  startTime: number
  transferSize: number
}

export interface N412 {
  request: Request4
}

export interface Request4 {
  endTime: number
  responseReceivedTime: number
  url: string
  transferSize: number
  startTime: number
}

export interface Request5 {
  transferSize: number
  url: string
  responseReceivedTime: number
  startTime: number
  endTime: number
}

export interface ThirdPartySummary {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details39
}

export interface Details39 {
  items: Item24[]
  type: string
  summary: Summary3
  headings: Heading18[]
  isEntityGrouped: boolean
}

export interface Item24 {
  mainThreadTime: number
  entity: string
  transferSize: number
  blockingTime: number
  subItems: SubItems2
}

export interface SubItems2 {
  type: string
  items: Item25[]
}

export interface Item25 {
  transferSize: number
  blockingTime: number
  url: string
  mainThreadTime?: number
}

export interface Summary3 {
  wastedMs: number
  wastedBytes: number
}

export interface Heading18 {
  label: string
  subItemsHeading: SubItemsHeading2
  key: string
  valueType: string
  granularity?: number
}

export interface SubItemsHeading2 {
  key: string
  valueType?: string
}

export interface PerformanceBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface DomSize {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details40
  numericValue: number
  numericUnit: string
}

export interface Details40 {
  type: string
  headings: Heading19[]
  items: Item26[]
}

export interface Heading19 {
  label: string
  key: string
  valueType: string
}

export interface Item26 {
  value: Value
  statistic: string
  node?: Node7
}

export interface Value {
  type: string
  value: number
  granularity: number
}

export interface Node7 {
  selector: string
  boundingRect: BoundingRect6
  snippet: string
  lhId: string
  type: string
  nodeLabel: string
  path: string
}

export interface BoundingRect6 {
  bottom: number
  left: number
  top: number
  height: number
  width: number
  right: number
}

export interface TotalByteWeight {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details41
  numericValue: number
  numericUnit: string
}

export interface Details41 {
  items: Item27[]
  headings: Heading20[]
  sortedBy: string[]
  type: string
}

export interface Item27 {
  totalBytes: number
  url: string
}

export interface Heading20 {
  valueType: string
  label: string
  key: string
}

export interface UnusedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details42
  numericValue: number
  numericUnit: string
}

export interface Details42 {
  sortedBy: string[]
  type: string
  items: Item28[]
  overallSavingsMs: number
  overallSavingsBytes: number
  headings: Heading21[]
}

export interface Item28 {
  totalBytes: number
  wastedPercent: number
  wastedBytes: number
  url: string
}

export interface Heading21 {
  key: string
  valueType: string
  label: string
  subItemsHeading: SubItemsHeading3
}

export interface SubItemsHeading3 {
  valueType?: string
  key: string
}

export interface NonCompositedAnimations {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details43
}

export interface Details43 {
  headings: Heading22[]
  type: string
  items: Item29[]
}

export interface Heading22 {
  label: string
  valueType: string
  key?: string
  subItemsHeading: SubItemsHeading4
}

export interface SubItemsHeading4 {
  key: string
  valueType: string
}

export interface Item29 {
  subItems: SubItems3
  node: Node8
}

export interface SubItems3 {
  type: string
  items: Item30[]
}

export interface Item30 {
  animation: string
  failureReason: string
}

export interface Node8 {
  path: string
  boundingRect: BoundingRect7
  selector: string
  nodeLabel: string
  type: string
  snippet: string
  lhId: string
}

export interface BoundingRect7 {
  right: number
  width: number
  left: number
  height: number
  bottom: number
  top: number
}

export interface UsesResponsiveImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details44
  numericValue: number
  numericUnit: string
}

export interface Details44 {
  type: string
  headings: Heading23[]
  overallSavingsBytes: number
  overallSavingsMs: number
  sortedBy: string[]
  items: Item31[]
}

export interface Heading23 {
  valueType: string
  key: string
  label?: string
}

export interface Item31 {
  wastedPercent: number
  node: Node9
  wastedBytes: number
  url: string
  totalBytes: number
}

export interface Node9 {
  selector: string
  lhId: string
  path: string
  snippet: string
  nodeLabel: string
  boundingRect: BoundingRect8
  type: string
}

export interface BoundingRect8 {
  left: number
  top: number
  width: number
  right: number
  height: number
  bottom: number
}

export interface ModernImageFormats {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details45
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details45 {
  items: Item32[]
  overallSavingsMs: number
  overallSavingsBytes: number
  headings: Heading24[]
  type: string
  sortedBy: string[]
}

export interface Item32 {
  url: string
  totalBytes: number
  wastedBytes: number
  wastedWebpBytes: number
  isCrossOrigin: boolean
  fromProtocol: boolean
}

export interface Heading24 {
  key: string
  valueType: string
  label?: string
}

export interface Categories {
  performance: Performance
}

export interface Performance {
  id: string
  title: string
  score: number
  auditRefs: AuditRef[]
}

export interface AuditRef {
  id: string
  weight: number
  group?: string
  acronym?: string
  relevantAudits?: string[]
}

export interface CategoryGroups {
  "load-opportunities": LoadOpportunities
  "best-practices-ux": BestPracticesUx
  "seo-crawl": SeoCrawl
  "best-practices-browser-compat": BestPracticesBrowserCompat
  "seo-content": SeoContent
  "a11y-aria": A11yAria
  diagnostics: Diagnostics2
  "a11y-names-labels": A11yNamesLabels
  "best-practices-general": BestPracticesGeneral
  "seo-mobile": SeoMobile
  metrics: Metrics2
  "a11y-tables-lists": A11yTablesLists
  "a11y-audio-video": A11yAudioVideo
  "a11y-language": A11yLanguage
  "a11y-navigation": A11yNavigation
  budgets: Budgets
  "pwa-optimized": PwaOptimized
  "pwa-installable": PwaInstallable
  "best-practices-trust-safety": BestPracticesTrustSafety
  "a11y-best-practices": A11yBestPractices
  "a11y-color-contrast": A11yColorContrast
}

export interface LoadOpportunities {
  title: string
  description: string
}

export interface BestPracticesUx {
  title: string
}

export interface SeoCrawl {
  title: string
  description: string
}

export interface BestPracticesBrowserCompat {
  title: string
}

export interface SeoContent {
  title: string
  description: string
}

export interface A11yAria {
  title: string
  description: string
}

export interface Diagnostics2 {
  title: string
  description: string
}

export interface A11yNamesLabels {
  title: string
  description: string
}

export interface BestPracticesGeneral {
  title: string
}

export interface SeoMobile {
  title: string
  description: string
}

export interface Metrics2 {
  title: string
}

export interface A11yTablesLists {
  title: string
  description: string
}

export interface A11yAudioVideo {
  title: string
  description: string
}

export interface A11yLanguage {
  title: string
  description: string
}

export interface A11yNavigation {
  title: string
  description: string
}

export interface Budgets {
  title: string
  description: string
}

export interface PwaOptimized {
  title: string
}

export interface PwaInstallable {
  title: string
}

export interface BestPracticesTrustSafety {
  title: string
}

export interface A11yBestPractices {
  title: string
  description: string
}

export interface A11yColorContrast {
  title: string
  description: string
}

export interface Timing {
  total: number
}

export interface I18n {
  rendererFormattedStrings: RendererFormattedStrings
}

export interface RendererFormattedStrings {
  varianceDisclaimer: string
  opportunityResourceColumnLabel: string
  opportunitySavingsColumnLabel: string
  errorMissingAuditInfo: string
  errorLabel: string
  warningHeader: string
  passedAuditsGroupTitle: string
  notApplicableAuditsGroupTitle: string
  manualAuditsGroupTitle: string
  toplevelWarningsMessage: string
  crcLongestDurationLabel: string
  crcInitialNavigation: string
  lsPerformanceCategoryDescription: string
  labDataTitle: string
  warningAuditsGroupTitle: string
  snippetExpandButtonLabel: string
  snippetCollapseButtonLabel: string
  thirdPartyResourcesLabel: string
  runtimeDesktopEmulation: string
  runtimeMobileEmulation: string
  runtimeNoEmulation: string
  runtimeSettingsBenchmark: string
  runtimeSettingsCPUThrottling: string
  runtimeSettingsDevice: string
  runtimeSettingsNetworkThrottling: string
  runtimeSettingsUANetwork: string
  runtimeUnknown: string
  dropdownCopyJSON: string
  dropdownDarkTheme: string
  dropdownPrintExpanded: string
  dropdownPrintSummary: string
  dropdownSaveGist: string
  dropdownSaveHTML: string
  dropdownSaveJSON: string
  dropdownViewer: string
  footerIssue: string
  throttlingProvided: string
  calculatorLink: string
  runtimeSettingsAxeVersion: string
  viewTreemapLabel: string
  showRelevantAudits: string
}

export interface Entity {
  name: string
  isFirstParty?: boolean
  isUnrecognized?: boolean
  origins: string[]
  homepage?: string
  category?: string
}

export interface FullPageScreenshot {
  nodes: Nodes
  screenshot: Screenshot
}

export interface Nodes {
  "page-7-SPAN": Page7Span
  "1-214-META": N1214Meta
  "1-102-IMG": N1102Img
  "1-51-IMG": N151Img
  "1-87-IMG": N187Img
  "1-184-LINK": N1184Link
  "page-1-DIV": Page1Div
  "1-77-IMG": N177Img
  "page-22-IMG": Page22Img
  "1-170-SPAN": N1170Span
  "1-200-META": N1200Meta
  "1-40-IMG": N140Img
  "1-172-LINK": N1172Link
  "1-143-SPAN": N1143Span
  "1-179-LINK": N1179Link
  "1-46-IMG": N146Img
  "1-88-IMG": N188Img
  "1-126-SPAN": N1126Span
  "1-28-IMG": N128Img
  "1-114-SPAN": N1114Span
  "1-165-SPAN": N1165Span
  "1-205-META": N1205Meta
  "1-191-LINK": N1191Link
  "1-220-META": N1220Meta
  "1-23-IMG": N123Img
  "1-202-META": N1202Meta
  "1-86-IMG": N186Img
  "1-21-IMG": N121Img
  "1-25-IMG": N125Img
  "1-56-IMG": N156Img
  "1-124-SPAN": N1124Span
  "1-133-SPAN": N1133Span
  "1-108-SPAN": N1108Span
  "1-159-SPAN": N1159Span
  "1-176-LINK": N1176Link
  "1-119-SPAN": N1119Span
  "1-30-IMG": N130Img
  "1-58-IMG": N158Img
  "1-188-LINK": N1188Link
  "1-168-SPAN": N1168Span
  "1-166-SPAN": N1166Span
  "1-194-LINK": N1194Link
  "1-94-IMG": N194Img
  "1-155-DIV": N1155Div
  "1-186-LINK": N1186Link
  "page-20-IMG": Page20Img
  "1-120-SPAN": N1120Span
  "1-52-IMG": N152Img
  "1-78-IMG": N178Img
  "1-79-IMG": N179Img
  "1-177-LINK": N1177Link
  "1-221-META": N1221Meta
  "1-54-IMG": N154Img
  "1-148-SPAN": N1148Span
  "1-144-SPAN": N1144Span
  "1-197-LINK": N1197Link
  "1-150-SPAN": N1150Span
  "1-8-IMG": N18Img
  "page-4-DIV": Page4Div
  "1-201-META": N1201Meta
  "1-199-META": N1199Meta
  "1-107-SPAN": N1107Span
  "1-57-IMG": N157Img
  "1-38-IMG": N138Img
  "1-97-IMG": N197Img
  "page-9-SPAN": Page9Span
  "1-139-SPAN": N1139Span
  "1-62-IMG": N162Img
  "1-167-SPAN": N1167Span
  "1-226-META": N1226Meta
  "1-12-IMG": N112Img
  "1-34-IMG": N134Img
  "1-203-META": N1203Meta
  "1-187-LINK": N1187Link
  "1-63-IMG": N163Img
  "1-127-SPAN": N1127Span
  "page-8-SPAN": Page8Span
  "1-152-SPAN": N1152Span
  "1-60-IMG": N160Img
  "1-101-IMG": N1101Img
  "1-106-SPAN": N1106Span
  "1-111-SPAN": N1111Span
  "1-103-DIV": N1103Div
  "1-207-META": N1207Meta
  "1-160-SPAN": N1160Span
  "page-17-IMG": Page17Img
  "1-208-META": N1208Meta
  "1-142-SPAN": N1142Span
  "1-31-IMG": N131Img
  "1-91-IMG": N191Img
  "1-44-IMG": N144Img
  "1-85-IMG": N185Img
  "1-49-IMG": N149Img
  "1-9-IMG": N19Img
  "1-32-IMG": N132Img
  "1-112-SPAN": N1112Span
  "1-99-IMG": N199Img
  "1-71-IMG": N171Img
  "1-13-IMG": N113Img
  "1-175-LINK": N1175Link
  "1-80-IMG": N180Img
  "1-128-SPAN": N1128Span
  "1-122-SPAN": N1122Span
  "1-93-IMG": N193Img
  "1-7-IMG": N17Img
  "1-132-SPAN": N1132Span
  "1-149-SPAN": N1149Span
  "1-147-SPAN": N1147Span
  "1-134-SPAN": N1134Span
  "1-35-IMG": N135Img
  "1-189-LINK": N1189Link
  "1-162-SPAN": N1162Span
  "1-157-SPAN": N1157Span
  "1-228-META": N1228Meta
  "1-217-META": N1217Meta
  "1-198-META": N1198Meta
  "1-125-SPAN": N1125Span
  "page-6-DIV": Page6Div
  "1-5-IMG": N15Img
  "1-17-IMG": N117Img
  "1-43-IMG": N143Img
  "1-72-IMG": N172Img
  "page-16-IMG": Page16Img
  "1-84-IMG": N184Img
  "1-121-SPAN": N1121Span
  "1-82-IMG": N182Img
  "1-140-SPAN": N1140Span
  "1-41-IMG": N141Img
  "page-3-DIV": Page3Div
  "page-19-IMG": Page19Img
  "1-105-SPAN": N1105Span
  "page-13-IMG": Page13Img
  "page-15-IMG": Page15Img
  "1-116-SPAN": N1116Span
  "1-204-META": N1204Meta
  "1-130-SPAN": N1130Span
  "page-11-SPAN": Page11Span
  "1-75-IMG": N175Img
  "1-109-SPAN": N1109Span
  "1-182-LINK": N1182Link
  "1-227-META": N1227Meta
  "1-2-IMG": N12Img
  "1-215-META": N1215Meta
  "1-48-IMG": N148Img
  "1-180-LINK": N1180Link
  "1-89-IMG": N189Img
  "1-118-SPAN": N1118Span
  "1-59-IMG": N159Img
  "1-129-SPAN": N1129Span
  "1-6-IMG": N16Img
  "1-164-SPAN": N1164Span
  "1-190-LINK": N1190Link
  "page-0-IMG": Page0Img
  "1-20-IMG": N120Img
  "1-195-LINK": N1195Link
  "1-153-SPAN": N1153Span
  "1-95-IMG": N195Img
  "1-181-LINK": N1181Link
  "1-223-META": N1223Meta
  "1-163-SPAN": N1163Span
  "1-70-IMG": N170Img
  "1-225-META": N1225Meta
  "1-39-IMG": N139Img
  "1-146-SPAN": N1146Span
  "1-123-SPAN": N1123Span
  "1-10-IMG": N110Img
  "1-11-IMG": N111Img
  "page-10-SPAN": Page10Span
  "1-192-LINK": N1192Link
  "1-141-SPAN": N1141Span
  "1-196-LINK": N1196Link
  "1-55-IMG": N155Img
  "1-74-IMG": N174Img
  "1-138-SPAN": N1138Span
  "1-65-IMG": N165Img
  "1-76-IMG": N176Img
  "1-206-META": N1206Meta
  "1-224-META": N1224Meta
  "1-135-SPAN": N1135Span
  "page-5-DIV": Page5Div
  "1-151-SPAN": N1151Span
  "1-36-IMG": N136Img
  "1-37-IMG": N137Img
  "1-211-META": N1211Meta
  "1-68-IMG": N168Img
  "1-178-LINK": N1178Link
  "1-131-SPAN": N1131Span
  "1-173-LINK": N1173Link
  "1-213-META": N1213Meta
  "1-171-SPAN": N1171Span
  "1-110-SPAN": N1110Span
  "1-67-IMG": N167Img
  "1-113-SPAN": N1113Span
  "1-154-SPAN": N1154Span
  "1-219-META": N1219Meta
  "1-83-IMG": N183Img
  "1-100-IMG": N1100Img
  "page-23-DIV": Page23Div
  "1-15-IMG": N115Img
  "1-1-BODY": N11Body
  "1-185-LINK": N1185Link
  "1-216-META": N1216Meta
  "1-47-IMG": N147Img
  "1-42-IMG": N142Img
  "1-64-IMG": N164Img
  "1-24-IMG": N124Img
  "1-209-META": N1209Meta
  "1-169-DIV": N1169Div
  "1-22-IMG": N122Img
  "1-145-SPAN": N1145Span
  "1-81-IMG": N181Img
  "1-212-META": N1212Meta
  "1-0-BR": N10Br
  "1-3-IMG": N13Img
  "1-53-IMG": N153Img
  "1-136-SPAN": N1136Span
  "1-115-SPAN": N1115Span
  "1-218-META": N1218Meta
  "1-66-IMG": N166Img
  "1-210-META": N1210Meta
  "1-174-LINK": N1174Link
  "page-18-IMG": Page18Img
  "1-96-IMG": N196Img
  "1-18-IMG": N118Img
  "1-19-IMG": N119Img
  "1-4-IMG": N14Img
  "1-158-SPAN": N1158Span
  "page-21-IMG": Page21Img
  "1-16-IMG": N116Img
  "1-26-IMG": N126Img
  "1-92-IMG": N192Img
  "1-156-SPAN": N1156Span
  "1-29-IMG": N129Img
  "1-69-IMG": N169Img
  "1-14-IMG": N114Img
  "1-222-META": N1222Meta
  "1-98-IMG": N198Img
  "1-50-IMG": N150Img
  "1-73-IMG": N173Img
  "1-137-SPAN": N1137Span
  "1-33-IMG": N133Img
  "1-193-LINK": N1193Link
  "1-229-META": N1229Meta
  "page-2-DIV": Page2Div
  "1-117-SPAN": N1117Span
  "1-161-SPAN": N1161Span
  "1-45-IMG": N145Img
  "1-27-IMG": N127Img
  "1-104-DIV": N1104Div
  "page-12-IMG": Page12Img
  "1-61-IMG": N161Img
  "1-183-LINK": N1183Link
  "page-14-IMG": Page14Img
  "1-90-IMG": N190Img
}

export interface Page7Span {
  width: number
  height: number
  top: number
  right: number
  left: number
  bottom: number
}

export interface N1214Meta {
  height: number
  bottom: number
  left: number
  right: number
  width: number
  top: number
}

export interface N1102Img {
  bottom: number
  width: number
  left: number
  right: number
  height: number
  top: number
}

export interface N151Img {
  top: number
  width: number
  left: number
  height: number
  right: number
  bottom: number
}

export interface N187Img {
  right: number
  left: number
  width: number
  height: number
  top: number
  bottom: number
}

export interface N1184Link {
  right: number
  height: number
  top: number
  bottom: number
  width: number
  left: number
}

export interface Page1Div {
  height: number
  bottom: number
  width: number
  left: number
  right: number
  top: number
}

export interface N177Img {
  width: number
  left: number
  height: number
  top: number
  bottom: number
  right: number
}

export interface Page22Img {
  height: number
  bottom: number
  width: number
  right: number
  top: number
  left: number
}

export interface N1170Span {
  left: number
  bottom: number
  right: number
  top: number
  width: number
  height: number
}

export interface N1200Meta {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface N140Img {
  right: number
  width: number
  left: number
  bottom: number
  top: number
  height: number
}

export interface N1172Link {
  right: number
  width: number
  height: number
  top: number
  bottom: number
  left: number
}

export interface N1143Span {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export interface N1179Link {
  width: number
  height: number
  bottom: number
  top: number
  right: number
  left: number
}

export interface N146Img {
  width: number
  height: number
  right: number
  bottom: number
  left: number
  top: number
}

export interface N188Img {
  right: number
  bottom: number
  width: number
  top: number
  left: number
  height: number
}

export interface N1126Span {
  left: number
  bottom: number
  top: number
  width: number
  height: number
  right: number
}

export interface N128Img {
  width: number
  height: number
  left: number
  right: number
  bottom: number
  top: number
}

export interface N1114Span {
  height: number
  left: number
  right: number
  bottom: number
  width: number
  top: number
}

export interface N1165Span {
  height: number
  bottom: number
  left: number
  width: number
  top: number
  right: number
}

export interface N1205Meta {
  height: number
  left: number
  bottom: number
  right: number
  width: number
  top: number
}

export interface N1191Link {
  bottom: number
  right: number
  left: number
  height: number
  width: number
  top: number
}

export interface N1220Meta {
  right: number
  width: number
  left: number
  top: number
  height: number
  bottom: number
}

export interface N123Img {
  top: number
  bottom: number
  right: number
  height: number
  width: number
  left: number
}

export interface N1202Meta {
  width: number
  bottom: number
  top: number
  right: number
  left: number
  height: number
}

export interface N186Img {
  height: number
  bottom: number
  right: number
  width: number
  left: number
  top: number
}

export interface N121Img {
  left: number
  top: number
  height: number
  right: number
  width: number
  bottom: number
}

export interface N125Img {
  height: number
  top: number
  right: number
  bottom: number
  left: number
  width: number
}

export interface N156Img {
  width: number
  right: number
  top: number
  bottom: number
  left: number
  height: number
}

export interface N1124Span {
  right: number
  height: number
  width: number
  left: number
  top: number
  bottom: number
}

export interface N1133Span {
  left: number
  width: number
  height: number
  right: number
  bottom: number
  top: number
}

export interface N1108Span {
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface N1159Span {
  bottom: number
  top: number
  width: number
  left: number
  right: number
  height: number
}

export interface N1176Link {
  height: number
  bottom: number
  top: number
  right: number
  left: number
  width: number
}

export interface N1119Span {
  top: number
  height: number
  left: number
  right: number
  width: number
  bottom: number
}

export interface N130Img {
  width: number
  left: number
  height: number
  right: number
  bottom: number
  top: number
}

export interface N158Img {
  right: number
  width: number
  bottom: number
  left: number
  height: number
  top: number
}

export interface N1188Link {
  right: number
  left: number
  top: number
  bottom: number
  width: number
  height: number
}

export interface N1168Span {
  bottom: number
  width: number
  right: number
  top: number
  left: number
  height: number
}

export interface N1166Span {
  top: number
  right: number
  width: number
  left: number
  height: number
  bottom: number
}

export interface N1194Link {
  left: number
  width: number
  bottom: number
  right: number
  height: number
  top: number
}

export interface N194Img {
  right: number
  left: number
  width: number
  bottom: number
  height: number
  top: number
}

export interface N1155Div {
  top: number
  height: number
  bottom: number
  left: number
  width: number
  right: number
}

export interface N1186Link {
  bottom: number
  height: number
  top: number
  width: number
  left: number
  right: number
}

export interface Page20Img {
  bottom: number
  top: number
  width: number
  left: number
  right: number
  height: number
}

export interface N1120Span {
  right: number
  height: number
  bottom: number
  top: number
  width: number
  left: number
}

export interface N152Img {
  left: number
  bottom: number
  right: number
  top: number
  height: number
  width: number
}

export interface N178Img {
  bottom: number
  height: number
  top: number
  left: number
  width: number
  right: number
}

export interface N179Img {
  bottom: number
  width: number
  top: number
  height: number
  left: number
  right: number
}

export interface N1177Link {
  bottom: number
  right: number
  top: number
  height: number
  left: number
  width: number
}

export interface N1221Meta {
  width: number
  bottom: number
  left: number
  right: number
  top: number
  height: number
}

export interface N154Img {
  top: number
  width: number
  right: number
  bottom: number
  left: number
  height: number
}

export interface N1148Span {
  left: number
  right: number
  bottom: number
  width: number
  top: number
  height: number
}

export interface N1144Span {
  bottom: number
  right: number
  height: number
  width: number
  top: number
  left: number
}

export interface N1197Link {
  bottom: number
  top: number
  right: number
  left: number
  width: number
  height: number
}

export interface N1150Span {
  height: number
  right: number
  width: number
  left: number
  top: number
  bottom: number
}

export interface N18Img {
  bottom: number
  height: number
  right: number
  width: number
  top: number
  left: number
}

export interface Page4Div {
  left: number
  width: number
  bottom: number
  height: number
  top: number
  right: number
}

export interface N1201Meta {
  bottom: number
  width: number
  top: number
  right: number
  height: number
  left: number
}

export interface N1199Meta {
  bottom: number
  left: number
  width: number
  top: number
  height: number
  right: number
}

export interface N1107Span {
  top: number
  bottom: number
  width: number
  left: number
  height: number
  right: number
}

export interface N157Img {
  left: number
  right: number
  width: number
  bottom: number
  height: number
  top: number
}

export interface N138Img {
  right: number
  left: number
  width: number
  height: number
  top: number
  bottom: number
}

export interface N197Img {
  top: number
  left: number
  right: number
  width: number
  bottom: number
  height: number
}

export interface Page9Span {
  bottom: number
  top: number
  left: number
  right: number
  height: number
  width: number
}

export interface N1139Span {
  left: number
  top: number
  bottom: number
  right: number
  height: number
  width: number
}

export interface N162Img {
  width: number
  height: number
  left: number
  top: number
  bottom: number
  right: number
}

export interface N1167Span {
  top: number
  right: number
  height: number
  width: number
  left: number
  bottom: number
}

export interface N1226Meta {
  top: number
  bottom: number
  left: number
  right: number
  height: number
  width: number
}

export interface N112Img {
  left: number
  right: number
  height: number
  bottom: number
  top: number
  width: number
}

export interface N134Img {
  width: number
  height: number
  top: number
  right: number
  left: number
  bottom: number
}

export interface N1203Meta {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface N1187Link {
  width: number
  right: number
  left: number
  bottom: number
  height: number
  top: number
}

export interface N163Img {
  bottom: number
  top: number
  left: number
  width: number
  height: number
  right: number
}

export interface N1127Span {
  bottom: number
  left: number
  width: number
  height: number
  right: number
  top: number
}

export interface Page8Span {
  height: number
  bottom: number
  left: number
  right: number
  top: number
  width: number
}

export interface N1152Span {
  width: number
  top: number
  height: number
  bottom: number
  left: number
  right: number
}

export interface N160Img {
  right: number
  top: number
  left: number
  width: number
  bottom: number
  height: number
}

export interface N1101Img {
  right: number
  bottom: number
  left: number
  width: number
  height: number
  top: number
}

export interface N1106Span {
  left: number
  width: number
  right: number
  bottom: number
  top: number
  height: number
}

export interface N1111Span {
  width: number
  height: number
  right: number
  top: number
  bottom: number
  left: number
}

export interface N1103Div {
  left: number
  width: number
  top: number
  bottom: number
  right: number
  height: number
}

export interface N1207Meta {
  left: number
  bottom: number
  width: number
  right: number
  height: number
  top: number
}

export interface N1160Span {
  left: number
  width: number
  right: number
  bottom: number
  top: number
  height: number
}

export interface Page17Img {
  left: number
  top: number
  width: number
  height: number
  right: number
  bottom: number
}

export interface N1208Meta {
  width: number
  height: number
  right: number
  top: number
  bottom: number
  left: number
}

export interface N1142Span {
  bottom: number
  left: number
  height: number
  right: number
  top: number
  width: number
}

export interface N131Img {
  width: number
  height: number
  bottom: number
  right: number
  top: number
  left: number
}

export interface N191Img {
  top: number
  right: number
  left: number
  height: number
  width: number
  bottom: number
}

export interface N144Img {
  top: number
  right: number
  bottom: number
  left: number
  height: number
  width: number
}

export interface N185Img {
  height: number
  left: number
  bottom: number
  right: number
  width: number
  top: number
}

export interface N149Img {
  height: number
  top: number
  right: number
  bottom: number
  width: number
  left: number
}

export interface N19Img {
  height: number
  top: number
  right: number
  bottom: number
  left: number
  width: number
}

export interface N132Img {
  width: number
  top: number
  left: number
  height: number
  bottom: number
  right: number
}

export interface N1112Span {
  height: number
  left: number
  top: number
  right: number
  bottom: number
  width: number
}

export interface N199Img {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface N171Img {
  right: number
  height: number
  left: number
  bottom: number
  top: number
  width: number
}

export interface N113Img {
  top: number
  right: number
  left: number
  width: number
  height: number
  bottom: number
}

export interface N1175Link {
  bottom: number
  right: number
  width: number
  left: number
  top: number
  height: number
}

export interface N180Img {
  top: number
  bottom: number
  height: number
  right: number
  width: number
  left: number
}

export interface N1128Span {
  right: number
  height: number
  left: number
  top: number
  width: number
  bottom: number
}

export interface N1122Span {
  width: number
  bottom: number
  left: number
  height: number
  top: number
  right: number
}

export interface N193Img {
  top: number
  bottom: number
  right: number
  height: number
  left: number
  width: number
}

export interface N17Img {
  right: number
  top: number
  height: number
  width: number
  bottom: number
  left: number
}

export interface N1132Span {
  width: number
  height: number
  left: number
  top: number
  bottom: number
  right: number
}

export interface N1149Span {
  width: number
  left: number
  top: number
  height: number
  right: number
  bottom: number
}

export interface N1147Span {
  right: number
  bottom: number
  width: number
  top: number
  left: number
  height: number
}

export interface N1134Span {
  top: number
  height: number
  left: number
  width: number
  bottom: number
  right: number
}

export interface N135Img {
  height: number
  left: number
  right: number
  top: number
  width: number
  bottom: number
}

export interface N1189Link {
  right: number
  height: number
  left: number
  top: number
  width: number
  bottom: number
}

export interface N1162Span {
  left: number
  right: number
  width: number
  bottom: number
  height: number
  top: number
}

export interface N1157Span {
  height: number
  right: number
  bottom: number
  left: number
  top: number
  width: number
}

export interface N1228Meta {
  height: number
  width: number
  left: number
  bottom: number
  right: number
  top: number
}

export interface N1217Meta {
  height: number
  right: number
  top: number
  width: number
  bottom: number
  left: number
}

export interface N1198Meta {
  width: number
  bottom: number
  right: number
  top: number
  height: number
  left: number
}

export interface N1125Span {
  width: number
  bottom: number
  top: number
  right: number
  height: number
  left: number
}

export interface Page6Div {
  right: number
  top: number
  left: number
  bottom: number
  width: number
  height: number
}

export interface N15Img {
  left: number
  width: number
  height: number
  top: number
  right: number
  bottom: number
}

export interface N117Img {
  right: number
  left: number
  width: number
  top: number
  bottom: number
  height: number
}

export interface N143Img {
  width: number
  height: number
  left: number
  bottom: number
  top: number
  right: number
}

export interface N172Img {
  top: number
  height: number
  right: number
  bottom: number
  left: number
  width: number
}

export interface Page16Img {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export interface N184Img {
  height: number
  right: number
  width: number
  left: number
  top: number
  bottom: number
}

export interface N1121Span {
  bottom: number
  width: number
  right: number
  top: number
  left: number
  height: number
}

export interface N182Img {
  bottom: number
  top: number
  height: number
  right: number
  width: number
  left: number
}

export interface N1140Span {
  left: number
  right: number
  width: number
  bottom: number
  height: number
  top: number
}

export interface N141Img {
  top: number
  width: number
  left: number
  bottom: number
  right: number
  height: number
}

export interface Page3Div {
  right: number
  left: number
  width: number
  height: number
  top: number
  bottom: number
}

export interface Page19Img {
  height: number
  top: number
  right: number
  bottom: number
  left: number
  width: number
}

export interface N1105Span {
  right: number
  left: number
  height: number
  top: number
  width: number
  bottom: number
}

export interface Page13Img {
  left: number
  height: number
  bottom: number
  top: number
  right: number
  width: number
}

export interface Page15Img {
  left: number
  height: number
  bottom: number
  width: number
  right: number
  top: number
}

export interface N1116Span {
  left: number
  bottom: number
  width: number
  height: number
  top: number
  right: number
}

export interface N1204Meta {
  width: number
  height: number
  left: number
  right: number
  bottom: number
  top: number
}

export interface N1130Span {
  width: number
  height: number
  bottom: number
  left: number
  top: number
  right: number
}

export interface Page11Span {
  top: number
  width: number
  bottom: number
  height: number
  left: number
  right: number
}

export interface N175Img {
  width: number
  bottom: number
  top: number
  left: number
  height: number
  right: number
}

export interface N1109Span {
  right: number
  width: number
  bottom: number
  height: number
  top: number
  left: number
}

export interface N1182Link {
  height: number
  bottom: number
  left: number
  top: number
  width: number
  right: number
}

export interface N1227Meta {
  width: number
  top: number
  right: number
  left: number
  bottom: number
  height: number
}

export interface N12Img {
  height: number
  left: number
  right: number
  width: number
  top: number
  bottom: number
}

export interface N1215Meta {
  left: number
  top: number
  height: number
  bottom: number
  right: number
  width: number
}

export interface N148Img {
  top: number
  left: number
  right: number
  width: number
  bottom: number
  height: number
}

export interface N1180Link {
  width: number
  height: number
  bottom: number
  top: number
  right: number
  left: number
}

export interface N189Img {
  width: number
  left: number
  top: number
  right: number
  height: number
  bottom: number
}

export interface N1118Span {
  bottom: number
  top: number
  height: number
  width: number
  right: number
  left: number
}

export interface N159Img {
  top: number
  bottom: number
  left: number
  width: number
  height: number
  right: number
}

export interface N1129Span {
  bottom: number
  height: number
  left: number
  top: number
  right: number
  width: number
}

export interface N16Img {
  top: number
  height: number
  width: number
  bottom: number
  left: number
  right: number
}

export interface N1164Span {
  right: number
  left: number
  bottom: number
  width: number
  height: number
  top: number
}

export interface N1190Link {
  right: number
  left: number
  width: number
  height: number
  top: number
  bottom: number
}

export interface Page0Img {
  width: number
  height: number
  right: number
  bottom: number
  top: number
  left: number
}

export interface N120Img {
  bottom: number
  width: number
  left: number
  top: number
  right: number
  height: number
}

export interface N1195Link {
  height: number
  right: number
  top: number
  bottom: number
  width: number
  left: number
}

export interface N1153Span {
  width: number
  height: number
  right: number
  top: number
  bottom: number
  left: number
}

export interface N195Img {
  width: number
  bottom: number
  height: number
  left: number
  right: number
  top: number
}

export interface N1181Link {
  top: number
  bottom: number
  right: number
  height: number
  left: number
  width: number
}

export interface N1223Meta {
  height: number
  right: number
  width: number
  bottom: number
  top: number
  left: number
}

export interface N1163Span {
  width: number
  bottom: number
  height: number
  right: number
  top: number
  left: number
}

export interface N170Img {
  height: number
  top: number
  right: number
  left: number
  bottom: number
  width: number
}

export interface N1225Meta {
  right: number
  height: number
  left: number
  top: number
  width: number
  bottom: number
}

export interface N139Img {
  top: number
  height: number
  right: number
  left: number
  width: number
  bottom: number
}

export interface N1146Span {
  bottom: number
  top: number
  left: number
  width: number
  right: number
  height: number
}

export interface N1123Span {
  left: number
  width: number
  top: number
  height: number
  bottom: number
  right: number
}

export interface N110Img {
  bottom: number
  top: number
  right: number
  left: number
  height: number
  width: number
}

export interface N111Img {
  right: number
  height: number
  bottom: number
  width: number
  left: number
  top: number
}

export interface Page10Span {
  bottom: number
  right: number
  left: number
  width: number
  top: number
  height: number
}

export interface N1192Link {
  width: number
  height: number
  right: number
  left: number
  top: number
  bottom: number
}

export interface N1141Span {
  left: number
  height: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N1196Link {
  top: number
  left: number
  bottom: number
  width: number
  right: number
  height: number
}

export interface N155Img {
  bottom: number
  left: number
  top: number
  width: number
  height: number
  right: number
}

export interface N174Img {
  width: number
  right: number
  height: number
  left: number
  top: number
  bottom: number
}

export interface N1138Span {
  top: number
  right: number
  left: number
  bottom: number
  width: number
  height: number
}

export interface N165Img {
  top: number
  right: number
  bottom: number
  height: number
  width: number
  left: number
}

export interface N176Img {
  bottom: number
  left: number
  right: number
  top: number
  width: number
  height: number
}

export interface N1206Meta {
  right: number
  width: number
  top: number
  bottom: number
  height: number
  left: number
}

export interface N1224Meta {
  width: number
  right: number
  bottom: number
  height: number
  left: number
  top: number
}

export interface N1135Span {
  right: number
  width: number
  left: number
  top: number
  height: number
  bottom: number
}

export interface Page5Div {
  bottom: number
  height: number
  width: number
  right: number
  top: number
  left: number
}

export interface N1151Span {
  right: number
  top: number
  height: number
  bottom: number
  left: number
  width: number
}

export interface N136Img {
  left: number
  height: number
  bottom: number
  width: number
  right: number
  top: number
}

export interface N137Img {
  bottom: number
  left: number
  height: number
  right: number
  width: number
  top: number
}

export interface N1211Meta {
  left: number
  bottom: number
  width: number
  right: number
  height: number
  top: number
}

export interface N168Img {
  left: number
  width: number
  bottom: number
  height: number
  right: number
  top: number
}

export interface N1178Link {
  right: number
  width: number
  height: number
  top: number
  left: number
  bottom: number
}

export interface N1131Span {
  width: number
  height: number
  right: number
  left: number
  bottom: number
  top: number
}

export interface N1173Link {
  bottom: number
  top: number
  width: number
  right: number
  height: number
  left: number
}

export interface N1213Meta {
  bottom: number
  right: number
  height: number
  left: number
  top: number
  width: number
}

export interface N1171Span {
  left: number
  height: number
  top: number
  width: number
  bottom: number
  right: number
}

export interface N1110Span {
  bottom: number
  left: number
  width: number
  top: number
  right: number
  height: number
}

export interface N167Img {
  top: number
  right: number
  left: number
  bottom: number
  height: number
  width: number
}

export interface N1113Span {
  left: number
  bottom: number
  top: number
  right: number
  width: number
  height: number
}

export interface N1154Span {
  height: number
  right: number
  bottom: number
  width: number
  left: number
  top: number
}

export interface N1219Meta {
  height: number
  bottom: number
  left: number
  top: number
  width: number
  right: number
}

export interface N183Img {
  width: number
  bottom: number
  top: number
  left: number
  right: number
  height: number
}

export interface N1100Img {
  height: number
  right: number
  left: number
  width: number
  top: number
  bottom: number
}

export interface Page23Div {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}

export interface N115Img {
  bottom: number
  height: number
  width: number
  right: number
  top: number
  left: number
}

export interface N11Body {
  left: number
  bottom: number
  right: number
  top: number
  width: number
  height: number
}

export interface N1185Link {
  left: number
  width: number
  bottom: number
  height: number
  top: number
  right: number
}

export interface N1216Meta {
  right: number
  height: number
  bottom: number
  left: number
  width: number
  top: number
}

export interface N147Img {
  left: number
  top: number
  height: number
  right: number
  bottom: number
  width: number
}

export interface N142Img {
  left: number
  right: number
  top: number
  height: number
  width: number
  bottom: number
}

export interface N164Img {
  height: number
  left: number
  bottom: number
  width: number
  top: number
  right: number
}

export interface N124Img {
  width: number
  top: number
  bottom: number
  left: number
  right: number
  height: number
}

export interface N1209Meta {
  top: number
  height: number
  bottom: number
  width: number
  right: number
  left: number
}

export interface N1169Div {
  width: number
  height: number
  left: number
  bottom: number
  right: number
  top: number
}

export interface N122Img {
  width: number
  top: number
  left: number
  height: number
  bottom: number
  right: number
}

export interface N1145Span {
  right: number
  height: number
  top: number
  bottom: number
  width: number
  left: number
}

export interface N181Img {
  right: number
  top: number
  left: number
  width: number
  bottom: number
  height: number
}

export interface N1212Meta {
  top: number
  height: number
  width: number
  bottom: number
  left: number
  right: number
}

export interface N10Br {
  width: number
  top: number
  right: number
  height: number
  bottom: number
  left: number
}

export interface N13Img {
  bottom: number
  left: number
  right: number
  height: number
  top: number
  width: number
}

export interface N153Img {
  height: number
  bottom: number
  left: number
  width: number
  right: number
  top: number
}

export interface N1136Span {
  right: number
  left: number
  height: number
  width: number
  top: number
  bottom: number
}

export interface N1115Span {
  bottom: number
  right: number
  top: number
  left: number
  height: number
  width: number
}

export interface N1218Meta {
  height: number
  bottom: number
  left: number
  width: number
  right: number
  top: number
}

export interface N166Img {
  right: number
  width: number
  top: number
  left: number
  height: number
  bottom: number
}

export interface N1210Meta {
  right: number
  top: number
  height: number
  left: number
  bottom: number
  width: number
}

export interface N1174Link {
  top: number
  left: number
  height: number
  right: number
  width: number
  bottom: number
}

export interface Page18Img {
  width: number
  right: number
  height: number
  left: number
  top: number
  bottom: number
}

export interface N196Img {
  left: number
  height: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N118Img {
  right: number
  top: number
  left: number
  height: number
  width: number
  bottom: number
}

export interface N119Img {
  width: number
  bottom: number
  top: number
  right: number
  left: number
  height: number
}

export interface N14Img {
  width: number
  left: number
  height: number
  top: number
  bottom: number
  right: number
}

export interface N1158Span {
  height: number
  width: number
  top: number
  bottom: number
  left: number
  right: number
}

export interface Page21Img {
  right: number
  width: number
  height: number
  left: number
  top: number
  bottom: number
}

export interface N116Img {
  height: number
  bottom: number
  width: number
  top: number
  right: number
  left: number
}

export interface N126Img {
  right: number
  height: number
  left: number
  width: number
  top: number
  bottom: number
}

export interface N192Img {
  left: number
  bottom: number
  height: number
  width: number
  top: number
  right: number
}

export interface N1156Span {
  width: number
  height: number
  right: number
  left: number
  bottom: number
  top: number
}

export interface N129Img {
  top: number
  left: number
  height: number
  width: number
  bottom: number
  right: number
}

export interface N169Img {
  top: number
  width: number
  bottom: number
  right: number
  height: number
  left: number
}

export interface N114Img {
  width: number
  bottom: number
  top: number
  height: number
  right: number
  left: number
}

export interface N1222Meta {
  left: number
  top: number
  height: number
  bottom: number
  right: number
  width: number
}

export interface N198Img {
  bottom: number
  top: number
  left: number
  right: number
  width: number
  height: number
}

export interface N150Img {
  bottom: number
  top: number
  width: number
  height: number
  right: number
  left: number
}

export interface N173Img {
  right: number
  height: number
  left: number
  top: number
  width: number
  bottom: number
}

export interface N1137Span {
  bottom: number
  top: number
  left: number
  right: number
  width: number
  height: number
}

export interface N133Img {
  bottom: number
  height: number
  width: number
  right: number
  left: number
  top: number
}

export interface N1193Link {
  width: number
  height: number
  bottom: number
  top: number
  right: number
  left: number
}

export interface N1229Meta {
  width: number
  top: number
  left: number
  height: number
  bottom: number
  right: number
}

export interface Page2Div {
  bottom: number
  width: number
  right: number
  left: number
  top: number
  height: number
}

export interface N1117Span {
  bottom: number
  height: number
  left: number
  top: number
  width: number
  right: number
}

export interface N1161Span {
  left: number
  height: number
  width: number
  right: number
  top: number
  bottom: number
}

export interface N145Img {
  left: number
  right: number
  height: number
  width: number
  top: number
  bottom: number
}

export interface N127Img {
  width: number
  left: number
  bottom: number
  top: number
  right: number
  height: number
}

export interface N1104Div {
  right: number
  left: number
  top: number
  height: number
  width: number
  bottom: number
}

export interface Page12Img {
  right: number
  top: number
  height: number
  bottom: number
  width: number
  left: number
}

export interface N161Img {
  width: number
  left: number
  right: number
  top: number
  height: number
  bottom: number
}

export interface N1183Link {
  height: number
  right: number
  bottom: number
  left: number
  top: number
  width: number
}

export interface Page14Img {
  left: number
  top: number
  right: number
  height: number
  bottom: number
  width: number
}

export interface N190Img {
  top: number
  right: number
  height: number
  bottom: number
  left: number
  width: number
}

export interface Screenshot {
  width: number
  height: number
  data: string
}
