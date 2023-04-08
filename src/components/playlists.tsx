import React from "react";
import Item from "./item";
import type { Mix } from "../types";
import "./list.css";

const url = "https://open.spotify.com/playlist/";

export default function Playlists({ mixes }: { mixes: Mix[] }) {
  return (
    <div className="mixes">
      <div className="list">
        {mixes.map(({ id, name }) => (
          <Item key={id} id={id} name={name} url={url} />
        ))}
      </div>
    </div>
  );
}
