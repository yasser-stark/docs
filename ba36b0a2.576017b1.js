(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(100)),r={id:"control-types",title:"Control Types"},l={unversionedId:"docs/interactions/control-types",id:"docs/interactions/control-types",isDocsHomePage:!1,title:"Control Types",description:"These are some advanced properties you can add to your Adalo props to the way they look in the editor and how they interact with Adalo.",source:"@site/docs/docs/interactions/control-types.md",permalink:"/docs/interactions/control-types",lastUpdatedAt:1648756611,sidebar:"docs",previous:{title:"Child Components",permalink:"/docs/interactions/child-components"},next:{title:"Conditional Control",permalink:"/docs/interactions/conditional-control"}},c=[{value:"Prop-Type &quot;Control&quot;",id:"prop-type-control",children:[{value:"Slider",id:"slider",children:[]},{value:"Menu",id:"menu",children:[]}]},{value:"Working with Adalo Lists (Role and Reference)",id:"working-with-adalo-lists-role-and-reference",children:[]},{value:"Disabling List Controls",id:"disabling-list-controls",children:[]},{value:"Modifying Values in the Database",id:"modifying-values-in-the-database",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These are some advanced properties you can add to your Adalo props to the way they look in the editor and how they interact with Adalo."),Object(i.b)("h2",{id:"prop-type-control"},'Prop-Type "Control"'),Object(i.b)("p",null,"You can add the key ",Object(i.b)("inlineCode",{parentName:"p"},"control")," to any Adalo prop, whose value is an object."),Object(i.b)("h3",{id:"slider"},"Slider"),Object(i.b)("p",null,"For example, if you want your number input to show up in the editor as a slider, you can add this control prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  props: [\n    {\n      "name": "rounding",\n      "displayName": "Rounding",\n      "type": "number",\n      "default": 4,\n      "control": { "type": "slider", "max": 18, "min": 0 }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Which will make the number input look like this in the editor:"),Object(i.b)("img",{src:"/img/slider.gif",alt:"Slider Example"}),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"control")," object has the key ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", which corresponds to the control type. The other values inside the control object differ depending on the control type."),Object(i.b)("p",null,"You can find a full list of control types in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/api-reference/configuration/manifest-json"}),"component manifest"),", but here are a few other common control types:"),Object(i.b)("h3",{id:"menu"},"Menu"),Object(i.b)("p",null,"To make a prop show up as a dropdown menu, you can add the control type of ",Object(i.b)("inlineCode",{parentName:"p"},"menu"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "position",\n      "displayName": "Position",\n      "type": "number",\n      "default": 1,\n      "control": {\n        "type": "menu",\n        "options": [\n          { "label": "Option 0", "value": 0 },\n          { "label": "Option 1", "value": 1 },\n          { "label": "Option 2", "value": 2 }\n        ]\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Which will look like this in the editor:"),Object(i.b)("img",{src:"/img/menu.gif",alt:"Menu Example"}),Object(i.b)("h2",{id:"working-with-adalo-lists-role-and-reference"},"Working with Adalo Lists (Role and Reference)"),Object(i.b)("p",null,"One data type a prop can be is a list, and often you want other props to be able to reference the current list item. In order to do this, you must add two properties to that individual Adalo prop: ",Object(i.b)("inlineCode",{parentName:"p"},"role")," and ",Object(i.b)("inlineCode",{parentName:"p"},"reference"),". See the example below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "props": [\n        {\n            "name": "listProp",\n            "displayName": "What is this a list of?",\n            "type": "list"\n        },\n        {\n            "name": "listItemAction",\n            "displayName": "Click actions on list item",\n            "type": "action",\n            "role": "listItem",\n            "reference": "listProp"\n        }\n    ]\n}\n')),Object(i.b)("p",null,"In order to access the current list item as magic text within the action, you must specify both ",Object(i.b)("inlineCode",{parentName:"p"},"role")," and ",Object(i.b)("inlineCode",{parentName:"p"},"reference"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"role")," should be set to ",Object(i.b)("inlineCode",{parentName:"p"},"listItem"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"reference")," should be set to the name of the list property, in this case ",Object(i.b)("inlineCode",{parentName:"p"},'"listProp"'),"."),Object(i.b)("p",null,"You can find more information about this in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.adalo.com/api-reference/configuration/manifest-json#role"}),"component manifest")," documentation."),Object(i.b)("h2",{id:"disabling-list-controls"},"Disabling List Controls"),Object(i.b)("p",null,"Makers have access to a number of controls when working with lists. If you wish to disable any of these controls, that can be done by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"listControl")," prop to your ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," file. All list controls will default to being visible unless specified otherwise. Below is an example of how you can disable the option for a user to sort and filter the items in a list:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  props: [\n    {\n      "name": "listItems",\n      "displayName": "Select list items",\n      "type": "list",\n      "listControl": {"sort": false, "filter": false},\n    }\n  ],\n}\n')),Object(i.b)("p",null,"This will change the editor from its default appearance:"),Object(i.b)("img",{src:"/img/Default-List-Control.png"}),Object(i.b)("p",null,"To this, where the ",Object(i.b)("inlineCode",{parentName:"p"},"sort")," and ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," controls have been disabled:"),Object(i.b)("img",{src:"/img/List-Control-Filter&Sort-Disabled.png"}),Object(i.b)("p",null,"You can find more information about the ",Object(i.b)("inlineCode",{parentName:"p"},"listControl")," prop and the different list controls in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/api-reference/configuration/manifest-json#listcontrol"}),"component manifest")," documentation."),Object(i.b)("h2",{id:"modifying-values-in-the-database"},"Modifying Values in the Database"),Object(i.b)("p",null,"Sometimes you want your component to actually directly modify values in the database. For example, a switch component would be pretty useless if it couldn't switch a property in the database. All you have to do to get access to the database is add the role ",Object(i.b)("inlineCode",{parentName:"p"},"autosaveInput")," to a component. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "controlledValue",\n      "displayName": "What Property Does This Adjust?",\n      "type": "number",\n      "role": "autosaveInput"\n    },\n  ]\n}\n\n')),Object(i.b)("p",null,"Now, a prop ",Object(i.b)("inlineCode",{parentName:"p"},"controlledValue")," will be passed to the React component with the structure: ",Object(i.b)("inlineCode",{parentName:"p"},"{ value: x, onChange: f() }"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"value")," is the value of that property in the database, and ",Object(i.b)("inlineCode",{parentName:"p"},"onChange")," is a function you can call to change that value."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"onChange")," function with the ",Object(i.b)("inlineCode",{parentName:"p"},"file")," or ",Object(i.b)("inlineCode",{parentName:"p"},"image")," datatype varies slightly. For more information, see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"./files-and-images"}),"Files and Images"),"."))),Object(i.b)("p",null,"It's a little tricky to test this prop because getting access to an individually adjustable prop isn't trivial. There are two quick ways to do this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Add a property to the users table that is the same datatype as the property in your component. Then, log in the user somewhere on your test app and that component will then get access to "Logged in user => property".'),Object(i.b)("li",{parentName:"ul"},"Make a list, and then make a click property of that list link the user to another screen. The next screen will then have access to the individual props of current list item.")),Object(i.b)("p",null,"Here's what the first one looks like in the editor:"),Object(i.b)("img",{src:"/img/autosaveInput-example-loggedInUser.png",alt:"Autosave Input Example"}),Object(i.b)("p",null,"And here's what the second one looks like in the editor:"),Object(i.b)("img",{src:"/img/autosaveInput-example-lists.png",alt:"Autosave Input Example"}))}p.isMDXComponent=!0}}]);