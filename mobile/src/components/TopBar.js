import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { back, logOut } from '../styles/icons';

import { useAuth } from '../contexts/auth';

export default function TopBar({ userPage = false }) {
  const { goBack } = useNavigation();
  const { signOut } = useAuth();

  function handleGoBack() {
    goBack();
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack} style={styles.button}>
        <Image source={back} resizeMode="contain" />
      </BorderlessButton>

      {userPage && (
        <BorderlessButton onPress={handleSignOut} style={styles.button}>
          <Image source={logOut} resizeMode="contain" style={styles.icon} />
          <Text style={styles.exitText}>Sair</Text>
        </BorderlessButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF0F6',
    paddingHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  exitText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#FA5293',
    marginLeft: 6,
  },
});
