(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(9),a=(n(0),n(332)),s={id:"security-questions-best-practice",title:"Choosing Security Questions"},i={id:"guides/security-questions-best-practice",isDocsHomePage:!1,title:"Choosing Security Questions",description:"Security questions are currently not supported for this flow, but might be added",source:"@site/docs/guides/security-questions.mdx",permalink:"/kratos/docs/next/guides/security-questions-best-practice",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/security-questions.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1593685704,latestVersionMainDocPermalink:"/kratos/docs"},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Security questions are currently not supported for this flow, but might be added\nin a future version of ORY Kratos."),Object(a.b)("p",null,"This section contains an overview of picking the right security questions.\nAnother good resource is\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Choosing_and_Using_Security_Questions_Cheat_Sheet.html"}),"Choosing and Using Security Questions Cheat Sheet"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"One option is to allow the user to self-construct their own questions. The\nproblem with this though is that you end up with either painfully obvious\nquestions:"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"What colour is the sky?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"How do you spell \u201cpassword\u201d?"))),Object(a.b)("p",{parentName:"blockquote"},"Questions which can put people in an uncomfortable position when a human uses\nthe secret question for verification (such as in a call centre):"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Who did I sleep with at the Christmas party?")),Object(a.b)("p",{parentName:"blockquote"},"When it comes to secret questions, people need to be saved from themselves! In\nother words, the site itself should define the secret question, or rather\ndefine a series of secret questions from which the user can choose. And not\njust choose one either; ideally, the user should define two or more secret\nquestions at the time of account registration which can then be used as a\nsecond channel of identity verification. Having multiple questions adds a\nhigher degree of confidence to the verification process plus gives you\nopportunity to add randomness (not always show the same question) plus\nprovides a bit of redundancy should someone legitimate forget an answer."),Object(a.b)("p",{parentName:"blockquote"},"So what makes a good secret question? There are a few different factors:"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"It should be concise \u2013 the question is to the point and unambiguous"),Object(a.b)("li",{parentName:"ul"},"The answer is specific \u2013 you don\u2019t want a question which could be answered\nin different ways by the same person"),Object(a.b)("li",{parentName:"ul"},"The possible answers must be diverse \u2013 a question about someone\u2019s favourite\ncolour would result in a small subset of possible answers"),Object(a.b)("li",{parentName:"ul"},"Answer discovery should be hard \u2013 if you can readily find the answer for\nanyone (think high-profile people) then it\u2019s no good"),Object(a.b)("li",{parentName:"ul"},"The answer must be constant over time \u2013 asking for someone\u2019s favourite movie\nmay result in a different answer a year from now")),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.troyhunt.com/everything-you-ever-wanted-to-know/"}),"Source"))),Object(a.b)("p",null,"Here are some good examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'What was the first concert you ever went to and where? (e.g. "Pink Floyd at\nGotham City Stadium")'),Object(a.b)("li",{parentName:"ul"},"...")))}l.isMDXComponent=!0},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(s,".").concat(h)]||p[h]||b[h]||a;return n?r.a.createElement(d,i(i({ref:t},u),{},{components:n})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);