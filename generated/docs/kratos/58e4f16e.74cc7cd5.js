(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{207:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(2),s=r(9),a=(r(0),r(329)),o=r(344),c={id:"password-reset",title:"Password Reset"},i={id:"self-service/flows/account-recovery/password-reset",title:"Password Reset",description:"<Mermaid",source:"@site/docs/self-service/flows/account-recovery/password-reset.mdx",permalink:"/kratos/docs/next/self-service/flows/account-recovery/password-reset",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/account-recovery/password-reset.mdx",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1593616768},d=[],u={rightToc:d};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o.a,{chart:"\nstateDiagram-v2\n\t[*] --\x3e choose_method\n\trecovered --\x3e [*]\n\tchoose_method --\x3e sent_email\n\tsent_email --\x3e sent_email\n\tsent_email --\x3e passed_challenge\n\tpassed_challenge --\x3e recovered\n",mdxType:"Mermaid"}))}l.isMDXComponent=!0},344:function(e,t,r){"use strict";var n=r(0),s=r.n(n),a=r(358),o=r.n(a),c=r(127),i=r.n(c),d=r(336),u=r.n(d);o.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t=e.chart;return Object(n.useEffect)((function(){o.a.contentLoaded()}),[]),s.a.createElement("div",{className:u()(i.a.graph,"mermaid")},t)}},367:function(e,t,r){var n={"./locale":342,"./locale.js":342};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=367}}]);