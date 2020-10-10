import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';
import UserProvider from './context/User';
import AnimalsProvider from './context/Animals';
import ProceduresProvider from './context/Procedures';

import Animals from './pages/Animals';
import Adoption from './pages/Adoption';
import AnimalRegistration from './pages/AnimalRegistration';
import AnimalEdit from './pages/AnimalEdit';
import AddProcedure from './pages/AddProcedure';

const css = {
  display: 'flex',
};

function PrivateRoutes() {
  return (
    <MenuBarProvider>
      <UserProvider>
        <AnimalsProvider>
          <ProceduresProvider>
            <BrowserRouter>
              <div style={css}>
                <MenuBar />
                <Route exact path="/" component={Animals} />
                <Route path="/add-animal" component={AnimalRegistration} />
                <Route exact path="/edit-animal/:id" component={AnimalEdit} />
                <Route
                  path="/edit-animal/:id/add-procedure"
                  component={AddProcedure}
                />
                <Route path="/adoption" component={Adoption} />
              </div>
            </BrowserRouter>
          </ProceduresProvider>
        </AnimalsProvider>
      </UserProvider>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
