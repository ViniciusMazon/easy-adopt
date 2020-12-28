import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

import TopBar from '../components/TopBar';
import Section from '../components/Section';
import InputText from '../components/InputText';

export default function DonationForm() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const [tutor, setTutor] = useState({});
  const [amount, setAmount] = useState('');

  async function getTutorId() {
    const data = await AsyncStorage.getItem('@EasyAdopt:user');
    const tutor = JSON.parse(data);
    setTutor(tutor);
  }

  useEffect(() => {
    getTutorId();
  }, []);

  async function handleSubmit() {
    const donationData = {
      amount: amount.toString().replace(',', '.'),
      email: tutor.email,
      tutor_id: tutor.id,
      donation_campaign_id: params.campaign.id,
    };
    const { data } = await api.post('/donation', donationData);
    navigation.navigate('DonationPayment', { paymentLink: data });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TopBar />
      <Section
        title={params.campaign.title}
        subtitle={`Por favor, insira o valor que deseja doar. Ao clicar no botão “Doar” você será redirecionado para a página de pagamento`}
        newStyles={{ marginTop: 45, marginBottom: 90 }}
      />

      <InputText
        label={'Valor da doação'}
        setValue={setAmount}
        keyboardType={'number-pad'}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Doar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    fontFamily: 'Montserrat_600SemiBold',
  },
});
