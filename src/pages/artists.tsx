import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import List from "../components/list";
import artists from "../data/artists";

export default function Artists() {
  return (
    <Layout>
      <List type="artist" afavs={artists} />
    </Layout>
  );
}

export const Head = () => <HeadMeta page="Artists" />;
