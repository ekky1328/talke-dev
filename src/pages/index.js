import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <Index>
      <div className="home-page">
        <h1>
          G'day, I'm
          <br />
          Chris Talke.
        </h1>
        {/* <img src="pic.png" alt="My Profile Picure" /> */}
        <h6>Welcome to my little spot on the internet.</h6>
        <div className="blurb">
          <p>
            I’m a Fullstack Web Developer & IT Professional based in New South
            Wales, Australia.
          </p>
          <p>
            I design and develop websites and applications. I solve technical
            problems for small to medium sized businesses.
          </p>
          <p>This is my place to write about... tech? stuff? </p>
        </div>
        <hr className="split" />
        <div className="mini-menu">
          <ul>
            <li>
              <div>01.</div>
              <div>
                <u>About Me</u>
              </div>
            </li>
            <li>
              <div>02.</div>
              <div>
                <u>Blog and technical stuff.</u> <br /> Recent: <u>Blog # 3</u>.
                <br /> Popular: <u>Blog # 1</u>, <u>Blog # 2</u> and{" "}
                <u>Blog # 3</u>.
              </div>
            </li>
            <li>
              <div>03.</div>
              <div>
                <u>Get in touch</u> or check out my other stuff: <u>Github</u>,{" "}
                <u>Twitter</u> and <u>LinkedIn</u>.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Index>
  </Layout>
)

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
    grid-template-rows: 1fr 35px auto auto auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

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
