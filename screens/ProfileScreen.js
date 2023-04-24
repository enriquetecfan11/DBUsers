import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import { getAuth } from "firebase/auth";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Pantalla de Perfil</Text>
    <Text>Hola {getAuth().currentUser.email}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
