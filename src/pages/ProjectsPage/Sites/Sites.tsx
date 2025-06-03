import { useSitesContext } from "../SitesContext/SitesProvider";
import SitesList from "@features/sites/SitesList";

import styles from "../Project.module.scss"

export default function Sites({ projectId }: { projectId: string }) {
  const { sitesId, setSitesId } = useSitesContext();


  return (
    <section className="sites">
      <h1 className={styles.title}>
        Кусты
      </h1>
      <SitesList projectId={projectId} setSites={setSitesId} />
    </section>

  )
}