import React from "react";

export default function HeadMeta({ page }: { page: string }) {
  const siteName = "Dave's Faves on Spootify";
  const baseUrl = "https://davidhartsough.com/spotify";
  const keywords =
    "David,Dave,spotify,spootify,music,artist,albums,playlists,mixes";
  const image = "spootify.png";
  const imageAlt = "Spootify logo";
  const title =
    page === "home"
      ? "Dave's Faves on Spootify"
      : `Dave's Fav ${page} on Spootify`;
  const url = page === "home" ? baseUrl : `${baseUrl}/${page.toLowerCase()}`;
  const fav = page === "home" ? "es" : ` ${page}`;
  const description = `Check out all of Dave's Fav${fav} on Spootify!`;
  return (
    <>
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
        href={`${baseUrl}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${baseUrl}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${baseUrl}/favicon-16x16.png`}
      />
      <link
        rel="mask-icon"
        href={`${baseUrl}/safari-pinned-tab.svg`}
        color="#1ed761"
      />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="theme-color" content="#2e2e2e" />
      <link
        rel="sitemap"
        type="application/xml"
        href={`${baseUrl}/sitemap.xml`}
      />
      <link rel="manifest" href={`${baseUrl}/site.webmanifest`} />
    </>
  );
}
