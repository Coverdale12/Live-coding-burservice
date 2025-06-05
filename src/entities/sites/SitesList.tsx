import { useFetchSites } from "./api/fetchSites"
import Site from "./Site";
import { useEffect } from "react";
import styles from "./SiteStyles.module.scss"



import Loading from "@shared/loading/Loading";
import ErrorComponent from "@shared/error/ErrorComponent";


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
  if (isLoading) return <Loading>Загрузка кустов</Loading>
  if (error) return <ErrorComponent>{error}</ErrorComponent>
  
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