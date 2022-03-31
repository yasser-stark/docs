(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(100)),i={id:"component-listing",title:"Component Listing"},l={unversionedId:"docs/standards/component-listing",id:"docs/standards/component-listing",isDocsHomePage:!1,title:"Component Listing",description:"Make sure to follow these standards when setting the name, description, library logo, and component thumbnails:",source:"@site/docs/docs/standards/component-listing.md",permalink:"/docs/standards/component-listing",lastUpdatedAt:1648756611,sidebar:"docs",previous:{title:"Philosophy",permalink:"/docs/standards/philosophy"},next:{title:"Manifest",permalink:"/docs/standards/manifest"}},c=[{value:"Name",id:"name",children:[]},{value:"Description",id:"description",children:[]},{value:"Logo",id:"logo",children:[]},{value:"Thumbnail",id:"thumbnail",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Make sure to follow these standards when setting the name, description, library logo, and component thumbnails:"),Object(r.b)("h2",{id:"name"},"Name"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name should be:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A noun"),Object(r.b)("li",{parentName:"ul"},"Descriptive"),Object(r.b)("li",{parentName:"ul"},"No more than 3-5 words"))),Object(r.b)("li",{parentName:"ul"},'The name cannot include "Adalo" or "Component"'),Object(r.b)("li",{parentName:"ul"},"Including other brand names (such as the company making the component) is discouraged."),Object(r.b)("li",{parentName:"ul"},"Each word in the name should be capitalized, and each word should be separated by spaces.")),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The description should be 1-3 sentences and should concisely and precisely describe what the library does."),Object(r.b)("li",{parentName:"ul"},"Sentences should end in punctuation."),Object(r.b)("li",{parentName:"ul"},"Avoid using the library name or mentioning Adalo in the description."),Object(r.b)("li",{parentName:"ul"},"The description should give the maker a good idea of the functionality of the library, either in use cases or features.")),Object(r.b)("h2",{id:"logo"},"Logo"),Object(r.b)("p",null,"The logo in the marketplace is a chance for you to show off your component in a branded way. So while the thumbnail is meant to be a representation of what will actually show up when it\u2019s in the app, the logo is a chance for you to have a little more fun and it\u2019s more of an icon."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can use any colors you want."),Object(r.b)("li",{parentName:"ul"},"The image will be cropped to a circle so make sure your square image has enough space around it that things don\u2019t get cropped off when it\u2019s turned into a circle."),Object(r.b)("li",{parentName:"ul"},"The logos tend to either be brand logos or icon symbols for what it is."),Object(r.b)("li",{parentName:"ul"},"The logo shouldn\u2019t be the same thing as the thumbnail.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/library-logo-good-bad.png",alt:"Bad vs Good Logo example"}))),Object(r.b)("h2",{id:"thumbnail"},"Thumbnail"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Your thumbnail should be ",Object(r.b)("inlineCode",{parentName:"li"},"312px")," (width) by ",Object(r.b)("inlineCode",{parentName:"li"},"268px")," (height)"),Object(r.b)("li",{parentName:"ul"},"The thumbnail should be a ",Object(r.b)("strong",{parentName:"li"},"simplified vector representation")," of the component on a white background as it will appear when it\u2019s in the editor view."),Object(r.b)("li",{parentName:"ul"},"Please use the following grays (from lightest to darkest) to create the representation of the component.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"#EEEEEE"),Object(r.b)("li",{parentName:"ul"},"#E0E0E0"),Object(r.b)("li",{parentName:"ul"},"#BDBDBD"),Object(r.b)("li",{parentName:"ul"},"#9E9E9E"),Object(r.b)("li",{parentName:"ul"},"#757575"))),Object(r.b)("li",{parentName:"ul"},"Try to avoid text. Instead what works well is just using rounded rectangles as a simplified version of \u201ctext\u201d."),Object(r.b)("li",{parentName:"ul"},"Can\u2019t be a GIF.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/components-thumbnail-good-bad.png",alt:"Bad vs Good Thumbnail example"}))))}u.isMDXComponent=!0}}]);