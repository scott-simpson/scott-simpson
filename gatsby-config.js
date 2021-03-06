module.exports = {
  siteMetadata: {
    title: `Scott Simpson. Product and UX Designer. DC`,
    description: `Scott Simpson is a digital product and UX designer based in Washington DC. He partners with leading brands to design, build and ship innovative digital products.`,
    author: `@scott-simpson`,
    shortTitle: `Scott Simpson`,
    siteUrl: `https://scottsimpson.co`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-netlify-cms-paths',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          `gatsby-remark-copy-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1600,
              sizeByPixelDensity: true,
              quality: 80,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          include: `${__dirname}/src/img`,
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
