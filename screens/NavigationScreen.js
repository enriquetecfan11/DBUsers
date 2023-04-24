import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

import { getAuth } from "firebase/auth";

const Tab = createBottomTabNavigator();

const NavigationScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home"  options={{headerShown: false}} component={HomeScreen} />
      <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
    </Tab.Navigator>
  );
};


export default NavigationScreen;
