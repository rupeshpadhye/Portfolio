/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
    siteMetadata: {
      title: 'Portfolio site',
      landingPageTitle: "Hi there!",
      landingPageSubTitle: "I'm Rupesh and I'm a Software developer!",
      contactEmail: "rupeshpadhye@gmai.com",
      contactEmailSubject: "Hello%20Rupesh",
      siteUrl: 'https://rupeshpadhye.netlify.com'
    },
  plugins: [ 
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  // {
  //   resolve: `gatsby-plugin-env-variables`,
  //   options: {
  //     whitelist: ["GITHUB_TOKEN",]
  //   },
  // },
  'gatsby-plugin-robots-txt',
  'gatsby-plugin-material-ui',
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'material icons',
        'roboto:300,400,500,700',
      ],
    },
  },
  `gatsby-transformer-json`,     
  {
      resolve:`gatsby-source-filesystem`,
      options:{
          name:`json_data`,
          path:`./data/about`
      }
  },
  {
     resolve:`gatsby-source-filesystem`,
     options:{
         name:`json_data`,
         path:`./data/career-summary`
     }
  },
  {
    resolve:`gatsby-source-filesystem`,
    options:{
        name:`json_data`,
        path:`./data/menu`
    }
  },
  {
    resolve:`gatsby-source-filesystem`,
    options:{
        name:`json_data`,
        path:`./data/seo`
    }
  },
  {
    resolve:`gatsby-source-filesystem`,
    options:{
        name:`json_data`,
        path:`./data/projects`
    }
  },
 {
  resolve: 'gatsby-source-graphql',
  options: {
    typeName: 'GitHub',
    fieldName: 'github',
    url: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    fetchOptions: {},
  },
},
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Portfolio`,
    short_name: `Portfolio`,
    start_url: `/`,
    background_color: `#FFFFFF`,
    theme_color: `#444053`,
    display: `standalone`,
    icon: `./static/icon.png`,
    lang: `en`,
    description: `This is portfolio site`,


  },
},
`gatsby-plugin-offline`
],
}
