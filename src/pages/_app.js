import NavBar from "@/components/NavBar";

export default function MyApp({ Component, pageProps }) {
  console.log("Component : ", Component);
  console.log("pageProps : ", pageProps);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
