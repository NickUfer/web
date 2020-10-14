(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),o=(n(0),n(411)),a={id:"kratos-identities-delete",title:"kratos identities delete",description:"kratos identities delete Delete identities by ID"},s={unversionedId:"cli/kratos-identities-delete",id:"version-v0.5/cli/kratos-identities-delete",isDocsHomePage:!1,title:"kratos identities delete",description:"kratos identities delete Delete identities by ID",source:"@site/versioned_docs/version-v0.5/cli/kratos-identities-delete.md",slug:"/cli/kratos-identities-delete",permalink:"/kratos/docs/cli/kratos-identities-delete",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-identities-delete.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"kratos identities",permalink:"/kratos/docs/cli/kratos-identities"},next:{title:"kratos identities get",permalink:"/kratos/docs/cli/kratos-identities-get"}},c=[{value:"kratos identities delete",id:"kratos-identities-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-delete"},"kratos identities delete"),Object(o.b)("p",null,"Delete identities by ID"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command deletes one or more identities by ID. To delete an identity by some selector, e.g. the recovery email address, use the list command in combination with jq."),Object(o.b)("p",null,"We have to admit, this is not easy if you don't speak jq fluently. What about opening an issue and telling us what predefined selectors you want to have? ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/new/choose"}),"https://github.com/ory/kratos/issues/new/choose")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kratos identities delete <id-0 [id-1 ...]> [flags]\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'To delete the identity with the recovery email address "foo@bar.com", run:\n\n    $ kratos identities delete $(kratos identities list --format json | jq -r \'map(select(.recovery_addresses[].value == "foo@bar.com")) | .[].id\')\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help   help for delete\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"  -e, --endpoint string   The URL of ORY Kratos' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"kratos-identities"}),"kratos identities")," - Tools to interact with remote identities")))}l.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return n?i.a.createElement(m,s(s({ref:t},d),{},{components:n})):i.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);