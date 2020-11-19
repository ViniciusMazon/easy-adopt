import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import TopBar from '../components/TopBar';
import PaginationIndicator from '../components/PaginationIndicator';
import Section from '../components/Section';

export default function AdoptionTerm() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  function navigateToAdoptionForm() {
    if (checked) {
      navigation.navigate('AdoptionForm');
    }
  }

  return (
    <View style={styles.container}>
      <TopBar />

      <PaginationIndicator pages={3} active={1} />

      <Section
        title={'Termo de adoção'}
        subtitle={`Por favor, leia atentamente o termo de adoção.`}
      />

      <ScrollView style={styles.termContainer}>
        <Text style={styles.termText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis nisl a mauris faucibus, sit amet fringilla tellus
          consectetur. Proin euismod nisl leo, et tincidunt sapien efficitur
          quis. Mauris suscipit viverra sem, vitae imperdiet quam euismod et.
          Cras lobortis libero eget dui porta tempor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam facilisis nisl a mauris
          faucibus, sit amet fringilla tellus consectetur. Proin euismod nisl
          leo, et Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam facilisis nisl a mauris faucibus, sit amet Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam facilisis nisl a mauris
          faucibus, sit amet fringilla tellus consectetur. Proin euismod nisl
          leo, et tincidunt sapien efficitur quis. Mauris suscipit viverra sem,
          vitae imperdiet quam euismod et. Cras lobortis libero eget dui porta
          tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam facilisis nisl a mauris faucibus, sit amet fringilla tellus
          consectetur. Proin euismod nisl leo, et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam facilisis nisl a mauris faucibus,
          sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam facilisis nisl a mauris faucibus, sit amet fringilla tellus
          consectetur. Proin euismod nisl leo, et tincidunt sapien efficitur
          quis. Mauris suscipit viverra sem, vitae imperdiet quam euismod et.
          Cras lobortis libero eget dui porta tempor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam facilisis nisl a mauris
          faucibus, sit amet fringilla tellus consectetur. Proin euismod nisl
          leo, et Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam facilisis nisl a mauris faucibus, sit amet Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam facilisis nisl a mauris
          faucibus, sit amet fringilla tellus consectetur. Proin euismod nisl
          leo, et tincidunt sapien efficitur quis. Mauris suscipit viverra sem,
          vitae imperdiet quam euismod et. Cras lobortis libero eget dui porta
          tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam facilisis nisl a mauris faucibus, sit amet fringilla tellus
          consectetur. Proin euismod nisl leo, et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam facilisis nisl a mauris faucibus,
          sit amet
        </Text>
      </ScrollView>

      <View style={styles.checkboxGroup}>
        <Checkbox
          color={'#FA5293'}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text
          style={styles.checkboxLabel}
          onPress={() => {
            setChecked(!checked);
          }}
        >
          Li e aceito o Termo de Adoção
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigateToAdoptionForm}>
        <Text style={styles.buttonText}>Adotar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
  termContainer: {
    width: '90%',
    maxHeight: 360,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 13,
    marginTop: 13,
    marginBottom: 20,
  },
  termText: {
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 24,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  checkboxLabel: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
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
    position: 'absolute',
    bottom: 26,
  },
  buttonText: {
    color: '#FA5293',
  },
});
