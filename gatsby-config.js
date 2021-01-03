/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    name:"hamza",
    age:22,
    address: "narowal"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `04w1b7p8l2o4`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'CBehe6lVNJ_NFikOuEIFRxkgCXa0l92jeiOk2RHaPBM',
      },
    },
  ],
}
