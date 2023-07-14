import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NarBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" && styles.active}>
        Home
      </Link>

      <Link
        href="about"
        className={router.pathname === "/about" && styles.active}
      >
        about
      </Link>
    </nav>
  );
}
