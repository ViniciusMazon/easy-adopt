import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

import TopBar from '../components/TopBar';
import Section from '../components/Section';
import InputText from '../components/InputText';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  async function handleSubmit() {
    if (!email) {
      Alert.alert(
        'E-mail inválido',
        'Informe um e-mail válido',
        [
          {
            text: 'Ok',
            onPress: () => {},
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }

    try {
      await await api.get(`/password-reset/tutor/${email}`);

      navigation.navigate('Success', {
        message: {
          title: 'Quase lá...',
          content:
            'Te enviamos um e-mail com um link para você redefinir sua senha.',
          redirect: 'SignIn',
        },
      });
    } catch (err) {
      Alert.alert(
        'Ops...',
        'Não conseguimos redefinir sua senha no momento, tente novamente mais tarde.',
        [
          {
            text: 'Ok',
            onPress: () => {},
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <Section
            title={'Esqueceu sua senha?'}
            subtitle={'Acontece, vamos te ajudar e recuperar seu acesso.'}
            newStyles={{ marginTop: 60, marginBottom: 240 }}
          />

          <InputText
            label={'E-mail'}
            setValue={setEmail}
            selectedValue={email}
            placeholder={'email@mail.com'}
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Recuperar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
