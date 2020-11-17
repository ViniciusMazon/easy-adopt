import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { maleOutlineGray, femaleOutlineGray } from '../styles/icons';

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
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.data}>
        <View style={styles.status}>
          <View style={[styles.indicator, { backgroundColor: statusColor }]} />
          <Text style={styles.text}>{status}</Text>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.gender}>
            <Image
              source={gender === 'Macho' ? maleOutlineGray : femaleOutlineGray}
            />
            {gender}
          </Text>
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
    width: 90,
    height: 113,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  data: {
    width: 220,
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
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  text: {
    marginLeft: 8,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  name: {
    fontFamily: ' Montserrat_500Medium',
    fontSize: 18,
    color: '#484848',
  },
  gender: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#9C98A6',
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
