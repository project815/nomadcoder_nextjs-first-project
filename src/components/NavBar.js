import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/page1"}>Page1</Link>
      <br />
      <Link href={"/page2"}>Page2</Link>
      <br />
      <Link href={"/page3"}>Page3</Link>
      <br />
    </>
  );
}
