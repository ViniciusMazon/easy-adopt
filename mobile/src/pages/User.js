import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

import { plus } from '../styles/icons';
import TopBar from '../components/TopBar';
import InputText from '../components/InputText';

export default function User() {
  const [avatar, setAvatar] = useState();
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
    const data = await AsyncStorage.getItem('@easyAdopt_user');
    const tutor = JSON.parse(data);

    setAvatar(tutor.avatar);
    setName(tutor.name);
    setEmail(tutor.email);
    setBirthDate(tutor.birth_date);
    setCpf(tutor.cpf);
    setPhone(tutor.phone);
    setStreet(tutor.address.street);
    setNumber(tutor.address.number);
    setNeighborhood(tutor.address.neighborhood);
    setCity(tutor.address.city);
    setState(tutor.address.state);
    setCep(tutor.address.cep);
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
    const tutor = new FormData();
    tutor.append('name', name);
    tutor.append('email', email);
    tutor.append('birth_date', birth_date);
    tutor.append('cpf', cpf);
    tutor.append('phone', phone);
    tutor.append(
      'avatar',
      avatar
        ? {
            name: `image.jpg`,
            type: 'image/jpg',
            uri: image,
          }
        : avatar
    );

    const address = {
      street,
      number,
      neighborhood,
      city,
      state,
      cep,
    };
    console.log(tutor, address);
  }

  return (
    <View style={styles.container}>
      <TopBar userPage />
      <ScrollView>
        <Image source={{ uri: image ? image : avatar }} style={styles.avatar} />
        <RectButton style={styles.uploadButton} onPress={handleSelectImages}>
          <Image source={plus} style={styles.uploadButtonIcon} />
        </RectButton>

        <Text style={styles.fieldset}>Sobre você</Text>
        <InputText
          label={'Nome completo'}
          placeholder={name}
          selectedValue={name}
          setValue={setName}
        />
        <InputText
          label={'E-mail'}
          placeholder={email}
          selectedValue={email}
          setValue={setEmail}
        />
        <InputText
          label={'Data de nascimento'}
          placeholder={birth_date}
          selectedValue={birth_date}
          setValue={setBirthDate}
        />
        <InputText
          label={'CPF'}
          placeholder={cpf}
          selectedValue={cpf}
          setValue={setCpf}
        />
        <InputText
          label={'Celular'}
          placeholder={phone}
          selectedValue={phone}
          setValue={setPhone}
        />

        <Text style={styles.fieldset}>Seu endereço</Text>
        <InputText
          label={'Rua'}
          placeholder={street}
          selectedValue={street}
          setValue={setStreet}
        />
        <InputText
          label={'Bairro'}
          placeholder={neighborhood}
          selectedValue={neighborhood}
          setValue={setNeighborhood}
        />
        <InputText
          label={'Cidade'}
          placeholder={city}
          selectedValue={city}
          setValue={setCity}
        />
        <InputText
          label={'Estado'}
          placeholder={state}
          selectedValue={state}
          setValue={setState}
        />
        <InputText
          label={'CEP'}
          placeholder={cep}
          selectedValue={cep}
          setValue={setCep}
        />

        <RectButton style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Salvar alterações</Text>
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
