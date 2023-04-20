import Category from './Category';
import styles from "@/styles/Categories.module.css";

export default function Categories({ planet, setText }) {
  const categories = [{name: 'overview', number:'01'}, {name: 'internal structure', number:'02'}, {name: 'surface geology', number:'03'}]
  return (
    <div className={`${styles.flex} ${styles.categories}` }>
      {categories.map((category) =>
        <Category key={category.name} number={category.number} title={category.name} planet={planet} setText={setText} />
      )}
    </div>
  )
}