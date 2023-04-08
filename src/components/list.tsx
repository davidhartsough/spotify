import React, { useEffect, useState } from "react";
import Item from "./item";
import Button from "./button";
import { shuffle } from "./utils";
import type { Artist, Album } from "../types";
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
      <Button onClick={reshuffle} text="Shuffle" />
      <Button onClick={showAll} text="Show All" />
    </div>
  );
}
