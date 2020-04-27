import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/Layout"

export default ({ data }) => {
  const { mdx } = data
  console.log(mdx.frontmatter.tags.split(","))
  const tags = mdx.frontmatter.tags.split(",")
  return (
    <Layout title={mdx.frontmatter.title}>
      <StyledBlogPost>
        <h1>{mdx.frontmatter.title}</h1>
        <h6>{mdx.frontmatter.subtitle}</h6>
        <p id="blog_meta_header">
          <strong>Published</strong> {mdx.frontmatter.date}
        </p>
        <hr />
        <article>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <hr />
        <p id="blog_meta_footer">
          <p>
            <strong>Author</strong>
            Christopher Talke
          </p>
          <strong>Topics</strong>
          {tags.map((tag, key) => (
            <>
              {key === tags.length - 1 ? ` and ` : ""}
              {tag}
              {key < tags.length - 2 ? `, ` : ""}
            </>
          ))}
        </p>
      </StyledBlogPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        id
        slug
        subtitle
        title
        tags
      }
      body
      timeToRead
    }
  }
`

const StyledBlogPost = styled.div`
  max-width: 650px;
  margin: 50px auto 50px auto;

  & article {
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    & {
      max-width: 375px;
    }
  }

  & h1 {
    line-height: 88.78%;
  }

  h4 {
    margin-bottom: 5px;
  }

  h4 + p {
    margin-top: 0px;
  }

  & #blog_meta_header {
    margin: 25px 0;
  }

  & hr {
    width: 80%;
    border: 0;
    margin: 20px 0;
    border-top: 1px solid rgba(0, 67, 116, 0.35);
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  .blog-tag {
    text-transform: capitalize;
  }

  pre {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    margin: 30px 0;
    line-height: 1.4;
    transform: scale(1.05);
  }

  code.grvsc-code {
    white-space: pre-wrap;
  }

  .twitter-tweet {
    margin: 20px auto !important;
  }

  & #blog_meta_footer {
    margin-top: 35px;

    p {
      margin: 0;
    }

    strong {
      margin-right: 15px;
    }
  }
`
