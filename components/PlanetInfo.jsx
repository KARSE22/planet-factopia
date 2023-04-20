import { useState } from 'react';
import Image from 'next/image';
// import planetImg from '../public/assets/planet-mercury.svg';
import Categories from './Categories';
import Features from './Features';
import styles from "@/styles/PlanetInfo.module.css";

export default function PlanetInfo({ planet }) {
  const [text, setText] = useState(planet[0].overview.content)
  console.log(planet[0])

  const features = Object.entries(planet[0]).filter((pair) =>  {
    return typeof pair[1] === 'string' && pair[0] !== 'name'
  });

  // return <div>Hello </div>

  //Logic for context switching needs to be created here


  return (
    <div className={`${styles.planetContainer} `}>
      <div className={`${styles.gridColumn} ${styles.center}`}>
        <div className={styles.image}>
        {/* <Image

            src={planet[0].overview.source}
            width={100}
            height={100}
            alt="Picture of planet"
            priority
        /> */}
        <img src={`..${planet[0].images.planet}`} alt={`Picture of ${planet[0].name}`}/>

        </div>

        <section className={styles.planetInfo}>
          <h2 className={styles.planetName}>{planet[0].name}</h2>
          <p className={styles.planetContent}>{text}</p>
          <p>
            Source: <a>
              Wikipedia

              </a>
          </p>
          <Categories planet={planet[0]} setText={setText}/>
        </section>
        <Features features={features}/>
      </div>
    </div>
  )
}