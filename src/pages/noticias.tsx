import { createApi } from "../../test/api.test";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Filters } from "../components/NewsComponents/Filters";
import { News } from "../components/NewsComponents/News";
import { NewsIntro } from "../components/NewsComponents/NewsIntro";
import styles from '../styles/noticias.module.scss';

export default function Noticias() {
  createApi();
  return (
    <>
      <div className={styles.Container}>
        <Breadcrumbs />
        <NewsIntro />
        <Filters />
        <News />
      </div>
    </>
  )
}
