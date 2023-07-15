import styles from "../styles/globals.css";
export default function Home() {
  return (
    <>
      <h1 className="active"> h1</h1>
      <style jsx>{`
        .active {
          color: yellow;
        }
      `}</style>
    </>
  );
}
