import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScheduleItem({
  weekday,
  date,
  period,
  id,
  active,
  setActive,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, active === id ? styles.borderActive : {}]}
      onPress={() => setActive(id)}
    >
      <Text style={styles.dayWeek}>{weekday}</Text>
      <View style={styles.row}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{period}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderStyle: 'solid',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    padding: 10,
  },
  borderActive: {
    borderColor: '#FA5293',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  dayWeek: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  text: {
    color: '#666666',
    fontFamily: 'Montserrat_400Regular',
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
    bottom: 39,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
