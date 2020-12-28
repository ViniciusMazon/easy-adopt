import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

import Section from '../components/Section';
import DonationCard from '../components/DonationCard';

export default function Donation() {
  const [donationCampaigns, setDonationCampaigns] = useState([]);

  useFocusEffect(
    useCallback(() => {
      api.get('/donation-campaigns').then((response) => {
        setDonationCampaigns(response.data);
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Section
        title={'Contribua'}
        subtitle={`Sua contribuição nos ajuda a manter nosso trabalho em prol do bem estar animal`}
      />
      <ScrollView style={styles.campaigns}>
        {donationCampaigns.map((campaign) => {
          return <DonationCard key={String(campaign.id)} campaign={campaign} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 89,
    backgroundColor: '#fff',
  },
  campaigns: {
    marginTop: 38,
  },
});
