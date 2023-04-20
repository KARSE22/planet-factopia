import styles from "@/styles/Categories.module.css";

export default function Category({ number, title, planet, setText, setSourceURL }) {

  let handleClick = (e) => {
    if (title === 'overview') {
      setText(planet.overview.content);
      setSourceURL(planet.overview.source);
    } else if (title === 'internal structure') {
      setText(planet.structure.content);
      setSourceURL(planet.structure.source);
    } else {
      setText(planet.geology.content);
      setSourceURL(planet.geology.source);
    }

  };

  return (
    <button className={styles.listItem} onClick={handleClick}>
      <p>{number}</p>
      <p>{title}</p>
    </button>
  )
}