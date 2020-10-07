import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';
import UserProvider from './context/User';
import AnimalsProvider from './context/Animals';

import Animals from './pages/Animals';
import Adoption from './pages/Adoption';
import AnimalRegistration from './pages/AnimalRegistration';

const css = {
  display: 'flex',
};

function PrivateRoutes() {
  return (
    <MenuBarProvider>
      <UserProvider>
        <AnimalsProvider>
          <BrowserRouter>
            <div style={css}>
              <MenuBar />
              <Route exact path="/" component={Animals} />
              <Route path="/add-animal" component={AnimalRegistration} />
              <Route path="/adoption" component={Adoption} />
            </div>
          </BrowserRouter>
        </AnimalsProvider>
      </UserProvider>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
