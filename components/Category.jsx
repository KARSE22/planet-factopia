import styles from "@/styles/Categories.module.css";

export default function Category({ number, title, planet, setText }) {
  //overview, structure, geology
  let handleClick = (e) => {
    if (title === 'overview') {
      setText(planet.overview.content);
      //also update source?
    } else if (title === 'internal structure') {
      setText(planet.structure.content);
    } else {
      setText(planet.geology.content)
    }

  };

  return (
    <button className={styles.listItem} onClick={handleClick}>
      <p>{number}</p>
      <p>{title}</p>
    </button>
  )
}