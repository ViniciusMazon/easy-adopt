import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { femaleOutline, maleOutline } from '../styles/icons';

export default function AnimalCardFeed({ id, avatar, name, gender }) {
  return (
    <View style={styles.animalCard}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.data}>
        <Text style={styles.name}>
          {name}
          <Image source={gender === 'Macho' ? maleOutline : femaleOutline} />
        </Text>
        <Text style={styles.more}>Mais informações</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animalCard: {
    width: '100%',
    height: 360,
  },
  avatar: {
    width: '100%',
    height: 360,
    resizeMode: 'cover',
  },
  data: {
    height: 50,
    backgroundColor: 'rgba(34, 34, 34, 0.63)',
    marginTop: -54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    color: '#FFF',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 18,
  },
  more: {
    color: '#FFF',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
});
