(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),o=(t(0),t(329)),s={id:"username-email-password",title:"Username / Email & Password"},i={id:"version-v0.2/concepts/credentials/username-email-password",title:"Username / Email & Password",description:"The password method is the most commonly used form of authentication, it",source:"@site/versioned_docs/version-v0.2/concepts/credentials/username-email-password.md",permalink:"/kratos/docs/v0.2/concepts/credentials/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/credentials/username-email-password.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.2/concepts/credentials"},next:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/v0.2/concepts/credentials/openid-connect-oidc-oauth2"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"JSON Schema",id:"json-schema",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",Object(o.b)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",Object(o.b)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),Object(o.b)("p",null,"ORY Kratos hashes the password after registration, password reset, and password\nchange using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/P-H-C/phc-winner-argon2"}),"Argon2"),", the winner of\nthe Password Hashing Competition (PHC)."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Enabling this method is as easy as setting"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  strategies:\n    password:\n      enabled: true\n")),Object(o.b)("p",null,"in your ORY Kratos configuration. You can configure the Argon2 hasher using the\nfollowing options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hashers:\n  argon2:\n    parallelism: 1\n    memory: 131072 # 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),Object(o.b)("p",null,"For a complete reference, defaults, and description please check the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../reference/configuration.md"}),"Configuration Reference"),"."),Object(o.b)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./security.md#argon2"}),"Argon2 Security"),"."),Object(o.b)("h2",{id:"json-schema"},"JSON Schema"),Object(o.b)("p",null,"When processing an identity and its traits, the method will use the JSON Schema\nto extract one or more identifiers. Assuming you want your identities to sign up\nwith an email address, and use that email address as a valid identifier during\nlogin, you can use a schema along the lines of:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"If you want a unique username instead, you could write the schema as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": "string",\n      "title": "Username",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,'You are not limited to one identifier per identity. You could also combine both\nfields and support a use case of "username" and "email" as an identifier for\nlogin:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "title": "Username",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Assuming your traits schema is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "first_name": {\n      "type": "string"\n    },\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  },\n  "additionalProperties": false\n}\n')),Object(o.b)("p",null,"And an identity registers with the following JSON payload (more on registration\nin\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../self-service/flows/user-login-user-registration.md"}),"Selfservice Registration"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be `argon2(my-secret-password)`\n")),Object(o.b)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",Object(o.b)("inlineCode",{parentName:"p"},"johndoe123")," or ",Object(o.b)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",Object(o.b)("inlineCode",{parentName:"p"},"email")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"username"),"."))}p.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);