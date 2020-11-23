import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './src/services/api';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { VarelaRound_400Regular } from '@expo-google-fonts/varela-round';

import AppStack from './src/routes/AppStack';

export default function App() {
  useEffect(() => {
    api.get('/tutors/fabiola@gmail.com').then(async (response) => {
      await AsyncStorage.setItem(
        '@easyAdopt_user',
        JSON.stringify(response.data)
      );
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    VarelaRound_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="dark" backgroundColor={'#FFF0F6'} />
      </>
    );
  }
}
