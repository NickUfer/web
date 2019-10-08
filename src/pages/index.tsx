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
import Footer from '../components/footer'
import ResponsiveSection from '../components/responsive-section'
import thomas from '../images/thomas.png'
import aeneas from '../images/aeneas.png'
import Profile from '../components/profile'
import { graphql } from 'gatsby'

const IndexPage = ({ data }: any) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
        title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
      />
      <Hero
        title="Build secure cloud native applications and infrastructure"
        subtitle="Modern identity services and infrastructure to help developers master the cloud."
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
      <Newsletter/>
      <ResponsiveSection
        title={<h3>Why ORY</h3>}
        left={
          <>
            <p className="mobile-offset-32">
              ORY is the open source and cloud native identity infrastructure. ORY
              is written in Go and open standards and consensus are the
              foundation. It is language and platform independent, extremely
              lightweight, starts up in seconds and doesn’t interfere with your
              code. See our <a href="https://www.ory.sh/docs">documentation</a> to
              get started.
            </p>
          </>
        }
        right={
          <img
            alt="ORY is the open source and cloud native identity infrastructure."
            className={cn('responsive', styles.whyOry)}
            src={oryStack}
          />
        }
      />
      <Projects/>
      <Adopters/>
      <Stats/>
      <ResponsiveSection
        title={<h3>About us</h3>}
        left={
          <>
            <p>
              Our mission is to help make the cloud more manageable, useful and
              safe and to give developers access to infrastructure and services
              that makes developing for the cloud easier. We consider it a
              privilege to be able to help developers push the boundaries of
              modern cloud technology.
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
                  <a href="https://github.com/aeneasr">github.com/aeneasr</a>
                </>
              }
              img={data.aeneas.childImageSharp.fixed}
            />
            <Profile
              name="Thomas Aidan Curran"
              description={
                <>
                  <a href={'https://www.linkedin.com/in/thomasaidancurran/'}>linkedin.com/in/thomasaidancurran/</a>
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
