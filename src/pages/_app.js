import NavBar from "@/components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <span>
      <NavBar />
      <Component {...pageProps} /> helloworld
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </span>
  );
}
