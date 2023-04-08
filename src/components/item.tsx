import React from "react";

export default function Item({
  id,
  url,
  name,
  detail,
}: {
  id: string;
  url: string;
  name: string;
  detail: any;
}) {
  return (
    <div className="item">
      <a
        href={`${url}${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="a-link"
      >
        <p className="a-name">{name}</p>
        {!!detail && <p className="a-detail">{detail}</p>}
      </a>
    </div>
  );
}
