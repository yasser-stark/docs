(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return t?r.a.createElement(h,i(i({ref:n},l),{},{components:t})):r.a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(2),r=t(6),a=(t(0),t(100)),c={id:"child-components",title:"Child Components"},i={unversionedId:"docs/interactions/child-components",id:"docs/interactions/child-components",isDocsHomePage:!1,title:"Child Components",description:"You can use childComponents to group props in a logical way. Child components add extra accordions to the left editor panel, and group props into nested objects in your code.",source:"@site/docs/docs/interactions/child-components.md",permalink:"/docs/interactions/child-components",lastUpdatedAt:1648756611,sidebar:"docs",previous:{title:"Actions",permalink:"/docs/interactions/actions"},next:{title:"Control Types",permalink:"/docs/interactions/control-types"}},p=[{value:"Child Component Editor States",id:"child-component-editor-states",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"childComponents")," to group props in a logical way. Child components add extra accordions to the left editor panel, and group props into nested objects in your code."),Object(a.b)("p",null,"Here's what a component manifest with child components can look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "prop1",\n      "displayName": "Prop 1",\n      "type": "number",\n      "default": 0\n    },\n  ],\n  childComponents: [\n    {\n      "name": "childComponent",\n      "displayName": "Child Component",\n      "props": [\n        {\n          "name": "prop2",\n          "displayName": "Prop 2",\n          "type": "text",\n          "default": "Default Text"\n        }\n      ]\n    }\n  ]\n}\n')),Object(a.b)("p",null,'In the editor, there will be a main accordion with the component\'s name and another accordion labelled "Child Component". The main accordion will have "Prop 1" and the "Child Component" accordion will have "Prop 2". Here\'s what the props object will look like in the component code:'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "prop1": 0,\n  "childComponent": {\n    "prop2": "Default Text"\n  }\n}\n')),Object(a.b)("h2",{id:"child-component-editor-states"},"Child Component Editor States"),Object(a.b)("p",null,"Sometimes a child component corresponds to a specific state of the component. For example, Adalo's built-in list components have an empty state. When you open that child component in the editor,the component renders the empty state. This makes it much easier for makers to configure the empty state."),Object(a.b)("p",null,"Here's how it works - inside the editor, every component gets passed in a prop called ",Object(a.b)("inlineCode",{parentName:"p"},"openAccordion"),", which is the name of the child component that is currently open. The values are either ",Object(a.b)("inlineCode",{parentName:"p"},"null"),", ",Object(a.b)("inlineCode",{parentName:"p"},"root"),", or the name of the child component."),Object(a.b)("p",null,"Check out the code ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/AdaloHQ/material-components-library/blob/main/src/SimpleList/index.js#L127"}),"here"),"."))}s.isMDXComponent=!0}}]);