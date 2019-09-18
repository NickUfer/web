import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/footer'
import BlogSection from '../components/blog-section'
import BlogHero from '../components/blog-hero'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Markdown from '../components/markdown'
import Newsletter from '../components/newsletter'

export default function BlogTemplate(props: any) {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter: fn, html } = markdownRemark
  return (
    <Layout>
      <SEO description={fn.metaDescription || ''} title={fn.metaTitle} />
      <BlogHero
        title={fn.title}
        overline={fn.overline}
        date={fn.publishedAt}
        author={fn.author}
        subtitle={fn.subtitle}
      />
      <BlogSection>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogSection>
      <Newsletter light left={<h3>Never miss an article</h3>} />
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
        author
        overline
        subtitle
        metaTitle
        metaDescription
        publishedAt(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
