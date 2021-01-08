import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import TopBar from '../../components/TopBar';
import PaginationIndicator from '../../components/PaginationIndicator';
import Section from '../../components/Section';

export default function AdoptionTerm() {
  const route = useRoute();
  const params = route.params;
  const animal = params.animal;
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  function navigateToAboutYourResidence() {
    if (checked) {
      navigation.navigate('AboutYourResidence', { animal });
    }
  }

  return (
    <View style={styles.container}>
      <TopBar />

      <PaginationIndicator pages={3} active={1} />

      <Section
        title={'Termo de adoção'}
        subtitle={`Por favor, leia atentamente o termo de adoção.`}
      />

      <ScrollView style={styles.termContainer}>
        <Text style={styles.termText}>
          Ao adotar este animal declaro-me apto para assumir a guarda e a
          responsabilidade sobre o mesmo, eximindo o doador de toda e qualquer
          responsabilidade por quaisquer atos praticados pelo e com o animal a
          partir desta data. Declaro ainda, estar ciente de todos os cuidados
          que este animal exige no que se refere à sua guarda e manutenção, além
          de conhecer todos os riscos inerentes à espécie com o convívio com
          humanos, estando apto a guardá-lo e vigiá-lo, comprometendo-me a
          proporcionar-lhe boas condições de alojamento, alimentação, higiene,
          conforto térmico, assim como espaço físico que possibilite ao animal
          se exercitar; e, ainda, ambiente que lhe proporcione afeto e distância
          de qualquer risco, crueldade, incluindo isolamento e abandono.
          Responsabilizo-me por preservar a saúde e integridade do animal e a
          submetê-lo aos cuidados médico-veterinários sempre que necessário para
          este fim. Comprometo-me a não transmitir a posse deste animal a outrem
          sem o conhecimento do doador, bem como a informá-lo de qualquer
          situação de risco ou doença que o animal venha a se encontrar.
          Comprometo-me, também, a permitir o acesso do doador, e a quem com ele
          se encontrar, ao local de residência do animal, para averiguação de
          suas condições. Tenho conhecimento de que, caso seja constatado, por
          parte do doador ou qualquer pessoa ou órgão, que o animal se encontra
          em situação inadequada para seu bem-estar, perderei a sua guarda, sem
          prejuízo das penalidades legais, administrativas, cíveis e criminais.
          Comprometo-me a cumprir toda a legislação vigente, municipal, estadual
          e federal, relativa à posse de animais. Declaro-me, assim, ciente das
          normas acima, as quais aceito, concordando com o presente Termo de
          Adoção Responsável, assumindo plenamente os deveres que dele constam,
          bem como outros relacionados à posse responsável e que não estejam
          incluídos neste Termo.
        </Text>
      </ScrollView>

      <View style={styles.checkboxGroup}>
        <Checkbox
          color={'#FA5293'}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text
          style={styles.checkboxLabel}
          onPress={() => {
            setChecked(!checked);
          }}
        >
          Li e aceito o Termo de Adoção
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToAboutYourResidence}
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
  termContainer: {
    width: '90%',
    maxHeight: 360,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 13,
    marginTop: 13,
    marginBottom: 20,
  },
  termText: {
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 24,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  checkboxLabel: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#666666',
    fontSize: 12,
  },
  button: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 26,
  },
  buttonText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
