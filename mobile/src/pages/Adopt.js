import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import {
  size,
  pawOutlineGray,
  maleOutlineGray,
  femaleOutlineGray,
} from '../styles/icons';
import TopBar from '../components/TopBar';
import Swiper from '../components/Swiper';

export default function Adopt() {
  const route = useRoute();
  const params = route.params;
  const animal = params.animal;

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Swiper
        images={[animal.image1_url, animal.image2_url, animal.image3_url]}
      />
      <Text style={styles.name}>{animal.name}</Text>

      <View style={styles.about}>
        <View style={styles.infoContainer}>
          <Image source={maleOutlineGray} style={styles.infoIcon} />
          <Text style={styles.infoText}>{animal.gender}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image source={pawOutlineGray} style={styles.infoIcon} />
          <Text style={styles.infoText}>{animal.age}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image source={size} style={styles.infoIcon} />
          <Text style={styles.infoText}>{animal.size}</Text>
        </View>
      </View>

      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>Adotar</Text>
      </RectButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },

  name: {
    color: '#484848',
    fontFamily: 'VarelaRound_400Regular',
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  about: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 48,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoIcon: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
  infoText: {
    color: '#9C98A6',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 26,
  },
  buttonText: {
    color: '#FFF',
  },
});
