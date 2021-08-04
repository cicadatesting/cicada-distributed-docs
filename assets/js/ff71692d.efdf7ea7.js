"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[986],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1450:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"load-models",title:"Load Models"},l=void 0,c={unversionedId:"reference/load-models",id:"reference/load-models",isDocsHomePage:!1,title:"Load Models",description:"N Iterations",source:"@site/docs/reference/load-models.md",sourceDirName:"reference",slug:"/reference/load-models",permalink:"/cicada-distributed-docs/docs/reference/load-models",editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/load-models.md",version:"current",frontMatter:{id:"load-models",title:"Load Models"},sidebar:"tutorialSidebar",previous:{title:"Decorators",permalink:"/cicada-distributed-docs/docs/reference/decorators"},next:{title:"ScenarioCommands",permalink:"/cicada-distributed-docs/docs/reference/scenario-commands"}},d=[{value:"N Iterations",id:"n-iterations",children:[]},{value:"Run Scenario Once",id:"run-scenario-once",children:[]},{value:"N Seconds",id:"n-seconds",children:[]},{value:"N Users Ramping",id:"n-users-ramping",children:[]},{value:"Ramp Users To Threshold",id:"ramp-users-to-threshold",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"n-iterations"},"N Iterations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import n_iterations\n")),(0,a.kt)("p",null,"Makes user group run test function a limited number of times."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def n_iterations(\n    iterations: int,\n    users: int,\n    wait_period: int = 1,\n    timeout: Optional[int] = 15,\n    skip_scaledown: bool = False,\n):\n    """Creates a load model where a pool of users is called n times\n\n    Args:\n        iterations (int): Number of shared iterations for users to run\n        users (int): Size of user pool\n        wait_period (int, optional): Time in seconds to between polling for results. Defaults to 1.\n        timeout (Optional[int], optional): Time in seconds for scenario to complete before failing. Defaults to 15.\n        skip_scaledown (bool): Skip scaledown of users after running load function\n    """\n')),(0,a.kt)("h2",{id:"run-scenario-once"},"Run Scenario Once"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import run_scenario_once\n")),(0,a.kt)("p",null,"Runs the scenario with one user only one time. This load model is enabled by\ndefault."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def run_scenario_once(wait_period: int = 1, timeout: Optional[int] = 15):\n    """Runs scenario one time with one user\n\n    Args:\n        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.\n        timeout (int, optional): Time in seconds to wait for scenario to complete before failing. Defaults to 15.\n\n    Returns:\n        Callable: Closure for configured load model\n')),(0,a.kt)("h2",{id:"n-seconds"},"N Seconds"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import n_seconds\n")),(0,a.kt)("p",null,"Runs user group for a specified duration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def n_seconds(\n    seconds: int,\n    users: int,\n    wait_period: int = 1,\n    skip_scaledown=False,\n):\n    """Run the scenario for a specified duration. Should be used with the\n    \'while_alive\' user loop\n\n    Args:\n        seconds (int): Number of seconds to run scenario\n        users (int): Number of users to start for scenario\n        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.\n        skip_scaledown (bool): Skip scaledown of users after running load function\n    """\n')),(0,a.kt)("h2",{id:"n-users-ramping"},"N Users Ramping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import n_users_ramping\n")),(0,a.kt)("p",null,"Scales to specified number of users over time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def n_users_ramping(\n    seconds: int,\n    target_users: int,\n    wait_period: int = 1,\n    skip_scaledown: bool = True,\n):\n    """Scale users to target over the duration of the time specified. Use this\n    to scale users smoothly.\n\n    Args:\n        seconds (int): Amount of time to spend ramping users\n        target_users (int): Number of users to ramp to.\n        wait_period (int, optional): Time in seconds to wait between scaling batch of users. Defaults to 1.\n        skip_scaledown (bool, optional): Do not scale down users after load model completes. Defaults to True.\n    """\n')),(0,a.kt)("h2",{id:"ramp-users-to-threshold"},"Ramp Users To Threshold"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import ramp_users_to_threshold\n")),(0,a.kt)("p",null,"Gradually increases number of users until a threshold is met."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def ramp_users_to_threshold(\n    initial_users: int,\n    threshold_fn: Callable[[Any], bool],\n    next_users_fn: Callable[[int], int] = lambda n: n + 10,\n    update_aggregate: Callable[[int, Any], Any] = lambda n, agg: f"Users: {n}",\n    period_duration: int = 30,\n    period_limit: Optional[int] = None,\n    wait_period: int = 1,\n    skip_scaledown: bool = False,\n):\n    """Increase number of users in scenario until a threshold based on the\n    aggregated results is reached. Update aggregate with number of users determined\n    by scenario.\n\n    Args:\n        initial_users (int): Users to start stage with.\n        threshold_fn (Callable[[Any], bool]): Checks aggregate and returns True if threshold reached.\n        next_users_fn (Callable[[int], int]): Scale number of users given current number of users.\n        update_aggregate (Callable[[int, Any], Any], optional): Update scenario aggregate with result of load model.\n        period_duration (int, optional): Time in seconds to wait before scaling test. Defaults to 30.\n        period_limit (Optional[int], optional): Amount of scaling events before stopping stage. Defaults to None.\n        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.\n        skip_scaledown (bool): Skip scaledown of users after running load function\n    """\n')))}p.isMDXComponent=!0}}]);