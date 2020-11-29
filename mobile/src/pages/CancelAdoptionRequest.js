import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../services/api';
import { size, heart, male, female } from '../styles/icons';
import TopBar from '../components/TopBar';

export default function CancelAdoptionRequest() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const request = params.request;

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

  async function handleCancelAdoptionRequest() {
    await api.delete(`/adoption-request/${request.id}`);
    navigation.navigate('Animals');
  }

  function navigateToSchedulePage() {
    navigation.navigate('Schedule', { request });
  }

  return (
    <View style={styles.container}>
      <TopBar />

      <Image source={{ uri: request.animal.avatar }} style={styles.avatar} />

      <Text style={styles.name}>{request.animal.name}</Text>

      <View style={styles.about}>
        <View style={styles.infoContainer}>
          <Image
            source={request.animal.gender === 'Macho' ? male : female}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>{request.animal.gender}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image source={heart} style={styles.infoIcon} />
          <Text style={styles.infoText}>{request.animal.age}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image source={size} style={styles.infoIcon} />
          <Text style={styles.infoText}>{request.animal.size}</Text>
        </View>
      </View>

      <View style={styles.status}>
        <View style={styles.statusHeader}>
          <Text style={styles.statusHeaderTitle}>Status: </Text>
          <Text style={[styles.statusHeaderStatus, { color: statusColor }]}>
            {request.status}
          </Text>
        </View>
        <View style={styles.statusBody}>
          <Text style={styles.statusBodyText}>
            {request.status === 'aprovado' &&
              'Seu pedido de adoção foi aprovado, favor agendar uma visita'}
            {request.status === 'novo' &&
              'Seu pedido de adoção está em analise'}
            {request.status === 'reprovado' &&
              'Infelizmente não podemos aceitar seu pedido de adoção no momento'}
            {request.status === 'cancelado' && 'Pedido de adoção cancelado'}
          </Text>
        </View>
      </View>

      {request.status === 'novo' || request.status === 'aprovado' ? (
        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={handleCancelAdoptionRequest}
        >
          <Text style={styles.buttonOutlineText}>
            Cancelar pedido de adoção
          </Text>
        </TouchableOpacity>
      ) : null}

      {request.status === 'aprovado' ? (
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToSchedulePage}
        >
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
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
    alignItems: 'center',
  },
  infoIcon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
  infoText: {
    color: '#666666',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  status: {
    width: '90%',
    height: 140,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderStyle: 'solid',
    borderRadius: 8,
    alignSelf: 'center',
  },
  statusHeader: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6F0',
  },
  statusHeaderTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#484848',
  },
  statusHeaderStatus: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  statusBody: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBodyText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    padding: 8,
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
    bottom: 100,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
  buttonOutline: {
    width: '90%',
    height: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FA5293',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buttonOutlineText: {
    color: '#FA5293',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
