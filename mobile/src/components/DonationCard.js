import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DonationCard({ campaign }) {
  const navigation = useNavigation();

  function navigateToDonationForm() {
    navigation.navigate('DonationForm', { campaign });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{campaign.title}</Text>
      <Text style={styles.value}>
        {campaign.current} de {campaign.goal}
      </Text>
      <Text style={styles.description}>{campaign.description}</Text>

      <TouchableOpacity onPress={navigateToDonationForm} style={styles.button}>
        <Text style={styles.buttonText}>Doar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FF6DA6',
    borderStyle: 'solid',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#484848',
    marginTop: 20,
    paddingLeft: 13,
  },
  value: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#666666',
    paddingLeft: 13,
    marginTop: 15,
  },
  description: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#666666',
    paddingLeft: 13,
    marginVertical: 20,
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#FF6DA6',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
