"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={id:"user-commands",title:"UserCommands"},a=void 0,i={unversionedId:"reference/user-commands",id:"reference/user-commands",title:"UserCommands",description:"UserCommands is a class provided to the user loop to interact with the scenario.",source:"@site/docs/reference/user-commands.md",sourceDirName:"reference",slug:"/reference/user-commands",permalink:"/cicada-distributed-docs/docs/reference/user-commands",draft:!1,editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/reference/user-commands.md",tags:[],version:"current",frontMatter:{id:"user-commands",title:"UserCommands"},sidebar:"tutorialSidebar",previous:{title:"ScenarioCommands",permalink:"/cicada-distributed-docs/docs/reference/scenario-commands"},next:{title:"User Loops",permalink:"/cicada-distributed-docs/docs/reference/user-loops"}},c={},u=[{value:"Is Up",id:"is-up",level:2},{value:"Has Work",id:"has-work",level:2},{value:"Run",id:"run",level:2},{value:"Get Events",id:"get-events",level:2},{value:"Report Result",id:"report-result",level:2}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"UserCommands is a class provided to the user loop to interact with the scenario."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.engine import Engine\nfrom cicadad.core.decorators import (\n    scenario,\n    user_loop,\n    UserCommands\n)\n\nengine = Engine()\n\ndef custom_user_loop(user_commands: UserCommands, context: dict):\n    while user_commands.is_up():\n        if user_commands.has_work():\n            start = datetime.now()\n            output, exception, logs = user_commands.run(context=context)\n            end = datetime.now()\n            user_commands.report_result(\n                output,\n                exception,\n                logs,\n                time_taken=(end - start).seconds,\n            )\n\n@scenario(engine)\n@user_loop(custom_user_loop)\ndef an_example_test(context):\n    do_something()\n")),(0,o.kt)("h2",{id:"is-up"},"Is Up"),(0,o.kt)("p",null,"Check if the user has been terminated by the scenario"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def is_up(self):\n    """Check if user is still running\n\n    Returns:\n        bool: User is up\n    """\n')),(0,o.kt)("h2",{id:"has-work"},"Has Work"),(0,o.kt)("p",null,"Check if the user has work to determine if it should run or not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_commands.has_work(self, timeout_ms: int = 1000):\n    """Check if user has remaining invocations\n\n    Args:\n        timeout_ms (int, optional): Time to wait for work event to appear before returning. Defaults to 1000.\n\n    Returns:\n        bool: User has work\n    """\n')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Run the scenario function with provided arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_commands.run(self, *args, log_traceback=True, **kwargs):\n    """Run scenario function with arguments; capture exception and logs\n\n    Args:\n        log_traceback (bool, optional): Print out traceback for exception. Defaults to True.\n\n    Returns:\n        Tuple[Any, Exception, str]: Output, exception, and logs captured\n    """\n')),(0,o.kt)("h2",{id:"get-events"},"Get Events"),(0,o.kt)("p",null,"Recieve commands from scenario for this user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_commands.get_events(self, kind: str):\n    """Get events sent to user from scenario\n\n    Returns:\n        List[UserEvent]: List of user events\n        kind: type of event to retrieve\n    """\n')),(0,o.kt)("h2",{id:"report-result"},"Report Result"),(0,o.kt)("p",null,"Send the output and exception back to the scenario."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_commands.report_result(\n    self, output: Any, exception: Any, logs: Optional[str], time_taken: int\n):\n    """Report result for scenario invocation from user to scenario\n\n    Args:\n        output (Any): Function output\n        exception (Any): Function exception\n        logs (Optional[str]): Function logs\n        time_taken (int): Time taken in seconds to call function once\n    """\n')))}p.isMDXComponent=!0}}]);