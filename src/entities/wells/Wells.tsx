import { useFetchEvents } from "@entities/events/api/fetchEvents"


import Loading from "@shared/loading/Loading"
import ErrorComponent from "@shared/error/ErrorComponent"

import { Button } from "@mui/material"
import { useWellsContext } from "@entities/wells/context/WellsContext"
import styles from "./WellsStyle.module.scss"


import EventsCard from "@entities/events/Event"



export interface Wells {
  wellId: string,
  siteId: string,
  spudDate: string | null,
  reason: string,
  wellCommonName: string,
}


interface WellsCardProps {
  wellsData: Wells;
  siteName: string | undefined
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


export default function WellsCard({ wellsData, siteName }: WellsCardProps) {
  const { setCurrentWellId } = useWellsContext();
  // const { sites } = useSitesContext();
  const { wellId, spudDate, reason, wellCommonName, siteId } = wellsData
  // const currentSite = sites.find((el) => el.siteId === siteId);


  const handleClick = () => {
    setCurrentWellId(wellId);
  };

  return (
    <article className={styles.card} id={wellId} onClick={handleClick}>
      <p className={styles.card__param}>Куст: {siteName ? siteName : "Неизвестный куст"}</p>
      <p className={styles.card__param}>Скважина: {wellCommonName}</p>
      <p className={styles.card__param}>Направление: {reason}</p>
      {spudDate && <p className={styles.card__param}>Дата забуривания: {spudDate}</p>}
      <div className={styles.card__footer}>
        <EventsList wellId={wellId} />
      </div>
      <Button size="large" sx={{
        backgroundColor: "white",
        margin: "1rem",
      }}>Отчёты</Button>
    </article>
  )
}