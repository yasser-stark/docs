(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(116)),a={id:"list-controls",title:"List Controls"},s={unversionedId:"component-standards/interactions/list-controls",id:"component-standards/interactions/list-controls",isDocsHomePage:!1,title:"List Controls",description:"Disabling List Controls",source:"@site/docs/component-standards/interactions/list-controls.md",permalink:"/component-standards/interactions/list-controls",lastUpdatedAt:1653417376,sidebar:"Component Standards",previous:{title:"Control Types",permalink:"/component-standards/interactions/control-types"},next:{title:"Exporting Data",permalink:"/component-standards/interactions/exporting-data"}},c=[{value:"Disabling List Controls",id:"disabling-list-controls",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"disabling-list-controls"},"Disabling List Controls"),Object(i.b)("p",null,"There are some situations where you should disable list controls, such as sorting and filtering. In general, if a list control either doesn't make sense in the context of your component or doesn't have any effect on how the component is rendered, the control should be disabled."),Object(i.b)("p",null,"For more info on disabling list controls, see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interactions/control-types#working-with-adalo-lists-role-and-reference"}),"Working with Adalo Lists"),".",Object(i.b)("br",{parentName:"p"}),"\n","For a complete list of list controls, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/manifest-json#listcontrol"}),Object(i.b)("inlineCode",{parentName:"a"},"listControl"))," section of the component manifest docs."))}p.isMDXComponent=!0}}]);