import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Tabs from './Tabs';
import Adopt from '../pages/Adopt';
import AdoptionTerm from '../pages/AdoptionTerm';
import AdoptionForm from '../pages/AdoptionForm';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Study" component={Tabs} />
        <Screen name="Adopt" component={Adopt} />
        <Screen name="AdoptionTerm" component={AdoptionTerm} />
        <Screen name="AdoptionForm" component={AdoptionForm} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
