import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

const Layout = ({
  children,
  container,
  title,
  blog,
  blogMenu = { next: null, previous: null },
}) => {
  const { previous, next } = blogMenu

  function generateTitle(title) {
    if (title === undefined) {
      return "talke.dev"
    }
    return `${title} | talke.dev`
  }

  return (
    <>
      <GlobalStyle theme="light" blog={blog} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{generateTitle(title)}</title>
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
    --main-colour: #000;
    --secondary-colour: #797979;
  }

  ::selection {
    color: white;
    background: var(--main-colour);
  }

  body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: var(--text-size);
    background-color: #fff;
    color: var(--secondary-colour);
    margin: 0;
    padding: 0;
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
          color: white;
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
