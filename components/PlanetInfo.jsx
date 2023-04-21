import { useState, useEffect } from 'react';
import Image from 'next/image';
import Categories from './Categories';
import Features from './Features';
import styles from "@/styles/PlanetInfo.module.css";

export default function PlanetInfo({ planet }) {
  const { overview, images, name } = planet[0];
  const [text, setText] = useState(overview.content);
  const [sourceURL, setSourceURL] = useState(overview.source);
  const [imageURL, setImageURL] = useState(images.planet);
  const [finalImg, setFinalImg] = useState('');

  useEffect(() => {
    async function fetchImg() {
      setFinalImg((await import(`../public${imageURL}`))?.default ?? '');
    }
    fetchImg()
  }, [imageURL, name]);

  //update state when navigating to a new pag via navbar, reset to static data
  useEffect(() => {
    setText(overview.content);
    setSourceURL(overview.source);
    setImageURL(images.planet);

  }, [overview.content, overview.source, images.planet])

  const features = Object.entries(planet[0]).filter((pair) =>  {
    return typeof pair[1] === 'string' && pair[0] !== 'name'
  });

  return (
    <div className={`${styles.planetContainer} `}>
      <div className={`${styles.gridColumn} ${styles.center}`}>
        <div className={styles.image}>
        {finalImg && (<Image
            src={finalImg.src}
            width={finalImg.width}
            height={finalImg.height}
            alt={`Picture of ${name}`}
            priority
        />)}
        </div>
        <section className={styles.planetInfo}>
          <h2 className={styles.planetName}>{name}</h2>
          <p className={styles.planetContent}>{text}</p>
          <p className={styles.externalLink}>
            Source : &nbsp;
            <a href={sourceURL} target="_blank">
            Wikipedia <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg>
            </a>
          </p>
          <Categories
            planet={planet[0]}
            setText={setText}
            setSourceURL={setSourceURL}
            setImageURL={setImageURL}
          />
        </section>
        <Features features={features}/>
      </div>
    </div>
  )
}