(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),o=t(6),r=(t(0),t(98)),c={id:"actions",title:"Actions"},i={unversionedId:"docs/interactions/actions",id:"docs/interactions/actions",isDocsHomePage:!1,title:"Actions",description:"Actions in Adalo are one way to connect your component to the rest of the Adalo ecosystem. You can add actions to your component by declaring them as props in the component manifest:",source:"@site/docs/docs/interactions/actions.md",permalink:"/docs/interactions/actions",lastUpdatedAt:1644866034,sidebar:"docs",previous:{title:"Component Rendering",permalink:"/docs/interactions/component-rendering"},next:{title:"Child Components",permalink:"/docs/interactions/child-components"}},s=[{value:"Arguments as Magic Text",id:"arguments-as-magic-text",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Actions in Adalo are one way to connect your component to the rest of the Adalo ecosystem. You can add actions to your component by declaring them as props in the component manifest:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "exampleAction",\n      "displayName": "Additional Actions when Example Occurs",\n      "type": "action",\n    },\n  ]\n}\n')),Object(r.b)("p",null,"In the code, ",Object(r.b)("inlineCode",{parentName:"p"},"exampleAction")," will now refer to a function that, when called,\nwill execute the actions that the app creator specifies. You can call it like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"exampleFunc = () => {\n  const { exampleAction } = this.props;\n  if (exampleAction) exampleAction();\n};\n")),Object(r.b)("p",null,"Try to include actions wherever you can. For example, an image component should have an action for when the user clicks on the image."),Object(r.b)("h3",{id:"arguments-as-magic-text"},"Arguments as Magic Text"),Object(r.b)("p",null,"To route data from your component to actions, you need to do two things: specify\narguments in the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," and add those arguments when you call the actions\nin your code."),Object(r.b)("p",null,"manifest.json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "exampleAction",\n      "displayName": "Example Action",\n      "type": "action",\n      "arguments": [\n        {\n          "type": "number",\n          "displayName": "Argument 1"\n        },\n        {\n          "type": "text",\n          "displayName": "Argument 2"\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,'In the "recommender", where Adalo suggests different magic texts for the app creator,\nyour component will now show up as an expandable tab, and ',Object(r.b)("inlineCode",{parentName:"p"},"Argument 1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Argument 2"),'\nwill show up as options for actions under "Example Action".'),Object(r.b)("p",null,'It is datatype specific, so "Argument 2" will NOT show up if the field is number-only.'),Object(r.b)("p",null,"To actually send those values to Adalo, you must send them as arguments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'exampleFunc = () => {\n  const arg1 = 0;\n  const arg2 = "text";\n  const { exampleAction } = this.props;\n  if (exampleAction) exampleAction(arg1, arg2);\n};\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sending the values to Adalo varies slightly when dealing with files or images. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./files-and-images"}),"Files and Images"),"."))))}l.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return t?o.a.createElement(b,i(i({ref:n},p),{},{components:t})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);