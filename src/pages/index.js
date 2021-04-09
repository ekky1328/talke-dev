import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

import BlogPostCard from "../components/BlogPostCard"

const Index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <StyledIndex>
        <div className="home-page">
          <h1>G'day, I'm Chris Talke.</h1>
          <h6>Welcome to my corner of the internet.</h6>
          <div className="blurb">
            <p>
              I'm an IT Professional based in Australia{" "}
              <span role="img">🦘</span> with a love for web dev and tech in
              general.
            </p>
            <p>
              I've always used technology to solve problems in my life, and this
              is my place to share my findings and learnings. Hopefully in the
              process of sharing knowledge I can help others who are learning,
              or seeking answers to problems I may have solved.
            </p>
            <p>
              This blog will typically cover anything to do with web dev,
              windows/linux server things or janky networking stuff! I'm not
              going to limit this blog, but it is mostly going to be based
              around tech!
            </p>
            <p>
              Just keep in mind I'm not an expert, I learn enough to solve
              problems and I hope you can find value in that.
            </p>
            <p>
              If you have any questions or just want to chat, feel free to{" "}
              <a href={`mailto:chris@talke.dev?Subject="Hi!"`} target="_top">
                get in touch
              </a>
              , check out my{" "}
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
          <h3 id="recent-posts">Recent Posts</h3>
          {posts.map(post => (
            <BlogPostCard {...post} />
          ))}
        </div>
      </StyledIndex>
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

const StyledIndex = styled.div`
  max-width: 960px;
  padding-top: 100px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 375px 1fr;
  grid-column-gap: 35px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-top: 50px;
  }

  div.home-page {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 25px auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media only screen and (max-width: 600px) {
      & {
        margin: 0 auto;
        margin-bottom: 25px;
        padding: 0 20px;
      }

      & h1 {
        font-size: 54px;
      }

      & h6 {
        font-size: 14px;
        margin-bottom: 6px;
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
      font-size: 16px;
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

  .blog-card-column {
    position: relative;

    &::after {
      width: 1px;
      height: 400px;
      content: "";
      background: grey;
      opacity: 0.35;
      position: absolute;
      top: 200px;
      left: -12px;
      z-index: 25;
    }

    & h3 {
      position: absolute;
      z-index: 50;
      display: block;
      font-size: 24px;
      opacity: 0.35;
      background: white;
      transform: rotate(-90deg);
      top: 75px;
      left: -87.5px;
    }

    @media only screen and (max-width: 600px) {
      &::after {
        display: none;
      }

      & h3 {
        position: relative;
        top: 0;
        left: 0;
        transform: rotate(0deg);
        margin: 0;
        text-align: center;
      }
    }
  }
`

export default Index
