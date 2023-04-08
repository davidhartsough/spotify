import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import "../styles/home.css";

export default function IndexPage() {
  return (
    <Layout>
      <article>
        <h1>Dave's Faves on Spootify</h1>
        <p>
          Check out my playlists (<Link to="/mixes">Mixes</Link>) or get a
          randomly shuffled selection of some of my favorite bands (
          <Link to="/artists">Artists</Link>) or CDs (
          <Link to="/albums">Albums</Link>).
        </p>
        <p>
          Shuffle my favorites and get a random selection of 6 artists or
          albums. <br />
          Use the links to pick out something to listen to. <br />
          Or keep shuffling to get another random 6 links. <br />
          Click it and spin it 💿
        </p>
      </article>
    </Layout>
  );
}

export const Head = () => <HeadMeta page="home" />;
