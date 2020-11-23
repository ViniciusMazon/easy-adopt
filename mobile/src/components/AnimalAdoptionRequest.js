import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { male, female } from '../styles/icons';

import dogImage from '../assets/dog.png';

export default function AnimalAdoptionRequest({
  id,
  avatar,
  status,
  name,
  gender,
}) {
  var statusColor = '#F6C06E';

  if (status === 'aprovado') {
    statusColor = '#6EF7A5';
  } else if (status === 'reprovado') {
    statusColor = '#FD4F59';
  }

  return (
    <View style={styles.animalAdoptionRequest}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.data}>
        <View style={styles.status}>
          <View style={[styles.indicator, { backgroundColor: statusColor }]} />
          <Text style={styles.text}>{status}</Text>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.genderContainer}>
            <Image
              source={gender === 'Macho' ? male : female}
              style={styles.genderIcon}
            />
            <Text style={styles.genderText}>{gender}</Text>
          </View>
        </View>

        <View style={styles.bot}>
          <Text style={styles.link}>Mais informações</Text>
        </View>
      </View>
    </View>
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
    borderRadius: 8,
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
  link: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#666666',
  },
});
