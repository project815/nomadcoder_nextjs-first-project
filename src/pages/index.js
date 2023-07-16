import Seo from "@/components/Seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Seo title="Home" />

      <h1 className="active"> h1</h1>
      <style jsx>{`
        .active {
          color: yellow;
        }
      `}</style>
    </>
  );
}
