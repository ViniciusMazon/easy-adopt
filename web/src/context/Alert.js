import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert === null) {
      return;
    }

    setTimeout(() => {
      switch (alert.type) {
        case 'success':
          toast.success(alert.message);
          break;
        case 'error':
          toast.error(alert.message);
          break;
        case 'warning':
          toast.warn(alert.message);
          break;
        case 'info':
          toast.info(alert.message);
          break;
        default:
          break;
      }
    }, 1000);

    setAlert(null);
  }, [alert, setAlert]);

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
