/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mywebsite_gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "GA-TRACKING_ID", // Google Analytics / GA
        "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID",
      ]
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-omni-font-loader',
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Protest Riot`,
          file: `https://fonts.googleapis.com/css2?family=Protest+Riot:wght@400;600;700&display=swap`,
        },
      ],
    }
  }]
};