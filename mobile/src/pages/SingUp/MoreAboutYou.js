import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import InputText from '../../components/InputText';

export default function MoreAboutYou() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, gender } = route.params.user;

  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  async function navigateToAddress() {
    try {
      const schema = Yup.object().shape({
        birthDate: Yup.string().required().min(10).max(10),
        cpf: Yup.string().required().min(14).max(14),
        phone: Yup.string().required().min(14).max(15),
      });

      await schema.validate(
        { birthDate, cpf, phone },
        {
          abortEarly: false,
        }
      );

      const userTutor = {
        name,
        gender,
        birthDate,
        cpf,
        phone,
      };

      navigation.navigate('Address', { userTutor });
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

  function cpfFormatter(cpf) {
    if (cpf.length === 3 || cpf.length === 7) {
      setCpf(cpf + '.');
      return;
    } else if (cpf.length === 11) {
      setCpf(cpf + '-');
      return;
    }
    setCpf(cpf);
  }

  function phoneFormatter(phone) {
    if (phone.length === 1) {
      setPhone('(' + phone);
      return;
    } else if (phone.length === 3) {
      setPhone(phone + ') ');
      return;
    } else if (phone.length === 10) {
      setPhone(phone + '-');
      return;
    }
    setPhone(phone);
  }

  function birthDateFormatter(date) {
    if (date.length === 2 || date.length === 5) {
      setBirthDate(date + '/');
      return;
    }
    setBirthDate(date);
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <PaginationIndicator pages={4} active={2} />

        <Section
          title={'Mais sobre você'}
          subtitle={''}
          newStyles={{ marginBottom: 40 }}
        />

        <InputText
          label={'Data de nascimento'}
          setValue={birthDateFormatter}
          selectedValue={birthDate}
          keyboardType="number-pad"
          maxLength={10}
        />

        <InputText
          label={'CPF'}
          setValue={cpfFormatter}
          selectedValue={cpf}
          keyboardType="number-pad"
          maxLength={14}
        />

        <InputText
          label={'Celular'}
          setValue={phoneFormatter}
          selectedValue={phone}
          keyboardType="number-pad"
          maxLength={15}
        />

        <TouchableOpacity style={styles.button} onPress={navigateToAddress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
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
    marginBottom: 60,
  },
  buttonText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
