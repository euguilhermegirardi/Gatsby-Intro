import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Post = ({ data }) => {
   const { html, frontmatter } = data.markdownRemark;
   const { title, date } = frontmatter;

   return (
      <Layout>
         <SEO title="Home" />
         <h1>{title}</h1>
         <p>{date}</p>
         <div dangerouslySetInnerHTML={{ __html: html }} />
         <Link to="/">Go to Home</Link>
      </Layout>
   )
}

export const pageQuery = graphql`
   query PostPage($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
         html
         frontmatter {
           date
           path
           title
         }
       }
   }
`;

export default Post
