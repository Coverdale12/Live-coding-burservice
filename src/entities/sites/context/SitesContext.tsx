import { createContext, useContext} from "react";
import { Site } from "@entities/sites/Site";


type SitesContextType = {
  sites: Site[];
  setSites: (value: Site[]) => void;
  sitesId: string[] | string;
}

export const SitesContext = createContext<SitesContextType | undefined>(undefined);

export const useSitesContext = () => {
  const context = useContext(SitesContext);
  if (context === undefined) {
    throw new Error("no provider!")
  }
  return context

}