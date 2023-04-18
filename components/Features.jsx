import Feature from './Feature';
import styles from "@/styles/Features.module.css";

export default function Features({ features }) {
  return (
    <section className={styles.features}>
      {features.map((feature) => {
        let [ featureTitle, featureData ] = feature;
        return <Feature key={featureData} title={featureTitle} data={featureData}/>
      })}
    </section>
  )
}