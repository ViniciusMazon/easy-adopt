import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';
import AlertProvider from './context/Alert';
import UserProvider from './context/User';

import Animals from './pages/Animals';
import Adoption from './pages/Adoption';
import AdoptionRequestAnalysis from './pages/AdoptionRequestAnalysis';
import AnimalRegistration from './pages/AnimalRegistration';
import AnimalEdit from './pages/AnimalEdit';
import AddProcedure from './pages/AddProcedure';
import DonationCampaigns from './pages/DonationCampaigns';
import CreateDonationCampaign from './pages/CreateDonationCampaign';
import Schedule from './pages/Schedule';
import Help from './pages/Help';
import User from './pages/User';

const css = {
  display: 'flex',
};

function PrivateRoutes() {
  return (
    <MenuBarProvider>
      <AlertProvider>
        <UserProvider>
          <BrowserRouter>
            <div style={css}>
              <MenuBar />

              <Route exact path="/" component={Animals} />
              <Route path="/add-animal" component={AnimalRegistration} />
              <Route exact path="/edit-animal/:id" component={AnimalEdit} />
              <Route
                path="/edit-animal/:id/:animal_name/add-procedure"
                component={AddProcedure}
              />
              <Route exact path="/adoption" component={Adoption} />
              <Route path="/adoption/:id" component={AdoptionRequestAnalysis} />
              <Route exact path="/donation" component={DonationCampaigns} />
              <Route
                exact
                path="/donation/create-campaign"
                component={CreateDonationCampaign}
              />
              <Route path="/schedule" component={Schedule} />
              <Route path="/help" component={Help} />
              <Route path="/user" component={User} />
            </div>
          </BrowserRouter>
        </UserProvider>
      </AlertProvider>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
