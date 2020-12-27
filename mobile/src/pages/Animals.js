import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

import Section from '../components/Section';
import AnimalAdoptionRequest from '../components/AnimalAdoptionRequest';
import AnimalCardFeed from '../components/AnimalCardFeed';

export default function Animals() {
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [animals, setAnimals] = useState([]);

  // async function getTutorId() {
  //   const data = await AsyncStorage.getItem('@EasyAdopt:user');
  //   const tutor = JSON.parse(data);
  //   return tutor.id;
  // }

  // async function getAdoptionRequests() {
  //   const tutorID = await getTutorId();
  //   const response = await api.get(`/adoption-request?tutor_id=${tutorID}`);
  //   setAdoptionRequests(response.data);
  // }

  // async function getAnimals() {
  //   const response = await api.get('/animals?status=disponível');
  //   setAnimals(response.data);
  // }

  // useEffect(() => {
  //   getAdoptionRequests();
  //   getAnimals();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      const getTutorId = async () => {
        const data = await AsyncStorage.getItem('@EasyAdopt:user');
        const tutor = JSON.parse(data);
        return tutor.id;
      };

      const getAdoptionRequests = async () => {
        const tutorID = await getTutorId();
        const response = await api.get(`/adoption-request?tutor_id=${tutorID}`);
        setAdoptionRequests(response.data);
      };

      const getAnimals = async () => {
        const response = await api.get('/animals?status=disponível');
        setAnimals(response.data);
      };

      getAdoptionRequests();
      getAnimals();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Section
        title={'Pedidos de adoção'}
        subtitle={`Você possui ${adoptionRequests.length} pedidos de adoção`}
      />
      <View style={styles.animalAdoptionRequestContainer}>
        {adoptionRequests.length === 0 ? (
          <View style={styles.notFoundWarning}>
            <Text style={styles.notFoundWarningText}>
              Adote um dos animais abaixo 🐶
            </Text>
          </View>
        ) : (
          adoptionRequests.map((adoptionRequest) => {
            return (
              <AnimalAdoptionRequest
                key={String(adoptionRequest.id)}
                request={adoptionRequest}
              />
            );
          })
        )}
      </View>

      <Section
        title={'Adote um animal'}
        subtitle={
          'Arraste para baixo e veja todos animais disponíveis para adoção.'
        }
      />
      <View style={styles.animalCardContainer}>
        {animals.map((animal) => {
          return <AnimalCardFeed key={String(animal.id)} animal={animal} />;
        })}

        {animals.length === 0 && (
          <View style={styles.notFoundWarning}>
            <Text style={styles.notFoundWarningText}>
              No momento não temos nenhum animal disponível para adoção 🐱
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 89,
    backgroundColor: '#fff',
  },
  animalAdoptionRequestContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 29,
    marginBottom: 35,
  },
  animalCardContainer: {
    width: '100%',
    marginBottom: 85,
    marginTop: 51,
    alignItems: 'center',
  },
  notFoundWarning: {
    height: 113,
    width: '90%',
    borderWidth: 2,
    borderColor: '#FFD6E6',
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundWarningText: {
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    lineHeight: 20,
  },
});
