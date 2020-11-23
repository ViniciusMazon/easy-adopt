import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Section({ title, subtitle, newStyles }) {
  return (
    <View style={[styles.container, newStyles]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'VarelaRound_400Regular',
    fontSize: 21,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 24,
    fontSize: 16,
    color: '#666666',
  },
});
