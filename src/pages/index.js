import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

import BlogPostCard from "../components/BlogPostCard"

export default ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <Index>
        <div className="home-page">
          <h1>G'day, I'm Chris Talke.</h1>
          <h6>Welcome to my corner of the internet.</h6>
          <div className="blurb">
            <p>
              I'm an IT Professional based in Coffs Harbour, New South Wales
              with an uncanny love for web development.
            </p>
            <p>
              I've always used some type of technology to solve problems in my
              life, and this is my place to share my findings and learnings.
              Hopefully in the process of sharing knowledge I can help others
              who are learning, or seeking answers to problems I may have
              solved.
            </p>
            <p>
              This blog will typically cover anything to do with web
              development, linux server things or janky networking stuff. I'm
              not going to limit this blog, but it is mostly going to be based
              around tech!
            </p>
            <p>
              Just keep in mind I'm not an expert in many things, I learn enough
              to solve problems and I hope you can find value in that.
            </p>
            <p>
              If you have any questions or just want to chat, feel free to{" "}
              <a
                href={`mailto:info@christopher-talke.dev?Subject="Hi!"`}
                target="_top"
              >
                get in touch
              </a>{" "}
              or check out my{" "}
              <a
                href="https://github.com/christopher-talke"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              ,{" "}
              <a
                href="https://twitter.com/cbtalke"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/ctalke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              .
            </p>
          </div>
        </div>
        <div className="blog-card-column">
          {posts.map(post => (
            <BlogPostCard {...post} />
          ))}
        </div>
      </Index>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { publish: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            subtitle
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`

const Index = styled.div`
  display: grid;
  grid-template-columns: 375px 1fr;
  grid-column-gap: 25px;
  max-width: 960px;
  padding-top: 100px;
  margin: 0 auto;

  div.home-page {
    width: 350px;
    max-height: 300px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr auto auto auto auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media only screen and (max-width: 600px) {
      & {
        width: 375px;
      }

      & h1 {
        font-size: 54px;
      }

      & h6 {
        font-size: 14px;
        margin-bottom: 6px;
      }

      p {
        font-size: 9px;
      }
    }

    & h1 {
      margin-left: -7px;
      line-height: 88.78%;
      grid-column: 1/5;
      grid-row: 1/2;
    }

    & h6 {
      margin-top: 5px;
      grid-column: 1/5;
      grid-row: 2/3;
    }

    & .blurb {
      line-height: 150%;
      grid-column: 1/5;
      grid-row: 3/4;
    }

    & hr {
      width: 80%;
      border: 0;
      border-top: 1px solid rgba(0, 67, 116, 0.35);
      grid-column: 1/5;
      grid-row: 4/5;
    }

    & .span {
      grid-column: 1/5;
      grid-row: 5/6;
    }
  }
`
