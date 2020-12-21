import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import TopBar from '../components/TopBar';
import Section from '../components/Section';
import InputText from '../components/InputText';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  function handleSubmit() {}

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
          />

          <TouchableOpacity style={styles.button} onPress={() => {}}>
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
