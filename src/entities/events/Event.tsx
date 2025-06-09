import styles from "./Events.module.scss"


export interface Event {
  wellId: string,
  eventId: string,
  eventCode: string,
}

export default function EventsCard({ dataEvents }: { dataEvents: Event }) {
  const {wellId, eventCode, eventId} = dataEvents;

  return (
    <article className={styles.card} id={eventId} title="Фильтровать по мероприятию">
      <p className={styles.card__param}>
        {eventCode}
      </p>
    </article>
  )
}