import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <Index>
        <h1>About Me</h1>
      </Index>
    </Layout>
  )
}

const Index = styled.div``
