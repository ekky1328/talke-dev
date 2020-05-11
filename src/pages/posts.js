import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Tags from "../components/Tags"

export default props => {
  const { mdx, previous, next } = props.data

  return (
    <Layout title={mdx.frontmatter.title} blog blogMenu={{ previous, next }}>
      <StyledBlogPost>
        <h1>{mdx.frontmatter.title}</h1>
        <h6 dangerouslySetInnerHTML={{ __html: mdx.frontmatter.subtitle }} />
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
          <Tags tags={mdx.frontmatter.tags} />
        </p>
      </StyledBlogPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $prev: String, $next: String) {
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

    previous: mdx(id: { eq: $prev }) {
      frontmatter {
        slug
        title
        publish
      }
    }

    next: mdx(id: { eq: $next }) {
      frontmatter {
        slug
        title
        publish
      }
    }
  }
`

const StyledBlogPost = styled.div`
  max-width: 650px;
  margin: 70px auto 50px auto;

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
    margin-top: 45px;
    margin-bottom: 5px;
  }

  h4:nth-of-type(1) {
    margin-top: 25px;
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

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
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

  pre code.grvsc-code {
    white-space: pre-wrap;
  }

  .grvsc-line-highlighted {
    background: #ecf6ff;
    border-left: 7px solid #82c5ff;
    padding-left: calc(24px - 7px);
  }

  ul code,
  p code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
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

  div.alert {
    position: relative;
    z-index: 50;
    border: 1px solid;
    border-left: 7.5px solid;
    padding: 5px 7.5px;
    margin: 30px 0;

    &.info {
      border-color: #82c5ff;
      background: #ecf6ff;
      color: #0082f7;
    }

    &.warning {
      border-color: #fff682;
      background: #fffcec;
      color: #a9a522;
    }

    &.danger {
      border-color: #ff8282;
      background: #ffecec;
      color: #f70000;
    }
  }
`
