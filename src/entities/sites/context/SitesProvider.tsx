import { useEffect, useState, ReactNode } from "react";
import { SitesContext } from "./SitesContext";
import { Site } from "../Site";

export const SitesProvider = ({ children }: { children: ReactNode }) => {
  const [sitesId, setSitesId] = useState<string[] | string>([]);
  const [sites, setSites] = useState<Site[]>([])

  useEffect(() => {
    if (sites.length > 0) {
      const ids = sites.map(site => site.siteId);
      setSitesId(ids);
    } else {
      setSitesId([]);
    }
  }, [sites])

  return (
    <SitesContext value={{ sitesId, setSitesId, sites, setSites }}>
      {children}
    </SitesContext>
  )
}
