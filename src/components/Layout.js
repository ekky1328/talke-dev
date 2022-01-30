import React, { useEffect, useLayoutEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

const Layout = ({
  children,
  container,
  title,
  subtitle,
  blog,
  blogMenu = { next: null, previous: null },
}) => {
  const [theme] = useState(true)
  const { previous, next } = blogMenu

  function generateTitle(title) {
    if (title === undefined) {
      return "Christopher Talke | Coffs Harbour based IT Professional, Managed IT Support, Cloud Support, Network Support | talke.dev"
    }
    return `${title} | Christopher Talke | Coffs Harbour based IT Professional, Managed IT Support, Cloud Support, Network Support | talke.dev`
  }

  function generateSubtitle(subtitle) {
    if (subtitle === undefined) {
      return "Christopher Talke is a Coffs Harbour based IT Professional, and this is his blog that will typically cover anything to do with web dev, windows/linux server things or janky networking stuff!"
    }
    return subtitle
  }

  return (
    <>
      <GlobalStyle theme={theme} blog={blog} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{generateTitle(title)}</title>
        <meta name="description" content={generateSubtitle(subtitle)}></meta>
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />
      </Helmet>
      <div className="top-bar">
        {blog !== undefined ? (
          <div className="blog-menu">
            {previous === null ? (
              <a
                className="disabled-link"
                href="/"
                onClick={e => e.preventDefault()}
              >
                Previous
              </a>
            ) : (
              <a href={previous.frontmatter.slug}>Previous</a>
            )}

            <a href="/">Home</a>

            {next === null ? (
              <a
                className="disabled-link"
                href="/"
                onClick={e => e.preventDefault()}
              >
                Next
              </a>
            ) : (
              <a href={next.frontmatter.slug}>Next</a>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <main className={container ? "container" : ""}>{children}</main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;900&display=swap');

  :root {
    --text-size: 14px;
    --main-colour: ${props => (props.theme ? "#000" : "#fff")};
    --background: ${props => (props.theme ? "#fff" : "#000")};
    --secondary-colour: ${props => (props.theme ? "#797979" : "#d5d5d5")};
    --tertiary-colour: ${props => (props.theme ? "#000" : "#fff")};
  }

  ::selection {
    color: white;
    background: var(--main-colour);
  }

  * {
    transition: all 250ms;
  }

  body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: var(--text-size);
    background-color: var(--background);
    color: var(--secondary-colour);
    margin: 0;
    padding: 0;
  }

  div.theme-toggle {
    position: absolute;
    right: 25px;
    top: 25px;
    font-size: 30px;
  }

  div.top-bar {
    position: absolute;
    top: 0;
    background-color: var(--main-colour);
    height: ${props => (props.blog !== undefined ? "30px" : "10px")};
    transition: height 0.5s;
    width: 100%;

      .blog-menu {
      max-width: 650px;
      height: 30px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

        a {
          color: var(--background);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        a.disabled-link {
          opacity: 0.75;
          text-decoration: line-through;
          cursor: not-allowed;
        }

      }

  }

  @media only screen and (max-width: 600px) { 
    .blog-menu {
      padding: 0 20px;
    }
  }

  a {
    color: var(--secondary-colour);
    transition: color 100ms;

    &:hover {
      color: var(--main-colour)
    }
  }

  .container {
    width: 650px;
    margin: 0 auto 50px auto;
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    color: var(--main-colour);
    margin: 0;
    padding: 0;
  }

  h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    margin: 5px 0;
    padding: 0;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 42px;
    }

    .container {
      width: 375px;
    }
  }

`

export default Layout
