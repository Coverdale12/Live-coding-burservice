import { useFetchSites } from "./api/fetchSites"
import Site from "./Site";
import { useEffect } from "react";
import styles from "./SiteStyles.module.scss"

import loadingStyle from "@shared/loading/loading.module.scss"
import errorStyle from "@shared/error/error.module.scss"


type SitesListProps = {
  projectId: string,
  setSites?: (data: string[]) => void
}


export default function SitesList({ projectId, setSites }: SitesListProps) {
  const { data, isLoading, error } = useFetchSites(projectId);

  useEffect(() => {
    if(data && setSites){
      const sitesIds = data.map(el => el.siteId);
      setSites(sitesIds)
    }
  }, [data, setSites])
  if (isLoading) return <div className={loadingStyle.loading}>Загрузка</div>
  if (error) return <div className={errorStyle.error}>{error.message}</div>
  
  return (
    <ul className={styles.list}>
      {data?.length ? data.map((el, index) => (
        <li className={styles.item} key={index}>
          <Site siteData={el} />
        </li>
      )) : <p className={styles.warning}>Кусты по запросу не найденны!</p>}
    </ul>
  )
}