import styles from "./Report.module.scss"


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
      <h3 className={styles.card__title}>
        {reportJournalId}
      </h3>
      <div className={styles.card__body}>
        <p className={styles.card__param}>
          {reportAlias}
        </p>
        {description && <p className={styles.card__param}>
          Описание: {description}
        </p>}
      </div>
    </article>
  )
}