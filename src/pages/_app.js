import NavBar from "@/components/NavBar.js";

export default function App({ Component, pageProps }) {
  console.log("Component : ", Component);
  console.log("pageProps : ", pageProps);
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}
