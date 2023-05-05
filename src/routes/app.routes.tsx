import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from '../screens/start';
import { Home } from '../screens/home';
import { Reset } from '../screens/reset';
import { Signin } from '../screens/signin';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}