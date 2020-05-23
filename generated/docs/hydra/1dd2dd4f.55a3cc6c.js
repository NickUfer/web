(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(9),r=(n(0),n(224)),o=n(226),l={id:"debugging",title:"Common Problems & Debugging"},c={id:"version-v1.5/debugging",title:"Common Problems & Debugging",description:"import useBaseUrl from '@docusaurus/useBaseUrl'",source:"@site/versioned_docs/version-v1.5/debugging.mdx",permalink:"/hydra/docs/debugging",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/debugging.mdx",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1590245107,sidebar:"version-v1.5/docs",previous:{title:"Preparing for Production",permalink:"/hydra/docs/production"},next:{title:"Advanced Topics",permalink:"/hydra/docs/advanced"}},s=[{value:"First Aid",id:"first-aid",children:[]},{value:"I am running into CSRF issues",id:"i-am-running-into-csrf-issues",children:[]},{value:"Logout is not working as expected",id:"logout-is-not-working-as-expected",children:[]},{value:"OpenID Connect ID Token missing",id:"openid-connect-id-token-missing",children:[]},{value:"OAuth 2.0 Refresh Token is missing",id:"oauth-20-refresh-token-is-missing",children:[]},{value:"OAuth 2.0 Authorize Code Flow fails",id:"oauth-20-authorize-code-flow-fails",children:[{value:"Wrong or misconfigured OAuth 2.0 Client",id:"wrong-or-misconfigured-oauth-20-client",children:[]},{value:"Redirect URL is not whitelisted",id:"redirect-url-is-not-whitelisted",children:[]},{value:"OAuth 2.0 Client ID and secret are sent in body instead of header",id:"oauth-20-client-id-and-secret-are-sent-in-body-instead-of-header",children:[]}]},{value:"Distributed Tracing",id:"distributed-tracing",children:[{value:"What is this?",id:"what-is-this",children:[]},{value:"What a Hydra trace includes",id:"what-a-hydra-trace-includes",children:[]},{value:"Alright, how can I set this up locally?",id:"alright-how-can-i-set-this-up-locally",children:[]},{value:"Tracing configurations",id:"tracing-configurations",children:[]}]}],u={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to\nresolve certain issues."),Object(r.b)("h2",{id:"first-aid"},"First Aid"),Object(r.b)("p",null,"There are three things you can do to quickly debug any issue:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Check the logs. ORY Hydra has extensive logging and you will find the issue\nmost likely in the logs. Here is an example log line for a client that\nrequested a redirect URL that did not match the whitelisted redirect URLS:\n",Object(r.b)("inlineCode",{parentName:"li"},'time="2018-08-07T16:01:16Z" level=error msg="An error occurred" description="The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed" error=invalid_request hint="The \\"redirect_uri\\" parameter does not match any of the OAuth 2.0 Client\'s pre-registered redirect urls."')),Object(r.b)("li",{parentName:"ol"},"Check the URL because of two reasons:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"ORY Hydra sends ",Object(r.b)("inlineCode",{parentName:"li"},"error_hint"),", ",Object(r.b)("inlineCode",{parentName:"li"},"error"),", ",Object(r.b)("inlineCode",{parentName:"li"},"error_description"),", ",Object(r.b)("inlineCode",{parentName:"li"},"error_debug"),"\nin the URL. You will find the cause of the error most likely in there."),Object(r.b)("li",{parentName:"ol"},"You are maybe in the wrong URL. Make sure the host and port and path is\ncorrect. This happens often, especially when you're just starting out and\nexperimenting"))),Object(r.b)("li",{parentName:"ol"},"Set environment variable ",Object(r.b)("inlineCode",{parentName:"li"},"OAUTH2_EXPOSE_INTERNAL_ERRORS=true"),". Do not do this\nin production, it is possible, though unlikely, that important data leaks\nwith this. If set to true, ORY Hydra will set the ",Object(r.b)("inlineCode",{parentName:"li"},"error_debug")," query\nparameter if debug information is available."),Object(r.b)("li",{parentName:"ol"},"If you're just starting out and experimenting your docker set up does not\nwork at all:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Stop all containers"),Object(r.b)("li",{parentName:"ol"},"Remove them (unless you have something important running)"),Object(r.b)("li",{parentName:"ol"},"Retry. ",Object(r.b)("strong",{parentName:"li"},"This can help a lot if you are new to this!"))))),Object(r.b)("h2",{id:"i-am-running-into-csrf-issues"},"I am running into CSRF issues"),Object(r.b)("p",null,"We protect the Login and Consent flows using CSRF Cookies. This mitigates several attack vectors but\ncan lead cause issues when misconfigured. The most common causes of CSRF issues are the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are mixing domains with IP addresses in your request - for example using ",Object(r.b)("inlineCode",{parentName:"li"},"127.0.0.1")," and ",Object(r.b)("inlineCode",{parentName:"li"},"localhost"),"\nin the same flow."),Object(r.b)("li",{parentName:"ul"},"You are running ORY Hydra via HTTP but are missing the ",Object(r.b)("inlineCode",{parentName:"li"},"--dangerous-force-http")," CLI flag."),Object(r.b)("li",{parentName:"ul"},'You are running the OAuth2 flow in separate browsers, or in a browser with incognito mode. The Brave browser\nis also known for notoriously discarding cookies when used in "No-Tracking" mode.'),Object(r.b)("li",{parentName:"ul"},"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that strips the Cookie header. If the\nreverse proxy supports path rewrites that might also cause issues!"),Object(r.b)("li",{parentName:"ul"},"You are trying to do two OAuth2 flows at the same time in the same Browser."),Object(r.b)("li",{parentName:"ul"},"You have changed the Cookie SameSite behavior. If this is the default value (you did not change it), this should\nnot be an issue.")),Object(r.b)("p",null,":::warn\nYou cannot call ",Object(r.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and not possible with OAuth2.\nThis endpoint can only be accessed using a normal browser request.\n:::"),Object(r.b)("h2",{id:"logout-is-not-working-as-expected"},"Logout is not working as expected"),Object(r.b)("p",null,"Sometimes, calling ",Object(r.b)("inlineCode",{parentName:"p"},"/oauth2/sessions/logout")," does not behave as expected, for\nexample:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An error occurs."),Object(r.b)("li",{parentName:"ul"},"You are being redirected directly to the post_logout_redirect_uri instead of the logout\nUI.")),Object(r.b)("p",null,'First of all, there are two types of logout requests - one is called "OP (OpenID\nProvider) Initiated" and one "RP (Relying Party) Initiated". The first flow MUST\nNEITHER contain the ',Object(r.b)("inlineCode",{parentName:"p"},"id_token_hint"),", nor a ",Object(r.b)("inlineCode",{parentName:"p"},"state"),", nor\n",Object(r.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),"."),Object(r.b)("p",null,"If no active authentication session is set at ORY Hydra, the browser will be\nredirected immediately to the system-wide configured post logout redirect URI."),Object(r.b)("p",null,"An active session may be missing because:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are mixing up domain names (e.g. 127.0.0.1 and localhost - ",Object(r.b)("strong",{parentName:"li"},"this is a\ncommon mistake"),")"),Object(r.b)("li",{parentName:"ul"},"You are running ORY Hydra behind a proxy that messes with Cookies"),Object(r.b)("li",{parentName:"ul"},"You are using a Browser with a very strict privacy policy which makes it\ndifficult or impossible for ORY Hydra to properly set cookies. We've observed\nthat the ",Object(r.b)("strong",{parentName:"li"},"Brave Browser")," is very, very difficult here."),Object(r.b)("li",{parentName:"ul"},"You did not set ",Object(r.b)("inlineCode",{parentName:"li"},"remember: true")," when accepting the login request")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before filing a bug report, make sure you actually have a cookie named\n",Object(r.b)("inlineCode",{parentName:"strong"},"oauth2_authentication_session")," for the URL ORY Hydra is running on, and\nespecially for the domain that's in your ",Object(r.b)("inlineCode",{parentName:"strong"},"http://.../oauth2/sessions/logout"))),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"id_token_hint")," is set, you may define both ",Object(r.b)("inlineCode",{parentName:"p"},"state")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),". The same problems can cause this flow to behave\nunexpectedly as listed above, with the only difference that now ORY Hydra knows\nwho the user to be logged out is (from the ",Object(r.b)("inlineCode",{parentName:"p"},"id_token_hint"),") and if any\nFront-/Back-channel Logout is configured for that client, it will be executed\neven if there is no valid authentication session for that user in ORY Hydra."),Object(r.b)("h2",{id:"openid-connect-id-token-missing"},"OpenID Connect ID Token missing"),Object(r.b)("p",null,"If you expect an OAuth 2.0 ID Token but are not receiving one, this can have\nmultiple reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You are using the ",Object(r.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return an ID\ntoken."),Object(r.b)("li",{parentName:"ol"},"You forgot to request the ",Object(r.b)("inlineCode",{parentName:"li"},"openid")," scope when calling\n",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code")," (Authorize Code Flow - correct would be\n",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code&scope=openid"),") or the ",Object(r.b)("inlineCode",{parentName:"li"},"id_token")," response\ntype when calling ",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token")," (Implicit/Hybrid flow -\ncorrect would be ",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token+id_token&scope=openid")," or\nany other combination such as ",Object(r.b)("inlineCode",{parentName:"li"},"response_type=id_token"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"response_type=token+code+id_token"),")."),Object(r.b)("li",{parentName:"ol"},"You consent app did not send ",Object(r.b)("inlineCode",{parentName:"li"},'granted_scope: ["openid"]')," or when accepting\nthe consent request."),Object(r.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(r.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(r.b)("h2",{id:"oauth-20-refresh-token-is-missing"},"OAuth 2.0 Refresh Token is missing"),Object(r.b)("p",null,"If you expect an OAuth 2.0 Refresh Token but are not receiving one, this can\nhave multiple reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You are using an implicit or hybrid flow. These flows never return a refresh\ntoken!"),Object(r.b)("li",{parentName:"ol"},"You are using the ",Object(r.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return a refresh\ntoken."),Object(r.b)("li",{parentName:"ol"},"You forgot to request the ",Object(r.b)("inlineCode",{parentName:"li"},"offline")," or ",Object(r.b)("inlineCode",{parentName:"li"},"offline_access")," scope when calling\n",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth"),"."),Object(r.b)("li",{parentName:"ol"},"You consent app did not send ",Object(r.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline"]')," or\n",Object(r.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline_access"]')," when accepting the consent request."),Object(r.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(r.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(r.b)("h2",{id:"oauth-20-authorize-code-flow-fails"},"OAuth 2.0 Authorize Code Flow fails"),Object(r.b)("p",null,"The most likely cause is misconfiguration, summarized in the next sections."),Object(r.b)("h3",{id:"wrong-or-misconfigured-oauth-20-client"},"Wrong or misconfigured OAuth 2.0 Client"),Object(r.b)("p",null,"You are using the wrong OAuth 2.0 Client or the OAuth 2.0 Client has a broken\nconfiguration. To check that you're using the right client, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"hydra clients get --endpoint http://ory-hydra <the-client-id>\n")),Object(r.b)("p",null,"The result shows you the whole client (excluding its secret). Check that the\nvalues are correct. Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n        "client_id": "my-client",\n        "grant_types": [\n                "authorization_code"\n        ],\n        "jwks": {},\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        "response_types": [\n                "code"\n        ],\n        "scope": "openid offline",\n        "subject_type": "pairwise",\n        "token_endpoint_auth_method": "client_secret_basic",\n        "userinfo_signed_response_alg": "none"\n}\n')),Object(r.b)("h3",{id:"redirect-url-is-not-whitelisted"},"Redirect URL is not whitelisted"),Object(r.b)("p",null,"A likely cause of your request failing is that you are using the wrong redirect\nURL. Assuming your OAuth 2.0 URL looks like\n",Object(r.b)("inlineCode",{parentName:"p"},"http://ory-hydra/oauth2/auth?client_id=my-client&...&redirect_uri=http://my-url/callback")),Object(r.b)("p",null,"The redirect URL ",Object(r.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," must be whitelisted in your client\nconfiguration. The URLs must match ",Object(r.b)("strong",{parentName:"p"},"exactly"),". URL ",Object(r.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"http://my-url/callback?foo=bar")," are different URLs!"),Object(r.b)("p",null,"To see the whitelisted redirect_uris, check the client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'hydra clients get --endpoint http://ory-hydra <the-client-id>\n\n{\n        // ...\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        // ...\n}\n')),Object(r.b)("p",null,"Here you see that ",Object(r.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," is not in the list, which is why the\nrequest fails."),Object(r.b)("h3",{id:"oauth-20-client-id-and-secret-are-sent-in-body-instead-of-header"},"OAuth 2.0 Client ID and secret are sent in body instead of header"),Object(r.b)("p",null,"There are multiple ways of authenticating OAuth 2.0 Clients at the\n",Object(r.b)("inlineCode",{parentName:"p"},"/oauth2/token"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP Basic Authorization (",Object(r.b)("inlineCode",{parentName:"li"},"client_secret_basic"),") - the OAuth 2.0 Client ID and\nsecret are sent in the HTTP Header (",Object(r.b)("inlineCode",{parentName:"li"},"Authorization: basic ...."),")"),Object(r.b)("li",{parentName:"ul"},"HTTP Body (",Object(r.b)("inlineCode",{parentName:"li"},"client_secret_post"),") - the OAuth 2.0 Client ID and secret are sent\nin the POST body (",Object(r.b)("inlineCode",{parentName:"li"},"Content-Type: application/x-www-form-urlencoded"),")")),Object(r.b)("p",null,"Both are valid schemes. But the OAuth 2.0 Client has to be configured to allow\neither of the one. Per default, the OAuth 2.0 Client allows HTTP Basic\nAuthorization only. You can check which method is allowed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'hydra clients get --endpoint http://ory-hydra <the-client-id>\n{\n        // ...\n        "token_endpoint_auth_method": "client_secret_basic",\n        // ...\n}\n')),Object(r.b)("p",null,"As you can see, this client is allowed to authorize using HTTP Basic\nAuthorization. If you try to authorize with the client credentials in the POST\nbody, the authentication process will fail. To allow a client to perform the\nPOST authorization scheme, you must set\n",Object(r.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"'),". You can do this in the CLI\nwith the ",Object(r.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method")," flag."),Object(r.b)("h2",{id:"distributed-tracing"},"Distributed Tracing"),Object(r.b)("h3",{id:"what-is-this"},"What is this?"),Object(r.b)("p",null,"Configuring Distributed Tracing (DT) will enable you to obtain a visualization\nof the call paths that take place in order to process a request made to Hydra.\nIt's yet another tool that you can use to aid you in profiling, debugging and\nultimately understanding your deployment of Hydra better. Hydra currently\nsupports the following tracing options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tracing backend(s): Jaeger - ",Object(r.b)("em",{parentName:"li"},"Note: adding support for other\n",Object(r.b)("a",Object(i.a)({parentName:"em"},{href:"https://opentracing.io/docs/supported-tracers"}),"opentracing compliant backends"),"\nis planned. To aid in priority, please\n",Object(r.b)("a",Object(i.a)({parentName:"em"},{href:"https://github.com/ory/hydra/issues"}),"create an issue")," with your feature\nrequest.")),Object(r.b)("li",{parentName:"ul"},"Following existing traces: If you have deployed Hydra behind a proxy that has\ninitiated a trace, Hydra will attempt to join that trace by examining the\nrequest headers for tracing context.")),Object(r.b)("h3",{id:"what-a-hydra-trace-includes"},"What a Hydra trace includes"),Object(r.b)("p",null,"In DT speak, a trace is comprised of one or more spans which are logical units\nof work. Each Hydra span is encapsulated with the following state:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A name"),Object(r.b)("li",{parentName:"ul"},"A start time"),Object(r.b)("li",{parentName:"ul"},"A finish time"),Object(r.b)("li",{parentName:"ul"},"A set of zero or more tags")),Object(r.b)("p",null,"Hydra currently creates the following spans:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Top level span (",Object(r.b)("em",{parentName:"li"},"named after the request path"),") for the requested endpoint.\nSpan tags: - http method - http status code - error IFF status code >= 400"),Object(r.b)("li",{parentName:"ul"},"Child span will be created if bcrypt (",Object(r.b)("em",{parentName:"li"},"e.g. when the token endpoint is\ncalled"),") is called. Span tags: - bcrypt work factor"),Object(r.b)("li",{parentName:"ul"},"All SQL database interactions. Spans/tags will vary depending on the database\ndriver used.")),Object(r.b)("p",null,"This is still evolving and subject to change as tracing support continues to\nexpand in Hydra. If you see something that is missing/wrong, please create an\nissue."),Object(r.b)("h3",{id:"alright-how-can-i-set-this-up-locally"},"Alright, how can I set this up locally?"),Object(r.b)("p",null,"The\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/quickstart-tracing.yml"}),"provided docker-compose file"),"\nin the project repository has tracing configuration w/ jaeger added which you\ncan use to play around with. Simply uncomment the configurations associated with\ntracing as so:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Under the Hydra service definition ",Object(r.b)("inlineCode",{parentName:"strong"},"depends_on")," configs, uncomment the\nfollowing:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"- jaeger\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Under the Hydra service definition ",Object(r.b)("inlineCode",{parentName:"strong"},"environment")," configs, uncomment the\nfollowing:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"- TRACING_PROVIDER\n- TRACING_PROVIDER_JAEGER_SAMPLING_SERVER_URL\n- TRACING_PROVIDER_JAEGER_LOCAL_AGENT_ADDRESS\n- TRACING_PROVIDER_JAEGER_SAMPLING_TYPE\n- TRACING_PROVIDER_JAEGER_SAMPLING_VALUE\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Uncomment the Jaeger service definition:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'jaeger:\n  image: jaegertracing/all-in-one:1.7.0\n  ports:\n  - "5775:5775/udp"\n  - "6831:6831/udp"\n  - "6832:6832/udp"\n  - "5778:5778"\n  - "16686:16686"\n  - "14268:14268"\n  - "9411:9411"\n')),Object(r.b)("p",null,"Then simply run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up"),". Grab a coffee or stretch while you wait for\neverything to come up. You will then be able to navigate to the Jaeger UI which\nyou have exposed on port ",Object(r.b)("inlineCode",{parentName:"p"},"16686")," at ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://localhost:16686/search"}),"http://localhost:16686/search"),". You can now\nstart making requests to Hydra and inspect traces!"),Object(r.b)("p",null,"As an example, here is a trace created by making a bad request to the\n",Object(r.b)("inlineCode",{parentName:"p"},"POST /clients")," endpoint:"),Object(r.b)("img",{alt:"Sample Trace",src:Object(o.a)("/images/docs/hydra/sample_trace.png")}),";",Object(r.b)("p",null,"At a glance, you are able to see that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The request failed"),Object(r.b)("li",{parentName:"ul"},"The request took ~80ms"),Object(r.b)("li",{parentName:"ul"},"It resulted in a 409"),Object(r.b)("li",{parentName:"ul"},"The hash comparison to validate the client's credentials took a whopping 70ms.\nBcrypt is expensive!"),Object(r.b)("li",{parentName:"ul"},"The various database operations performed")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: in order to see spans around database interactions, you must be using a\nSQL backend (i.e. MySQL or Postgres).")),Object(r.b)("h3",{id:"tracing-configurations"},"Tracing configurations"),Object(r.b)("p",null,"The CLI will provide you with the list of Hydra tracing configurations and their\nsupported values. Simply run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"docker exec -it hydra_hydra_1 hydra serve --help\n")),Object(r.b)("p",null,"And read the section on ",Object(r.b)("inlineCode",{parentName:"p"},"DEBUG CONTROLS"),"."))}b.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=i,h=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(h,l({ref:t},s,{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";var i=n(0),a=n(52);t.a=function(){return Object(i.useContext)(a.a)}},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(227);var i=n(225);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},227:function(e,t,n){"use strict";var i=n(12),a=n(25),r=n(228),o="".startsWith;i(i.P+i.F*n(229)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return o?o.call(t,i,n):t.slice(n,n+i.length)===i}})},228:function(e,t,n){var i=n(76),a=n(26);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},229:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);