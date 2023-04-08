import React from "react";
import { Link } from "gatsby";
import HeadMeta from "../components/HeadMeta";

import "../styles/home.css";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <article>
        <h1>Dave's Faves on Spootify</h1>
        <p>
          Check out my playlists or get a randomly shuffled selection of some of
          my favorite bands or CDs.
        </p>
        <p>
          (For Artists and Albums, this will pick 6 random favorites for you,
          and you can keep shuffling it to get another random 6.)
        </p>
      </article>
    </Layout>
  );
}

export const Head = () => <HeadMeta page="home" />;
