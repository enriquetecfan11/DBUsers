import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen'; // Importa la pantalla de inicio

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD00zLv5U93MzDnYjEwLdFXYFUIhUzkxj8",
  authDomain: "yourwebcsv.firebaseapp.com",
  projectId: "yourwebcsv",
  storageBucket: "yourwebcsv.appspot.com",
  messagingSenderId: "153557946783",
  appId: "1:153557946783:web:f9ed99b7e724d2d13aadaa",
  measurementId: "G-Y1B5YX3FMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Pantalla de inicio' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
