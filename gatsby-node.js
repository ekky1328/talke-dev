const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: {date: DESC}}) {
        nodes {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            subtitle
            title
            tags
          }
          internal {
            contentFilePath
          }
          body
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  console.log(result.data.allMdx.nodes.length)

  const posts = result.data.allMdx.nodes

  posts.forEach((node, index) => {
    const previousPost = posts[index - 1]
    const nextPost = posts[index + 1]

    createPage({
      path: node.frontmatter.slug,
      component: `${path.resolve(`./src/pages/posts.js`)}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        prev: previousPost === undefined ? null : previousPost.id,
        next: nextPost !== undefined ? nextPost.id : null,
      },
    })
  })
}
