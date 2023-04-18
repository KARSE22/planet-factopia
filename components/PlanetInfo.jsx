import Image from 'next/image';
// import planetImg from '../public/assets/planet-mercury.svg';
import Categories from './Categories';
import Features from './Features';
import styles from "@/styles/PlanetInfo.module.css";

export default function PlanetInfo({ planet }) {

  const features = Object.entries(planet[0]).filter((pair) =>  {
    return typeof pair[1] === 'string' && pair[0] !== 'name'
  });

  return <div>Hello </div>
  return (
    <div className={`${styles.planetContainer} `}>
      <div className={`${styles.gridColumn} ${styles.center}`}>
        <div className={styles.image}>
        <Image

            src={planet.overview.source}
            alt="Picture of planet"
            priority
        />

        </div>

        <section className={styles.planetInfo}>
          <h2 className={styles.planetName}>{planet.name}</h2>
          <p className={styles.planetContent}>
            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&apos;s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </p>
          <p>
            Source: <a>
              Wikipedia

              </a>
          </p>
          <Categories/>
        </section>
        <Features features={features}/>
      </div>
    </div>
  )
}