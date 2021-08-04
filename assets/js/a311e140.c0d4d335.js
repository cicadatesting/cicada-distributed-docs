"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[184],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:3,title:"Users"},c=void 0,u={unversionedId:"introduction/users",id:"introduction/users",isDocsHomePage:!1,title:"Users",description:"In Cicada, a User is the smallest unit of testing. You can think of a user as",source:"@site/docs/introduction/users.md",sourceDirName:"introduction",slug:"/introduction/users",permalink:"/cicada-distributed-docs/docs/introduction/users",editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/introduction/users.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Users"},sidebar:"tutorialSidebar",previous:{title:"Writing Your First Test",permalink:"/cicada-distributed-docs/docs/introduction/first-test"},next:{title:"Scenarios",permalink:"/cicada-distributed-docs/docs/introduction/scenarios"}},l=[{value:"User Loop",id:"user-loop",children:[]},{value:"UserCommands",id:"usercommands",children:[]},{value:"Context",id:"context",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Cicada, a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," is the smallest unit of testing. You can think of a user as\nthe behavior of a single client accessing your site. Let's take a look at our\nexample function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@scenario(engine)\ndef my_first_test(context):\n    assert 2 + 2 == 4\n\n    return "Passed!"\n')),(0,o.kt)("p",null,"During a test, Cicada will create a container for each user which will run the\nfunction ",(0,o.kt)("inlineCode",{parentName:"p"},"my_first_test")," inside of a ",(0,o.kt)("inlineCode",{parentName:"p"},"User Loop"),". In this case, a user will\ncheck that 2 + 2 = 4."),(0,o.kt)("h2",{id:"user-loop"},"User Loop"),(0,o.kt)("p",null,"The user loop is responsible for calling the test function in a user container\nand sending back results."),(0,o.kt)("p",null,"By default, the User Loop will only run the function if it has ",(0,o.kt)("inlineCode",{parentName:"p"},"work"),". Work is\nused to divide iterations across the pool of users running for a particular\nscenario. If a user does not have work, it will wait until work is available or\nuntil is is shut down by its parent scenario. This is effectively how the\ndefault loop works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def while_has_work(user_commands: UserCommands, context: dict):\n    while True:\n        if user_commands.has_work():\n            my_first_test(context)\n            # report output, exception, logs, time taken\n")),(0,o.kt)("p",null,"In some cases, it may be useful to override the user loop. This pseudocode\nillustrates running the user so it keeps making requests until it is shut down\nwithout waiting for work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from cicadad.core.decorators import scenario\n...\n\ndef while_has_work(user_commands: UserCommands, context: dict):\n    while True:\n        my_first_test(context)\n        # report output, exception, logs, time taken\n\n@scenario(engine)\n@user_loop(while_has_work)\ndef my_first_test(context):\n    assert 2 + 2 == 4\n\n    return "Passed!"\n\n...\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This type of user loop is built-in at ",(0,o.kt)("inlineCode",{parentName:"p"},"cicadad.core.scenario.while_alive"),". Don't\nwrite your own version of this!"))),(0,o.kt)("h2",{id:"usercommands"},"UserCommands"),(0,o.kt)("p",null,"You may have noticed that the User Loop is provided with an argument called\n",(0,o.kt)("inlineCode",{parentName:"p"},"UserCommands"),". This is a class available to the user to interact with the test.\nIt has the following primary functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checking for work"),(0,o.kt)("li",{parentName:"ul"},"Running the test function"),(0,o.kt)("li",{parentName:"ul"},"Sending results to the parent scenario")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../reference/user-commands"},"UserCommands")," for more information."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Also available to a User is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),". This is a dictionary containing all\nthe results of previous run scenarios. This is the basic structure of the\ncontext object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{\n    "scenario_a": {\n        "id": ...,\n        "output": ...,\n        "exception": ...,\n        "logs": ...,\n        "time_taken": ...,\n        "timestamp": ...\n    },\n    "scenario_b": ...\n}\n')),(0,o.kt)("p",null,"Organizing scenarios to run before others can be done by marking them with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@dependency")," ",(0,o.kt)("a",{parentName:"p",href:"../reference/decorators#dependency"},"decorator"),"."))}p.isMDXComponent=!0}}]);