import React, { useState, ReactNode } from 'react';
import { WellsContext } from './WellsContext';


export const WellsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentWellId, setCurrentWellId] = useState<string | null>(null);
  
  return (
    <WellsContext.Provider value={{ currentWellId, setCurrentWellId }}>
      {children}
    </WellsContext.Provider>
  );
};
