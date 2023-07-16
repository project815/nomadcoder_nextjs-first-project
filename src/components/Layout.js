import NavBar from "./NavBar";

export default function LayOut({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
