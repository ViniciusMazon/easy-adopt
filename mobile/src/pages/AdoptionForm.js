import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import TopBar from '../components/TopBar';
import PaginationIndicator from '../components/PaginationIndicator';
import Section from '../components/Section';

export default function AdoptionForm() {
  return (
    <View style={styles.container}>
      <TopBar />

      <PaginationIndicator pages={3} active={2} />

      <Section
        title={'Sobre sua residência'}
        subtitle={`Nos conte um pouco sobre como é o lugar onde você mora.`}
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
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
