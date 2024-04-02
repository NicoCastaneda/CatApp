import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import ProfileScreen from '../views/ProfileScreen';
import FavoritesScreen from '../views/FavoritesScreen';
import HistoryScreen from '../views/HistoryScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return(
     <NavigationContainer>{
        <Stack.Navigator
            initialRouteName='Home'
        >
         <Stack.Screen name="Home" component={HomeScreen} options={{title: "INICIO"}}/>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Favorites" component={FavoritesScreen} />
         <Stack.Screen name="History" component={HistoryScreen} />
          
        </Stack.Navigator>
    }</NavigationContainer>
  );
}