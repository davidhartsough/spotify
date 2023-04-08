import React from "react";
import { Mix } from "../types";

import "./list.css";
import "./item.css";
import "./mixes.css";

const url = "https://open.spotify.com/playlist/";

export default function Playlists({ mixes }: { mixes: Mix[] }) {
  return (
    <div className="list mixes">
      {mixes.map(({ id, name }) => (
        <div className="item" key={id}>
          <a
            href={`${url}${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="a-link"
          >
            <p className="a-name">{name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
