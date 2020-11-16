import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Donation() {
  return (
    <View style={styles.container}>
      <Text>Donation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
