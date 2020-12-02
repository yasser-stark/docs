(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{53:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(93)),i={id:"cross-platform",title:"Cross-Platform Compatibility"},s={unversionedId:"docs/workflow/cross-platform",id:"docs/workflow/cross-platform",isDocsHomePage:!1,title:"Cross-Platform Compatibility",description:"As the library standards emphasize, it is critical that your component works across all platforms. Some technical points to help with this:",source:"@site/docs/docs/workflow/cross-platform.md",permalink:"/docs/workflow/cross-platform",lastUpdatedAt:1606948944,sidebar:"docs",previous:{title:"Publishing",permalink:"/docs/basics/publishing"},next:{title:"Testing",permalink:"/docs/workflow/testing"}},l=[{value:"How to use different versions of your code for different platforms",id:"how-to-use-different-versions-of-your-code-for-different-platforms",children:[]},{value:"Platform decision tree",id:"platform-decision-tree",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/standards/philosophy"}),"library standards")," emphasize, it is ",Object(a.b)("strong",{parentName:"p"},"critical")," that your component works across all platforms. Some technical points to help with this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Our mobile builds use React Native."),Object(a.b)("li",{parentName:"ul"},"Anything on web can use React Native Web or React."),Object(a.b)("li",{parentName:"ul"},"You can write different versions of your code for different platforms."),Object(a.b)("li",{parentName:"ul"},"Some React Native libraries are React Native Web compatible, but some are not.")),Object(a.b)("p",null,"Here are some example cases in which the component is cross platform:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The library is written entirely in React Native, but every part of the component (including any external libraries used) is React Native Web compatible. A single version of the code is used on every platform."),Object(a.b)("li",{parentName:"ul"},"The component requires an external library, and there's no React Native library that's also React Native Web compatible. So, two versions of the code are required: one for mobile that uses a React Native library, and one for web that uses a React library."),Object(a.b)("li",{parentName:"ul"},"There is no React Native library available, but there's a great React library for the component. As long as no native functionality is required there is a workaround: wrap the component in a webview on mobile. This works, but is discouraged.")),Object(a.b)("p",null,"See the decision tree at the end for an in-depth guide."),Object(a.b)("h3",{id:"how-to-use-different-versions-of-your-code-for-different-platforms"},"How to use different versions of your code for different platforms"),Object(a.b)("p",null,"Writing different codebases for different platforms is actually very easy! React Native has built-in functionality where it automatically picks which file to use based on the extension. For example, if you have two ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," files, one called ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," and the other called ",Object(a.b)("inlineCode",{parentName:"p"},"index.web.js"),", the latter will be used on web and the former will be used everywhere else. ",Object(a.b)("inlineCode",{parentName:"p"},"index.ios.js")," and ",Object(a.b)("inlineCode",{parentName:"p"},"index.android.js")," are also valid extensions."),Object(a.b)("p",null,"React Native treats mobile web (such as Safari on iOS) as web, which may not be the desired behavior. To test if platform is mobile web, you can use code like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const isMobileDevice = () => {\n  return (\n    typeof window.orientation !== "undefined" ||\n    navigator.userAgent.indexOf("IEMobile") !== -1\n  );\n};\n')),Object(a.b)("p",null,"This function treats both native mobile apps and mobile web apps as mobile."),Object(a.b)("h3",{id:"platform-decision-tree"},"Platform decision tree"),Object(a.b)("img",{src:"/img/decision-tree.png",width:"628",alt:'Click to toggle developer more to "true"'}))}p.isMDXComponent=!0},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||a;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);