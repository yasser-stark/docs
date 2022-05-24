(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(116)),l={id:"philosophy",title:"Philosophy"},i={unversionedId:"component-standards/philosophy",id:"component-standards/philosophy",isDocsHomePage:!1,title:"Philosophy",description:"When brainstorming a new component to create, make sure that your idea falls within Adalo's definition of a component and that it follows the core design principles.",source:"@site/docs/component-standards/philosophy.md",permalink:"/component-standards/philosophy",lastUpdatedAt:1653417376,sidebar:"Component Standards",next:{title:"package.json",permalink:"/component-standards/configuration/package-json"}},s=[{value:"What is a component? (And what is not)",id:"what-is-a-component-and-what-is-not",children:[]},{value:"Design Principles",id:"design-principles",children:[{value:"Single-Purpose",id:"single-purpose",children:[]},{value:"Cross-Platform",id:"cross-platform",children:[]},{value:"Configurable",id:"configurable",children:[]},{value:"Universal",id:"universal",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When brainstorming a new component to create, make sure that your idea falls within Adalo's definition of a component and that it follows the core design principles."),Object(r.b)("h2",{id:"what-is-a-component-and-what-is-not"},"What is a component? (And what is not)"),Object(r.b)("p",null,"A component is a functional unit within Adalo. They are capable of executing their own logic based on properties given to it by the app, as outlined by the component."),Object(r.b)("p",null,"Components must:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Have a visual element"),Object(r.b)("li",{parentName:"ul"},"In the vast majority of use cases, have some way for the user to interact with the component.")),Object(r.b)("h2",{id:"design-principles"},"Design Principles"),Object(r.b)("p",null,"At its core, every single component must follow these four main design principles by being: Single-Purpose, Cross-Platform, Configurable, and Universal."),Object(r.b)("h3",{id:"single-purpose"},"Single-Purpose"),Object(r.b)("p",null,"Each Adalo Library should strive to solve one particular use case, and solve it well. Don\u2019t be a jack of all trades. Be the master of one."),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u2705 A video player component"),Object(r.b)("li",{parentName:"ul"},"\u274c A component that plays video or audio files")),Object(r.b)("h3",{id:"cross-platform"},"Cross-Platform"),Object(r.b)("p",null,"Adalo components are built in React Native, and that means it\u2019s easy to build for iOS, Android, and Web! Adalo\u2019s users expect components to work consistently across all three platforms, and as developers, we should strive to honor this."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Some behaviors and styles can be platform specific if those are behaviors that are native to those platforms."),Object(r.b)("li",{parentName:"ul"},"The same functionality support should exist across all three platforms."),Object(r.b)("li",{parentName:"ul"},"It is your responsibility to test components on all three platforms and ensure they work properly. We will test this during the review process.")),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u2705 Google maps component that works on Android, iOS, and Web"),Object(r.b)("li",{parentName:"ul"},"\u2705 Maps component that uses Mapbox for Web, Google Maps on Android, and Apple Maps on iOS"),Object(r.b)("li",{parentName:"ul"},"\u274c Web-only mapbox component that cannot be used on other platforms")),Object(r.b)("h3",{id:"configurable"},"Configurable"),Object(r.b)("p",null,"Components should strive to be highly configurable & general purpose to allow for maximum flexibility in a variety of different use cases."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Styles elements such as color, borders, padding, and font size & weight should be customizable"),Object(r.b)("li",{parentName:"ul"},"Colors should default to the apps branding colors"),Object(r.b)("li",{parentName:"ul"},"Dates & Numbers should be customizable"),Object(r.b)("li",{parentName:"ul"},"Users should be able to add actions to any interaction with your component"),Object(r.b)("li",{parentName:"ul"},"If you\u2019re component is \u201cfeature-rich,\u201d give users the ability to disable the features that aren\u2019t strictly necessary")),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u2705 Slider with colors, minimum, maximum, and step controls"),Object(r.b)("li",{parentName:"ul"},"\u274c Pre-styled slider that allows users to select values from 1-5")),Object(r.b)("h3",{id:"universal"},"Universal"),Object(r.b)("p",null,"Adalo app creators and their users live in all parts of the world and all components should work regardless of someone\u2019s location."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All text should be configurable and not hard-coded"),Object(r.b)("li",{parentName:"ul"},"Components should support customization for other international standards such as dates and currencies."),Object(r.b)("li",{parentName:"ul"},"Components should be accessible to all users")),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u2705 A calendar component that lets users specify a language and first day of the week"),Object(r.b)("li",{parentName:"ul"},"\u274c An english calendar that starts on Sundays")))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);