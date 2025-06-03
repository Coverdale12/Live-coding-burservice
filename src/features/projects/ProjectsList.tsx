import { useFetchProjects } from "./api/fetchProjects";
import Project from "./Project"
import loadingsStyle from "@shared/loading/loading.module.scss"
import errorStyle from "@shared/error/error.module.scss"
import styles from "./ProjectsList.module.scss"

const ProjectsList = () => {
  const { data, error, isLoading } = useFetchProjects();

  if (error) return <div className={errorStyle.error}>{error.message}</div>
  if (isLoading) return <div className={loadingsStyle.loading}>Загрузка данных</div>
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