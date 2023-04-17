import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.headerNav} ${styles.flexGroup}`}>
      <h1 className={styles.title}>The Planets</h1>
      <ul className={`${styles.flexGroup} ${styles.list}`}>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ul>
    </nav>
  )
}