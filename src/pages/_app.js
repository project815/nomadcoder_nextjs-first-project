import "../styles/globals.css";
import LayOut from "@/components/Layout";
export default function App({ Component, pageProps }) {
  const apiKey = "218360b0337f93249ce2940fa1431746";
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
