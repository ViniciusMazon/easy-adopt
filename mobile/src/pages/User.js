import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { format } from 'date-fns';
import api from '../services/api';

import { plus } from '../styles/icons';
import TopBar from '../components/TopBar';
import InputText from '../components/InputText';

export default function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [tutor, setTutor] = useState({});
  const [address, setAddress] = useState({});
  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  async function getTutor() {
    const data = await AsyncStorage.getItem('@EasyAdopt:user');
    const tutor = JSON.parse(data);
    const response = await api.get(`/tutors/${tutor.email}`);
    setTutor(response.data);
    setAddress(response.data.address);
  }

  useEffect(() => {
    getTutor();
  }, []);

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Precisamos acessar suas fotos');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;
    setImage(image);
  }

  async function handleSaveChanges() {
    setIsLoading(true);

    const addressData = {
      street: street ? street : address.street,
      number: number ? number : address.number,
      neighborhood: neighborhood ? neighborhood : address.neighborhood,
      city: city ? city : address.city,
      state: state ? state : address.state,
      cep: cep ? cep : address.cep,
    };

    await api.put(`address/${address.id}`, addressData);

    const splittedDate = birth_date
      ? birth_date.split('/')
      : tutor.birth_date.split('/');

    const tutorData = {
      name: name ? name : tutor.name,
      email: email ? email : tutor.email,
      birth_date: format(
        new Date(splittedDate[2], splittedDate[1], splittedDate[0]),
        'yyyy-MM-dd'
      ),
      cpf: cpf ? cpf : tutor.cpf,
      phone: phone ? phone : tutor.phone,
    };

    await api.put(`tutors/${tutor.id}`, tutorData);

    if (image) {
      const formData = new FormData();
      formData.append('image', {
        name: `${tutor.id}.jpg`,
        type: 'image/jpg',
        uri: image,
      });
      await api.put(`/images/${tutor.avatar_id}`, formData);
    }

    setIsLoading(false);
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
      <TopBar userPage />
      <ScrollView>
        <Image
          source={{ uri: image ? image : tutor.avatar }}
          style={styles.avatar}
        />
        <RectButton style={styles.uploadButton} onPress={handleSelectImages}>
          <Image source={plus} style={styles.uploadButtonIcon} />
        </RectButton>

        <Text style={styles.fieldset}>Sobre você</Text>
        <InputText
          label={'Nome completo'}
          placeholder={tutor.name}
          selectedValue={name}
          setValue={setName}
        />
        <InputText
          label={'E-mail'}
          placeholder={tutor.email}
          selectedValue={email}
          setValue={setEmail}
        />
        <InputText
          label={'Data de nascimento'}
          placeholder={tutor.birth_date}
          selectedValue={birth_date}
          setValue={birthDateFormatter}
          keyboardType={'number-pad'}
          maxLength={10}
        />
        <InputText
          label={'CPF'}
          placeholder={tutor.cpf}
          selectedValue={cpf}
          setValue={cpfFormatter}
          keyboardType={'number-pad'}
          maxLength={14}
        />
        <InputText
          label={'Celular'}
          placeholder={tutor.phone}
          selectedValue={phone}
          setValue={phoneFormatter}
          keyboardType={'phone-pad'}
          maxLength={15}
        />

        <Text style={styles.fieldset}>Seu endereço</Text>
        <InputText
          label={'Rua'}
          placeholder={address.street}
          selectedValue={street}
          setValue={setStreet}
        />
        <InputText
          label={'Número'}
          placeholder={address.number}
          selectedValue={number}
          setValue={setNumber}
          keyboardType={'number-pad'}
        />
        <InputText
          label={'Bairro'}
          placeholder={address.neighborhood}
          selectedValue={neighborhood}
          setValue={setNeighborhood}
        />
        <InputText
          label={'Cidade'}
          placeholder={address.city}
          selectedValue={city}
          setValue={setCity}
        />
        <InputText
          label={'Estado'}
          placeholder={address.state}
          selectedValue={state}
          setValue={setState}
        />
        <InputText
          label={'CEP'}
          placeholder={address.cep}
          selectedValue={cep}
          setValue={cepFormatter}
          keyboardType={'number-pad'}
          maxLength={10}
        />

        <RectButton style={styles.button} onPress={handleSaveChanges}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Salvar alterações</Text>
          )}
        </RectButton>
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
  avatar: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
  },
  uploadButton: {
    width: 45,
    height: 45,
    borderRadius: 24,
    backgroundColor: '#118696',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -22.5,
  },
  uploadButtonIcon: {
    height: 24,
    width: 24,
  },
  fieldset: {
    width: '90%',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 12,
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
