require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WP",
        fieldName: "wp",
        url: `${process.env.WORDPRESS_URL}/graphql`,
        refetchInterval: 30,
      },
    },
  ],
}
