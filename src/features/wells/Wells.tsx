import { useFetchEvents } from "@features/events/api/fetchEvents"


import Loading from "@shared/loading/Loading"
import ErrorComponent from "@shared/error/ErrorComponent"

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

  if (error) return <ErrorComponent>{error}</ErrorComponent>
  if (isLoading) return <Loading>Загрузка мероприятий</Loading>

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

type WellsExtend = Wells & {
  siteName?: string;
}

export default function WellsCard({ wellsData }: { wellsData: WellsExtend}) {
  const { wellId, spudDate, reason, wellCommonName, siteName } = wellsData

  return (
    <article className={styles.card} id={wellId}>
      <p className={styles.card__param}>Куст: {siteName}</p>
      <p className={styles.card__param}>Скважина: {wellCommonName}</p>
      <p className={styles.card__param}>Направление: {reason}</p>
      {spudDate && <p className={styles.card__param}>Дата забуривания: {spudDate}</p>}
      <div className={styles.card__footer}>
        <EventsList wellId={wellId} />
      </div>
    </article>
  )
}