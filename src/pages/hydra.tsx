import Layout from '../components/layout'
import React from 'react'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Section from '../components/section'
import SEO from '../components/seo'
import codeAnimation from '../images/hydra/code.svg'
import Projects from '../components/projects'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import Footer from '../components/footer'
import CodeBox from '../components/codebox'
import discord from '../images/discord.svg'
import github from '../images/github.svg'
import discourse from '../images/discourse.svg'
import integrationAnimation from '../images/hydra/animation.svg'
import { brandPrefix } from '../config'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'login.js',
        language: 'js',
        code: `fetch('https://hydra-admin-api/oauth2/auth/requests/login/accept?login_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        subject: 'john.doe@mydomain.com',
        remember: true
    }),
})
    .then((res) => res.json())`,
      },
      {
        filename: 'consent.js',
        language: 'js',
        code: `fetch('https://hydra-admin-api/oauth2/auth/requests/consent/accept?consent_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        grant_scope: ['openid', 'offline', 'photos.read'],
        session: {
            access_token: { subscription_plan: 'small', foo: 'bar' },
            id_token: { phone: '+123 321 123 321', foo: 'bar' }
        }
    }),
})
    .then((res) => res.json())`,
      },
    ]}
  />
)

const HydraPage = () => (
  <Layout
    announcement={
      <>
        <a href="https://github.com/ory/hydra/releases/tag/v1.0.0">
          Announcing {brandPrefix}Hydra version 1.0.0!
        </a>
      </>
    }
    tiny={brandPrefix.length === 0}
    menu={[
      {
        title: 'Get started',
        href: 'https://www.ory.sh/docs/hydra/5min-tutorial',
        className: 'hidden-sm',
      },
      { title: 'Docs', href: 'https://www.ory.sh/docs/hydra' },
    ]}
    icons={[
      { title: 'GitHub', image: github, href: 'https://github.com/ory/hydra' },
      { title: 'Chat', image: discord, href: 'https://www.ory.sh/chat' },
      { title: 'Forum', image: discourse, href: 'https://community.ory.sh/' },
    ]}
  >
    <SEO
      description=""
      title={
        process.env.GATSBY_DOMAIN === 'gethydra.sh'
          ? 'Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh'
          : `${brandPrefix}Hydra Open Source OAuth 2.0 and OpenID Connect Server - ory.sh`
      }
    />
    <Hero
      title="Secure access to your applications and APIs"
      subtitle="OpenID Certified&reg; OAuth 2.0 and OpenID Connect access control and API security for cloud native applications."
      cta={[
        {
          title: 'Docs',
          href: 'https://www.ory.sh/docs/hydra',
          style: 'primary',
        },
        {
          title: 'Tutorial',
          href: 'https://www.ory.sh/docs/hydra/5min-tutorial',
          style: 'secondary',
        },
      ]}
    />
    <Newsletter />
    <Section
      left={
        <>
          <h3>How {brandPrefix}Hydra works</h3>
          <p>
            {brandPrefix}Hydra is Open Source and OpenID Connect Certified&reg;
            technology that integrates with any login system. Get started in
            minutes, and provide secure access to your application and API
            endpoints. Head over to our{' '}
            <a className="to-black" href="https://www.ory.sh/docs/hydra">
              documentation
            </a>{' '}
            and learn more.
          </p>
        </>
      }
      wide
      right={
        <img
          alt="The ORY Hydra login and consent flow"
          className="responsive"
          src={integrationAnimation}
        />
      }
      mobile={[
        <h3>How {brandPrefix}Hydra works</h3>,
        <img
          alt="The ORY Hydra login and consent flow"
          className="responsive"
          src={integrationAnimation}
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
      leftWide
      left={<img className="responsive" src={codeAnimation} />}
      right={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Hydra is written in Go and we provide SDKs for every
            language. We work with any login system and it is easy to customize
            the login experience. Our{' '}
            <a href="https://www.ory.sh/docs/hydra">documentation</a> makes
            integrating {brandPrefix}Hydra a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <img className="responsive" src={codeAnimation} />,
        <p className="mobile-offset-32">
          {brandPrefix}Hydra is written in Go and we provide SDKs for every
          language. We work with any login system and it is easy to customize
          the login experience. Our{' '}
          <a href="https://www.ory.sh/docs/hydra">documentation</a> makes
          integrating {brandPrefix}Hydra a snap.
        </p>,
      ]}
    />
    <Section
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Hydra works with any login system and only a few lines
            of code are required.
          </p>
          <p>
            ORY technology works on the network. It interferes as little as
            possible with your code so you can concentrate on building your
            applications.
          </p>
          <p>
            <a
              href="https://www.ory.sh/docs/hydra/oauth2"
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
            {brandPrefix}Hydra works with any login system and only a few lines
            of code are required.
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
    <Footer />
  </Layout>
)

export default HydraPage
