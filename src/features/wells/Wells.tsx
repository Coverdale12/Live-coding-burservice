import { useFetchEvents } from "@features/events/api/fetchProjects"


import errorStyle from "@shared/error/error.module.scss"
import loadingStyle from "@shared/loading/loading.module.scss"

import styles from "./WellsStyle.module.scss"


import EventsCard from "@features/events/Events"


export interface Wells {
  wellId: string,
  siteId: string,
  spudDate: string | null,
  reason: string,
  wellCommonName: string,
}


function EventsList({ wellId }: { wellId: string }) {
  const { data, error, isLoading } = useFetchEvents(wellId);

  if (error) return <div className={errorStyle.error}>Ошибка: {error.message}</div>
  if (isLoading) return <div className={loadingStyle.loading}>Загрузка мероприятий</div>

  return (
    <>
      Мероприятия
      <ul className={styles.card__list}>
        {data?.length ? data.map((el, index) => (
          <EventsCard dataEvents={el} key={index} />
        )):"отсутствуют"}
      </ul>
    </>

  )
}

export default function WellsCard({ wellsData }: { wellsData: Wells }) {
  const { wellId, spudDate, reason, wellCommonName } = wellsData

  return (
    <article className={styles.card} id={wellId}>
      <p className={styles.card__param}>Куст: имя куста</p>
      <p className={styles.card__param}>Скважина: {wellCommonName}</p>
      <p className={styles.card__param}>Направление: {reason}</p>
      {spudDate && <p className={styles.card__param}>Дата забуривания: {spudDate}</p>}
      <div className={styles.card__footer}>
        <EventsList wellId={wellId} />
      </div>
    </article>
  )
}