(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(116)),i={id:"component-rendering",title:"Component Rendering"},c={unversionedId:"docs/interactions/component-rendering",id:"docs/interactions/component-rendering",isDocsHomePage:!1,title:"Component Rendering",description:"Listed below are a few tips and tricks having to do with component rendering.",source:"@site/docs/docs/interactions/component-rendering.md",permalink:"/docs/interactions/component-rendering",lastUpdatedAt:1653417376,sidebar:"docs",previous:{title:"Icons",permalink:"/docs/design/icons"},next:{title:"Actions",permalink:"/docs/interactions/actions"}},d=[{value:"Platform-Based Rendering",id:"platform-based-rendering",children:[]},{value:"Render Something Different in the Editor",id:"render-something-different-in-the-editor",children:[]},{value:"Forcing a React Component to Re-Render",id:"forcing-a-react-component-to-re-render",children:[]}],s={rightToc:d};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Listed below are a few tips and tricks having to do with component rendering."),Object(a.b)("h2",{id:"platform-based-rendering"},"Platform-Based Rendering"),Object(a.b)("p",null,"Sometimes, you want to load different versions of a file depending on what platform the user is on. React Native makes this incredibly easy: all you have to do is add an extra extension. For example, if you wanted to make a version of ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," specifically for web, all you have to do is make a new file with the name ",Object(a.b)("inlineCode",{parentName:"p"},"index.web.js"),". The original ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," will act as the default, and ",Object(a.b)("inlineCode",{parentName:"p"},"index.web.js")," will automatically be used on web. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/cross-platform"}),'"Cross-Platform Compatibility"')," for more details."),Object(a.b)("h2",{id:"render-something-different-in-the-editor"},"Render Something Different in the Editor"),Object(a.b)("p",null,"There are times you want to render something different, like a placeholder image, in the editor. This is very easy to do in Adalo. Every component is passed an ",Object(a.b)("inlineCode",{parentName:"p"},"editor")," prop, which is true when the component is rendered in the editor and false otherwise. This allows you to conditionally render different components based on context."),Object(a.b)("h2",{id:"forcing-a-react-component-to-re-render"},"Forcing a React Component to Re-Render"),Object(a.b)("p",null,"Most React and React Native components automatically re-render when their props change. This makes changing values in the editor very intuitive - changed values automatically get reflected in the editor."),Object(a.b)("p",null,"There are some times when this is not the case, however. For example, many icon components don't automatically re-render when their ",Object(a.b)("inlineCode",{parentName:"p"},"size")," prop is changed. To get around this limitation, you can add a ",Object(a.b)("inlineCode",{parentName:"p"},"key")," prop to the component, and make its value dynamically tied to the prop that isn't working. In the Icon example, this might look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react'\nimport { View } from 'react-native'\nimport Icon from 'react-native-vector-icons/MaterialIcons'\n\nclass AdaloComponent extends Component {\n    render() {\n        const { iconSize } = this.props\n        return(\n            <Icon name=\"play\" size={iconSize} key={`playIcon.${iconSize}`}>\n        )\n    }\n}\n")),Object(a.b)("p",null,"The Icon component will now be forced to re-render whenever its key changes value, and thus when iconSize changes value."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you use key in multiple places, make sure each key is unique. For example, if you have 3 icons that each have a key value, each key must be unique."))))}l.isMDXComponent=!0}}]);