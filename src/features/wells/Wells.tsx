import styles from "./WellsStyle.module.scss"

import { Button } from "@mui/material"

export interface Wells {
  wellId: string,
  siteId: string,
  spudDate: string | null,
  reason: string,
  wellCommonName: string,
}


export default function WellsCard({ wellsData }: { wellsData: Wells }) {
  const { wellId, siteId, spudDate, reason, wellCommonName } = wellsData
  return (
    <article className={styles.card} id={wellId}>
      <p className={styles.card__param}>Куст: имя куста</p>
      <p className={styles.card__param}>Скважина: {wellCommonName}</p>
      <p className={styles.card__param}>Направление: {reason}</p>
      {spudDate && <p className={styles.card__param}>{spudDate}</p>}
      <Button sx={{
        color: "black",
        backgroundColor: "white", "&:hover": {
          backgroundColor: "rgb(206, 206, 206)"
        }
      }} >События</Button>
    </article>
  )
}