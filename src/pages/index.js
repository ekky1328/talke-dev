import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

export default () => {
  const {
    wp: {
      page: {
        homePage: {
          title,
          subtitle,
          blurb,
          email,
          emailsubject,
          twitter,
          linkedin,
          github,
        },
      },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      wp {
        page(id: "cGFnZToy") {
          homePage {
            subtitle
            title
            blurb
            email
            emailsubject
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Index>
        <div className="home-page">
          <h1>{title}</h1>
          <h6>{subtitle}</h6>
          <div
            className="blurb"
            dangerouslySetInnerHTML={{ __html: blurb }}
          ></div>
          <hr className="split" />
          <div className="mini-menu">
            <ul>
              <li>
                <div>01.</div>
                <div>
                  <Link to="/about-me">About Me</Link>.
                </div>
              </li>
              <li>
                <div>02.</div>
                <div>
                  <Link to="/projects">Personal Projects</Link>.
                </div>
              </li>
              <li>
                <div>03.</div>
                <div>
                  <Link to="/blog">Blog and Technical Stuff</Link>.
                </div>
              </li>
              <li>
                <div>04.</div>
                <div>
                  <a
                    href={`mailto:${email}?Subject=${emailsubject}`}
                    target="_top"
                  >
                    Get in touch
                  </a>{" "}
                  or check out my other socials:{" "}
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                  ,{" "}
                  <a href={twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>{" "}
                  and{" "}
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  .
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Index>
    </Layout>
  )
}

const Index = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  div.home-page {
    width: 450px;
    max-height: 600px;
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
        font-size: 58px;
      }

      & h6 {
        font-size: 16px;
        margin-bottom: 6px;
      }

      & .blurb,
      & .mini-menu {
        font-size: 14px;
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

    & .mini-menu {
      grid-column: 1/5;
      grid-row: 5/6;
    }
  }

  div.mini-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  div.mini-menu ul li {
    display: flex;
    margin: 17px 0;
  }

  div.mini-menu ul li div:nth-of-type(1) {
    margin-right: 15px;
  }
`
