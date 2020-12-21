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
import SelectInput from '../../components/SelectInput';
import InputText from '../../components/InputText';

export default function Address() {
  const navigation = useNavigation();

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  function navigateToCredentials() {
    navigation.navigate('Credentials');
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <PaginationIndicator pages={4} active={3} />

          <Section
            title={'Onde você mora?'}
            subtitle={''}
            newStyles={{ marginBottom: 40 }}
          />

          <InputText
            label={'Rua'}
            setValue={setStreet}
            selectedValue={street}
          />

          <InputText
            label={'Número'}
            setValue={setNumber}
            selectedValue={number}
          />

          <InputText
            label={'Bairro'}
            setValue={setNeighborhood}
            selectedValue={neighborhood}
          />

          <InputText label={'Cidade'} setValue={setCity} selectedValue={city} />

          <SelectInput
            label={'UF'}
            selectedValue={state}
            setValue={setState}
            itemsList={[
              { label: 'AC', value: 'AC' },
              { label: 'AL', value: 'AL' },
              { label: 'AP', value: 'AP' },
              { label: 'AM', value: 'AM' },
              { label: 'BA', value: 'BA' },
              { label: 'CE', value: 'CE' },
              { label: 'DF', value: 'DF' },
              { label: 'ES', value: 'ES' },
              { label: 'GO', value: 'GO' },
              { label: 'MA', value: 'MA' },
              { label: 'MT', value: 'MT' },
              { label: 'MS', value: 'MS' },
              { label: 'MG', value: 'MG' },
              { label: 'PA', value: 'PA' },
              { label: 'PB', value: 'PB' },
              { label: 'PR', value: 'PR' },
              { label: 'PE', value: 'PE' },
              { label: 'PI', value: 'PI' },
              { label: 'RJ', value: 'RJ' },
              { label: 'RN', value: 'RN' },
              { label: 'RS', value: 'RS' },
              { label: 'RO', value: 'RO' },
              { label: 'RR', value: 'RR' },
              { label: 'SC', value: 'SC' },
              { label: 'SP', value: 'SP' },
              { label: 'SE', value: 'SE' },
              { label: 'TO', value: 'TO' },
            ]}
          />

          <InputText label={'CEP'} setValue={setCep} selectedValue={cep} />

          <TouchableOpacity style={styles.button} onPress={navigateToCredentials}>
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
