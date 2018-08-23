module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-cockpit`,
      options: {
        cockpitConfig: {
          baseURL: 'https://content.octanis.org', // the url to you cockpit installation
          accessToken: '', // you cockpit API key
        },
      },
},],
}
