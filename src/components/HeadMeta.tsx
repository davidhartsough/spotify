import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function HeadMeta({ page }: { page: string }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          baseUrl
          keywords
          image
          imageAlt
          siteName
        }
      }
    }
  `);
  const { baseUrl, keywords, image, imageAlt, siteName } = data;
  const title =
    page === "home"
      ? "Dave's Faves on Spootify"
      : `Dave's Fav ${page} on Spootify`;
  const url = page === "home" ? baseUrl : `${baseUrl}/${page.toLowerCase()}`;
  const fav = page === "home" ? "es" : ` ${page}`;
  const description = `Check out all of Dave's Fav${fav} on Spootify!`;
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1,shrink-to-fit=no"
      />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/${image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1152" />
      <meta property="og:image:height" content="768" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  );
}
