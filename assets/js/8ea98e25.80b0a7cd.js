"use strict";(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[50],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"kubernetes",title:"Running tests on Kubernetes",sidebar_position:4},l=void 0,o={unversionedId:"guides/kubernetes",id:"guides/kubernetes",title:"Running tests on Kubernetes",description:"Cicada's scalability comes from its ability to run tests in a clustered",source:"@site/docs/guides/kubernetes.md",sourceDirName:"guides",slug:"/guides/kubernetes",permalink:"/cicada-distributed-docs/docs/guides/kubernetes",draft:!1,editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/guides/kubernetes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"kubernetes",title:"Running tests on Kubernetes",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Writing Stress Tests",permalink:"/cicada-distributed-docs/docs/guides/stress-test"},next:{title:"Working With Metrics",permalink:"/cicada-distributed-docs/docs/guides/metrics-guide"}},s={},c=[{value:"Creating a local cluster",id:"creating-a-local-cluster",level:2},{value:"Deploying an example service",id:"deploying-an-example-service",level:2},{value:"Running the tests",id:"running-the-tests",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cicada's scalability comes from its ability to run tests in a clustered\nenvironment like Kubernetes. In this guide, we'll convert our app to run in K8s\nand perform tests against it . We'll also use k3d to emulate a cluster locally."),(0,i.kt)("h2",{id:"creating-a-local-cluster"},"Creating a local cluster"),(0,i.kt)("p",null,"In this example, we'll use ",(0,i.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d"),", which is a lightweight\nversion of Kubernetes designed to run locally in Docker containers. Once you\nhave ",(0,i.kt)("inlineCode",{parentName:"p"},"k3d")," installed, setup a cluster with two node ports exposed. These will be\nused to connect to Cicada services through the CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'k3d cluster create -p "8283:30083@server[0]" -p "8284:30084@server[0]"\n')),(0,i.kt)("p",null,"Since this will be running on k3d, we will have to modify the chart a bit in\norder to use this locally. We can use\n",(0,i.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"Kustomize")," to\napply an overlay on top of the normal cicada-distributed installation. This may\nbe included with your version of ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," by default."),(0,i.kt)("p",null,"First, save the chart to a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"cicada-distributed-overlay/cicada.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir cicada-distributed-overlay\ncicada-distributed --debug start-cluster --mode=KUBE > cicada-distributed-overlay/cicada.yaml\n")),(0,i.kt)("p",null,"Next, add a patch to use the k3d NodePorts instead of the default services\n(",(0,i.kt)("inlineCode",{parentName:"p"},"cicada-distributed-overlay/patch.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: cicada-distributed-datastore-client\nspec:\n  ports:\n  - port: 8283\n    protocol: TCP\n    targetPort: 8283\n    nodePort: 30083\n  type: NodePort\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: cicada-distributed-container-service\nspec:\n  ports:\n  - port: 8284\n    protocol: TCP\n    targetPort: 8284\n    nodePort: 30084\n  type: NodePort\n")),(0,i.kt)("p",null,"Finally, add a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"cicada-distributed-overlay/kustomization.yaml")," to\nspecify how to apply the overlay:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\nresources:\n  - cicada.yaml\npatchesStrategicMerge:\n  - patch.yaml\n")),(0,i.kt)("p",null,"Run the following command to install it into the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -k cicada-distributed-overlay\n")),(0,i.kt)("h2",{id:"deploying-an-example-service"},"Deploying an example service"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"integration-test#creating-the-app"},"Integration testing guide"),", we\ncreated a simple Python API that ran in Docker Compose. Now, we will get it\nrunning in our Kubernetes cluster. Because we are running in ",(0,i.kt)("inlineCode",{parentName:"p"},"k3d")," and not\nDocker Compose, we need to build Docker images manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t cicadatesting/demo-api-app:local .\ndocker build -t cicadatesting/demo-api-flyway:local -f flyway.dockerfile .\n")),(0,i.kt)("p",null,"After building the images, import them into the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3d")," cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3d image import cicadatesting/demo-api-app:local\nk3d image import cicadatesting/demo-api-flyway:local\n")),(0,i.kt)("p",null,"Next, we can install the app into the cluster. To do this, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kube-app.yaml\n")),(0,i.kt)("p",null,"Finally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),". You should see the app and database alongside\nthe Cicada pods."),(0,i.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,i.kt)("p",null,"Once an example app is running, we can run Cicada tests against it. Navigate to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cicadatesting/cicada-distributed-demos/tree/main/rest-api/integration-tests"},"integration-tests"),"\ndirectory. Like with the example app, we need to build and import the test to\nthe cluster. To build, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t cicadatesting/cicada-distributed-demo-integration-test:local .\n")),(0,i.kt)("p",null,"Next, import the image with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3d image import cicadatesting/cicada-distributed-demo-integration-test:local\n")),(0,i.kt)("p",null,"Finally, start the test by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cicada-distributed --debug run --mode=KUBE --image=cicadatesting/cicada-distributed-demo-integration-test:local\n")),(0,i.kt)("p",null,"You should see the test spin up and execute the 4 test scenarios."))}u.isMDXComponent=!0}}]);