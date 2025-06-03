import { useParams } from "react-router-dom"
import Sites from "./Sites/Sites";
import Wells from "./Wells/Wells";

import { SitesProvider } from "./SitesContext/SitesProvider";


export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <>
      <SitesProvider>
        <Sites projectId={id as string} />
        <Wells />
      </SitesProvider>
    </>
  )
}