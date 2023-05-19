import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from '../screens/start';
import { Home } from '../screens/home';
import { Reset } from '../screens/reset';
import { SignIn } from '../screens/signin';
import { ForgotPassword } from '../screens/forgotpassword';
import { ConfirmEmail } from '../screens/confirmemail';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
    </Stack.Navigator>
  );
}