import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import { AuthProvider } from './context/auth';
import AlertProvider from './context/Alert';
import UserProvider from './context/User';
import MenuBarProvider from './context/MenuBar';

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <UserProvider>
          <MenuBarProvider>
            <Routes />
            <ToastContainer autoClose={3000} />
            <GlobalStyles />
          </MenuBarProvider>
        </UserProvider>
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
