import { createContext, ReactNode, useEffect } from "react";
import { useContext, useState } from "react";
import { Site } from "@entities/sites/Site";


type SitesContextType = {
  sites: Site[];
  setSites: (value: Site[]) => void;
  sitesId: string[] | string;
  setSitesId: (value: string[]) => void;
}

const SitesContext = createContext<SitesContextType | undefined>(undefined);

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

export const useSitesContext = () => {
  const context = useContext(SitesContext);
  if (context === undefined) {
    throw new Error("no provider!")
  }
  return context

}