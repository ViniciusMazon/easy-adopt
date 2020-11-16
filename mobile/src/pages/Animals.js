import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Section from '../components/Section';

export default function Animals() {
  return (
    <View style={styles.container}>
      <Section
        title={'Pedidos de adoção'}
        subtitle={'Você possui 2 pedidos de adoção'}
      />
      <Section
        title={'Adote um animal'}
        subtitle={
          'Arraste para baixo e veja todos animais disponíveis para adoção.'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 89,
    backgroundColor: '#fff',
  },
});
