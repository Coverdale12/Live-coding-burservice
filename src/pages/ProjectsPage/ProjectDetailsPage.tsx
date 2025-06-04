import { useParams } from "react-router-dom"
import Wells from "./Wells/Wells";

import styles from "./Project.module.scss"

import { useFetchSites } from "@features/sites/api/fetchSites";
import { useEffect } from "react";

import { useSitesContext, SitesProvider } from "./SitesContext/SitesProvider";


import ErrorComponent from "@shared/error/ErrorComponent";
import Loading from "@shared/loading/Loading";

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <SitesProvider>
        <h1 className={styles.title}>Месторождение</h1>
        <ProjectContent id={id as string}/>
      </SitesProvider>
    </>
  )
}



function ProjectContent({ id }: { id: string }) {
  const { setSites } = useSitesContext();
  const { data, error, isLoading } = useFetchSites(id);

  useEffect(() => {
    if (data) {
      setSites(data);
    }
  }, [data, setSites]);

  if (isLoading) return <Loading>Загрузка данных о месторождении</Loading>
  if (error) return <ErrorComponent>{error}</ErrorComponent>

  return <Wells />;
}