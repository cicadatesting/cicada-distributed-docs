(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[951],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1651:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],s={id:"user-loops",title:"User Loops"},l={unversionedId:"reference/user-loops",id:"reference/user-loops",isDocsHomePage:!1,title:"User Loops",description:"While Has Work",source:"@site/docs/reference/user-loops.md",sourceDirName:"reference",slug:"/reference/user-loops",permalink:"/cicada-distributed-docs/docs/reference/user-loops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/user-loops.md",version:"current",frontMatter:{id:"user-loops",title:"User Loops"},sidebar:"tutorialSidebar",previous:{title:"UserCommands",permalink:"/cicada-distributed-docs/docs/reference/user-commands"}},c=[{value:"While Has Work",id:"while-has-work",children:[]},{value:"While Alive",id:"while-alive",children:[]},{value:"Iterations Per Second Limited",id:"iterations-per-second-limited",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"while-has-work"},"While Has Work"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import while_has_work\n")),(0,i.kt)("p",null,"Runs the user only if it has available work. Otherwise, the user will wait for\nwork."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def while_has_work(polling_timeout_ms: int = 1000):\n    """Run user if work is available or continue polling\n\n    Args:\n        polling_timeout_ms (UserCommands): Time to wait for work before cycling\n    """\n')),(0,i.kt)("h2",{id:"while-alive"},"While Alive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import while_has_work\n")),(0,i.kt)("p",null,"Runs the user an unlimited number of times until it is shut down by the load\nmodel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def while_alive():\n    """Run user if hasn\'t been shut down yet\n\n    Args:\n        polling_timeout_ms (UserCommands): Time to wait for work before cycling\n    """\n')),(0,i.kt)("h2",{id:"iterations-per-second-limited"},"Iterations Per Second Limited"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from cicadad.core.scenario import while_has_work\n")),(0,i.kt)("p",null,"Runs the user loop up to the limit specified every second."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def iterations_per_second_limited(limit: int):\n    """Allows a user to run a limited number of iterations per second\n\n    Args:\n        limit (int): Max iterations per second for user\n    """\n')))}p.isMDXComponent=!0}}]);