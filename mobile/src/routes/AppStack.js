import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Tabs from './Tabs';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Study" component={Tabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
