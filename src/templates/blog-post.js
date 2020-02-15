import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

export default ({ pageContext }) => {
  const { post } = pageContext

  console.log(pageContext)

  return (
    <Layout>
      <StyledBlogPost>
        <div className="blog-menu">
          <Link to="/blog">Blog Posts</Link>
          <Link to="/">Home</Link>
        </div>
        <h1>{post.title}</h1>
        <h6 dangerouslySetInnerHTML={{ __html: post.excerpt }}></h6>
        <p id="blog_meta_header">
          <strong>Published</strong> {post.date.split("T")[0]}
        </p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <hr />
        <p id="blog_meta_footer">
          <p>
            <strong>Author</strong>
            {post.author.firstName} {post.author.lastName}
          </p>
          <strong>Topics</strong>
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
        </p>
      </StyledBlogPost>
    </Layout>
  )
}

const StyledBlogPost = styled.div`
  max-width: 650px;
  margin: 0 auto 50px auto;

  @media only screen and (max-width: 600px) {
    & {
      max-width: 375px;
    }
  }

  & .blog-menu {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 25px 0;
  }

  & h1 {
    margin-left: -7px;
    line-height: 88.78%;
  }

  & #blog_meta_header {
    margin: 25px 0;
  }

  & hr {
    width: 80%;
    border: 0;
    margin: 20px 0;
    border-top: 1px solid rgba(0, 67, 116, 0.35);
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & pre {
    margin: 20px;
    padding: 20px;
    color: #aaa;
    background-color: #222;
    text-shadow: 0 1px 0 #000;
    border-bottom: 1px solid #555;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4) inset,
      0 0 20px rgba(0, 0, 0, 0.2) inset;
    white-space: pre-wrap;
  }

  & #blog_meta_footer {
    margin-top: 35px;

    p {
      margin: 0;
    }

    strong {
      margin-right: 15px;
    }
  }
`
