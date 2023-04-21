import styles from "@/styles/Categories.module.css";
import { useEffect } from 'react';

export default function Category({ number, title, planet, setText, setSourceURL, setImageURL, setShowGeology, color }) {

  useEffect(() => {
    document.documentElement.style.setProperty('--button-color', color)
  }, [color])

  function update(text, sourceURL, imageURL) {
    setText(text);
    setSourceURL(sourceURL);
    setImageURL(imageURL);
  }

  let handleClick = (e) => {
    if (title === 'overview') {
      update(planet.overview.content, planet.overview.source, planet.images.planet);
      setShowGeology(false);
    } else if (title === 'internal structure') {
      update(planet.structure.content, planet.structure.source, planet.images.internal);
      setShowGeology(false);
    } else {
      update(planet.geology.content, planet.geology.source, planet.images.planet);
      setShowGeology(true);
    }
  };

  return (
    <button className={styles.listItem} onClick={handleClick}>
      <p>{number}</p>
      <p>{title}</p>
    </button>
  )
}