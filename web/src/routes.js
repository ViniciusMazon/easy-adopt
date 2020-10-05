import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';

import Animals from './pages/Animals';
import Adoption from './pages/Adoption';

function PrivateRoutes() {
  return (
    <MenuBarProvider>
      <BrowserRouter>
        <MenuBar />
        <Route exact path="/" component={Animals} />
        <Route path="/adoption" component={Adoption} />
      </BrowserRouter>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
