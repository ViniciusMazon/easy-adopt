import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import SelectInput from '../../components/SelectInput';
import InputText from '../../components/InputText';

export default function YourName() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  async function navigateToMoreAboutYou() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(3).max(50).required(),
        gender: Yup.string().required(),
      });

      const user = {
        name,
        gender,
      };

      await schema.validate(user, {
        abortEarly: false,
      });
      navigation.navigate('MoreAboutYou', { user });
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

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <PaginationIndicator pages={4} active={1} />

        <Text style={styles.title}>Criar conta gratuita</Text>

        <Section
          title={'Sobre você'}
          subtitle={'Nos conte um pouco sobre você'}
          newStyles={{ marginBottom: 40 }}
        />

        <InputText
          label={'Nome completo'}
          setValue={setName}
          selectedValue={name}
          maxLength={50}
        />

        <SelectInput
          label={'Gênero'}
          selectedValue={gender}
          setValue={setGender}
          itemsList={[
            { label: 'Masculino', value: 'masculino' },
            { label: 'Feminino', value: 'feminino' },
          ]}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToMoreAboutYou}
        >
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
  title: {
    width: '80%',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 30,
    marginBottom: 80,
    alignSelf: 'center',
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
    marginBottom: 40,
  },
  buttonText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
