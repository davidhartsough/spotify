import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Dave's Faves on Spootify",
    siteName: "Dave's Faves on Spootify",
    siteUrl: "https://davidhartsough.com/spotify",
    description:
      "Check out all of Dave's Faves on Spootify, including his fav artists, albums, and mixes.",
    url: "https://davidhartsough.com/spotify",
    baseUrl: "https://davidhartsough.com/spotify",
    keywords: "David,Dave,spotify,spootify,music,artist,albums,playlists,mixes",
    image: "spootify.png",
    imageAlt: "Spootify logo",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-sitemap",
    /*
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    */
  ],
};

export default config;
