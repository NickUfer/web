import Layout from '../components/layout'
import React from 'react'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Section from '../components/section'
import SEO from '../components/seo'
import oathkeeperPolyglot from '../images/oathkeeper/svg_oathkeeper_p.svg'
import Projects from '../components/projects'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import CodeBox, { Languages } from '../components/codebox'
import oathkeeperProcess from '../images/oathkeeper/svg_oathkeeper.svg'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'access-rules.yml',
        language: Languages.YML,
        code: `---
- upstream:
    url: http://my-backend-service
  match:
    url: http://my-app/some-route/<.*>
    methods:
      - GET
  authenticators:
    - handler: jwt
  authorizer:
    hander: allow
  mutators:
    - handler: headers
      config:
        headers:
          X-User: "{{ print .Subject }}"
# ...`,
      },
      {
        filename: 'config.yml',
        language: Languages.YML,
        code: `---
daemon:
  proxy:
    port: 4455
access_rules:
  repositories:
    - access-rules.yml
authenticators:
  jwt:
    enabled: true
    config:
      jwks_urls:
        - https://my-website.com/.well-known/jwks.json
# ...
`,
      },
    ]}
  />
)

const OathkeeperPage = () => (
  <Layout theme="oathkeeper" appendix={'Oathkeeper'}>
    <SEO
      description=""
      title={`${brandPrefix} Oathkeeper Open Source Identity and Access Proxy (IAP).`}
    />
    <Hero
      title="Configure how traffic interacts with your application"
      subtitle="Identity and Access Proxy (IAP). Authenticate and authorize all traffic, to interact with your applications."
      cta={[
        {
          title: 'Docs',
          href: 'https://www.ory.sh/docs/oathkeeper',
          style: 'primary',
        },
        {
          title: 'Tutorial',
          href: 'https://www.ory.sh/docs/oathkeeper/install',
          style: 'secondary',
        },
      ]}
    />
    <Newsletter />
    <Section
      left={
        <>
          <h3>What is {brandPrefix}Oathkeeper?</h3>
          <p>
            {brandPrefix}Oathkeeper is a cloud native Identity & Access Proxy /
            API (IAP) and Access Control Decision API. It authenticates,
            authorizes, and mutates incoming HTTP(s) requests, is Open Source,
            and written in Go. Head over to our{' '}
            <a className="to-black" href="https://www.ory.sh/docs/oathkeeper">
              documentation
            </a>{' '}
            and learn more.
          </p>
        </>
      }
      wide
      right={
        <img
          alt="The ORY Oathkeeper identity and access proxy"
          className="responsive"
          src={oathkeeperProcess}
        />
      }
      mobile={[
        <h3>What is {brandPrefix}Oathkeeper?</h3>,
        <img
          alt="The ORY Oathkeeper identity and access proxy"
          className="responsive"
          src={oathkeeperProcess}
        />,
        <p className="mobile-offset-32">
          {brandPrefix}Hydra is Open Source and OpenID Connect Certified&reg;
          technology that integrates with any login system. Get started in
          minutes, and provide secure access to your application and API
          endpoints. Head over to our{' '}
          <a href="https://www.ory.sh/docs/hydra">documentation</a> and learn
          more.
        </p>,
      ]}
    />
    <Section
      dark
      right={<img className="responsive" src={oathkeeperPolyglot} />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Oathkeeper is written in Go and we provide SDKs for
            every language. We work with any login system and it is easy to
            customize the login experience. Our{' '}
            <a href="https://www.ory.sh/docs/oathkeeper">documentation</a> makes
            integrating {brandPrefix}Oathkeeper a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <img className="responsive" src={oathkeeperPolyglot} />,
        <p className="mobile-offset-32">
          {brandPrefix}Oathkeeper is written in Go and we provide SDKs for every
          language. We work with any login system and it is easy to customize
          the login experience. Our{' '}
          <a href="https://www.ory.sh/docs/oathkeeper">documentation</a> makes
          integrating {brandPrefix}Oathkeeper a snap.
        </p>,
      ]}
    />
    <Section
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Oathkeeper is straightforward on any system. We provide
            pre-built binaries, Docker images, and support a number of package
            managers.
          </p>
          <p>
            ORY technology works on the network. It interferes as little as
            possible with your code so you can concentrate on building your
            applications.
          </p>
          <p>
            <a
              href="https://www.ory.sh/docs/oathkeeper/api-access-rules"
              className="cta tertiary"
            >
              Learn more
            </a>
          </p>
        </>
      }
      wide
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
            {brandPrefix}Oathkeeper is straightforward on any system. We provide
            pre-built binaries, Docker images, and support a number of package
            managers.
          </p>
          <p>
            ORY technology works on the network. It interferes as little as
            possible with your code so you can concentrate on building your
            applications.
          </p>
        </div>,
      ]}
    />
    <Projects />
    <Adopters />
    <Stats />
    <Collaborator />
  </Layout>
)

export default OathkeeperPage
