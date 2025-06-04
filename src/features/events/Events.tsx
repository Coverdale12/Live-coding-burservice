import styles from "./Events.module.scss"
import { Events } from "./api/fetchEvents"



export default function EventsCard({ dataEvents }: { dataEvents: Events }) {
  const {wellId, eventCode, eventId} = dataEvents;

  return (
    <article className={styles.card} id={eventId} title="Фильтровать по мероприятию">
      <p className={styles.card__param}>
        {eventCode}
      </p>
    </article>
  )
}