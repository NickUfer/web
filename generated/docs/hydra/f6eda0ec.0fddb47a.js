(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(315)),a={id:"go",title:"Go"},c={unversionedId:"sdk/go",id:"version-v1.7/sdk/go",isDocsHomePage:!1,title:"Go",description:"To install the Go SDK, run:",source:"@site/versioned_docs/version-v1.7/sdk/go.md",permalink:"/hydra/docs/sdk/go",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/sdk/go.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,sidebar:"version-v1.7/docs",previous:{title:"Software Development Kits (SDKs)",permalink:"/hydra/docs/sdk"},next:{title:"JavaScript",permalink:"/hydra/docs/sdk/js"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Making requests",id:"making-requests",children:[]},{value:"With Authorization",id:"with-authorization",children:[{value:"On every request",id:"on-every-request",children:[]},{value:"TLS Termination",id:"tls-termination",children:[]},{value:"Skip TLS Verification",id:"skip-tls-verification",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install the Go SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"go get -u -d github.com/ory/hydra-client-go\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"We use code generation to generate our SDKs. The Go SDK is generated using\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://goswagger.io"}),Object(o.b)("inlineCode",{parentName:"a"},"go-swagger")),". The SDK is easily set up:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // admin.Admin.CreateOAuth2Client(...\n\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    // public.Public.RevokeOAuth2Token(...\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be aware that endpoints /oauth2/auth and /oauth2/token MUST NOT be consumed\nusing this SDK. Use\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://godoc.org/golang.org/x/oauth2"}),"golang.org/x/oauth2")," instead.")),Object(o.b)("h2",{id:"making-requests"},"Making requests"),Object(o.b)("p",null,"Making requests is straight forward:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // It is important to create the parameters using `New...`, otherwise requests will fail!\n    result, err := c.Admin.CreateOAuth2Client(\n        admin.NewCreateOAuth2ClientParams().WithBody(&models.Client{\n        ClientID: "scoped",\n    }))\n    if err != nil {\n        // err is not nil when the request failed (usually a 404, 401, 409 error)\n        // You can distinguish the errors by type-asserting err, for example:\n        switch e := err.(type) {\n        case (*admin.CreateOAuth2ClientConflict):\n            // do something...\n        }\n    }\n\n    // if err is nil, then result is set. The result payload/body can be retrieved using result.Payload.\n    fmt.Printf("Got client: %+v", result.Payload)\n}\n')),Object(o.b)("h2",{id:"with-authorization"},"With Authorization"),Object(o.b)("p",null,"Some endpoints require e.g. Basic Authorization:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),Object(o.b)("p",null,"For more information on Authorization, check the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://goswagger.io/generate/client.html#authentication"}),"go-swagger documentation"),"."),Object(o.b)("h3",{id:"on-every-request"},"On every request"),Object(o.b)("p",null,"You may want to protect ORY Hydra using e.g. OAuth2 Access Tokens. In that case,\nyou can enhance the SDK by using the OAuth2 Client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "golang.org/x/oauth2/clientcredentials"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    ht := httptransport.NewWithClient(\n        publicURL.Host,\n        publicURL.Path,\n        []string{publicURL.Scheme},\n        clientcredentials.Config{\n            TokenURL:"http://hydra.localhost:4444/oauth2/token",\n            ClientID:"my-client",\n            ClientSecret:"my-secret",\n            Scopes:[]string{"scope-a", "scope-b"},\n        }.Client(context.Background()),\n    )\n\n    public := hydra.New(ht, nil)\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),Object(o.b)("h3",{id:"tls-termination"},"TLS Termination"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'\nimport "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "net/http"\n\nfunc main() {\n\n  tlsTermClient := new(http.Client)\n  rt := WithHeader(tlsTermClient.Transport)\n  rt.Set("X-Forwarded-Proto", "https")\n  tlsTermClient.Transport = rt\n\n    transport := httptransport.NewWithClient("host:port", "/", []string{"https"}, tlsTermClient)\n    hydra := client.New(transport, nil)\n\n  // ...\n}\n\ntype withHeader struct {\n        http.Header\n        rt http.RoundTripper\n}\n\nfunc WithHeader(rt http.RoundTripper) withHeader {\n        if rt == nil {\n                rt = http.DefaultTransport\n        }\n\n        return withHeader{Header: make(http.Header), rt: rt}\n}\n\nfunc (h withHeader) RoundTrip(req *http.Request) (*http.Response, error) {\n        for k, v := range h.Header {\n                req.Header[k] = v\n        }\n\n        return h.rt.RoundTrip(req)\n}\n')),Object(o.b)("h3",{id:"skip-tls-verification"},"Skip TLS Verification"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"#\nimport "net/http"\n\nfunc main() {\n    skipTlsClient := &http.Client{\n        Transport: &http.Transport{\n            TLSClientConfig: &tls.Config{InsecureSkipVerify: true},\n        },\n        Timeout: 10,\n    }\n    transport := httptransport.NewWithClient("host:port", "/", []string{"https"}, skipTlsClient)\n    hydra := client.New(transport, nil)\n\n  // ...\n}\n')))}p.isMDXComponent=!0},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(a,".").concat(d)]||u[d]||h[d]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);