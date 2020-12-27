import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import {
  pawOnboarding,
  donationOnboarding,
  calendarOnboarding,
  next,
} from '../styles/icons';

const Next = ({ ...props }) => (
  <RectButton title="Next" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Avançar</Text>
    <Image source={next} />
  </RectButton>
);

const Skip = ({ ...props }) => (
  <RectButton title="Skip" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Pular</Text>
  </RectButton>
);

const Done = ({ ...props }) => (
  <RectButton title="Done" {...props} style={styles.button}>
    <Text style={styles.buttonText}>Concluir</Text>
    <Image source={next} />
  </RectButton>
);

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? '#118696' : '#A3D0D7';

  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 3,
        borderRadius: 4,
        backgroundColor,
      }}
    />
  );
};

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <Onboarding
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('SignIn')}
      onDone={() => navigation.navigate('SignIn')}
      titleStyles={{
        width: 300,
        fontFamily: 'VarelaRound_400Regular',
        fontSize: 25,
        color: '#484848',
        marginBottom: 8,
        textAlign: 'left',
      }}
      subTitleStyles={{
        width: 310,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 18,
        color: '#9C98A6',
        textAlign: 'left',
      }}
      bottomBarColor={'#FFF'}
      pages={[
        {
          backgroundColor: '#FFF',
          image: <Image source={pawOnboarding} style={styles.image} />,
          title: 'Adote',
          subtitle:
            'Conheça nossos animais e aplique para o processo de adoção pelo APP.',
        },
        {
          backgroundColor: '#FFF',
          image: <Image source={donationOnboarding} style={styles.image} />,
          title: 'Contribua',
          subtitle:
            'Doe e nos ajude a manter nosso trabalho em prol do bem estar animal.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
    marginBottom: 60,
  },
  button: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#FF72A8',
    marginBottom: 4,
  },
});
