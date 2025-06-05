import ProjectsList from "@entities/projects/ProjectsList"
import styles from "./Project.module.scss"


export default function ProjectsPage(){
  return(
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <h1 className={styles.title}>Месторождения</h1>
          <ProjectsList />
        </div>
      </section>
    </>
  )
}