import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  const enviarFormulario = () => {
    console.log(nome);
  };

  return (
    <View style={styles.container}>
      <Text>Escrevi e sai correndo...</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Digite o seu nome"
        onChangeText={texto => setNome(texto)}
        value={nome}
      />
      <Button title="Enviar" onPress={enviarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
