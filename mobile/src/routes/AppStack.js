import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Tabs from './Tabs';
import Adopt from '../pages/Adopt';
import AdoptionTerm from '../pages/AdoptionForm/AdoptionTerm';
import AboutYourResidence from '../pages/AdoptionForm/AboutYourResidence';
import AboutYourHistory from '../pages/AdoptionForm/AboutYourHistory';
import Success from '../pages/AdoptionForm/Success';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Study" component={Tabs} />
        <Screen name="Adopt" component={Adopt} />
        <Screen name="AdoptionTerm" component={AdoptionTerm} />
        <Screen name="AboutYourResidence" component={AboutYourResidence} />
        <Screen name="AboutYourHistory" component={AboutYourHistory} />
        <Screen name="Success" component={Success} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
