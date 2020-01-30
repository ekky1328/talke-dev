import React from "react"
import { createGlobalStyle } from "styled-components"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme="light" />
      <div className="top-bar" />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap');

  :root {
    --text-size: 14px;
    --main-colour: #004374;
    --secondary-colour: #797979;
  }

  body {
    font-family: 'Cousine', monospace;
    font-size: var(--text-size);
    background-color: #f1f1f1;
    color: var(--secondary-colour);
    margin: 0;
    padding: 0;
  }

  div.top-bar {
    position: absolute;
    top: 0;
    background-color: var(--main-colour);
    height: 10px;
    width: 100vw;
  }

  h1 {
    font-family: 'Libre Franklin', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    color: var(--main-colour);
    margin: 0;
    padding: 0;
  }

  h6 {
    font-family: 'Cousine', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin: 5px 0;
    padding: 0;
  }
`

export default Layout
