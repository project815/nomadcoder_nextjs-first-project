import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link legacyBehavior={true} href={"/"}>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <br />
        <Link href={"/page1"} legacyBehavior>
          <a className={router.pathname === "/page1" ? "active" : ""}>Page1</a>
        </Link>
        <br />
        <Link href={"/page2"}>Page2</Link>
        <br />
        <Link href={"/page3"}>Page3</Link>
        <br />
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
        }

        .active {
          color: blue;
        }
      `}</style>
    </>
  );
}
