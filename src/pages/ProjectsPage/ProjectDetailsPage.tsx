import { useParams } from "react-router-dom"
import Wells from "./Wells/Wells";

import styles from "./Project.module.scss"

import { Project } from "@entities/projects/api/fetchProjects";


import { useFetchSites } from "@entities/sites/api/fetchSites";
import { useEffect } from "react";

import { SitesProvider } from "@entities/sites/context/SitesProvider";
import { useSitesContext } from "@entities/sites/context/SitesContext";
import { WellsProvider } from "@entities/wells/context/WellsProvider";


import ErrorComponent from "@shared/error/ErrorComponent";
import Loading from "@shared/loading/Loading";
import { useAppSelector } from "@app/hooks";



export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const project: Project = useAppSelector((state) => state.project.project);


  console.log(project)
  return (
    <>
      <WellsProvider>
        <SitesProvider>
          <h1 className={styles.title}>Месторождение {project.projectName ? project.projectName : ""}</h1>
          <ProjectContent id={id as string} />
        </SitesProvider>
      </WellsProvider>
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
  }, [data]);

  if (isLoading) return <Loading>Загрузка данных о месторождении</Loading>
  if (error) return <ErrorComponent>{error}</ErrorComponent>

  return <Wells />;
}