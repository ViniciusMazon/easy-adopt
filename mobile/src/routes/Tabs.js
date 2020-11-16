import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  paw,
  pawOutline,
  donation,
  donationOutline,
  schedule,
  scheduleOutline,
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
          width: 24,
          height: 24,
        },
        inactiveTintColor: '#FFF',
        activeTintColor: '#FFF',
        style: {
          backgroundColor: '#FA5293',
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
              return <Image source={paw} style={styles.icon} />;
            } else {
              return <Image source={pawOutline} style={styles.icon} />;
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
              return <Image source={donation} style={styles.icon} />;
            } else {
              return <Image source={donationOutline} style={styles.icon} />;
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
              return <Image source={schedule} style={styles.icon} />;
            } else {
              return <Image source={scheduleOutline} style={styles.icon} />;
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
  icon: {
    width: 27,
    height: 27,
  },
  user: {
    width: 45,
    height: 45,
    borderRadius: 21.5,
  },
});
