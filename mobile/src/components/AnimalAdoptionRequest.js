import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { male, female, more } from '../styles/icons';
import { useNavigation } from '@react-navigation/native';

export default function AnimalAdoptionRequest({ request }) {
  const navigation = useNavigation();

  var statusColor = '';
  switch (request.status) {
    case 'novo':
      statusColor = '#F6C06E';
      break;
    case 'aprovado':
      statusColor = '#6EF7A5';
      break;
    case 'reprovado':
      statusColor = '#FD4F59';
      break;
    case 'cancelado':
      statusColor = '#FD4F59';
      break;
    default:
      statusColor = '#FFF';
      break;
  }

  function navigateToCancelAdoptionRequest() {
    navigation.navigate('CancelAdoptionRequest', { request });
  }

  return (
    <TouchableOpacity
      style={styles.animalAdoptionRequest}
      onPress={navigateToCancelAdoptionRequest}
    >
      <Image source={{ uri: request.animal.avatar }} style={styles.avatar} />

      <View style={styles.data}>
        <View style={styles.status}>
          <View style={[styles.indicator, { backgroundColor: statusColor }]} />
          <Text style={styles.text}>{request.status}</Text>
        </View>

        <View>
          <Text style={styles.name}>{request.animal.name}</Text>
          <View style={styles.genderContainer}>
            <Image
              source={request.animal.gender === 'Macho' ? male : female}
              style={styles.genderIcon}
            />
            <Text style={styles.genderText}>{request.animal.gender}</Text>
          </View>
        </View>

        <View style={styles.bot}>
          <Image source={more} style={styles.more} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animalAdoptionRequest: {
    height: 113,
    width: '90%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderStyle: 'solid',
    borderRadius: 8,
    marginBottom: 10,
  },
  avatar: {
    width: 120,
    height: 113,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  data: {
    width: 190,
    justifyContent: 'space-between',
    paddingRight: 2,
    paddingLeft: 10,
    paddingVertical: 5,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  indicator: {
    width: 11,
    height: 11,
    borderRadius: 5,
  },
  text: {
    marginLeft: 8,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  name: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: '#484848',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  genderText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  bot: {
    alignSelf: 'flex-end',
  },
  more: {
    width: 20,
    resizeMode: 'contain',
    marginBottom: 2
  },
});
