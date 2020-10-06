import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';
import UserProvider from './context/User';

import Animals from './pages/Animals';
import Adoption from './pages/Adoption';

const css = {
  display: 'flex',
};

function PrivateRoutes() {
  return (
    <MenuBarProvider>
      <UserProvider>
        <BrowserRouter>
          <div style={css}>
            <MenuBar />
            <Route exact path="/" component={Animals} />
            <Route path="/adoption" component={Adoption} />
          </div>
        </BrowserRouter>
      </UserProvider>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
