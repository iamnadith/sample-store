import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <UIContext.Provider value={{ isSearchOpen, setIsSearchOpen }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

