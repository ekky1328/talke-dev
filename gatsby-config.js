require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158853521-1",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        root: __dirname,
        mdxOptions: {
          remarkPlugins: [
            [require('gatsby-remark-vscode').remarkPlugin, {
                theme: `Dark (Visual Studio)`,
                inlineCode: {
                  marker: "•",
                  className: "inline-code",
                },
                logLevel: "error",
                injectStyles: true,
            }],
          ],
        }
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
  ],
}
