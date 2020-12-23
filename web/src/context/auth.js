import React, { useState, useEffect, createContext, useContext } from 'react';
import api from '../services/api';

import { useAlert } from './Alert';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { setAlert } = useAlert();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = sessionStorage.getItem('@easyAdopt:user');
      const storageToken = sessionStorage.getItem('@easyAdopt:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers['authorization'] = `${storageToken}`;
      }
    }

    loadStorageData();
    setLoading(false);
  }, []);

  async function signIn(email, password) {
    try {
      const response = await api.post('/sing-in?role=collaborator', { email, password });

      setUser(response.data.user);

      api.defaults.headers['Authorization'] = `${response.data.token}`;

      sessionStorage.setItem(
        '@easyAdopt:user',
        JSON.stringify(response.data.user)
      );
      sessionStorage.setItem('@easyAdopt:token', response.data.token);
    } catch (err) {
      if (err.message === 'Request failed with status code 400') {
        setAlert({ type: 'warning', message: 'Usuário não encontrado' });
        return;
      }

      if (err.message === 'Request failed with status code 401') {
        setAlert({ type: 'warning', message: 'Usuário ou senha inválidos' });
        return;
      }
    }
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
