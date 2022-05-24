(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(116)),c={id:"control-types",title:"Control Types"},i={unversionedId:"component-standards/interactions/control-types",id:"component-standards/interactions/control-types",isDocsHomePage:!1,title:"Control Types",description:'Prop-Type "Control"',source:"@site/docs/component-standards/interactions/control-types.md",permalink:"/component-standards/interactions/control-types",lastUpdatedAt:1653417376,sidebar:"Component Standards",previous:{title:"Child Components",permalink:"/component-standards/interactions/child-components"},next:{title:"List Controls",permalink:"/component-standards/interactions/list-controls"}},p=[{value:"Prop-Type &quot;Control&quot;",id:"prop-type-control",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prop-type-control"},'Prop-Type "Control"'),Object(a.b)("p",null,"There are some situations where your prop should use a specialized control type, including, but not limited to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"slider")," should be used for any number input with a minimum and maximum value."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"menu")," should be used in any instance where the maker must choose from a fixed number of options.")),Object(a.b)("p",null,"For more information on control types, see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interactions/control-types"}),"Control Types")," documentation.",Object(a.b)("br",{parentName:"p"}),"\n","For a complete list of control types, see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/manifest-json#controls-reference"}),"Controls Reference")," in the component manifest docs."))}l.isMDXComponent=!0}}]);