import styles from "./Reports.module.scss"
import Title from "@shared/ui/title/Title";
import ReportTable from "@features/reportsTable/ReportsTable";
import { useFetchReports } from "@entities/reports/api/fetchReports";
import { useWellsContext } from "@entities/wells/context/WellsContext";
import Loading from "@shared/ui/loading/Loading";




export default function Reports() {
  const { currentWellId } = useWellsContext();
  const { data } = useFetchReports(currentWellId as string);
  if (!data) return <Loading>Загрузка отчетов</Loading>
  return (
    <section className={styles.reports}>
      <Title title="h2" className={styles.reports__title} size={3} align="left">Отчёты</Title>
      <ReportTable data={data}/>
    </section>
  )
}