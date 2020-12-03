import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

import TopBar from '../components/TopBar';

export default function DonationPayment() {
  const route = useRoute();
  const params = route.params;
  return (
    <View style={styles.container}>
      <TopBar />
      <WebView style={{ flex: 1 }} source={{ uri: `${params.paymentLink}` }} />
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
