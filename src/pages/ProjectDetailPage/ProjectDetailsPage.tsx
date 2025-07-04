import { useParams } from "react-router-dom"

import styles from "./Project.module.scss"

import { Project } from "@entities/projects/Project";


import { useFetchSites } from "@entities/sites/api/fetchSites";
import { useEffect } from "react";

import { SitesProvider } from "@entities/sites/context/SitesProvider";
import { useSitesContext } from "@entities/sites/context/SitesContext";
import { WellsProvider } from "@entities/wells/context/WellsProvider";


import ErrorComponent from "@shared/ui/error/ErrorComponent";
import Loading from "@shared/ui/loading/Loading";
import { useAppSelector } from "@app/hooks";
import WellsSection from "./Wells/Wells";
import Reports from "./Reports/Reports";

import Title from "@shared/ui/title/Title";


export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const project: Project = useAppSelector((state) => state.project.project);


  return (
    <WellsProvider>
      <SitesProvider>
        <Title className={styles.title}>Месторождение {project.projectName ? project.projectName : ""}</Title>
        <ProjectContent id={id as string} />
      </SitesProvider>
    </WellsProvider>
  )
}

function ProjectContent({ id }: { id: string }) {
  const { setSites, sites } = useSitesContext();
  const { data, error, isLoading } = useFetchSites(id);
  
  useEffect(() => {
    if (data) {
      setSites(data);
    }
  }, [data]);

  if (isLoading) return <Loading>Загрузка данных о месторождении</Loading>;

  if (error) return <ErrorComponent>{error}</ErrorComponent>;

  if (data?.length === 0) return <div className={styles.empty}>Информация о месторождении отсутствует!</div>

  // Ждём, пока данные будут записаны в контекст
  if (!sites || sites.length === 0) return <Loading>Инициализация</Loading>;
  return (
    <>
      <WellsSection />
      <Reports />
    </>
  );
}