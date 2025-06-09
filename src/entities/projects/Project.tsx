import styles from "./Project.module.scss"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'




export interface Project {
  projectId: string,
  projectName: string
}

type ProjectProps = {
  name: string,
  id: string,
}

export default function Project({ name, id }: ProjectProps) {
  return (
    <article className={styles.card} id={id}>
      {name}
      <Button sx={{backgroundColor: "white", "&:hover": {
        backgroundColor: "rgb(206, 206, 206)"}}} 
        component={Link} to={`/projects/${id}`}>
        Перейти
      </Button>
    </article>
  )
}