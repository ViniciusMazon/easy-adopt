import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error('useCount must be used within a UserProvider');
  const { user, setUser } = context;

  return { user, setUser };
}
