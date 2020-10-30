import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 'abc123',
    name: 'Vera Luna Rosa',
    birth_date: '20/10/1990',
    email: 'teste@email.com',
    phone: '1199999999',
    cpf: '057.037.450-20',
    access_code: '698DC19D489C4E',
  });

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
