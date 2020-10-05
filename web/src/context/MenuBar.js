import React, { createContext, useState, useContext } from 'react';

const MenuBarContext = createContext();

export default function MenuBarProvider({ children }) {
  const [isCompacted, setIsCompacted] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  return (
    <MenuBarContext.Provider
      value={{ isCompacted, setIsCompacted, activeSection, setActiveSection }}
    >
      {children}
    </MenuBarContext.Provider>
  );
}

export function useMenuBar() {
  const context = useContext(MenuBarContext);

  if (!context)
    throw new Error('useCount must be used within a MenuBarProvider');
  const {
    isCompacted,
    setIsCompacted,
    activeSection,
    setActiveSection,
  } = context;

  return { isCompacted, setIsCompacted, activeSection, setActiveSection };
}
