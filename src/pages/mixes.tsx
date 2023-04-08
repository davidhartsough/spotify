import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import Playlists from "../components/playlists";
import mixes from "../data/mixes";

// `https://open.spotify.com/playlist/${id}`
export default function Mixes() {
  return (
    <Layout>
      <Playlists mixes={mixes} />
    </Layout>
  );
}

export const Head = () => <HeadMeta page="Mixes" />;
