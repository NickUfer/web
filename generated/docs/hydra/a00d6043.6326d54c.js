(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{201:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return h}));var a=t(2),o=t(6),i=(t(0),t(315)),r=t(316),s=(t(322),t(323)),c=t(324),l={id:"login",title:"Implementing the Login Endpoint",sidebar_label:"Login Endpoint"},d={unversionedId:"guides/login",id:"version-v1.6/guides/login",isDocsHomePage:!1,title:"Implementing the Login Endpoint",description:"Please read the Login Flow Documentation first!",source:"@site/versioned_docs/version-v1.6/guides/login.mdx",permalink:"/hydra/docs/v1.6/guides/login",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/login.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar_label:"Login Endpoint",sidebar:"version-v1.6/docs",previous:{title:"Limitations",permalink:"/hydra/docs/v1.6/limitations"},next:{title:"Implementing the Consent Endpoint & UI",permalink:"/hydra/docs/v1.6/guides/consent"}},m=[{value:"Implementing the Login HTML Form",id:"implementing-the-login-html-form",children:[]},{value:"Accepting the Login Request",id:"accepting-the-login-request",children:[]},{value:"Rejecting the Login Request",id:"rejecting-the-login-request",children:[]}],u={rightToc:m};function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/login"}),"Login Flow Documentation")," first!"))),Object(i.b)("p",null,"In this document, you will learn how to implement the Login Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(i.b)("h2",{id:"implementing-the-login-html-form"},"Implementing the Login HTML Form"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The Login HTML Form cannot be a Signle Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(i.b)(s.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(r.a)("/img/docs/login-endpoint.png")})),Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'}),"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@oryd/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/login', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the login request from ORY Hydra.\n  const challenge = String(query.login_challenge)\n\n  hydraAdmin.getLoginRequest(challenge).then(({ body }) => {\n    // If hydra was already able to authenticate the user, skip will be true and we do not need to re-authenticate\n    // the user.\n    if (body.skip) {\n      // You can apply logic here, for example update the number of times the user logged in.\n      // ...\n\n      // Now it's time to grant the login request. You could also deny the request if something went terribly wrong\n      // (e.g. your arch-enemy logging in...)\n      return hydraAdmin\n        .acceptLoginRequest(challenge, {\n          // All we need to do is to confirm that we indeed want to log in the user.\n          subject: String(body.subject)\n        })\n        .then(({ body }) => {\n          // All we need to do now is to redirect the user back to hydra!\n          res.redirect(String(body.redirectTo))\n        })\n    }\n\n    // If authentication can't be skipped we MUST show the login UI.\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge\n    })\n  })\n})\n"))),Object(i.b)(c.a,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form action="/login" method="POST">\n  <input type="hidden" name="_csrf" value="{{ csrfToken }}" />\n  <input type="hidden" name="challenge" value="{{ challenge }}" />\n  <input type="email" id="email" name="email" placeholder="email@foobar.com" />\n  <input type="password" id="password" name="password" />\n\n  <input type="checkbox" id="remember" name="remember" value="1" />\n  <label for="remember">Remember me</label>\n\n  <input type="submit" id="accept" name="submit" value="Log in" />\n</form>\n')))),Object(i.b)("h2",{id:"accepting-the-login-request"},"Accepting the Login Request"),Object(i.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'}),"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/login', csrfProtection, (req, res, next) => {\n  // The challenge is now a hidden input field, so let's take it from the request body instead\n  const challenge = req.body.challenge\n\n  // Let's check if the user provided valid credentials. Of course, you'd use a database or some third-party service\n  // for this! Alternatively, you can also use ORY Kratos:\n  //\n  //      https://www.ory.sh/kratos\n  if (!(req.body.email === 'foo@bar.com' && req.body.password === 'foobar')) {\n    // Looks like the user provided invalid credentials, let's show the ui again...\n\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge,\n      error: 'The username / password combination is not correct'\n    })\n    return\n  }\n\n  // Seems like the user authenticated! Let's tell hydra...\n  hydraAdmin\n    .acceptLoginRequest(challenge, {\n      // Subject is an alias for user ID. A subject can be a random string, a UUID, an email address, ....\n      subject: 'foo@bar.com',\n\n      // This tells hydra to remember the browser and automatically authenticate the user in future requests. This will\n      // set the \"skip\" parameter in the other route to true on subsequent requests!\n      remember: Boolean(req.body.remember),\n\n      // When the session expires, in seconds. Set this to 0 so it will never expire.\n      rememberFor: 3600\n\n      // Sets which \"level\" (e.g. 2-factor authentication) of authentication the user has. The value is really arbitrary\n      // and optional. In the context of OpenID Connect, a value of 0 indicates the lowest authorization level.\n      // acr: '0',\n    })\n    .then(({ body }) => {\n      // All we need to do now is to redirect the user back to hydra!\n      res.redirect(String(body.redirectTo))\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n")))),Object(i.b)("h2",{id:"rejecting-the-login-request"},"Rejecting the Login Request"),Object(i.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// You can deny the login request at any point - for example if the system is currently undergoing maintenance\n// or the user has been banned, is not allowed to use OAuth2 flows, and so on:\nhydraAdmin\n  .rejectLoginRequest(challenge, {\n    error: 'user_banned',\n    errorDescription: 'You are not allowed to log in!'\n  })\n  .then(({ body }) => {\n    // All we need to do now is to redirect the browser back to hydra!\n    res.redirect(String(body.redirectTo))\n  })\n")))))}h.isMDXComponent=!0},322:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(329),r=t.n(i),s=t(48),c=t.n(s),l=t(325),d=t.n(l);r.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});n.a=function(e){var n,t=e.chart,i=Object(a.useState)(!1),s=i[0],l=i[1],m=Object(a.useState)(void 0),u=m[0],h=m[1],b=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],p=function(){return l(!s)};return Object(a.useEffect)((function(){r.a.render(b,t,(function(e){h(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:p,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:u}}),o.a.createElement("div",{onClick:p,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(n={},n[c.a.visible]=s,n))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:u}})))}},330:function(e,n){},331:function(e,n){},332:function(e,n){},333:function(e,n){},334:function(e,n){},335:function(e,n){},336:function(e,n){},337:function(e,n){},338:function(e,n){},339:function(e,n){},340:function(e,n){},341:function(e,n){},342:function(e,n){},343:function(e,n,t){var a={"./locale":321,"./locale.js":321};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=343}}]);