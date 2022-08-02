"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||c;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<c;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const c={id:"backend-console-metrics",title:"Backend and Console Metrics"},a=void 0,l={unversionedId:"reference/backend-console-metrics",id:"reference/backend-console-metrics",title:"Backend and Console Metrics",description:"Console Collector",source:"@site/docs/reference/metrics.md",sourceDirName:"reference",slug:"/reference/backend-console-metrics",permalink:"/cicada-distributed-docs/docs/reference/backend-console-metrics",draft:!1,editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/metrics.md",tags:[],version:"current",frontMatter:{id:"backend-console-metrics",title:"Backend and Console Metrics"},sidebar:"tutorialSidebar",previous:{title:"Load Models",permalink:"/cicada-distributed-docs/docs/reference/load-models"},next:{title:"ScenarioCommands",permalink:"/cicada-distributed-docs/docs/reference/scenario-commands"}},s={},i=[{value:"Console Collector",id:"console-collector",level:2},{value:"Example",id:"example",level:3},{value:"Console Stats",id:"console-stats",level:2},{value:"Example",id:"example-1",level:3},{value:"Console Count",id:"console-count",level:2},{value:"Console Latest",id:"console-latest",level:2},{value:"Console Percent",id:"console-percent",level:2}],m={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"console-collector"},"Console Collector"),(0,r.kt)("p",null,"Sends list of floats gathered by collector function to backend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ConsoleCollectorFn = Callable[[List[Result]], Iterable[float]]\n\ndef console_collector(name: str, collector: ConsoleCollectorFn):\n    """Send metric created by collector function to backend.\n\n    Helper for scenarios that want to leverage the backend to store metrics.\n\n    Args:\n        name (str): Name of metric\n        collector (ConsoleCollectorFn): Function to convert results to list of metric values\n    """\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'...\nfrom cicadad.core.decorators import metrics_collector\nfrom cicadad.metrics.console import console_collector\n\n\ndef runtime_ms(latest_results: List[Result]):\n    return [result.output * 1000 for result in latest_results]\n\n@scenario(engine)\n@metrics_collector(console_collector("ms", runtime_ms))\n...\ndef post_user():\n    ...\n')),(0,r.kt)("h2",{id:"console-stats"},"Console Stats"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def console_stats(metric_name: str):\n    """Get stats for metric values from datastore.\n\n    * Min\n    * Median\n    * Max\n    * Average\n    * Len (Number of results for this metric)\n\n    Args:\n        metric_name (str): Name of saved metric\n    """\n')),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'...\nfrom cicadad.core.decorators import console_metric_displays\nfrom cicadad.metrics.console import console_stats, console_percent\n...\n\n@scenario(engine)\n@metrics_collector(console_collector("ms", runtime_ms))\n@console_metric_displays(\n    {\n        "latency_stats": console_stats("ms"),\n        "latency_above_30ms": console_percent("ms", 30),\n    }\n)\n...\ndef post_user(context):\n    ...\n')),(0,r.kt)("h2",{id:"console-count"},"Console Count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def console_count(metric_name: str):\n    """Get total of all values for a metric in datastore.\n\n    Args:\n        metric_name (str): Name of saved metric\n    """\n')),(0,r.kt)("h2",{id:"console-latest"},"Console Latest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def console_latest(metric_name: str):\n    """Get latest value of metric from datastore.\n\n    Args:\n        metric_name (str): Name of saved metric\n    """\n')),(0,r.kt)("h2",{id:"console-percent"},"Console Percent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def console_percent(metric_name: str, split_point: float):\n    """Get percent of values for a metric above split point from datastore.\n\n    Args:\n        metric_name (str): Name of saved metric\n        split_point (float): Point to split metric values at\n    """\n')))}d.isMDXComponent=!0}}]);