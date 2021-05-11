import { Filters } from "../components/NewsComponents/Filters";
import { News } from "../components/NewsComponents/News";
import { NewsIntro } from "../components/NewsComponents/NewsIntro";
import styles from '../styles/noticias.module.scss';

export default function Noticias() {
  return (
    <>
      <div className={styles.Container}>
        <NewsIntro />
        <Filters />
        <News />
      </div>
    </>
  )
}
