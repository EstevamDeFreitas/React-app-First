import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Routes } from './src/routes';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [nome, setNome] = useState('');

  const enviarFormulario = () => {
    console.log(nome);
  };

  return (
    <>
      <StatusBar hidden />
      <Routes />
    </>
  );
}
