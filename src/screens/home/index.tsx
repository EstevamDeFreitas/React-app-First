import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { ButtonWhite } from '../../components/ButtonWhite';

export function Home() {
  const [nome, setNome] = useState('');

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('Start');
  }

  const handleNavigateReset = () => {
    navigation.navigate('Reset');
  }

  const handleNavigateSignin = () => {
    navigation.navigate('Signin');
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

        <ButtonWhite title="Signin" onPress={handleNavigateSignin} />
        <ButtonWhite title="Reset" onPress={handleNavigateReset} />
        <ButtonWhite title="Voltar" onPress={handleNavigate} />

      </View>

    </LinearGradient>
  );
}


