import React from 'react'
import Layout from '../components/layout'
import BlogHero from '../components/blog-hero'
import BlogSection from '../components/blog-section'
import { Link } from 'gatsby'
import Section from '../components/section'

const NotFoundPage = () => (
  <Layout>
    <BlogHero title="404 - not found" />
    <Section
      wide
      left={
        <>
          <p>
            The requested page does not exist. We will try to automatically
            redirect you to our home page in 10 seconds.
          </p>
          <p>
            Please go to the the home page by clicking <Link to="/">here</Link>.
          </p>
        </>
      }
      right={
        <video width="100%" autoPlay controls={false} loop preload="true">
          <source src={require('../images/404.mp4')} type="video/mp4" />
        </video>
      }
    />
  </Layout>
)

export default NotFoundPage
