import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";



const HomeScreen = () => {

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const userId = getAuth().currentUser.uid;
  const db = getDatabase();

  const handleSubmit = () => {
    const newCarRef = ref(db, 'users/' + userId + '/cars');
    set(newCarRef, {
      make: make,
      model: model,
      year: year,
    });
  };



  return (
    <View style={styles.container}>
    <Text style={styles.title}>Para empezar añade tu coche:</Text>
    <TextInput
      style={styles.input}
      placeholder="Marca"
      value={make}
      onChangeText={setMake}
    />
    <TextInput
      style={styles.input}
      placeholder="Modelo"
      value={model}
      onChangeText={setModel}
    />
    <TextInput
      style={styles.input}
      placeholder="Año"
      value={year}
      onChangeText={setYear}
    />
    <Button title="Añadir coche" onPress={handleSubmit} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
export default HomeScreen;
