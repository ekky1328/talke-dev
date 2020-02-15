import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MiniNav = ({ isBlogPost, isSubPage }) => {
  return (
    <StyledMiniNav>
      {isBlogPost ? <Link to="/blog">Posts</Link> : ""}
      {isSubPage ? <div></div> : ""}
      <Link to="/">Home</Link>
    </StyledMiniNav>
  )
}

const StyledMiniNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 25px 0;
`

export default MiniNav
