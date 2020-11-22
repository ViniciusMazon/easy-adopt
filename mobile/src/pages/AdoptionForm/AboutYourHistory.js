import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import SelectInput from '../../components/SelectInput';
import AreaText from '../../components/AreaText';

export default function AboutYourHistory() {
  const navigation = useNavigation();
  const route = useRoute();
  const aboutResidence = route.params.aboutResidence;
  const [adopted_before, setAdoptedBefore] = useState('');
  const [other_animals, setOtherAnimals] = useState('');
  const [sick_animals, setSickAnimals] = useState('');
  const [aware_cost, setAwareCost] = useState('');
  const [why_want_adopt, setWhyWantAdopt] = useState('');

  function navigateToSuccess() {
    navigation.navigate('Success');
    const data = {
      residence_type: aboutResidence.residence_type,
      adults_home: aboutResidence.adults_home,
      children_home: aboutResidence.children_home,
      smokers_home: aboutResidence.smokers_home,
      adopted_before,
      other_animals,
      sick_animals,
      aware_cost,
      why_want_adopt,
    };
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <PaginationIndicator pages={3} active={3} />
        <Section
          title={'Sobre seu histórico'}
          subtitle={`Queremos saber mais sobre seu histórico com animais.`}
          newStyles={{ marginBottom: 60 }}
        />

        <SelectInput
          label={'Já adotou algum animal antes?'}
          selectedValue={adopted_before}
          setValue={setAdoptedBefore}
          itemsList={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
        />

        <SelectInput
          label={'Possui outros animais em casa?'}
          selectedValue={other_animals}
          setValue={setOtherAnimals}
          itemsList={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
        />

        <SelectInput
          label={'Possui animais que ficaram doentes nos últimos meses?'}
          selectedValue={sick_animals}
          setValue={setSickAnimals}
          itemsList={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
        />

        <SelectInput
          label={
            'Você esta ciente que terá que adicionar custos como alimentação, vacinas e veterinário ao seu orçamento?'
          }
          selectedValue={aware_cost}
          setValue={setAwareCost}
          itemsList={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
        />

        <AreaText
          label={'Porquê você quer adotar um animal?'}
          setValue={setWhyWantAdopt}
          selectedValue={why_want_adopt}
        />

        <TouchableOpacity style={styles.button} onPress={navigateToSuccess}>
          <Text style={styles.buttonText}>Enviar</Text>
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
    backgroundColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 26,
  },
  buttonText: {
    color: '#FFF',
  },
});
