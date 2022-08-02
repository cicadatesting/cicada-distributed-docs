"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[131],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return r?t.createElement(g,l(l({ref:n},d),{},{components:r})):t.createElement(g,l({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7342:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={id:"decorators",title:"Decorators"},l=void 0,s={unversionedId:"reference/decorators",id:"reference/decorators",title:"Decorators",description:"Scenario",source:"@site/docs/reference/decorators.md",sourceDirName:"reference",slug:"/reference/decorators",permalink:"/cicada-distributed-docs/docs/reference/decorators",draft:!1,editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/decorators.md",tags:[],version:"current",frontMatter:{id:"decorators",title:"Decorators"},sidebar:"tutorialSidebar",previous:{title:"Working With Metrics",permalink:"/cicada-distributed-docs/docs/guides/metrics-guide"},next:{title:"Load Models",permalink:"/cicada-distributed-docs/docs/reference/load-models"}},i={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Example",id:"example",level:4},{value:"API",id:"api",level:4},{value:"User Loop",id:"user-loop",level:2},{value:"Example",id:"example-1",level:4},{value:"API",id:"api-1",level:4},{value:"Users Per Container",id:"users-per-container",level:2},{value:"Example",id:"example-2",level:4},{value:"API",id:"api-2",level:4},{value:"Load Model",id:"load-model",level:2},{value:"Example",id:"example-3",level:4},{value:"API",id:"api-3",level:4},{value:"Dependency",id:"dependency",level:2},{value:"Example",id:"example-4",level:4},{value:"API",id:"api-4",level:4},{value:"Result Aggregator",id:"result-aggregator",level:2},{value:"Example",id:"example-5",level:4},{value:"API",id:"api-5",level:4},{value:"Result Verifier",id:"result-verifier",level:2},{value:"Example",id:"example-6",level:4},{value:"API",id:"api-6",level:4},{value:"Output Transformer",id:"output-transformer",level:2},{value:"Example",id:"example-7",level:4},{value:"API",id:"api-7",level:4},{value:"Metrics Collector",id:"metrics-collector",level:2},{value:"Example",id:"example-8",level:4},{value:"API",id:"api-8",level:4},{value:"Console Metric Displays",id:"console-metric-displays",level:2},{value:"Example",id:"example-9",level:4},{value:"API",id:"api-9",level:4},{value:"Tag",id:"tag",level:2},{value:"Example",id:"example-10",level:4},{value:"API",id:"api-10",level:4}],d={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"To mark a function as a Cicada scenario, use the scenario decorator. Remember\nto attach it to the engine."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario\nfrom cicadad.core.engine import Engine\n\nengine = Engine()\n\n@scenario(engine)\ndef hello_world():\n    assert 2 + 2 == 4\n")),(0,a.kt)("h4",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def scenario(engine: Engine, name: str = None, raise_exception: bool = True):\n    """Mark a function as a scenario\n\n    Args:\n        engine (Engine): Engine to attach scenario to\n        name (str, optional): Name to give to scenario. Defaults to function name if None.\n        raise_exception (bool): Raise exception if user loop fails.\n    """\n')),(0,a.kt)("h2",{id:"user-loop"},"User Loop"),(0,a.kt)("p",null,"Override the user loop of a scenario."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario, user_loop\nfrom cicadad.core.scenario import iterations_per_second_limited\n...\n\n@scenario(engine)\n@user_loop(iterations_per_second_limited(4))\ndef hello_world():\n    assert 2 + 2 == 4\n")),(0,a.kt)("h4",{id:"api-1"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def user_loop(user_loop_fn: UserLoopFn):\n    """Function to handle how the user function is run\n\n    Args:\n        user_loop_fn (UserLoopFn): User defined user loop function\n    """\n')),(0,a.kt)("h2",{id:"users-per-container"},"Users Per Container"),(0,a.kt)("p",null,"Sets number of users that can fit inside a single user container. Allows more\nusers to run with fewer resources."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario, users_per_container\n...\n\n@scenario(engine)\n@users_per_container(200)\ndef hello_world():\n    assert 2 + 2 == 4\n")),(0,a.kt)("h4",{id:"api-2"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def users_per_container(users_per_container: int):\n    """Sets how many users can fit inside a single user manager container.\n    Default is 50 users per container\n    Args:\n        users_per_container (int): Number of users to fit in a single container\n    """\n')),(0,a.kt)("h2",{id:"load-model"},"Load Model"),(0,a.kt)("p",null,"Override the load model function for a scenario."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario, load_model\nfrom cicadad.core.scenario import n_seconds\n...\n\n\n@scenario(engine)\n@load_model(n_seconds(30, 10))\ndef hello_world():\n    assert 2 + 2 == 4\n")),(0,a.kt)("h4",{id:"api-3"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def load_model(load_model_fn: LoadModelFn):\n    """Function to handle how scenario is run with regards to starting users and\n    administering work\n\n    Args:\n        load_model_fn (LoadModelFn): User defined load model function\n    """\n')),(0,a.kt)("h2",{id:"dependency"},"Dependency"),(0,a.kt)("p",null,"Mark a scenario as dependent on another scenario passing."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario, dependency\n...\n\n\n@scenario(engine)\ndef test_a():\n    assert 2 + 2 == 4\n\n@scenario(engine)\n@dependency(test_a)\ndef test_b():\n    assert 3 + 3 == 6\n")),(0,a.kt)("h4",{id:"api-4"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def dependency(dep: Scenario):\n    """Set a scenario as a dependency for this scenario to run\n\n    Args:\n        dep (Scenario): Scenario this function is dependent on being successful\n    """\n')),(0,a.kt)("h2",{id:"result-aggregator"},"Result Aggregator"),(0,a.kt)("p",null,"Add a function to aggregate results gathered during scenario."),(0,a.kt)("h4",{id:"example-5"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.decorators import scenario, result_aggregator\n...\n\ndef agg(last_agg, latest_results):\n    if last_agg is None:\n        total = 0\n    else:\n        total = last_agg\n\n    return total + sum(r.output for r in latest_results)\n\n\n\n@scenario(engine)\n@result_aggregator(agg)\ndef hello_world():\n    assert 2 + 2 == 4\n\n    return 1\n")),(0,a.kt)("h4",{id:"api-5"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def result_aggregator(aggregator_fn: ResultAggregatorFn):\n    """Transform previous aggregate and list of results into an aggregated\n    single result. Called by load model function\n\n    Args:\n        aggregator_fn (ResultAggregatorFn): Aggregator function\n    """\n')),(0,a.kt)("h2",{id:"result-verifier"},"Result Verifier"),(0,a.kt)("p",null,"Add a function to verify results and add error strings for results gathered\nduring scenario."),(0,a.kt)("h4",{id:"example-6"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from cicadad.core.decorators import scenario, result_verifier\n...\n\ndef verifier(latest_results):\n    return [\n        f"* {str(result.exception)}"\n        for r in latest_results\n        if r.exception is not None\n    ]\n\n@scenario(engine)\n@result_verifier(verifier)\ndef hello_world():\n    assert ..., "expected x but got y"\n')),(0,a.kt)("h4",{id:"api-6"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def result_verifier(verifier_fn: ResultVerifierFn):\n    """Create error messages for errors found in a list of results. Called by\n    load model function\n\n    Args:\n        verifier_fn (ResultVerifierFn): Verifier function\n    """\n')),(0,a.kt)("h2",{id:"output-transformer"},"Output Transformer"),(0,a.kt)("p",null,"Transform final aggregate to be saved as scenario output after load model\ncompletes."),(0,a.kt)("h4",{id:"example-7"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from cicadad.core.decorators import scenario, result_aggregator, output_transformer\n...\n\ndef agg(last_agg, latest_results):\n    if last_agg is None:\n        total = 0\n    else:\n        total = last_agg\n\n    return total + sum(r.output for r in latest_results)\n\n\ndef transform(agg):\n    return f"Total: {agg}"\n\n\n@scenario(engine)\n@result_aggregator(agg)\n@output_transformer(transform)\ndef hello_world():\n    assert 2 + 2 == 4\n\n    return 1\n')),(0,a.kt)("h4",{id:"api-7"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def output_transformer(transformer_fn: OutputTransformerFn):\n    """Transform the aggregated result of the scenario after load model is\n    called\n\n    Args:\n        transformer_fn (OutputTransformerFn): Transformer function\n    """\n')),(0,a.kt)("h2",{id:"metrics-collector"},"Metrics Collector"),(0,a.kt)("p",null,"Adds function to scenario to parse latest results and send metrics"),(0,a.kt)("h4",{id:"example-8"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime\nfrom cicadad.core.decorators import scenario, metrics_collector, console_metric_displays\nfrom cicadad.metrics.console import (\n    console_collector,\n    console_count,\n    console_latest,\n    console_stats,\n)\n...\n\n\ndef extract_ms(latest_results):\n    return [\n        float(result.output) for result in latest_results if result.exception is None\n    ]\n\n\n@scenario(engine)\n@metrics_collector(console_collector("stats", extract_ms))\n@metrics_collector(console_collector("latest", extract_ms))\n@metrics_collector(console_collector("count", extract_ms))\n@console_metric_displays(\n    {\n        "stats": console_stats(),\n        "latest": console_latest(),\n        "count": console_count(),\n    }\n)\ndef hello_world():\n    start = datetime.now()\n\n    assert 2 + 2 == 4\n\n    end = datetime.now()\n\n    return (end - start).total_seconds()\n')),(0,a.kt)("h4",{id:"api-8"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def metrics_collector(collector: MetricCollector):\n    """Add a collector function to parse and send metrics from scenario.\n\n    Args:\n        collector (MetricCollector): Collector function\n    """\n')),(0,a.kt)("h2",{id:"console-metric-displays"},"Console Metric Displays"),(0,a.kt)("p",null,"Display metric in the live metrics sidebar during a test."),(0,a.kt)("h4",{id:"example-9"},"Example"),(0,a.kt)("p",null,"See example in ",(0,a.kt)("a",{parentName:"p",href:"#metrics-collector"},"Metrics Collector"),"."),(0,a.kt)("h4",{id:"api-9"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def console_metric_displays(displays: ConsoleMetricDisplays):\n    """Sets map of names to metric displays for scenario.\n\n    Args:\n        displays (ConsoleMetricDisplays): Map of names to console metric display getters\n    """\n')),(0,a.kt)("h2",{id:"tag"},"Tag"),(0,a.kt)("p",null,"Add a tag to scenario so it can be optionally excluded during test run."),(0,a.kt)("h4",{id:"example-10"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from cicadad.core.decorators import scenario, tag\n...\n\n\n@scenario(engine)\n@tag("foo")\ndef hello_world():\n    assert 2 + 2 == 4\n')),(0,a.kt)("h4",{id:"api-10"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def tag(tag: str):\n    """Add a tag to a scenario. Tags allow for a test run to only cover certain\n    scenarios.\n\n    Args:\n        tag (str): Tag name to add to scenario\n    """\n')))}p.isMDXComponent=!0}}]);