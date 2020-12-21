import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import YourName from '../pages/SingUp/YourName';
import MoreAboutYou from '../pages/SingUp/MoreAboutYou';
import Address from '../pages/SingUp/Address';
import Credentials from '../pages/SingUp/Credentials';

const SingUpStack = createStackNavigator();

function SingUp() {
  return (
    <SingUpStack.Navigator>
      <SingUpStack.Screen
        name="YourName"
        component={YourName}
        options={{ headerShown: false }}
      />
      <SingUpStack.Screen
        name="MoreAboutYou"
        component={MoreAboutYou}
        options={{ headerShown: false }}
      />
      <SingUpStack.Screen
        name="Address"
        component={Address}
        options={{ headerShown: false }}
      />
      <SingUpStack.Screen
        name="Credentials"
        component={Credentials}
        options={{ headerShown: false }}
      />
    </SingUpStack.Navigator>
  );
}

export default SingUp;
