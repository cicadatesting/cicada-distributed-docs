"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=s,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={id:"scenario-commands",title:"ScenarioCommands"},o=void 0,i={unversionedId:"reference/scenario-commands",id:"reference/scenario-commands",title:"ScenarioCommands",description:"ScenarioCommands is a class available to load models in order to interact with",source:"@site/docs/reference/scenario-commands.md",sourceDirName:"reference",slug:"/reference/scenario-commands",permalink:"/cicada-distributed-docs/docs/reference/scenario-commands",draft:!1,editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/scenario-commands.md",tags:[],version:"current",frontMatter:{id:"scenario-commands",title:"ScenarioCommands"},sidebar:"tutorialSidebar",previous:{title:"Backend and Console Metrics",permalink:"/cicada-distributed-docs/docs/reference/backend-console-metrics"},next:{title:"UserCommands",permalink:"/cicada-distributed-docs/docs/reference/user-commands"}},l={},c=[{value:"Scale Users",id:"scale-users",level:2},{value:"Start Users",id:"start-users",level:2},{value:"Stop Users",id:"stop-users",level:2},{value:"Add Work",id:"add-work",level:2},{value:"Send User Events",id:"send-user-events",level:2},{value:"Get Latest Results",id:"get-latest-results",level:2},{value:"Aggregate Results",id:"aggregate-results",level:2},{value:"Verify Results",id:"verify-results",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ScenarioCommands is a class available to load models in order to interact with\nthe users during a scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime, timedelta\nimport time\n\nfrom cicadad.core.engine import Engine\nfrom cicadad.core.decorators import (\n    scenario,\n    load_model,\n    ScenarioCommands\n)\n\nengine = Engine()\n\ndef custom_load_model(scenario_commands: ScenarioCommands, context: dict):\n    scenario_commands.scale_users(50)\n\n    start_time = datetime.now()\n\n    while datetime.now() < start_time + timedelta(seconds=30):\n        latest_results = scenario_commands.get_latest_results()\n\n        scenario_commands.aggregate_results(latest_results)\n        scenario_commands.verify_results(latest_results)\n        time.sleep(1)\n\n    scenario_commands.scale_users(0)\n\n@scenario(engine)\n@load_model(custom_load_model)\ndef an_example_test(context):\n    do_something()\n")),(0,s.kt)("h2",{id:"scale-users"},"Scale Users"),(0,s.kt)("p",null,"Update the number of running users during the scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.scale_users(self, n: int):\n    """Change number of running users\n\n    Args:\n        n (int): Desired number of users\n    """\n')),(0,s.kt)("h2",{id:"start-users"},"Start Users"),(0,s.kt)("p",null,"Increase the number of running users in the scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.start_users(self, n: int):\n    """Start users for scenario\n\n    Args:\n        n (int): Number of users to start\n    """\n')),(0,s.kt)("h2",{id:"stop-users"},"Stop Users"),(0,s.kt)("p",null,"Decrease the number of running users in the scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.stop_users(self, n: int):\n    """Stop a given number of users\n\n    Args:\n        n (int): Number of users to stop\n    """\n')),(0,s.kt)("h2",{id:"add-work"},"Add Work"),(0,s.kt)("p",null,"Increase the amount of work across the user pool in the scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.add_work(self, n: int):\n    """Distribute work to all users in scenario\n\n    Args:\n        n (int): Amount of work to distribute across user pool\n    """\n')),(0,s.kt)("h2",{id:"send-user-events"},"Send User Events"),(0,s.kt)("p",null,"Sends an event to all users currently running in scenario"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.send_user_events(self, kind: str, payload: dict):\n    """Send an event to all user in the user pool.\n\n    Args:\n        kind (str): Type of event\n        payload (dict): JSON dict to send to user\n    """\n')),(0,s.kt)("h2",{id:"get-latest-results"},"Get Latest Results"),(0,s.kt)("p",null,"Gathers results from users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.get_latest_results(\n    self,\n    timeout_ms=1000,\n):\n    """Gathers results produced by users\n\n    Args:\n        timeout_ms (int, optional): Time to wait for results. Defaults to 1000.\n\n    Returns:\n        List[Result]: List of latest results collected\n    """\n')),(0,s.kt)("h2",{id:"aggregate-results"},"Aggregate Results"),(0,s.kt)("p",null,"Call this function to run the scenario's result aggregator against a list of new\nresults."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.aggregate_results(self, latest_results: List[Result]) -> Any:\n    """Run scenario aggregator function against latest gathered results and\n    save aggregate\n\n    Args:\n        latest_results (List[Result]): Results to run aggregator function on\n\n    Returns:\n        Any: Result of scenario aggregator function\n    """\n')),(0,s.kt)("h2",{id:"verify-results"},"Verify Results"),(0,s.kt)("p",null,"Call this function to run the scenario's result verifier against a list of new\nresults."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.verify_results(self, latest_results: List[Result]) -> Optional[List[str]]:\n    """Run scenario result verification function against latest results\n\n    Args:\n        latest_results (List[Result]): Last results to be collected\n\n    Returns:\n        Optional[List[str]]: List of error strings gathered for scenario\n    """\n')))}d.isMDXComponent=!0}}]);