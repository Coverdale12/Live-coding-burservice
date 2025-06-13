import { useFetchProjects } from "./api/fetchProjects";
import Project from "./Project"
import {Project as ProjectType} from "./Project"
import Loading from "@shared/ui/loading/Loading";
import ErrorComponent from "@shared/ui/error/ErrorComponent";

import { useDispatch } from "react-redux"
import {setProject} from "@entities/projects/slice/ProjectSlice"

import styles from "./ProjectsList.module.scss"


const ProjectsList = () => {
  const { data, error, isLoading } = useFetchProjects();

  const dispatch = useDispatch();

  function handlerClick(el: ProjectType){
    dispatch(setProject(el))
  }

  if (error) return <ErrorComponent>{error}</ErrorComponent>
  if (isLoading) return <Loading>Загрузка месторождений</Loading>
  return (
    <ul className={styles.list}>
      {data?.map((el, index) => (
        <li className={styles.item} key={index} onClick={() => handlerClick(el)}>
          <Project name={el.projectName} id={el.projectId} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectsList