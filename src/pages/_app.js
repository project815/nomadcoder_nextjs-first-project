import Layout from "@/components/Layout/index.js";
import React, { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  console.log("Component : ", Component);
  console.log("pageProps : ", pageProps);

  //   useEffect(() => {
  //     (async () => {
  //       const { results } = await (
  //         await fetch(
  //           `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //         )
  //       ).json();
  //       setMovies(results);
  //     })();
  //   }, []);

  return (
    <>
      <Layout></Layout>
      <Component {...pageProps} />
    </>
  );
}
