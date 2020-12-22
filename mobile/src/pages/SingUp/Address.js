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
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import SelectInput from '../../components/SelectInput';
import InputText from '../../components/InputText';

export default function Address() {
  const navigation = useNavigation();
  const route = useRoute();
  const userTutor = route.params.userTutor;

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  async function navigateToCredentials() {
    try {
      const schema = Yup.object().shape({
        street: Yup.string().required().min(3).max(25),
        number: Yup.string().required().min(1).max(5),
        neighborhood: Yup.string().required().min(3).max(25),
        city: Yup.string().required().min(3).max(25),
        state: Yup.string().required().min(2).max(2),
        cep: Yup.string().required().min(10).max(10),
      });

      const userAddress = {
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
      };

      await schema.validate(
        userAddress,
        {
          abortEarly: false,
        }
      );

      navigation.navigate('Credentials', { userAddress, userTutor });
    } catch (err) {
      Alert.alert(
        'Dados inválidos',
        'Verifique se preencheu todos os dados corretamente',
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

  function cepFormatter(cep) {
    if (cep.length === 2) {
      setCep(cep + '.');
      return;
    } else if (cep.length === 6) {
      setCep(cep + '-');
      return;
    }
    setCep(cep);
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
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
            maxLength={25}
          />

          <InputText
            label={'Número'}
            setValue={setNumber}
            selectedValue={number}
            keyboardType="number-pad"
            maxLength={5}
          />

          <InputText
            label={'Bairro'}
            setValue={setNeighborhood}
            selectedValue={neighborhood}
            maxLength={25}
          />

          <InputText label={'Cidade'} setValue={setCity} selectedValue={city} maxLength={25}/>

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

          <InputText
            label={'CEP'}
            setValue={cepFormatter}
            selectedValue={cep}
            keyboardType="number-pad"
            maxLength={10}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={navigateToCredentials}
          >
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
