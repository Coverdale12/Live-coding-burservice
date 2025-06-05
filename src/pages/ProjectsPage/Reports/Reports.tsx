import { useFetchReports } from "@entities/reports/api/fetchReports"
import styles from "../Project.module.scss"
import Loading from "@shared/loading/Loading";
import ErrorComponent from "@shared/error/ErrorComponent";

import Report from "@entities/reports/Report";

export default function Reports() {
  const { data, error, isLoading } = useFetchReports();

  if(error) return <ErrorComponent>{error}</ErrorComponent>
  if (isLoading)return <Loading>Загрузка</Loading>
  return (
    <section className={styles.reports}>
      <h2 className={styles.reports__title}>
        Отчёты
      </h2>
      <ul className={styles.reports__list}>
        {data?.length && data.map((el, index) => (
          <li className={styles.reports__item}>
            <Report dataReport={el} key={index}/>
          </li>
        )) }
      </ul>
    </section>
  )
}