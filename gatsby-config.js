module.exports = {
  siteMetadata: {
    title: 'Octanis Association',
  },
  plugins: ['gatsby-plugin-react-helmet','gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-cockpit`,
      options: {
        cockpitConfig: {
          baseURL: 'https://content.octanis.org', // the url to you cockpit installation
          accessToken: process.env.COCKPIT_KEY, // you cockpit API key
        },
      },
},],
}
