import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

export function App2() {
  const [nome, setNome] = useState('');

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('Start');
  }

  const enviarFormulario = () => {
    console.log(nome);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['#B399C2', '#420066']}
    >
      <View style={styles.container}>
        <Image
          source={require('../../../assets/LogoSmall.png')}
          style={styles.imageLogo}
          resizeMode="stretch" />
        <Text style={styles.title}>
          Marketplace  {'\n'} Inteligente
          para você  {'\n'}
        </Text>
        <Image
          source={require('../../../assets/Ilustration.png')}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Sua solução para vender seus produtos {'\n'}
          </Text>
        </View>

        
          <RectButton onPress={handleNavigate} >
            <Text style={styles.title}>
              Voltar
            </Text>
          </RectButton>
        
      </View>

    </LinearGradient>
  );
}


