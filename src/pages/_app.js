import "../styles/globals.css";
import LayOut from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} /> helloworld
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </LayOut>
  );
}
