import { useFetchProjects } from "./api/fetchProjects";
import Project from "./Project"

import Loading from "@shared/loading/Loading";
import ErrorComponent from "@shared/error/ErrorComponent";


import styles from "./ProjectsList.module.scss"


const ProjectsList = () => {
  const { data, error, isLoading } = useFetchProjects();

  if (error) return <ErrorComponent>{error}</ErrorComponent>
  if (isLoading) return <Loading>Загрузка месторождений</Loading>
  return (
    <ul className={styles.list}>
      {data?.map((el, index) => (
        <li className={styles.item} key={index}>
          <Project name={el.projectName} id={el.projectId} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectsList