import Layout from '../components/layout'
import React from 'react'
import BlogHero from '../components/blog-hero'
import BlogSection from '../components/blog-section'
import SEO from '../components/seo'
import discord from '../images/discord.svg'
import github from '../images/github.svg'
import discourse from '../images/discourse.svg'
import Footer from '../components/footer'
import { brandPrefix } from '../config'

const productName = `${brandPrefix}Hydra`
const title = `${productName} v1.0 is here!`

const HydraPage = () => (
  <Layout
    tiny={process.env.GATSBY_DOMAIN === 'gethydra.sh'}
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
    <SEO description="" title={title} />
    <BlogHero
      title={title}
      date={'June 1st, 2019'}
      subtitle={
        <>
          <p>
            We are very excited to announce the 1.0 release of{' '}
            <a href={'https://github.com/ory/hydra'}>{productName}</a>, the open
            source OpenID Connect Certified&reg; certified OAuth 2.0 and OpenID
            Connect server that runs natively everywhere: Kubernetes, Virtual
            Machines, Bare-Metal-Servers, Windows, IoT devices.
          </p>
          <p>
            {productName} is available via{' '}
            <a href="https://github.com/ory/hydra">GitHub</a>,{' '}
            <a href="https://hub.docker.com/r/oryd/hydra/">Docker</a>,{' '}
            <a href="https://k8s.ory.sh/helm">Helm</a>,{' '}
            <a href="https://www.ory.sh/docs/hydra/install">
              Homebrew, Scoop, and many other common package managers
            </a>
            .
          </p>
        </>
      }
    />
    <BlogSection>
      <p>
        This release concludes a year-long development process where maintainers
        and adopters worked relentlessly on building the most resilient,
        efficient, and easiest to integrate OpenID and OAuth 2.0 Server to date.
        We would like to thank everyone at{' '}
        <a href="https://segment.com/">Segment</a>,{' '}
        <a href="https://www.raspberrypi.org/">Raspberry PI</a>,{' '}
        <a href="https://www.arduino.cc/">Arduino</a>,{' '}
        <a href="https://hootsuite.com">Hootsuite</a>, and many other companies
        for their invaluable feedback and trust in this open source project.
      </p>
      <p>
        As part of this release, we are pleased to announce that {productName}
        has been certified as an OpenID Provider by the{' '}
        <a href="https://openid.net/foundation/">OpenID Foundation</a>!
        Certified profiles include: Basic OP, Implicit OP, Hybrid OP, Config OP,
        Dynamic OP.
      </p>
      <p>
        In the name of all the maintainers and contributors, we want to thank
        our sponsors <a href="https://www.raspberrypi.org/">Raspberry PI</a>,{' '}
        <a href="https://deutsche-boerse.com/dbg-de/">German Stock Exchange</a>,{' '}
        <a href="https://www.thoughtworks.com/">ThoughtWorks</a>,{' '}
        <a href="https://tulip.com/">Tulip Retail</a>,{' '}
        <a href="https://allmyfunds.com.au/">AllMyFunds</a> and everyone who
        helped financially with bringing this project forward.
      </p>
      <h3>What's next?</h3>
      <p>
        There are many exciting things coming up. We are currently in the
        process of applying to become a {' '}
        <a href="https://www.cncf.io/">Cloud Native Computing Foundation</a>{' '}
        incubating project. There are also several plans of improving
        interoperability with Kubernetes through Custom Resources and Custom
        Controllers. We are also planning of implementing several up-and-coming
        specs such as the{' '}
        <a href="https://openid.net/wg/fapi/">Financial-grade API</a> proposals
        and the{' '}
        <a href="https://datatracker.ietf.org/doc/draft-ietf-oauth-mtls/">
          OAuth 2.0 Mutual TLS Client Authentication Draft
        </a>
        .
      </p>
    </BlogSection>
    <Footer />
  </Layout>
)

export default HydraPage
