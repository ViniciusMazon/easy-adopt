import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { femaleWhite, maleWhite } from '../styles/icons';

export default function AnimalCardFeed({ animal }) {
  const navigation = useNavigation();

  function navigateToAdopt() {
    navigation.navigate('Adopt', { animal: animal });
  }

  return (
    <View style={styles.animalCard}>
      <Image source={{ uri: animal.image1_url }} style={styles.avatar} />
      <View style={styles.data}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{animal.name}</Text>
          <Image
            source={animal.gender === 'Macho' ? maleWhite : femaleWhite}
            style={styles.nameIcon}
          />
        </View>
        <RectButton onPress={navigateToAdopt}>
          <Text style={styles.more}>Mais informações</Text>
        </RectButton>
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameIcon: {
    marginLeft: 8,
    height: 18,
    width: 18,
  },
  nameText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
  },
  more: {
    color: '#FFF',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
});
