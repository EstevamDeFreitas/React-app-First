import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { App1 } from '../screens/start';
import { App2 } from '../screens/home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={App1} />      
      <Stack.Screen name="Home" component={App2} />
    </Stack.Navigator>
  );
}