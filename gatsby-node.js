const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/templates/blog-post.js")
  const blogData = await graphql(`
    {
      wp {
        posts {
          nodes {
            id
            slug
            date
            title
            excerpt
            content
            tags {
              nodes {
                name
              }
            }
            author {
              firstName
              lastName
            }
          }
        }
      }
    }
  `)

  blogData.data.wp.posts.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: blogTemplate,
      context: {
        post,
      },
    })
  })
}
