import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>This page doesn't exist.</p>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </main>
  );
}

export const Head = () => <title>Not found</title>;
