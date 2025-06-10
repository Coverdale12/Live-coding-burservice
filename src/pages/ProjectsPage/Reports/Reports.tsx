import { useFetchReports } from "@entities/reports/api/fetchReports"
import styles from "./Reports.module.scss"
import Loading from "@shared/loading/Loading";
import ErrorComponent from "@shared/error/ErrorComponent";

import Report from "@entities/reports/Report";
import { useWellsContext } from "@entities/wells/context/WellsContext";



function ReportsInner() {
  const { currentWellId } = useWellsContext();
  const { data, error, isLoading } = useFetchReports(currentWellId as string);

  if (error) return <ErrorComponent>{error}</ErrorComponent>
  if (isLoading) return <Loading>Загрузка</Loading>

  return (
    <>
      {data?.length ? data.map((el, index) => (
        <li className={styles.reports__item} key={`${index}-${el.eventId}`}>
          <Report dataReport={el} />
        </li>
      )) : < p > Отчетов не обнаруженно!</p >}
    </>
  )
}

export default function Reports() {
  return (
    <section className={styles.reports}>
      <h2 className={styles.reports__title}>
        Отчёты
      </h2>
      <ul className={styles.reports__list}>
        <ReportsInner />
      </ul>
    </section>
  )
}