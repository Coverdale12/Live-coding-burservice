import styles from "./Project.module.scss"


export type Report = {
  reportJournalId: string;
  wellId: string;
  wellboreId: string;
  eventId: string;
  dateReport: string;
  reportNo: string;
  description: string;
  entityType: string;
  eventCode: string;
  reportAlias: string;
}

export default function Report({ dataReport }: { dataReport: Report }) {
  const { 
    reportAlias, reportNo, dateReport,
    eventId, wellId, wellboreId,
    reportJournalId, description, entityType, eventCode 
  } = dataReport;
  return (
    <article className={styles.card}>
      <p className={styles.card__param}>
        {reportAlias}
      </p>
    </article>
  )
}