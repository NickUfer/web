(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(223)),i={id:"go",title:"Go"},c={id:"version-v1.5/sdk/go",title:"Go",description:"To install the Go SDK, run:",source:"@site/versioned_docs/version-v1.5/sdk/go.md",permalink:"/hydra/docs/sdk/go",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/sdk/go.md",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588244570,sidebar:"version-v1.5/docs",previous:{title:"Software Development Kits (SDKs)",permalink:"/hydra/docs/sdk"},next:{title:"JavaScript",permalink:"/hydra/docs/sdk/js"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Making requests",id:"making-requests",children:[]},{value:"With Authorization",id:"with-authorization",children:[{value:"On every request",id:"on-every-request",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To install the Go SDK, run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"go get -u -d github.com/ory/hydra-client-go\n")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"We use code generation to generate our SDKs. The Go SDK is generated using\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://goswagger.io"}),Object(a.b)("inlineCode",{parentName:"a"},"go-swagger")),". The SDK is easily set up:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // admin.Admin.CreateOAuth2Client(...\n\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    // public.Public.RevokeOAuth2Token(...\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Be aware that endpoints /oauth2/auth and /oauth2/token MUST NOT be consumed\nusing this SDK. Use\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://godoc.org/golang.org/x/oauth2"}),"golang.org/x/oauth2")," instead.")),Object(a.b)("h2",{id:"making-requests"},"Making requests"),Object(a.b)("p",null,"Making requests is straight forward:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // It is important to create the parameters using `New...`, otherwise requests will fail!\n    result, err := c.Admin.CreateOAuth2Client(\n        admin.NewCreateOAuth2ClientParams().WithBody(&models.Client{\n        ClientID: "scoped",\n    }))\n    if err != nil {\n        // err is not nil when the request failed (usually a 404, 401, 409 error)\n        // You can distinguish the errors by type-asserting err, for example:\n        switch e := err.(type) {\n        case (*admin.CreateOAuth2ClientConflict):\n            // do something...\n        }\n    }\n\n    // if err is nil, then result is set. The result payload/body can be retrieved using result.Payload.\n    fmt.Printf("Got client: %+v", result.Payload)\n}\n')),Object(a.b)("h2",{id:"with-authorization"},"With Authorization"),Object(a.b)("p",null,"Some endpoints require e.g. Basic Authorization:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),Object(a.b)("p",null,"For more information on Authorization, check the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://goswagger.io/generate/client.html#authentication"}),"go-swagger documentation"),"."),Object(a.b)("h3",{id:"on-every-request"},"On every request"),Object(a.b)("p",null,"You may want to protect ORY Hydra using e.g. OAuth2 Access Tokens. In that case,\nyou can enhance the SDK by using the OAuth2 Client:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "golang.org/x/oauth2/clientcredentials"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    ht := httptransport.NewWithClient(\n        publicURL.Host,\n        publicURL.Path,\n        []string{publicURL.Scheme},\n        clientcredentials.Config{\n            TokenURL:"http://hydra.localhost:4444/oauth2/token",\n            ClientID:"my-client",\n            ClientSecret:"my-secret",\n            Scopes:[]string{"scope-a", "scope-b"},\n        }.Client(context.Background()),\n    )\n\n    public := hydra.New(ht, nil)\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')))}u.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);