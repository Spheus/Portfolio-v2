module.exports = {
  siteMetadata: {
    title: "portfolio-v2",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },

    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          components: "./components", // <- will become ./src/components
          helpers: "./helpers",
          images: "./images",
          lib: "./lib",

          static: {
            root: "./public", // <- will used as this alias' root dir
            alias: "./static", // <- will become ./public/static
          },
        },
      },
    },
  ],
};
