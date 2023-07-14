import Layout from "@/components/Layout/index.js";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  console.log("Component : ", Component);
  console.log("pageProps : ", pageProps);
  return (
    <>
      <Layout></Layout>
      <Component {...pageProps} />
    </>
  );
}
