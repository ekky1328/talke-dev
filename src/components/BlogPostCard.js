import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Tags from "../components/Tags"

const BlogPostCard = ({ frontmatter }) => {
  return (
    <>
      <StyledBlogPostCard>
        <div className="blog-meta">
          <Link to={`/${frontmatter.slug}`}>
            <h2>{frontmatter.title}</h2>
          </Link>
        </div>
        <div
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: frontmatter.subtitle }}
        />{" "}
        <div className="meta">
          <div className="publishDate">
            <span>{frontmatter.date}</span>
          </div>
          <div className="topics">
            <span>
              <Tags tags={frontmatter.tags} />
            </span>
          </div>
        </div>
      </StyledBlogPostCard>
    </>
  )
}

const StyledBlogPostCard = styled.div`
  position: relative;
  color: var(--tertiary-colour);
  font-weight: 400;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 23px 23px;
  border-radius: 5px;
  margin-bottom: 24px;

  hr {
    margin: 0;
  }

  & a {
    color: var(--main-colour);
    text-decoration: none;
  }

  & .blog-meta {
    display: flex;
    justify-content: space-between;

    p {
      text-align: right;
      min-width: 100px;
    }
  }

  & .blog-tag {
    text-transform: capitalize;
  }

  & .subtitle {
    margin-top: 5px;
    font-size: 16px;
  }

  & .meta {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    opacity: 0.65;
  }

  & h2 {
    margin: 0;
  }

  & p {
    margin: 5px 0 5px 0;
  }

  @media only screen and (max-width: 600px) {
    & .meta {
      flex-direction: column;
    }
  }
`

export default BlogPostCard
