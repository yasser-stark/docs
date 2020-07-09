(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),l=n(6),b=(n(0),n(122)),r={id:"manifest-json",title:"manifest.json"},i={id:"marketplace/manifest-json",isDocsHomePage:!1,title:"manifest.json",description:"A manifest file describes the properties that a particular component accepts, and which controls to display in the Adalo editor. Think of them like React PropTypes, but with types specific to Adalo. You should have one manifest file per component in your library.",source:"@site/docs/marketplace/manifest-json.md",permalink:"/marketplace/manifest-json",sidebar:"docs",previous:{title:"package.json",permalink:"/marketplace/package-json"}},c=[{value:"Keys",id:"keys",children:[{value:"<code>displayName</code>",id:"displayname",children:[]},{value:"<code>defaultWidth</code>",id:"defaultwidth",children:[]},{value:"<code>defaultHeight</code>",id:"defaultheight",children:[]},{value:"<code>props</code>",id:"props",children:[]},{value:"<code>childComponents</code>",id:"childcomponents",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>resizeX</code>",id:"resizex",children:[]},{value:"<code>resizeY</code>",id:"resizey",children:[]}]},{value:"Props",id:"props-1",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>displayName</code>",id:"displayname-1",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>default</code>",id:"default",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>control</code>",id:"control",children:[]},{value:"<code>role</code>",id:"role",children:[]},{value:"<code>reference</code>",id:"reference",children:[]},{value:"<code>dynamic</code>",id:"dynamic",children:[]}]},{value:"Reserved Prop Names",id:"reserved-prop-names",children:[{value:"<code>enabled</code>",id:"enabled-1",children:[]}]},{value:"Controls Reference",id:"controls-reference",children:[{value:"Menu Example",id:"menu-example",children:[]},{value:"Slider Example",id:"slider-example",children:[]}]},{value:"Child Components",id:"child-components",children:[{value:"Example",id:"example-8",children:[]},{value:"Keys",id:"keys-1",children:[]}]},{value:"Lists",id:"lists",children:[{value:"List Prop Type",id:"list-prop-type",children:[]},{value:"Other Props",id:"other-props",children:[]},{value:"Child Components",id:"child-components-1",children:[]},{value:"Example",id:"example-9",children:[]}]},{value:"Actions",id:"actions",children:[{value:"Arguments",id:"arguments",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A manifest file describes the properties that a particular component accepts, and which controls to display in the Adalo editor. Think of them like React PropTypes, but with types specific to Adalo. You should have one manifest file per component in your library."),Object(b.b)("h2",{id:"keys"},"Keys"),Object(b.b)("p",null,"Manifests include several important properties that help inform Adalo which controls to show in the Editor."),Object(b.b)("h3",{id:"displayname"},Object(b.b)("inlineCode",{parentName:"h3"},"displayName")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"The name of the component that will be shown in the editor"),Object(b.b)("h4",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "displayName": "Your Component Name"\n}\n')),Object(b.b)("h3",{id:"defaultwidth"},Object(b.b)("inlineCode",{parentName:"h3"},"defaultWidth")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"integer"))),Object(b.b)("p",null,"The width of a new component instance"),Object(b.b)("h4",{id:"example-1"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "defaultWidth": 160\n}\n')),Object(b.b)("h3",{id:"defaultheight"},Object(b.b)("inlineCode",{parentName:"h3"},"defaultHeight")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"integer"))),Object(b.b)("p",null,"The height of a new component instance"),Object(b.b)("h4",{id:"example-2"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "defaultHeight": 24\n}\n')),Object(b.b)("h3",{id:"props"},Object(b.b)("inlineCode",{parentName:"h3"},"props")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Array"))),Object(b.b)("p",null,"List of top-level props. See Props"),Object(b.b)("h3",{id:"childcomponents"},Object(b.b)("inlineCode",{parentName:"h3"},"childComponents")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Array"))),Object(b.b)("p",null,"List of child components. See Child Components"),Object(b.b)("h3",{id:"icon"},Object(b.b)("inlineCode",{parentName:"h3"},"icon")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String")),Object(b.b)("li",{parentName:"ul"},"Format: Relative path to image"),Object(b.b)("li",{parentName:"ul"},"Allowed File Extensions: ",Object(b.b)("inlineCode",{parentName:"li"},".png")),Object(b.b)("li",{parentName:"ul"},"Dimensions:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"min-height: 268px")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"min-width: 312px"))))),Object(b.b)("p",null,"The path to the icon for this component. This will be used as a thumbnail in the Components Panel."),Object(b.b)("h4",{id:"example-icon"},"Example Icon"),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"/static/img/example-icon.png",alt:"Example icon for a Libraries Component"}))),Object(b.b)("h3",{id:"resizex"},Object(b.b)("inlineCode",{parentName:"h3"},"resizeX")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Boolean")),Object(b.b)("li",{parentName:"ul"},"Default: ",Object(b.b)("inlineCode",{parentName:"li"},"true"))),Object(b.b)("p",null,"Whether the component can be horizontally resized"),Object(b.b)("h3",{id:"resizey"},Object(b.b)("inlineCode",{parentName:"h3"},"resizeY")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Boolean")),Object(b.b)("li",{parentName:"ul"},"Default: ",Object(b.b)("inlineCode",{parentName:"li"},"false"))),Object(b.b)("p",null,"Whether the component can be vertically resized"),Object(b.b)("h2",{id:"props-1"},"Props"),Object(b.b)("p",null,"Props is a list of properties that can be set on a particular component, with their types, default values, and other constraints."),Object(b.b)("h3",{id:"name"},Object(b.b)("inlineCode",{parentName:"h3"},"name")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"Technical name of the prop. This should be the same as the react component prop name. See ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#reserved-prop-names"}),"Reserved Prop Names")),Object(b.b)("h4",{id:"example-3"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "name": "propName"\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"displayname-1"},Object(b.b)("inlineCode",{parentName:"h3"},"displayName")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"The name to show in the Adalo editor and displayed to the end user"),Object(b.b)("h4",{id:"example-4"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "displayName": "My Component"\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"enabled"},Object(b.b)("inlineCode",{parentName:"h3"},"enabled")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("p",null,"This is used to show or hide this specific prop based on the value of another prop. To use, pass an object with a single key (the prop name) and value (the desired value)"),Object(b.b)("h4",{id:"example-5"},"Example"),Object(b.b)("p",null,'For example { "type": "outlined" } would cause this particular prop to be disabled / invisible unless the prop named "type" had the value "outlined"'),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "enabled": {\n        "type": "outlined"\n      }\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"hidden"},Object(b.b)("inlineCode",{parentName:"h3"},"hidden")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Boolean")),Object(b.b)("li",{parentName:"ul"},"Default: ",Object(b.b)("inlineCode",{parentName:"li"},"false"))),Object(b.b)("p",null,"Whether or not to show this prop in the UI. Useful for ",Object(b.b)("inlineCode",{parentName:"p"},"formChangeHandler")," or anywhere that you want the default value to be passed."),Object(b.b)("h4",{id:"example-6"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "hidden": true\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"default"},Object(b.b)("inlineCode",{parentName:"h3"},"default")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Any"))),Object(b.b)("p",null,"The default value of this prop"),Object(b.b)("h3",{id:"type"},Object(b.b)("inlineCode",{parentName:"h3"},"type")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"The type of value that is expected"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arbitrary text. This may be either static or dynamic.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arbitrary number.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean value. This will display a checkbox.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"icon")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of a material icon to use. For a full list of possible icon name, see ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://oblador.github.io/react-native-vector-icons/"}),"Material Icons"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"color")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A color string: ",Object(b.b)("inlineCode",{parentName:"td"},"#ffffff")," or ",Object(b.b)("inlineCode",{parentName:"td"},"rgba(255, 255, 255, 1)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601")," date string: ",Object(b.b)("inlineCode",{parentName:"td"},'"2018-01-01T00:00:00.000Z"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An array of dynamic data. See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"action")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A user action such as linking to another page, calling an API, etc. Your component will receive a function returning a promise. The promise will return when all of the associated actions have completed.")))),Object(b.b)("h4",{id:"example-7"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "type": "text"\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"control"},Object(b.b)("inlineCode",{parentName:"h3"},"control")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("p",null,"Customize the type of control presented to the user"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type of control to use: See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#controls-reference"}),"Controls Reference"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dependent on ",Object(b.b)("inlineCode",{parentName:"td"},"type"),": See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#controls-reference"}),"Controls Reference"))))),Object(b.b)("h3",{id:"role"},Object(b.b)("inlineCode",{parentName:"h3"},"role")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"Designate this as a special prop."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"listItem")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop will be a list child: See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:""}),"Lists"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"formValue")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop is the ",Object(b.b)("inlineCode",{parentName:"td"},"value")," of a controlled input")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"formChangeHandler")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop is the ",Object(b.b)("inlineCode",{parentName:"td"},"onChange")," of a controlled input: ",Object(b.b)("inlineCode",{parentName:"td"},"type")," should be ",Object(b.b)("inlineCode",{parentName:"td"},'"action"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"autosaveInput")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instead of the normal value, this prop will pass a ",Object(b.b)("inlineCode",{parentName:"td"},"{ value, onChange }")," object that can be used like a react ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:""}),"Controlled Component"),". Value will be typed based on ",Object(b.b)("inlineCode",{parentName:"td"},"type"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"onChange")," will be a function that takes a single argument, ",Object(b.b)("inlineCode",{parentName:"td"},"newValue"))))),Object(b.b)("h3",{id:"reference"},Object(b.b)("inlineCode",{parentName:"h3"},"reference")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("p",null,"Used in conjunction with ",Object(b.b)("inlineCode",{parentName:"p"},"role")," to reference a related prop."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"If role is ",Object(b.b)("inlineCode",{parentName:"li"},'"listItem"')," this should be a prop with ",Object(b.b)("inlineCode",{parentName:"li"},'type: "list"')),Object(b.b)("li",{parentName:"ul"},"If role is ",Object(b.b)("inlineCode",{parentName:"li"},'"formChangeHandler"')," this should be the ",Object(b.b)("inlineCode",{parentName:"li"},'"formValue"')," prop name")),Object(b.b)("h3",{id:"dynamic"},Object(b.b)("inlineCode",{parentName:"h3"},"dynamic")),Object(b.b)("h2",{id:"reserved-prop-names"},"Reserved Prop Names"),Object(b.b)("h3",{id:"enabled-1"},Object(b.b)("inlineCode",{parentName:"h3"},"enabled")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"Boolean"))),Object(b.b)("p",null,"This will be displayed as a switch if present in a child component's props"),Object(b.b)("h2",{id:"controls-reference"},"Controls Reference"),Object(b.b)("p",null,"To customize the control for a prop, you can pass an object containing type and options to the control key of a prop. The available types of controls are:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Keys"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for text and number props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dynamic")," (",Object(b.b)("inlineCode",{parentName:"td"},"Boolean")," ","|"," Default: ",Object(b.b)("inlineCode",{parentName:"td"},"true"),") - whether or not to allow dynamic text")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"checkbox")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for boolean props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"no options"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"icon")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for icon props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"no options"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"color")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for color props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"no options"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"action")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for action props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"no options"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"menu")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"special control type for text and number props"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")," (",Object(b.b)("inlineCode",{parentName:"td"},"Array"),") - see ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#menu-example"}),"Menu Example")," below")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"slider")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"special control type for number props that adds a slider to control the value"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"min")," / ",Object(b.b)("inlineCode",{parentName:"td"},"max"))))),Object(b.b)("h3",{id:"menu-example"},"Menu Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[{ "label": "Hello World", "value": "helloWorld" }]\n')),Object(b.b)("h3",{id:"slider-example"},"Slider Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "name": "slider",\n  "displayName": "Slider",\n  "type": "number",\n  "control": {\n    "type": "slider",\n    "min": 1,\n    "max": 100\n  }\n}\n')),Object(b.b)("h2",{id:"child-components"},"Child Components"),Object(b.b)("p",null,"Child components allow you to specify props for child components within your component. For example, if you create a button component, and have props specific to the icon in that button, you can optionally place those props within the ",Object(b.b)("inlineCode",{parentName:"p"},"childComponents")," section."),Object(b.b)("h3",{id:"example-8"},"Example"),Object(b.b)("p",null,"Child component props will then be passed to your component in a nested format."),Object(b.b)("p",null,"If you have the following in your ",Object(b.b)("inlineCode",{parentName:"p"},"manifest.json")," file:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  childComponents: [\n    {\n      "name": "rightIcon",\n      "displayName": "Right Icon",\n      "props": [\n        {\n          "name": "icon",\n          "displayName": "Icon",\n          "type": "icon",\n          "default": "arrow-back"\n        }\n      ]\n    }\n  ]\n}\n')),Object(b.b)("p",null,"Then your component will receive the following props:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "rightIcon": {\n    "icon": "arrow-back"\n  }\n}\n')),Object(b.b)("h3",{id:"keys-1"},"Keys"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the technical name of the child component")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"displayName")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the name to display in the Adalo editor")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"props")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a list of props for the child component. See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#props"}),"Props"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"role")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the role of this child component. See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reference")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the ",Object(b.b)("inlineCode",{parentName:"td"},"name")," of a top-level prop to which this child component is related. See ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))))),Object(b.b)("h2",{id:"lists"},"Lists"),Object(b.b)("p",null,"Components that intend to display dynamic lists of content must conform to a particular format in order to receive the necessary information."),Object(b.b)("h3",{id:"list-prop-type"},"List Prop Type"),Object(b.b)("p",null,"Lists must have one top-level prop of type ",Object(b.b)("inlineCode",{parentName:"p"},"list"),". The name of this prop will be referenced in child components."),Object(b.b)("h3",{id:"other-props"},"Other Props"),Object(b.b)("p",null,"Other top-level ",Object(b.b)("inlineCode",{parentName:"p"},"props")," that related to the ",Object(b.b)("inlineCode",{parentName:"p"},"list")," prop can be denoted with the following attributes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'role: "listItem"')),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'reference: "YOUR_LIST_PROP"'))),Object(b.b)("p",null,"This is applicable to both actions and normal props. Then the props passed to your component will be nested under ",Object(b.b)("inlineCode",{parentName:"p"},"YOUR_LIST_PROP"),"."),Object(b.b)("h3",{id:"child-components-1"},"Child Components"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"childComponents")," items can also be given the ",Object(b.b)("inlineCode",{parentName:"p"},'role: "listItem"')," and ",Object(b.b)("inlineCode",{parentName:"p"},"ref")," attributes to be considered list item props."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'role: "listItem"')),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'reference: "YOUR_LIST_PROP"'))),Object(b.b)("p",null,"Then the props passed to your component will be nested within the list items of ",Object(b.b)("inlineCode",{parentName:"p"},"YOUR_LIST_PROP")," instead of at the top level."),Object(b.b)("h3",{id:"example-9"},"Example"),Object(b.b)("p",null,"The easiest way to understand this is by looking at a simple example. Let's say you are building a simple list component."),Object(b.b)("h4",{id:"manifestjson"},Object(b.b)("inlineCode",{parentName:"h4"},"manifest.json")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  props: [\n    {\n      "name": "listItems",\n      "displayName": "Select list items",\n      "type": "list"\n    }\n  ],\n  "childComponents: [\n     {\n       "name": "itemTitle",\n       "role": "listItem",\n       "reference": "listItems",\n       "props": [\n         {\n           "name": "text",\n           "displayName": "Text",\n           "type": "text",\n           "default": "Some title text"\n         }\n       ]\n     }\n  ]\n}\n')),Object(b.b)("h4",{id:"props-2"},"Props"),Object(b.b)("p",null,"Then our component would receive the following props:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "listItems": [\n    "id": "1",\n    "itemTitle": {\n        "text": "Some title text"\n    }\n  ]\n}\n')),Object(b.b)("h2",{id:"actions"},"Actions"),Object(b.b)("h3",{id:"arguments"},"Arguments"),Object(b.b)("p",null,"Whenever you call Adalo actions, you can give that action arguments, and those arguments will be available as magic text in the edit action panel."),Object(b.b)("p",null,"To make the argument to show up in the magic text selector, you must specify the argument in the manifest.json:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "testAction",\n      "displayName": "Action",\n      "type": "action",\n      "arguments": [\n        {\n          "type": "number",\n          "displayName": "Time (milliseconds)",\n        },\n      ]\n    }\n  ]\n}\n')),Object(b.b)("p",null,"Each argument needs two options: displayName and type. Type refers to the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),"Adalo datatypes"),", excluding list and action."),Object(b.b)("p",null,"When you call the action in your code, you just have to call the action with the intended arguments:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { testAction } = this.props\ntestAction(arg1, arg2)\n")))}p.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(n),j=a,O=d["".concat(r,".").concat(j)]||d[j]||m[j]||b;return n?l.a.createElement(O,i(i({ref:t},o),{},{components:n})):l.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var o=2;o<b;o++)r[o]=n[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);