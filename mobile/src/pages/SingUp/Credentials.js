import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import * as Yup from 'yup';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';
import InputText from '../../components/InputText';

export default function Credentials() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleChangePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function handleSubmit() {}

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <PaginationIndicator pages={4} active={4} />

          <Section
            title={'Mais sobre você'}
            subtitle={''}
            newStyles={{ marginBottom: 40 }}
          />

          <InputText
            label={'E-mail'}
            setValue={setEmail}
            selectedValue={email}
            placeholder={'email@mail.com'}
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

          <TouchableOpacity style={styles.button} onPress={() => {}}>
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
