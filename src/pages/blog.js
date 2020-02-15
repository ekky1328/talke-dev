import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import MiniNav from "../components/MiniNav"
import BlogPostCard from "../components/BlogPostCard"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        posts {
          nodes {
            id
            slug
            date
            title
            excerpt
            tags {
              nodes {
                id
                slug
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout container>
      <Index>
        <MiniNav isSubPage />
        <h1>My Blog Posts</h1>
        <div className="blog-posts">
          {data.wp.posts.nodes.map((post, index) => (
            <BlogPostCard
              post={post}
              isLast={index === data.wp.posts.nodes.length - 1 ? true : false}
            />
          ))}
        </div>
      </Index>
    </Layout>
  )
}

const Index = styled.div`
  & .blog-posts {
    margin: 25px 0;
  }
`
