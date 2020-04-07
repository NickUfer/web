(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return S}));var i=t(1),a=t(9),r=(t(0),t(213)),o={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"docs",previous:{title:"After Jobs",permalink:"/kratos/docs/next/self-service/workflows/jobs/after"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},l=[],u={rightToc:l};function S(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"## ORY Kratos Configuration\n#\n\n## dsn ##\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: Lorem quis Ut\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: http://pELosmsghNxZG.fnvDp10FWLEiXDaRWdaCltNGp593buxB0LMipuZMYyyXnAt5.GBS+E33zf8R\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - null\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: https://KPvsHnPzwsVslcgrFWPj.thl8FT\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: true\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: false\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: pariatur in\n            provider: google\n            client_id: Ut\n            client_secret: consequat\n            schema_url: https://IbdgcqKZSVYzycVVvN.wdokYUqhScUo0MfoQlb1JJEQPedgtBhT-y-3WQ1tvnKgemnRrIbaO231\n            issuer_url: https://TEQPCyVHwiDkwjoiQVazVmvDflEql.wczcn\n            auth_url: http://RNholpgSQqrcVXLnwlNJYAHDejQY.pugKWFFR\n            token_url: http://O.sxayDFxGC-KszQ78RiBBgepNCC-SI538-DonfDuQy8Q5.FMVyACUYSrwUX\n            scope:\n              - voluptate in\n              - ea dolor laboris id ullamco\n          - id: deserunt magna sed ut\n            provider: generic\n            client_id: sint anim cupidatat tempor\n            client_secret: in dolore qui\n            schema_url: https://LxaOLAjtIUK.pnI+KgHGvHvsATftc8h3CesrClcXEWpoMjoxV1ft87DZ4\n            issuer_url: https://enxealiAuTLJcxNQXnuE.krgRy\n            auth_url: http://fFkReoSoINMkpaq.dfyN5vZZ9-1WJVEKWo3ppYFSUSIekk0D\n            token_url: http://gUslQpUyaBLVjT.mszrknPSsq6+Z7aXyJNXdLw.B\n            scope:\n              - ex non do\n              - velit nulla\n              - aliqua dolore laborum proident est\n              - deserunt veniam ea\n              - ad voluptate\n          - id: reprehenderit ad in cillum\n            provider: generic\n            client_id: deserunt\n            client_secret: ut\n            schema_url: https://aUcAOvrtVUofjBLBdrLWQ.bqpqyXaslCHhAisWtmDRSfD1Z1FIq6UNz6Ola6smibv9Eg2N-\n            issuer_url: http://huBHzaPVqatXScwyo.zthfMTXSbak5Zs-sNoeWeGZYKuWJ44nbZ61vyl,NL41t58NIQTUvTlQDP,+b8e\n            auth_url: https://fSSOmD.qqktLhlLpcQmGTDz68JZNm,\n            token_url: http://fdvmTfsiFQpwhiRaLjbjsuuemGhwFgPFK.fiwpegB9Hk0yoCmkYOL-7+O,keXEDq4RLmzrzNkAhUz5,WwT+WWu6H\n            scope:\n              - irure\n              - et incididunt velit voluptate non\n              - occaecat anim veniam eiusmod\n\n  ## profile ##\n  #\n  profile:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 73754336ms\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 007122432m\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 638017s\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 5184h\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 16948412943ms\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://QtpObkXNXorEZVwJc.eakJzTob+RloGVHKMx9w,,jNDbHHy8JgSXd99DZgOkoflQxinzn5-s.q\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: https://aeRhmodfzNiya.ryicgsB1WHXtEQMPrji+bzHpU0r1g1QMEJc\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: revoke_active_sessions\n        - job: redirect\n          config:\n            default_redirect_url: http://BJQRkKvyebMaQjdBvicQtzIlHHvbwhyj.aasq3DRYffXrLVLbiQ0\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: https://QzCEBFlzhyONtLaJYKmrUlurYOtYQDQEA.tapFo0fxuJlx,agU+sKU,B7u.6mtFpjHFVJVpT5qR3vRE,TfE,3STXSk-,U\n            allow_user_defined_redirect: true\n        - job: session\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: session\n        - job: revoke_active_sessions\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 17956h\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://wFo.ojuaKQxiJOlLvTG-n7ov+Qmyg6sviHbGq0qIi4UEohpHVEXmBGS0h7fat8uczlpzJ5C5,\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://NGMwriw.xqgxfh70pqxpWl\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://bVgJclhgihwnKOwLSUeEjJjHUutLLJAIi.tolSG,bC.f+pPIPQr+,zcv\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://EmhOJPgriTIzCfGLnbEHE.iyqgWI.hjlbXZv+v.7RG,6LdKSrnlSVjHKCpNL+eqmT--tGqDtGnO52\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: https://YkCoboMg.kmdLoRJBJ-zV\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: session\n        - job: verify\n        - job: redirect\n          config:\n            default_redirect_url: http://jXwFIWNwiwTcdxyyvx.znp124YXlI3qxk.aW3hb\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: http://gdgmbmyobqHSDFPnpcJB.uiocsnRszO+wPPub-ANEA-Xe7-HuiBeh+8V2IXMv.y4h\n            allow_user_defined_redirect: false\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: session\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: qUmK2ZxvtFn@vxLpcKJDOQXXMUWtXNJmjsM.vbb\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: deserunt qui\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: exercitation et voluptate laboris\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: laboris\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## profile_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_PROFILE_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_PROFILE_UI=<value>\n  #\n  profile_ui: https://vYJwbpNuESPGzDgPwX.igmrz,qQx\n\n  ## mfa_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: https://MFzbgeWIwCiStDNhPexbOfnICmVYq.xaeWF1SOjkSSYu4nUd40mKKLvb,bwJq46Cc7VfamH,WuhuGZ1AQxv1HCoRzvl\n\n  ## login_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: http://hdWQNLfEyTvecypJWhmVvYs.sxM+ZuHWfnHb5BiaTMnCP7qMIxhSSfj\n\n  ## registration_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: https://fvlYovPzzMrQFKZXRVYfx.qukf\n\n  ## error_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://T.zgadus+E0OoPtHPGyMMblVJ28C.iui1xlj,mh5OXVhuSNwQy\n\n  ## Verify User Interface URL ##\n  #\n  # The URL of the Verify User Interface, the page where users can request activate and / or verify their email or telephone number.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: http://cRNsymjfluGyGuWAQq.wqop6+RfJceNig56P5,uHfghEWcBXrH3fIvAbZ553MLQeODs334D4YlslmIeajA4zYq\n\n  ## default_return_to ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://aeuBiTjbPMqGxwxNyKexJzRLy.xlzdoZVj2meTt0FOnFdSwoFDCVvWQntnDdmz...OiH95CF\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://wqQhQIQYElhRfccqmJNf.gkbhvrg.cPnmhZMs-Q45RdWvhR1zP3.ZfsNh2tKBRZMJn3KXYU6nvENaD+i\n\n    ## admin ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://jtKIioYA.slkbLcyx0WhpG3sdG4fHingB7kRre5hwoNvxQW5qTD-INCqiGW.Fr6cALSlD0V4taGKe1BaqrK.jNJGXN\n\n  ## whitelisted_return_to_domains ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  #\n  whitelisted_return_to_domains:\n    - http://zfWNnOMRpMCZRZBGbTjUBTDvPIYNslL.iqvTU70-+QEvjTCYaKK-OlLYRMCs6urBrhFuOZWN13096s,JRV8YtokZVnhsRyG\n    - http://qkKrrAypAXNbfIBpgNUQnxBu.uzhqVFUJ8udxXcQ5ZmkI,c5qkfGtHgR+LPWvfLmKL4uHI6Ixcjoc31asOGRxUYMBA\n    - https://vlrX.tirqDetAdAM\n    - http://vrBKMnvJXMo.wzA,GU,j\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: warning\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - commodo auteproident esse eiusmod\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 97369493\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 73568162\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 93386086\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 36320077\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 7721577\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Strict\n")))}S.isMDXComponent=!0},213:function(n,e,t){"use strict";t.d(e,"a",(function(){return v})),t.d(e,"b",(function(){return E}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),S=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},v=function(n){var e=S(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},_={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=Object(i.forwardRef)((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),v=S(t),m=i,E=v["".concat(o,".").concat(m)]||v[m]||_[m]||r;return t?a.a.createElement(E,s({ref:e},u,{components:t})):a.a.createElement(E,s({ref:e},u))}));function E(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);