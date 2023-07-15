import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <active>
        <Link
          className={`${
            (styles.Link, router.pathname === "/" ? styles.active : " ")
          }`}
          href={"/"}
        >
          Home
        </Link>
        <br />
        <Link
          className={router.pathname === "/page1" ? styles.active : ""}
          href={"/page1"}
        >
          Page1
        </Link>
        <br />
        <Link
          className={router.pathname === "/page2" ? styles.active : ""}
          href={"/page2"}
        >
          Page2
        </Link>
        <br />
        <Link
          className={router.pathname === "/page3" ? styles.active : ""}
          href={"/page3"}
        >
          Page3
        </Link>
        <br />
      </active>
    </>
  );
}
