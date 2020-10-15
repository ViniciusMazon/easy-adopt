import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />
      <GlobalStyles />
    </>
  );
}

export default App;
