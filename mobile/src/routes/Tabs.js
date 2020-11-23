import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  paw,
  pawOutline,
  card,
  cardOutline,
  calendar,
  calendarOutline,
} from '../styles/icons';
const { Navigator, Screen } = createBottomTabNavigator();

import user from '../assets/user.jpeg';

import Animals from '../pages/Animals';
import Donation from '../pages/Donation';
import Schedule from '../pages/Schedule';
import User from '../pages/User';

function Tabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        style: {
          backgroundColor: '#FFF0F6',
        },
      }}
    >
      <Screen
        name="Animals"
        component={Animals}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Image source={paw} />;
            } else {
              return <Image source={pawOutline} />;
            }
          },
        }}
      />
      <Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Image source={card} style={styles.icon} />;
            } else {
              return <Image source={cardOutline} />;
            }
          },
        }}
      />
      <Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Image source={calendar} />;
            } else {
              return <Image source={calendarOutline} />;
            }
          },
        }}
      />
      <Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return <Image source={user} style={styles.user} />;
          },
        }}
      />
    </Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  user: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
