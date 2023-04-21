import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`${styles.headerNav} ${styles.flexGroup}`}>
      <h1 className={styles.title}>The Planets</h1>
      <ul className={`${styles.flexGroup} ${styles.list}`}>
        <li>
          <Link href="/planets/mercury">Mercury</Link>
        </li>
        <li>
          <Link href="/planets/venus">Venus</Link>
        </li>
        <li>
          <Link href="/planets/earth">Earth</Link>
        </li>
        <li>
          <Link href="/planets/mars">Mars</Link>
        </li>
        <li>
          <Link href="/planets/jupiter">Jupiter</Link>
        </li>
        <li>
          <Link href="/planets/saturn">Saturn</Link>
        </li>
        <li>
          <Link href="/planets/uranus">Uranus</Link>
        </li>
        <li>
          <Link href="/planets/neptune">Neptune</Link>
        </li>
      </ul>
    </nav>
  )
}