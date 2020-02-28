import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import oryStack from '../images/ory-stack.svg'
import * as styles from './index.module.css'
import cn from 'classnames'
import Projects from '../components/projects'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import ResponsiveSection from '../components/responsive-section'
import Profile from '../components/profile'
import { graphql } from 'gatsby'

const IndexPage = ({ data }: any) => {
  return (
    <Layout>
      <SEO
        description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
        title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
      />
      <Hero
        title="Open source identity infrastructure and services for the cloud"
        subtitle="Manage, secure and configure your cloud native applications."
        cta={[
          {
            title: 'GitHub',
            href: 'https://github.com/ory',
            style: 'primary',
          },
          {
            title: 'Docs',
            href: 'https://www.ory.sh/docs',
            style: 'secondary',
          },
        ]}
      />
      <Newsletter />
      <ResponsiveSection
        title={<h3>Why use ORY technology?</h3>}
        left={
          <>
            <p className="mobile-offset-32">
              ORY is open source, written in Go, founded in open standards and
              consensus, and is cloud native. ORY is language and platform
              independent, extremely lightweight, starts up in seconds and
              doesn’t interfere with your code. See our{' '}
              <a href="https://www.ory.sh/docs">documentation</a> to get
              started.
            </p>
          </>
        }
        right={
          <img
            alt="ORY is the open source and cloud native identity infrastructure."
            className={cn('responsive')}
            src={oryStack}
          />
        }
      />
      <Projects />
      <Adopters />
      <Stats />
      <ResponsiveSection
        title={<h3>About us</h3>}
        left={
          <>
            <p>
              Our mission is to provide a common identity infrastructure to help
              shape the way data is managed and exchanged in the cloud. We
              provide access to infrastructure and services to help solve the
              hardest problems in emerging cloud standards. It is our goal to
              help developers push the boundaries of modern cloud technology and
              engineering.
            </p>
          </>
        }
        right={
          <>
            <Profile
              name="Aeneas Rekkas"
              description={
                <>
                  <a href="https://github.com/aeneasr">github.com/aeneasr</a>
                </>
              }
              img={data.aeneas.childImageSharp.fixed}
            />
            <Profile
              name="Thomas Aidan Curran"
              description={
                <>
                  <a href={'https://www.linkedin.com/in/thomasaidancurran/'}>
                    linkedin.com/in/thomasaidancurran/
                  </a>
                </>
              }
              img={data.thomas.childImageSharp.fixed}
            />
          </>
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    aeneas: file(relativePath: { eq: "aeneas.png" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thomas: file(relativePath: { eq: "thomas.png" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
