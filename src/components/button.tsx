import React from "react";
import "./button.css";

export default function Button({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
