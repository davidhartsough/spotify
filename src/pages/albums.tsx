import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import List from "../components/list";
import albums from "../data/albums";

// `https://open.spotify.com/album/${id}`
export default function Albums() {
  return (
    <Layout>
      <List type="album" afavs={albums} />
    </Layout>
  );
}

export const Head = () => <HeadMeta page="Albums" />;
