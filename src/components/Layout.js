import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

const Layout = ({ children, container, title }) => {
  function generateTitle(title) {
    if (title === undefined) {
      return "talke.dev"
    }
    return `${title} | talke.dev`
  }

  return (
    <>
      <GlobalStyle theme="light" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{generateTitle(title)}</title>
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />
      </Helmet>
      <div className="top-bar" />
      <main className={container ? "container" : ""}>{children}</main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap');

  :root {
    --text-size: 12px;
    --main-colour: #000;
    --secondary-colour: #797979;
  }

  body {
    font-family: 'Cousine', monospace;
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
    height: 10px;
    width: 100%;
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
    font-family: 'Libre Franklin', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    color: var(--main-colour);
    margin: 0;
    padding: 0;
  }

  h6 {
    font-family: 'Cousine', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
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
