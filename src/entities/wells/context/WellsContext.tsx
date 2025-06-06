// contexts/WellsContext.tsx
import { createContext, useContext} from 'react';

interface WellsContextType {
  currentWellId: string | null;
  setCurrentWellId: (id: string | null) => void;
}

export const WellsContext = createContext<WellsContextType | undefined>(undefined);

export const useWellsContext = () => {
  const context = useContext(WellsContext);
  if (context === undefined) {
    throw new Error('useWellsContext must be used within a WellsProvider');
  }
  return context;
};