import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const [alert, setAlert] = useState('');

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);

  if (!context) throw new Error('useAlert must be used within a AlertProvider');
  const { alert, setAlert } = context;

  return { alert, setAlert };
}
