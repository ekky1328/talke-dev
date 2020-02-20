require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WP",
        fieldName: "wp",
        url: `${process.env.WORDPRESS_URL}/graphql`,
        refetchInterval: 30,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158853521-1",
      },
    },
  ],
}
