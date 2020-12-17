import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import AlertProvider from './context/Alert';
import UserProvider from './context/User';

function App() {
  return (
    <AlertProvider>
      <UserProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </UserProvider>
    </AlertProvider>
  );
}

export default App;
