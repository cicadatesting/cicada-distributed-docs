(self.webpackChunkcicada_distributed_docs=self.webpackChunkcicada_distributed_docs||[]).push([[721],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={id:"integration-test",title:"Writing Integration Tests",sidebar_position:1},u=void 0,l={unversionedId:"guides/integration-test",id:"guides/integration-test",isDocsHomePage:!1,title:"Writing Integration Tests",description:"Cicada was originally created to run integration tests against a running version",source:"@site/docs/guides/integration-test.md",sourceDirName:"guides",slug:"/guides/integration-test",permalink:"/cicada-distributed-docs/docs/guides/integration-test",editUrl:"https://github.com/cicadatesting/cicada-distributed-docs/edit/main/docs/guides/integration-test.md",version:"current",sidebarPosition:1,frontMatter:{id:"integration-test",title:"Writing Integration Tests",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scenarios",permalink:"/cicada-distributed-docs/docs/introduction/scenarios"},next:{title:"Writing Load Tests",permalink:"/cicada-distributed-docs/docs/guides/load-test"}},c=[{value:"Creating the App",id:"creating-the-app",children:[]},{value:"Creating the Test",id:"creating-the-test",children:[{value:"Post User",id:"post-user",children:[]},{value:"Post User With Duplicate Email",id:"post-user-with-duplicate-email",children:[]},{value:"Get User",id:"get-user",children:[]},{value:"Get User With Invalid ID",id:"get-user-with-invalid-id",children:[]}]},{value:"Running the Test",id:"running-the-test",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cicada was originally created to run integration tests against a running version\nof your code. In this guide, we'll build integration tests to make requests on\na simple API."),(0,i.kt)("h2",{id:"creating-the-app"},"Creating the App"),(0,i.kt)("p",null,"First, clone the app from ",(0,i.kt)("inlineCode",{parentName:"p"},"cicada-distributed-demos")," and navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"rest-api")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cicadatesting/cicada-distributed-demos.git\ncd rest-api/app\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"app.py"),", you'll notice the code for 2 endpoints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'...\n\n@app.post("/users/")\nasync def create_user(user: User):\n    with engine.connect() as connection:\n        try:\n            result = connection.execute(\n                "INSERT INTO users (name, age, email) VALUES (%s, %s, %s)",\n                user.name,\n                user.age,\n                user.email,\n            )\n\n            return {"id": result.lastrowid}\n        except IntegrityError:\n            raise HTTPException(\n                status_code=400, detail=f"Email {user.email} already taken"\n            )\n\n\n@app.get("/users/{user_id}")\nasync def get_user_by_id(user_id):\n    with engine.connect() as connection:\n        users = list(connection.execute("SELECT * FROM users WHERE id=%s", user_id))\n\n        if users == []:\n            raise HTTPException(status_code=404, detail=f"User {user_id} not found")\n\n        return users[0]\n')),(0,i.kt)("p",null,"To test this, we'll want to verify 4 things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create User"),(0,i.kt)("li",{parentName:"ul"},"Create User with already taken email"),(0,i.kt)("li",{parentName:"ul"},"Get User"),(0,i.kt)("li",{parentName:"ul"},"Get User (not found)")),(0,i.kt)("h2",{id:"creating-the-test"},"Creating the Test"),(0,i.kt)("p",null,"To begin, create an integration test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir integration-tests\ncd integration-tests\ncicada-distributed init .\n")),(0,i.kt)("p",null,"Before we start, we should update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests"),"\npackage so we can make HTTP requests to the API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:"{3}","{3}":!0},'FROM cicadatesting/cicada-distributed-base-image:latest\n\nRUN pip install requests\n\nCOPY . .\n\nENTRYPOINT ["python", "-u", "test.py"]\n')),(0,i.kt)("h3",{id:"post-user"},"Post User"),(0,i.kt)("p",null,"Next, open ",(0,i.kt)("inlineCode",{parentName:"p"},"test.py")," and make a scenario to create a user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'...\nimport requests\n\n@scenario(engine)\ndef post_user(context):\n    response = requests.post(\n        url="http://172.17.0.1:8080/users",\n        json={\n            "name": "jeremy",\n            "age": 23,\n            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",\n        },\n    )\n\n    assert response.status_code == 200\n')),(0,i.kt)("p",null,"This scenario will make a POST request to the API and create a user with a\nrandom email address."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The host for the URL in this request is ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.1"),". This is the internal\nDocker host for Linux. Your host may be different (like ",(0,i.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),").\nMake sure to change this if it applies to you or run the Cicada containers in\nthe same network as the API containers. You can override the network with\nthe flag ",(0,i.kt)("inlineCode",{parentName:"p"},"cicada-distribtued run --network {network}"),"."))),(0,i.kt)("h3",{id:"post-user-with-duplicate-email"},"Post User With Duplicate Email"),(0,i.kt)("p",null,"We should also test that users with the same email as another user fail. To do\nthis, modify ",(0,i.kt)("inlineCode",{parentName:"p"},"post_user")," to return the email created and create another scenario\nto use that same email in a request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{6,13,21-33}","{6,13,21-33}":!0},'from cicadad.core.decorators import dependency\n...\n\n@scenario(engine)\ndef post_user(context):\n    email = f"{str(uuid.uuid4())[:8]}@gmail.com"\n\n    response = requests.post(\n        url="http://172.17.0.1:8080/users",\n        json={\n            "name": "jeremy",\n            "age": 23,\n            "email": email,\n        },\n    )\n\n    assert response.status_code == 200\n    return email\n\n\n@scenario(engine)\n@dependency(post_user)\ndef post_user_duplicate_email(context):\n    response = requests.post(\n        url="http://172.17.0.1:8080/users",\n        json={\n            "name": "jeremy",\n            "age": 23,\n            "email": context["post_user"]["output"],\n        },\n    )\n\n    assert response.status_code == 400\n')),(0,i.kt)("p",null,"This scenario will make sure that a ",(0,i.kt)("inlineCode",{parentName:"p"},"400")," response is returned when trying to\ncreate a user with the same email."),(0,i.kt)("h3",{id:"get-user"},"Get User"),(0,i.kt)("p",null,"In order to test the endpoint for retrieving a user, we will need the ID from\nthe first scenario. We can modify it to return the ID as well as the email, and\nuse it in ",(0,i.kt)("inlineCode",{parentName:"p"},"get_user")," scenario."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{15-20,31,42}","{15-20,31,42}":!0},'@scenario(engine)\ndef post_user(context):\n    email = f"{str(uuid.uuid4())[:8]}@gmail.com"\n\n    response = requests.post(\n        url="http://172.17.0.1:8080/users",\n        json={\n            "name": "jeremy",\n            "age": 23,\n            "email": email,\n        },\n    )\n\n    assert response.status_code == 200\n    body = response.json()\n\n    return {\n        "email": email,\n        "id": body["id"]\n    }\n\n\n@scenario(engine)\n@dependency(post_user)\ndef post_user_duplicate_email(context):\n    response = requests.post(\n        url="http://172.17.0.1:8080/users",\n        json={\n            "name": "jeremy",\n            "age": 23,\n            "email": context["post_user"]["output"]["email"],\n        },\n    )\n\n    assert response.status_code == 400\n\n\n@scenario(engine)\n@dependency(post_user)\ndef get_user(context):\n    response = requests.get(\n        url=f"http://172.17.0.1:8080/users/{context[\'post_user\'][\'output\'][\'id\']}",\n    )\n\n    assert response.status_code == 200\n')),(0,i.kt)("h3",{id:"get-user-with-invalid-id"},"Get User With Invalid ID"),(0,i.kt)("p",null,"Finally, we need to test that requests for users where the ID does not exist\nfail. Create a test that will use ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," as the ID for the GET users endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@scenario(engine)\ndef get_user_not_found(context):\n    response = requests.get(\n        url="http://172.17.0.1:8080/users/0",\n    )\n\n    assert response.status_code == 404\n')),(0,i.kt)("h2",{id:"running-the-test"},"Running the Test"),(0,i.kt)("p",null,"Once all 4 scenarios have been created, we can run the test. To run, enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cicada-distributed run\n")),(0,i.kt)("p",null,"You should see the scenarios complete. Congratulations! You've tested a real API\nwith Cicada."))}p.isMDXComponent=!0}}]);