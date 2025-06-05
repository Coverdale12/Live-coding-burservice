import styles from "./SiteStyles.module.scss"

import { Button } from "@mui/material"



export interface Site {
  siteId: string,
  projectId: string,
  siteName: string
}

export default function Site({ siteData }: { siteData: Site }) {
  const { siteId, projectId, siteName } = siteData
  return (
    <article className={styles.site}>
      <h2 className={styles.site__paragrapth}>{siteName}</h2>
    </article>
  )
}