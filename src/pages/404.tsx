import React from "react";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>This page doesn't exist.</p>
    </Layout>
  );
}

export const Head = () => <title>Not found</title>;
