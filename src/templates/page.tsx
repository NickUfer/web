import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogSection from '../components/blog-section'
import Footer from '../components/footer'
import BlogHero from '../components/blog-hero'

export default function PageTemplate(props: any) {
  console.log(props)
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter: fn, html } = markdownRemark

  return (
    <Layout>
      <SEO description={fn.metaDescription || ''} title={fn.metaTitle} />
      <BlogHero
        title={fn.title}
        date={fn.lastUpdatedAt && `Last updated at ${fn.lastUpdatedAt}`}
      />
      <BlogSection>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        metaTitle
        metaDescription
        lastUpdatedAt
      }
    }
  }
`
