import ProjectsList from "@entities/projects/ProjectsList"
import Title from "@shared/ui/title/Title"

export default function ProjectsPage(){
  return(
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <Title>Месторождения</Title>
          <ProjectsList />
        </div>
      </section>
    </>
  )
}