import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" style={{ color: router.asPath === "/" ? "red" : "blue" }}>
        Home
      </Link>
      <Link
        href="about"
        style={{ color: router.asPath === "/about" ? "red" : "blue" }}
      >
        about
      </Link>
    </nav>
  );
}
