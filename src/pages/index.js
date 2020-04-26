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
              I’m a Fullstack Web Developer & IT Professional based in New South
              Wales, Australia.
            </p>
            <p>
              I design and develop websites and applications. I solve technical
              problems for small to medium sized businesses.
            </p>
            <p>This is my place to write about… tech? stuff?</p>
          </div>
          <hr className="split" />
          <div className="span">
            <p>
              <a
                href={`mailto:info@christopher-talke.dev?Subject="Hi!"`}
                target="_top"
              >
                Get in touch
              </a>{" "}
              or check out my other socials:
              <br />
              <br />-{" "}
              <a
                href="https://github.com/christopher-talke"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              ,{" "}
              <a
                href="https://twitter.com/cbtalke"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/ctalke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
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
    allMdx {
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
  grid-template-columns: 350px 1fr;
  grid-column-gap: 50px;
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
