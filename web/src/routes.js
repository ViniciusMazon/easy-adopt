import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import MenuBarProvider from './context/MenuBar';
import UserProvider from './context/User';
import AnimalsProvider from './context/Animals';
import ProceduresProvider from './context/Procedures';
import AdoptionRequestsProvider from './context/AdoptionRequests';
import AlertProvider from './context/Alert';
import DonationCampaignsProvider from './context/DonationCampaigns';

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
          <AnimalsProvider>
            <ProceduresProvider>
              <AdoptionRequestsProvider>
                <DonationCampaignsProvider>
                  <BrowserRouter>
                    <div style={css}>
                      <MenuBar />

                      <Route exact path="/" component={Animals} />
                      <Route
                        path="/add-animal"
                        component={AnimalRegistration}
                      />
                      <Route
                        exact
                        path="/edit-animal/:id"
                        component={AnimalEdit}
                      />
                      <Route
                        path="/edit-animal/:id/add-procedure"
                        component={AddProcedure}
                      />
                      <Route exact path="/adoption" component={Adoption} />
                      <Route
                        path="/adoption/:id"
                        component={AdoptionRequestAnalysis}
                      />
                      <Route
                        exact
                        path="/donation"
                        component={DonationCampaigns}
                      />
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
                </DonationCampaignsProvider>
              </AdoptionRequestsProvider>
            </ProceduresProvider>
          </AnimalsProvider>
        </UserProvider>
      </AlertProvider>
    </MenuBarProvider>
  );
}

export default PrivateRoutes;
