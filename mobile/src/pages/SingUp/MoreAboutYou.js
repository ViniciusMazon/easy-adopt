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

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import InputText from '../../components/InputText';

export default function MoreAboutYou() {
  const navigation = useNavigation();

  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  function navigateToAddress() {
    navigation.navigate('Address');
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <PaginationIndicator pages={4} active={2} />

          <Section
            title={'Mais sobre você'}
            subtitle={''}
            newStyles={{ marginBottom: 40 }}
          />

          <InputText
            label={'Data de nascimento'}
            setValue={setBirthDate}
            selectedValue={birthDate}
          />

          <InputText label={'CPF'} setValue={setCpf} selectedValue={cpf} />

          <InputText
            label={'Celular'}
            setValue={setPhone}
            selectedValue={phone}
          />

          <TouchableOpacity style={styles.button} onPress={navigateToAddress}>
            <Text style={styles.buttonText}>Próximo</Text>
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
