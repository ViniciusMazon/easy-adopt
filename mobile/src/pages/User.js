import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TopBar from '../components/TopBar';

export default function User() {
  return (
    <View style={styles.container}>
      <TopBar userPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
});
