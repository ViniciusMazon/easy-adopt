import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { VarelaRound_400Regular } from '@expo-google-fonts/varela-round';
import { AppLoading } from 'expo';

import { AuthProvider } from './src/contexts/auth';


import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    VarelaRound_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <StatusBar style="dark" backgroundColor={'#FFF0F6'} />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}
