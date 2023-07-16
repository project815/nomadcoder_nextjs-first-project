import Seo from "@/components/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";

const apiKey = "218360b0337f93249ce2940fa1431746";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title="Home" />

      <h1 className="active"> h1</h1>
      {movies.map((movies) => (
        <div key={movies.id}>
          <h4>{movies.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .active {
          color: yellow;
        }
      `}</style>
    </>
  );
}
