import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import { AuthProvider } from './context/auth';
import AlertProvider from './context/Alert';
import MenuBarProvider from './context/MenuBar';

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <MenuBarProvider>
          <Routes />
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
        </MenuBarProvider>
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
