import React, { useState, useEffect, createContext, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@easyAdopt:user');
      const storageToken = localStorage.getItem('@easyAdopt:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers['Authorization'] = `${storageToken}`;
      }
    }

    loadStorageData();
    setLoading(false);
  }, []);

  async function signIn(email, password) {
    // const response = await api.post('/sing-in', { email, password });

    // setUser(response.data.user);

    setUser({
      id: 'abc123',
      name: 'Catarina de Luz e Paiva',
      birth_date: '23/10/1986',
      cpf: '815.594.760-28',
      email: 'catarina@easyAdopt.com',
      phone: '(11)9999-9999',
      address: {
        id: '1hg3gge',
        street: 'Rua A',
        number: '123',
        neighborhood: 'Bairro A',
        city: 'Cidade A',
        state: 'Estado A',
        cep: '00.000-000',
      },
    });

    // api.defaults.headers['Authorization'] = `${response.data.token}`;

    // localStorage.setItem('@easyAdopt:user', JSON.stringify(response.data.user));
    // localStorage.setItem('@easyAdopt:token', response.data.token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
