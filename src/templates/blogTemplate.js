import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"


export default function Template({ data }) {
    console.log(data)
    const { markdownRemark } = data // data.markdownRemark holds our post data
    // => const post = data.markdownRemark
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}
export const pageQuery = graphql`
  query BlogPostByPath ($path: String!) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`