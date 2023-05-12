import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ButtonWhite } from '../../components/ButtonWhite';

export function Signin() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('Home');
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['#B399C2', '#420066']}
    >
      <Image
          source={require('../../../assets/LogoSmall.png')}
          style={styles.imageLogo}
          resizeMode="stretch" />
        <Text style={styles.title}>
          Marketplace  {'\n'} Inteligente
          para você  {'\n'}
        </Text>
        <Text style={styles.title}>
          Tela Signin
        </Text>
      <View style={styles.container}>
      <ButtonWhite title="Voltar" onPress={handleNavigate} />
      </View>

    </LinearGradient>
  );
}