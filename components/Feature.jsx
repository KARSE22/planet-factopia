import styles from "@/styles/Features.module.css";

export default function Feature({title, data }) {

  return (
    <div className={styles.featuresElement}>
        <h4 className={styles.featuresTitle}>
          {
            title === 'rotation'? 'Rotation Time'
            : title === 'revolution'? 'Revolution Time'
            : title == 'temperature' ? 'Average Temp.'
            : `${title}`
          }
        </h4>
        <p className={styles.featuresData}>{data}</p>
      </div>
  )
}