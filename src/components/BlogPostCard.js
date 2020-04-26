import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPostCard = ({ node: { frontmatter } }) => {
  return (
    <>
      <StyledBlogPostCard>
        <div className="blog-meta">
          <Link to={`/${frontmatter.slug}`}>
            <h2>{frontmatter.title}</h2>
          </Link>
          <p>{frontmatter.date}</p>
        </div>
        <div>{frontmatter.subtitle}</div>
        <div className="topics">
          <span>{frontmatter.tags}</span>
        </div>
      </StyledBlogPostCard>
    </>
  )
}

const StyledBlogPostCard = styled.div`
  transition: all 200ms;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  display: block;
  padding: 23px 23px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;

  hr {
    margin: 0;
  }

  &:hover {
    transform: scale(1.02);
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

  & .topics {
    margin-top: 15px;
  }

  & h2 {
    margin: 0;
  }

  & p {
    margin: 5px 0 5px 0;
  }
`

export default BlogPostCard
