import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { back, logout } from '../styles/icons';

export default function TopBar({ userPage = false }) {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack} style={styles.button}>
        <Image source={back} resizeMode="contain" />
      </BorderlessButton>

      {userPage && (
        <BorderlessButton onPress={() => {}} style={styles.button}>
          <Image source={logout} resizeMode="contain" style={styles.icon} />
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
  },
  icon: {
    width: 20,
    height: 20,
  },
  exitText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#FFF',
    marginLeft: 6,
  },
});
