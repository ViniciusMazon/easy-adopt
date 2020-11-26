import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Section from '../components/Section';
import InputText from '../components/InputText';

export default function Schedule() {
  const navigation = useNavigation();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  function handleSubmit() {
    navigation.navigate('Success', {
      message: {
        title: 'Agendamento concluído!',
        content: 'Seu agendamento foi concluído com sucesso.',
      },
    });
  }

  return (
    <View style={styles.container}>
      <Section
        title={'Agende uma visita'}
        subtitle={`Nosso horário de funcionamento é de Segunda a Sexta das 08:00 às 18:00hrs`}
        newStyles={{ marginBottom: 40 }}
      />

      <View style={styles.inputGroup}>
        <InputText
          label={'Data'}
          setValue={setDate}
          selectedValue={date}
          keyboardType={'numeric'}
        />
        <InputText
          label={'Horário'}
          setValue={setTime}
          selectedValue={time}
          keyboardType={'numeric'}
        />
      </View>

      <RectButton style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Agendar</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 89,
    backgroundColor: '#fff',
  },
  inputGroup: {
    width: '100%',
    position: 'absolute',
    bottom: 120,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 39,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
