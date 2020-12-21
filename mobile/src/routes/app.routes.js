import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Tabs from './Tabs';
import Adopt from '../pages/Adopt';
import AdoptionTerm from '../pages/AdoptionForm/AdoptionTerm';
import AboutYourResidence from '../pages/AdoptionForm/AboutYourResidence';
import AboutYourHistory from '../pages/AdoptionForm/AboutYourHistory';
import Success from '../pages/Success';
import Schedule from '../pages/Schedule';
import CancelAdoptionRequest from '../pages/CancelAdoptionRequest';
import DonationForm from '../pages/DonationForm';
import DonationPayment from '../pages/DonationPayment';

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Study" component={Tabs} />
      <Screen name="Adopt" component={Adopt} />
      <Screen name="AdoptionTerm" component={AdoptionTerm} />
      <Screen name="AboutYourResidence" component={AboutYourResidence} />
      <Screen name="AboutYourHistory" component={AboutYourHistory} />
      <Screen name="Success" component={Success} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="DonationForm" component={DonationForm} />
      <Screen name="DonationPayment" component={DonationPayment} />
      <Screen name="CancelAdoptionRequest" component={CancelAdoptionRequest} />
    </Navigator>
  );
}

export default AppRoutes;
