import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Section({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
  },
  title: {
    fontFamily: 'VarelaRound_400Regular',
    fontSize: 19,
    marginBottom: 9,
  },
  subtitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#9C98A6',
  },
});
