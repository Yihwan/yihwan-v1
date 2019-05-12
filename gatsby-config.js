const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Yihwan Kim",
    description: "Hi, I'm Yihwan. This is my website.",
    author: `Yihwan Kim`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-lodash',
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        content: path.join(__dirname, 'content')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/changelog`,
        name: `changelog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
  ],
}
