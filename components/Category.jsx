import styles from "@/styles/Categories.module.css";

export default function Category({ number, title, planet, setText, setSourceURL, setImageURL }) {

  let handleClick = (e) => {
    if (title === 'overview') {
      setText(planet.overview.content);
      setSourceURL(planet.overview.source);
      setImageURL(planet.images.planet);
    } else if (title === 'internal structure') {
      setText(planet.structure.content);
      setSourceURL(planet.structure.source);
      setImageURL(planet.images.internal);
    } else {
      setText(planet.geology.content);
      setSourceURL(planet.geology.source);
      setImageURL(planet.images.geology);
    }

  };

  return (
    <button className={styles.listItem} onClick={handleClick}>
      <p>{number}</p>
      <p>{title}</p>
    </button>
  )
}