import React, { useEffect } from "react";
import { useState } from "react";
import Item from "./item";
import type { Artist, Album } from "../types";
import { shuffle } from "./utils";

import "./list.css";

export default function List({
  type,
  afavs,
}: {
  type: string;
  afavs: Artist[] | Album[];
}) {
  const [items, setItems] = useState(afavs.slice(0, 6));
  const reshuffle = () => setItems(shuffle(afavs));
  const showAll = () => setItems(afavs);
  useEffect(() => {
    reshuffle();
  }, [afavs, type]);

  const deets = type === "artist" ? "genres" : "artist";
  const url = `https://open.spotify.com/${type}/`;
  return (
    <div className={type}>
      <div className="list">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            detail={item[deets as keyof typeof item]}
            url={url}
          />
        ))}
      </div>
      <div>
        <button onClick={reshuffle}>Shuffle</button>
      </div>
      <div>
        <button onClick={showAll}>Show All</button>
      </div>
    </div>
  );
}