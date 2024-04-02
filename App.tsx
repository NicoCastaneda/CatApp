import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/views/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/routes/AppNavigation';
  import { AuthProvider } from './src/context/AuthContext';

export default function App() {

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}