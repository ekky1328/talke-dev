import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import MiniNav from "../components/MiniNav"

export default () => {
  return (
    <Layout container>
      <Index>
        <MiniNav isSubPage />
        <h1>My Projects</h1>
      </Index>
    </Layout>
  )
}

const Index = styled.div``
