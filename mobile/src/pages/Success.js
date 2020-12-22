import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { success } from '../styles/icons';
import backgroundImg from '../assets/images/background.png';

export default function Success() {
  const navigation = useNavigation();
  const route = useRoute();
  const message = route.params.message;

  function navigateTo() {
    navigation.navigate(message.redirect);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <Image source={success} />

        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.description}>{message.content}</Text>

        <Text onPress={navigateTo} style={styles.link}>
          Voltar para a página principal
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#FA5293',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  description: {
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
    lineHeight: 24,
  },
  link: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#FFF',
    textDecorationLine: 'underline',
    marginTop: 30,
  },
});
