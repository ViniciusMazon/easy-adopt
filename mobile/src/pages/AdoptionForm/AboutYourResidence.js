import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import SelectInput from '../../components/SelectInput';
import InputText from '../../components/InputText';

export default function AboutYourResidence() {
  const navigation = useNavigation();
  const [residence_type, setResidenceType] = useState('');
  const [adults_home, setAdultsHome] = useState('');
  const [children_home, setChildrenHome] = useState('');
  const [smokers_home, setSmokersHome] = useState('');

  function navigateToAboutYourHistory() {
    navigation.navigate('AboutYourHistory', {
      aboutResidence: {
        residence_type,
        adults_home,
        children_home,
        smokers_home,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <PaginationIndicator pages={3} active={2} />
        <Section
          title={'Sobre sua residência'}
          subtitle={`Nos conte um pouco sobre como é o lugar onde você mora.`}
          newStyles={{ marginBottom: 60 }}
        />

        <SelectInput
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
          keyboardType={'number-pad'}
        />

        <InputText
          label={'Número de crianças na residência'}
          setValue={setChildrenHome}
          selectedValue={children_home}
          keyboardType={'number-pad'}
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
  },
});
