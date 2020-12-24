import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../pages/OnboardingScreen';
import SignIn from '../pages/SingIn';
import SingUpRoutes from './singUp.routes';
import ForgotPassword from '../pages/ForgotPassword';
import Success from '../pages/Success';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('@EasyAdopt:alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('@EasyAdopt:alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return <ActivityIndicator size={30} />;
  } else if (isFirstLaunch === true) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
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
        <AuthStack.Screen name="Success" component={Success} />
      </AuthStack.Navigator>
    );
  } else {
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
        <AuthStack.Screen name="Success" component={Success} />
      </AuthStack.Navigator>
    );
  }
}

export default AuthRoutes;
