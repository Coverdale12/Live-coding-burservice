import { useFetchEvents } from "@entities/events/api/fetchEvents"


import Loading from "@shared/loading/Loading"
import ErrorComponent from "@shared/error/ErrorComponent"

import styles from "./WellsStyle.module.scss"


import EventsCard from "@entities/events/Events"
import { useSitesContext } from "@pages/ProjectsPage/SitesContext/SitesProvider"


export interface Wells {
  wellId: string,
  siteId: string,
  spudDate: string | null,
  reason: string,
  wellCommonName: string,
}


interface WellsCardProps {
  wellsData: Wells;
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
        )) : "отсутствуют"}
      </ul>
    </>

  )
}


export default function WellsCard({ wellsData }: WellsCardProps ) {
  const { sites } = useSitesContext();
  const { wellId, spudDate, reason, wellCommonName, siteId } = wellsData
 
  
  // const currentSite = sites.find((el) => el.siteId === siteId);

  return (
    <article className={styles.card} id={wellId}>
      {/* <p className={styles.card__param}>Куст: {currentSite ? currentSite.siteName : "Неизвестный куст"}</p> */}
      <p className={styles.card__param}>Скважина: {wellCommonName}</p>
      <p className={styles.card__param}>Направление: {reason}</p>
      {spudDate && <p className={styles.card__param}>Дата забуривания: {spudDate}</p>}
      <div className={styles.card__footer}>
        <EventsList wellId={wellId} />
      </div>
    </article>
  )
}