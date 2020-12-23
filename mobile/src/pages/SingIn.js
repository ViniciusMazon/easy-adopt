import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { useAuth } from '../contexts/auth';

import background from '../assets/images/photoBackground.png';

export default function SingIn() {
  const navigation = useNavigation();
  const { signed, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleNavigateToSingUp() {
    navigation.navigate('SingUp');
  }

  function handleNavigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  async function handleSignIn() {
    signIn(email, password);
  }

  function handleChangePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.createAccount}>
        Novo por aqui?{' '}
        <Text style={styles.createAccountLink} onPress={handleNavigateToSingUp}>
          Crie uma conta
        </Text>
      </Text>

      <View style={styles.split}>
        <View style={styles.dash} />
        <Text style={styles.or}>ou</Text>
        <View style={styles.dash} />
      </View>

      <Text style={styles.singInText}>Entre com sua conta</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@mail.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#C1BCCC"
          value={password}
          onChangeText={(text) => setPassword(text)}
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

      <Text style={styles.forgot} onPress={handleNavigateToForgotPassword}>
        Esqueci minha senha
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccount: {
    marginTop: 60,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 35,
  },
  createAccountLink: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#FF72A8',
  },
  split: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dash: {
    width: '40%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#fff',
  },
  or: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    marginHorizontal: 13,
    color: '#fff',
  },
  singInText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#fff',
    marginVertical: 35,
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
  forgot: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: '#fff',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
