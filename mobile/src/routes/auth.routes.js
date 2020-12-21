import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SingIn';
import SingUpRoutes from './singUp.routes';
import ForgotPassword from '../pages/ForgotPassword';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SingUp"
        component={SingUpRoutes}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
