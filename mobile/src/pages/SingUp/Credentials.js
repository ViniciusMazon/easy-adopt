import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { format } from 'date-fns';
import * as Yup from 'yup';

import api from '../../services/api';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import InputText from '../../components/InputText';

export default function Credentials() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, gender, birthDate, cpf, phone } = route.params.userTutor;
  const userAddress = route.params.userAddress;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleChangePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().min(3).max(25),
        password: Yup.string().required().min(8).max(25),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      const addressResponse = await api.post('/address', userAddress);

      const splittedDate = birthDate.split('/');

      const user = {
        name,
        gender,
        birth_date: format(
          new Date(splittedDate[2], splittedDate[1], splittedDate[0]),
          'yyyy-MM-dd'
        ),
        cpf,
        phone,
        email,
        password,
        address_id: addressResponse.data.address_id,
      };

      await api.post('/tutors', user);

      navigation.navigate('Success', {
        message: {
          title: 'Bem-vindo!',
          content:
            'Seu cadastro foi concluído com sucesso, você será redirecionado para página de login',
          redirect: 'SignIn',
        },
      });
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
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <PaginationIndicator pages={4} active={4} />

          <Section
            title={'Escolha uma senha forte'}
            subtitle={''}
            newStyles={{ marginBottom: 40 }}
          />

          <InputText
            label={'E-mail'}
            setValue={setEmail}
            selectedValue={email}
            placeholder={'email@mail.com'}
            maxLength={25}
          />

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              secureTextEntry={!isPasswordVisible}
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#C1BCCC"
              value={password}
              onChangeText={(text) => setPassword(text)}
              maxLength={25}
            />
            <RectButton
              style={styles.passwordIcon}
              onPress={handleChangePasswordVisibility}
            >
              <Ionicons
                name={isPasswordVisible ? 'ios-eye-off' : 'ios-eye'}
                size={25}
                color={'#9C98A6'}
              />
            </RectButton>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Concluir</Text>
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
  inputGroup: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 25,
  },
  label: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderColor: '#DDD',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#666666',
    backgroundColor: '#FFF',
    color: '#666',
  },
  passwordIcon: {
    alignSelf: 'flex-end',
    marginTop: -41,
    marginRight: 15,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
