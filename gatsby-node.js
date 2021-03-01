const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { publish: { eq: true } } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              id
              slug
              subtitle
              title
              tags
              publish
            }
            body
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    const previousPost = posts[index - 1]
    const nextPost = posts[index + 1]

    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/pages/posts.js`),
      context: {
        id: node.id,
        prev: previousPost === undefined ? null : previousPost.node.id,
        next: nextPost !== undefined ? nextPost.node.id : null,
      },
    })
  })
}
