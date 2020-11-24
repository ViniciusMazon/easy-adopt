import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import SelectInput from '../../components/SelectInput';
import InputText from '../../components/InputText';

export default function AboutYourResidence() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const animal = params.animal;
  const [residence_type, setResidenceType] = useState('');
  const [adults_home, setAdultsHome] = useState(0);
  const [children_home, setChildrenHome] = useState(0);
  const [smokers_home, setSmokersHome] = useState('');

  async function navigateToAboutYourHistory() {
    try {
      const schema = Yup.object().shape({
        residence_type: Yup.string().required(),
        adults_home: Yup.number().integer().moreThan(0).required(),
        children_home: Yup.number().integer().moreThan(-1).required(),
        smokers_home: Yup.string().required(),
      });

      const aboutResidence = {
        residence_type,
        adults_home: Number(adults_home),
        children_home: Number(children_home),
        smokers_home,
      };

      await schema.validate(aboutResidence, {
        abortEarly: false,
      });

      navigation.navigate('AboutYourHistory', {
        aboutResidence,
        animal,
      });
    } catch (error) {
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
        <PaginationIndicator pages={3} active={2} />
        <Section
          title={'Sobre sua residência'}
          subtitle={`Nos conte um pouco sobre como é o lugar onde você mora.`}
          newStyles={{ marginBottom: 40 }}
        />

        <SelectInput
          label={'Tipo da residência'}
          selectedValue={residence_type}
          setValue={setResidenceType}
          itemsList={[
            { label: 'Casa', value: 'Casa' },
            { label: 'Apartamento', value: 'Apartamento' },
            { label: 'Fazenda', value: 'Fazenda' },
          ]}
        />

        <InputText
          label={'Número de adultos na residência'}
          setValue={setAdultsHome}
          selectedValue={adults_home}
          keyboardType={'numeric'}
        />

        <InputText
          label={'Número de crianças na residência'}
          setValue={setChildrenHome}
          selectedValue={children_home}
          keyboardType={'numeric'}
        />

        <SelectInput
          label={'Possui fumantes na residência?'}
          selectedValue={smokers_home}
          setValue={setSmokersHome}
          itemsList={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToAboutYourHistory}
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
    marginBottom: 26,
  },
  buttonText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
