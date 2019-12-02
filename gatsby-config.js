module.exports = {
  siteMetadata: {
    title: `ELEsystem`,
    description: `The world's fastest LMS based on Gatsby. for mindfulness course `,
    author: `@webmaeistro`,
    signiture: `MA`,
    logoImg:`/logo_ultronele.png`,
    menus: [
      {name: 'HOME', url: '/'},
      {name: 'PRODUCT', url: '/product'},
      {name: 'SERVICE', url: '/service'},
      {name: 'USER GUIDE', url: '/userguide'},
      {name: 'ROADMAP', url: '/roadmap'},
      {name: 'TEAM', url: '/team'},
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ele-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#47BA47`,
        theme_color: `#47BA47`,
        display: `minimal-ui`,
        icon: `src/images/favicon-230.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        "excerpt_separator": `<!-- end -->`,
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1280,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    // end of plugin config
  ],
}
