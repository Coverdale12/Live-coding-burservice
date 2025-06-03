import { createContext, ReactNode } from "react";
import { useContext, useState } from "react";


type SitesContextType = {
  sitesId: string[] | string;
  setSitesId: (value: string[]) => void;
}

const SitesContext = createContext<SitesContextType | undefined>(undefined);

export const SitesProvider = ({ children }: { children: ReactNode }) => {
  const [sitesId, setSitesId] = useState<string[] | string>([]);

  return (
    <SitesContext value={{ sitesId, setSitesId }}>
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