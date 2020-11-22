import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { success } from '../../styles/icons';
import backgroundImg from '../../assets/images/background.png';

export default function Success() {
  const navigation = useNavigation();

  function navigateToAnimals() {
    navigation.navigate('Animals');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <Image source={success} />
        <Text style={styles.title}>Deu tudo certo!</Text>
        <Text style={styles.description}>
          Seu pedido foi registrado e será analisado, em breve entraremos em
          contato. Cheque seu e-mail regularmente.
        </Text>

        <Text onPress={navigateToAnimals} style={styles.link}>
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
