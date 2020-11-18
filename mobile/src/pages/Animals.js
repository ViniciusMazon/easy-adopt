import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

import Section from '../components/Section';
import AnimalAdoptionRequest from '../components/AnimalAdoptionRequest';
import AnimalCardFeed from '../components/AnimalCardFeed';

export default function Animals() {
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [animals, setAnimals] = useState([]);

  async function getTutorId() {
    const data = await AsyncStorage.getItem('@easyAdopt_user');
    const tutor = JSON.parse(data);
    return tutor.id;
  }

  async function getAdoptionRequests() {
    const tutorID = await getTutorId();
    const response = await api.get(`/adoption-request?tutor_id=${tutorID}`);
    setAdoptionRequests(response.data);
  }

  async function getAnimals() {
    const response = await api.get('/animals?status=disponível');
    setAnimals(response.data);
  }

  useEffect(() => {
    getAdoptionRequests();
    getAnimals();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Section
        title={'Pedidos de adoção'}
        subtitle={`Você possui ${adoptionRequests.length} pedidos de adoção`}
      />
      <View style={styles.animalAdoptionRequestContainer}>
        {adoptionRequests.map((adoptionRequest) => {
          return (
            <AnimalAdoptionRequest
              key={String(adoptionRequest.id)}
              id={adoptionRequest.id}
              avatar={adoptionRequest.animal.avatar}
              status={adoptionRequest.status}
              name={adoptionRequest.animal.name}
              gender={adoptionRequest.animal.gender}
            />
          );
        })}
      </View>

      <Section
        title={'Adote um animal'}
        subtitle={
          'Arraste para baixo e veja todos animais disponíveis para adoção.'
        }
      />
      <View style={styles.animalCardContainer}>
        {animals.map((animal) => {
          return (
            <AnimalCardFeed
              key={String(animal.id)}
              id={animal.id}
              avatar={animal.image1_url}
              name={animal.name}
              gender={animal.gender}
            />
          );
        })}
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
  },
});
