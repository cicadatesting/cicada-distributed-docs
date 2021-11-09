"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[101],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=s,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5161:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(7462),s=t(3366),a=(t(7294),t(3905)),o=["components"],i={id:"scenario-commands",title:"ScenarioCommands"},l=void 0,c={unversionedId:"reference/scenario-commands",id:"reference/scenario-commands",isDocsHomePage:!1,title:"ScenarioCommands",description:"ScenarioCommands is a class available to load models in order to interact with",source:"@site/docs/reference/scenario-commands.md",sourceDirName:"reference",slug:"/reference/scenario-commands",permalink:"/cicada-distributed-docs/docs/reference/scenario-commands",editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/scenario-commands.md",tags:[],version:"current",frontMatter:{id:"scenario-commands",title:"ScenarioCommands"},sidebar:"tutorialSidebar",previous:{title:"Load Models",permalink:"/cicada-distributed-docs/docs/reference/load-models"},next:{title:"UserCommands",permalink:"/cicada-distributed-docs/docs/reference/user-commands"}},u=[{value:"Scale Users",id:"scale-users",children:[],level:2},{value:"Start Users",id:"start-users",children:[],level:2},{value:"Stop Users",id:"stop-users",children:[],level:2},{value:"Add Work",id:"add-work",children:[],level:2},{value:"Send User Events",id:"send-user-events",children:[],level:2},{value:"Get Latest Results",id:"get-latest-results",children:[],level:2},{value:"Aggregate Results",id:"aggregate-results",children:[],level:2},{value:"Verify Results",id:"verify-results",children:[],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ScenarioCommands is a class available to load models in order to interact with\nthe users during a scenario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime, timedelta\nimport time\n\nfrom cicadad.core.engine import Engine\nfrom cicadad.core.decorators import (\n    scenario,\n    load_model,\n    ScenarioCommands\n)\n\nengine = Engine()\n\ndef custom_load_model(scenario_commands: ScenarioCommands, context: dict):\n    scenario_commands.scale_users(50)\n\n    start_time = datetime.now()\n\n    while datetime.now() < start_time + timedelta(seconds=30):\n        latest_results = scenario_commands.get_latest_results()\n\n        scenario_commands.aggregate_results(latest_results)\n        scenario_commands.verify_results(latest_results)\n        time.sleep(1)\n\n    scenario_commands.scale_users(0)\n\n@scenario(engine)\n@load_model(custom_load_model)\ndef an_example_test(context):\n    do_something()\n")),(0,a.kt)("h2",{id:"scale-users"},"Scale Users"),(0,a.kt)("p",null,"Update the number of running users during the scenario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.scale_users(self, n: int):\n    """Change number of running users\n\n    Args:\n        n (int): Desired number of users\n    """\n')),(0,a.kt)("h2",{id:"start-users"},"Start Users"),(0,a.kt)("p",null,"Increase the number of running users in the scenario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.start_users(self, n: int):\n    """Start users for scenario\n\n    Args:\n        n (int): Number of users to start\n    """\n')),(0,a.kt)("h2",{id:"stop-users"},"Stop Users"),(0,a.kt)("p",null,"Decrease the number of running users in the scenario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.stop_users(self, n: int):\n    """Stop a given number of users\n\n    Args:\n        n (int): Number of users to stop\n    """\n')),(0,a.kt)("h2",{id:"add-work"},"Add Work"),(0,a.kt)("p",null,"Increase the amount of work across the user pool in the scenario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.add_work(self, n: int):\n    """Distribute work to all users in scenario\n\n    Args:\n        n (int): Amount of work to distribute across user pool\n    """\n')),(0,a.kt)("h2",{id:"send-user-events"},"Send User Events"),(0,a.kt)("p",null,"Sends an event to all users currently running in scenario"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.send_user_events(self, kind: str, payload: dict):\n    """Send an event to all user in the user pool.\n\n    Args:\n        kind (str): Type of event\n        payload (dict): JSON dict to send to user\n    """\n')),(0,a.kt)("h2",{id:"get-latest-results"},"Get Latest Results"),(0,a.kt)("p",null,"Gathers results from users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.get_latest_results(\n    self,\n    timeout_ms=1000,\n):\n    """Gathers results produced by users\n\n    Args:\n        timeout_ms (int, optional): Time to wait for results. Defaults to 1000.\n\n    Returns:\n        List[Result]: List of latest results collected\n    """\n')),(0,a.kt)("h2",{id:"aggregate-results"},"Aggregate Results"),(0,a.kt)("p",null,"Call this function to run the scenario's result aggregator against a list of new\nresults."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.aggregate_results(self, latest_results: List[Result]) -> Any:\n    """Run scenario aggregator function against latest gathered results and\n    save aggregate\n\n    Args:\n        latest_results (List[Result]): Results to run aggregator function on\n\n    Returns:\n        Any: Result of scenario aggregator function\n    """\n')),(0,a.kt)("h2",{id:"verify-results"},"Verify Results"),(0,a.kt)("p",null,"Call this function to run the scenario's result verifier against a list of new\nresults."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'scenario_commands.verify_results(self, latest_results: List[Result]) -> Optional[List[str]]:\n    """Run scenario result verification function against latest results\n\n    Args:\n        latest_results (List[Result]): Last results to be collected\n\n    Returns:\n        Optional[List[str]]: List of error strings gathered for scenario\n    """\n')))}m.isMDXComponent=!0}}]);