import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    // => const post = data.markdownRemark
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <div className="jumbotron mt-1">
                <h1>{frontmatter.title}</h1>
                <p className="text-minor">{frontmatter.description}</p>
                <img src={frontmatter.thumbnail} alt="Image article" style={{maxHeight: '50vh'}} className="rounded d-block mx-auto"/>

            </div>

            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    )
}
export const pageQuery = graphql`
  query BlogPostByPath ($path: String!) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        thumbnail
        description
      }
    }
  }
`