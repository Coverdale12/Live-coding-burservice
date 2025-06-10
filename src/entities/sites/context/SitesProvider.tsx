import { useState, ReactNode } from "react";
import { SitesContext } from "./SitesContext";
import { Site } from "../Site";

export const SitesProvider = ({ children }: { children: ReactNode }) => {
  const [sites, setSites] = useState<Site[]>([])

  const sitesId: string[] | string = sites.length > 0 
    ? sites.map(site => site.siteId) 
    : [];

  return (
    <SitesContext value={{ sitesId, sites, setSites }}>
      {children}
    </SitesContext>
  )
}
