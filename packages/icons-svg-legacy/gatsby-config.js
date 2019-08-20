const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    siteUrl: 'https://www.gatsbyjs.org',
    description: 'Blazing-fast static site generator for React',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: require(path.resolve(__dirname, './site/tsconfig.json'))
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.resolve(__dirname, './site/pages')
      }
    }
  ]
};
