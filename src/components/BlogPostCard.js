import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPostCard = ({ post, isLast }) => {
  return (
    <>
      <StyledBlogPostCard>
        <div className="blog-meta">
          <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.date.split("T")[0]}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
        <div className="topics">
          {post.tags.nodes.map((tag, key) => (
            <>
              {key === post.tags.nodes.length - 1 ? ` & ` : ""}
              <Link
                className="blog-tag"
                to={`/topics/${tag.name}`}
                key={`${tag.name}-${key}`}
              >
                {tag.name}
              </Link>
              {key < post.tags.nodes.length - 2 ? `, ` : ""}
            </>
          ))}
        </div>
      </StyledBlogPostCard>
      {isLast ? "" : <hr />}
    </>
  )
}

const StyledBlogPostCard = styled.div`
  transition: all 200ms;
  padding: 10px;
  padding-bottom: 15px;

  hr {
    margin: 0;
  }

  &:hover {
    background: #d9dfe3;
  }

  & .blog-meta {
    display: flex;
    justify-content: space-between;

    p {
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
