const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { publish: { eq: true } } }) {
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
            timeToRead
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/pages/posts.js`),
      context: {
        id: node.id,
      },
    })
  })
}
