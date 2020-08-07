(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(107)),o={id:"mutator",title:"Mutators"},l={unversionedId:"pipeline/mutator",id:"pipeline/mutator",isDocsHomePage:!1,title:"Mutators",description:"A mutator transforms the credentials from incoming requests to credentials that",source:"@site/docs/pipeline/mutator.md",permalink:"/oathkeeper/docs/next/pipeline/mutator",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/pipeline/mutator.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588935418,sidebar:"docs",previous:{title:"Authorizers",permalink:"/oathkeeper/docs/next/pipeline/authz"},next:{title:"Error Handlers",permalink:"/oathkeeper/docs/next/pipeline/error"}},c=[{value:"<code>noop</code>",id:"noop",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Access Rule Example",id:"access-rule-example",children:[]}]},{value:"<code>id_token</code>",id:"id_token",children:[{value:"Global Configuration",id:"global-configuration",children:[]},{value:"Configuration",id:"configuration-1",children:[]},{value:"Access Rule Example",id:"access-rule-example-1",children:[]}]},{value:"<code>header</code>",id:"header",children:[{value:"Configuration",id:"configuration-2",children:[]},{value:"Access Rule Example",id:"access-rule-example-2",children:[]}]},{value:"<code>cookie</code>",id:"cookie",children:[{value:"Configuration",id:"configuration-3",children:[]},{value:"Cookies",id:"cookies",children:[]}]},{value:"<code>hydrator</code>",id:"hydrator",children:[{value:"Cache",id:"cache",children:[]},{value:"Configuration",id:"configuration-4",children:[]},{value:"Access Rule Example",id:"access-rule-example-3",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A mutator transforms the credentials from incoming requests to credentials that\nyour backend understands. For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: basic")," header might\nbe transformed to ",Object(r.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),". This allows you to write backends that\ndo not care if the original request was an anonymous one, an OAuth 2.0 Access\nToken, or some other credential type. All your backend has to do is understand,\nfor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"X-User:"),"."),Object(r.b)("p",null,"The Access Control Decision API will return the mutated result as the HTTP\nResponse."),Object(r.b)("h2",{id:"noop"},Object(r.b)("inlineCode",{parentName:"h2"},"noop")),Object(r.b)("p",null,"This mutator does not transform the HTTP request and simply forwards the headers\nas-is. This is useful if you don't want to replace, for example,\n",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: basic")," with ",Object(r.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),"."),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  noop:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: noop\n")),Object(r.b)("h3",{id:"access-rule-example"},"Access Rule Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 200 Status OK\nThe request has been allowed! The original HTTP Request has not been modified.\n')),Object(r.b)("h2",{id:"id_token"},Object(r.b)("inlineCode",{parentName:"h2"},"id_token")),Object(r.b)("p",null,"This mutator takes the authentication information (e.g. subject) and transforms\nit to a signed JSON Web Token, and more specifically to an OpenID Connect ID\nToken. Your backend can verify the token by fetching the (public) key from the\n",Object(r.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json")," endpoint provided by the ORY Oathkeeper API."),Object(r.b)("p",null,"Let's say a request is made to a resource protected by ORY Oathkeeper using\nBasic Authorization:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/resource HTTP/1.1\nHost: www.example.com\nAuthorization: Basic Zm9vOmJhcg==\n")),Object(r.b)("p",null,"Assuming that ORY Oathkeeper is granting the access request,\n",Object(r.b)("inlineCode",{parentName:"p"},"Basic Zm9vOmJhcg==")," will be replaced with a cryptographically signed JSON Web\nToken:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/resource HTTP/1.1\nHost: internal-api-endpoint-dns\nAuthorization: Bearer <jwt-signed-id-token>\n")),Object(r.b)("p",null,"Now, the protected resource is capable of decoding and validating the JSON Web\nToken using the public key supplied by ORY Oathkeeper's API. The public key for\ndecoding the ID token is available at ORY Oathkeeper's ",Object(r.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json"),"\nendpoint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"http://oathkeeper:4456/.well-known/jwks.json\n")),Object(r.b)("p",null,"The related flow diagram looks like this:"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEF1dGhvcml6YXRpb246IEJhc2ljIC4uLi5cbiAgICBPLS0-Pk86IFZhbGlkYXRlIGNyZWRlbnRpYWxzXG4gICAgTy0-PkE6IEF1dGhvcml6YXRpb246IEJlYXJlciBKLlcuVFxuICAgIEEtLT4-TzogRmV0Y2ggUHVibGljIEtleVxuICAgIEEtLT4-QTogVmFsaWRhdGUgSldUIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZUNTUyI6Ii5sYWJlbCBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IGZvbnQtc2l6ZTogMTNweCB9In19"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEF1dGhvcml6YXRpb246IEJhc2ljIC4uLi5cbiAgICBPLS0-Pk86IFZhbGlkYXRlIGNyZWRlbnRpYWxzXG4gICAgTy0-PkE6IEF1dGhvcml6YXRpb246IEJlYXJlciBKLlcuVFxuICAgIEEtLT4-TzogRmV0Y2ggUHVibGljIEtleVxuICAgIEEtLT4-QTogVmFsaWRhdGUgSldUIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZUNTUyI6Ii5sYWJlbCBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IGZvbnQtc2l6ZTogMTNweCB9In19",alt:"ID Token Transformation"})))),Object(r.b)("p",null,"Let's say the ",Object(r.b)("inlineCode",{parentName:"p"},"oauth2_client_credentials")," authenticator successfully\nauthenticated the credentials ",Object(r.b)("inlineCode",{parentName:"p"},"client-id:client-secret"),". This mutator will craft\nan ID Token (JWT) with the following exemplary claims:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "iss": "https://server.example.com",\n  "sub": "client-id",\n  "aud": "s6BhdRkqt3",\n  "jti": "n-0S6_WzA2Mj",\n  "exp": 1311281970,\n  "iat": 1311280970\n}\n')),Object(r.b)("p",null,"The ID Token Claims are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"iss"),": Issuer Identifier for the Issuer of the response. The iss value is a\ncase sensitive URL using the https scheme that contains scheme, host, and\noptionally, port number and path components and no query or fragment\ncomponents. Typically, this is the URL of ORY Oathkeeper, for example:\n",Object(r.b)("inlineCode",{parentName:"li"},"https://oathkeeper.myapi.com"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sub"),": Subject Identifier. A locally unique and never reassigned identifier\nwithin the Issuer for the End-User, which is intended to be consumed by the\nClient, e.g., 24400320 or AItOawmwtWwcT0k51BayewNvutrJUqsvl6qs7A4. It must not\nexceed 255 ASCII characters in length. The sub value is a case sensitive\nstring. The End-User might also be an OAuth 2.0 Client, given that the access\ntoken was granted using the OAuth 2.0 Client Credentials flow."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"aud"),": Audience(s) that this ID Token is intended for. It MUST contain the\nOAuth 2.0 client_id of the Relying Party as an audience value. It MAY also\ncontain identifiers for other audiences. In the general case, the aud value is\nan array of case sensitive strings."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"exp"),": Expiration time on or after which the ID Token MUST NOT be accepted for\nprocessing. The processing of this parameter requires that the current\ndate/time MUST be before the expiration date/time listed in the value. Its\nvalue is a JSON number representing the number of seconds from\n1970-01-01T0:0:0Z as measured in UTC until the date/time. See RFC 3339\n","[RFC3339]"," for details regarding date/times in general and UTC in particular."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"iat"),": Time at which the JWT was issued. Its value is a JSON number\nrepresenting the number of seconds from 1970-01-01T0:0:0Z as measured in UTC\nuntil the date/time."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jti"),": A cryptographically strong random identifier to ensure the ID Token's\nuniqueness.")),Object(r.b)("h3",{id:"global-configuration"},"Global Configuration"),Object(r.b)("h3",{id:"configuration-1"},"Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"issuer_url"),' (string, required) - Sets the "iss" value of the ID Token.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jwks_url")," (string, required) - Sets the URL where keys should be fetched\nfrom. Supports remote locations (http, https) as well as local filesystem\npaths."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ttl")," (string, optional) - Sets the time-to-live of the ID token. Defaults to\none minute. Valid time units are: s (second), m (minute), h (hour)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"claims")," (string, optional) - Allows you to customize the ID Token claims and\nsupport Go Templates. For more information, check section ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#claims"}),"Claims"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nmutators:\n  id_token:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      issuer_url: https://my-oathkeeper/\n      jwks_url: https://fetch-keys/from/this/location.json\n      # jwks_url: file:///from/this/absolute/location.json\n      # jwks_url: file://../from/this/relative/location.json\n      ttl: 60s\n      claims:\n        \'{"aud": ["https://my-backend-service/some/endpoint"],"def": "{{ print\n        .Extra.some.arbitrary.data }}"}\'\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: id_token\n    config:\n      issuer_url: https://my-oathkeeper/\n      jwks_url: https://fetch-keys/from/this/location.json\n      # jwks_url: file:///from/this/absolute/location.json\n      # jwks_url: file://../from/this/relative/location.json\n      ttl: 60s\n      claims:\n        \'{"aud": ["https://my-backend-service/some/endpoint"],"def": "{{ print\n        .Extra.some.arbitrary.data }}"}\'\n')),Object(r.b)("p",null,"The first private key found in the JSON Web Key Set defined by\n",Object(r.b)("inlineCode",{parentName:"p"},"mutators.id_token.jwks_url")," will be used for signing the JWT:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the first key found is a symmetric key (",Object(r.b)("inlineCode",{parentName:"li"},"HS256")," algorithm), that key will\nbe used. That key ",Object(r.b)("strong",{parentName:"li"},"will not")," be broadcasted at ",Object(r.b)("inlineCode",{parentName:"li"},"/.well-known/jwks.json"),". You\nmust manually configure the upstream to be able to fetch the key (e.g. from an\nenvironment variable)."),Object(r.b)("li",{parentName:"ul"},"If the first key found is an asymmetric private key (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"RS256"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ES256"),",\n...), that key will be used. The related public key will be broadcasted at\n",Object(r.b)("inlineCode",{parentName:"li"},"/.well-known/jwks.json"),".")),Object(r.b)("h4",{id:"claims"},"Claims"),Object(r.b)("p",null,"This mutator allows you to specify custom claims, like the audience of ID\ntokens, via the ",Object(r.b)("inlineCode",{parentName:"p"},"claims")," field of the mutator's ",Object(r.b)("inlineCode",{parentName:"p"},"config")," field. The keys\nrepresent names of claims and the values are arbitrary data structures which\nwill be parsed by the Go ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"text/template"),"\npackage for value substitution, receiving the ",Object(r.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(r.b)("p",null,"For more details please check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/next/pipeline/index#session"}),"Session variables")),Object(r.b)("p",null,"The claims configuration expects a string which is expected to be valid JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "handler": "id_token",\n  "config": {\n    "claims": "{\\"aud\\": [\\"https://my-backend-service/some/endpoint\\"],\\"def\\": \\"{{ print .Extra.some.arbitrary.data }}\\"}"\n  }\n}\n')),Object(r.b)("p",null,"Please keep in mind that certain keys (such as the ",Object(r.b)("inlineCode",{parentName:"p"},"sub"),") claim ",Object(r.b)("strong",{parentName:"p"},"can not")," be\noverwritten!"),Object(r.b)("h3",{id:"access-rule-example-1"},"Access Rule Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "id_token",\n      "config": {\n        "aud": [\n          "audience-1",\n          "audience-2"\n        ],\n        "claims": "{\\"abc\\": \\"{{ print .Subject }}\\",\\"def\\": \\"{{ print .Extra.some.arbitrary.data }}\\"}"\n      }\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"header"},Object(r.b)("inlineCode",{parentName:"h2"},"header")),Object(r.b)("p",null,"This mutator will transform the request, allowing you to pass the credentials to\nthe upstream application via the headers. This will augment, for example,\n",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: basic")," with ",Object(r.b)("inlineCode",{parentName:"p"},"X-User: <subject-id>"),"."),Object(r.b)("h3",{id:"configuration-2"},"Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headers")," (object (",Object(r.b)("inlineCode",{parentName:"li"},"string: string"),"), required) - A keyed object\n(",Object(r.b)("inlineCode",{parentName:"li"},"string:string"),") representing the headers to be added to this request, see\nsection ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#headers"}),"headers"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  header:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      headers:\n        X-User: '{{ print .Subject }}'\n        X-Some-Arbitrary-Data: '{{ print .Extra.some.arbitrary.data }}'\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: header\n    config:\n      headers:\n        X-User: '{{ print .Subject }}'\n        X-Some-Arbitrary-Data: '{{ print .Extra.some.arbitrary.data }}'\n")),Object(r.b)("h4",{id:"headers"},"Headers"),Object(r.b)("p",null,"The headers are specified via the ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," field of the mutator's ",Object(r.b)("inlineCode",{parentName:"p"},"config"),"\nfield. The keys are the header name and the values are a string which will be\nparsed by the Go ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(r.b)("inlineCode",{parentName:"a"},"text/template")),"\npackage for value substitution, receiving the ",Object(r.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(r.b)("p",null,"For more details please check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/next/pipeline/index#session"}),"Session variables")),Object(r.b)("h3",{id:"access-rule-example-2"},"Access Rule Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "header",\n      "config": {\n        "headers": {\n          "X-User": "{{ print .Subject }}",\n          "X-Some-Arbitrary-Data": "{{ print .Extra.some.arbitrary.data }}"\n        }\n      }\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"cookie"},Object(r.b)("inlineCode",{parentName:"h2"},"cookie")),Object(r.b)("p",null,"This mutator will transform the request, allowing you to pass the credentials to\nthe upstream application via the cookies."),Object(r.b)("h3",{id:"configuration-3"},"Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cookies")," (object (",Object(r.b)("inlineCode",{parentName:"li"},"string: string"),"), required) - A keyed object\n(",Object(r.b)("inlineCode",{parentName:"li"},"string:string"),") representing the cookies to be added to this request, see\nsection ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#cookies"}),"cookies"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Global configuration file oathkeeper.yml\nmutators:\n  cookie:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      cookies:\n        user: "{{ print .Subject }}",\n        some-arbitrary-data: "{{ print .Extra.some.arbitrary.data }}"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: cookie\n    config:\n      cookies:\n        user: "{{ print .Subject }}",\n        some-arbitrary-data: "{{ print .Extra.some.arbitrary.data }}"\n')),Object(r.b)("h3",{id:"cookies"},"Cookies"),Object(r.b)("p",null,"The cookies are specified via the ",Object(r.b)("inlineCode",{parentName:"p"},"cookies")," field of the mutators ",Object(r.b)("inlineCode",{parentName:"p"},"config"),"\nfield. The keys are the cookie name and the values are a string which will be\nparsed by the Go ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(r.b)("inlineCode",{parentName:"a"},"text/template")),"\npackage for value substitution, receiving the ",Object(r.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct."),Object(r.b)("p",null,"For more details please check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/next/pipeline/index#session"}),"Session variables")),Object(r.b)("h5",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "cookie",\n      "config": {\n        "cookies": {\n          "user": "{{ print .Subject }}",\n          "some-arbitrary-data": "{{ print .Extra.some.arbitrary.data }}"\n        }\n      }\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"hydrator"},Object(r.b)("inlineCode",{parentName:"h2"},"hydrator")),Object(r.b)("p",null,"This mutator allows for fetching additional data from external APIs, which can\nbe then used by other mutators. It works by making an upstream HTTP call to an\nAPI specified in the ",Object(r.b)("strong",{parentName:"p"},"Per-Rule Configuration")," section below. The request is a\nPOST request and it contains JSON representation of\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"}),"AuthenticationSession"),"\nstruct in body, which is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": String,\n  "extra": Object,\n  "header": Object,\n  "match_context": {\n    "regexp_capture_groups": Object,\n    "url": Object\n  }\n}\n')),Object(r.b)("p",null,"As a response the mutator expects similiar JSON object, but with ",Object(r.b)("inlineCode",{parentName:"p"},"extra")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"header")," fields modified."),Object(r.b)("p",null,"Example request/response payload:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subject": "anonymous",\n  "extra": {\n    "foo": "bar"\n  },\n  "header": {\n    "foo": ["bar1", "bar2"]\n  },\n  "match_context": {\n    "regexp_capture_groups": ["http", "foo"],\n    "url": "http://domain.com/foo"\n  }\n}\n')),Object(r.b)("p",null,"The AuthenticationSession from this object replaces the original one and is\npassed to the next mutator, where it can be used to e.g. set a particular cookie\nto the value received from an API."),Object(r.b)("p",null,"Setting ",Object(r.b)("inlineCode",{parentName:"p"},"extra")," field does not transform the HTTP request, whereas headers set\nin the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," field will be added to the final request headers."),Object(r.b)("h3",{id:"cache"},"Cache"),Object(r.b)("p",null,"This handler supports caching. If caching is enabled, the ",Object(r.b)("inlineCode",{parentName:"p"},"api.url"),"\nconfiguration value and the the full ",Object(r.b)("inlineCode",{parentName:"p"},"AuthenticationSession")," payload."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Because the cache key is quite complex, the caching handler has a higher chance\nof cache misses. This will be improved in future versions."))),Object(r.b)("h3",{id:"configuration-4"},"Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.url")," (string - required) - The API URL."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.auth.basic.*")," (optional) - Enables HTTP Basic Authorization."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api.auth.retry.*")," (optional) - Configures the retry logic."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cache.ttl")," (optional) - Configures how long to cache hydrate requests")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Global configuration file oathkeeper.yml\nmutators:\n  hydrator:\n    # Set enabled to true if the authenticator should be enabled and false to disable the authenticator. Defaults to false.\n    enabled: true\n    config:\n      api:\n        url: http://my-backend-api\n        auth:\n          basic:\n            username: someUserName\n            password: somePassword\n        retry:\n          give_up_after: 2s\n          max_delay: 100ms\n      cache:\n        ttl: 60s\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nmutators:\n  - handler: hydrator\n    config:\n      api:\n        url: http://my-backend-api\n        auth:\n          basic:\n            username: someUserName\n            password: somePassword\n        retry:\n          give_up_after: 2s\n          max_delay: 100ms\n      cache:\n        ttl: 60s\n")),Object(r.b)("h3",{id:"access-rule-example-3"},"Access Rule Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "hydrator",\n      "config": {\n        "api": {\n          "url": "http://my-backend-api"\n        }\n      }\n    },\n    {\n      "handler": "cookie",\n      "config": {\n        "cookies": {\n          "some-arbitrary-data": "{{ print .Extra.cookie }}"\n        }\n      }\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);