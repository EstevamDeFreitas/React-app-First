import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/style/theme";
import logoSmall from "../../../assets/app-name-small.png";
import apple from "../../../assets/apple.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linha from "../../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import { ButtonPurple } from "../../components/ButtonPurple";

export function ForgotPassword() {


  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Esqueceu a senha? {"\n"}
        </Text>

        <Text style={styles.label}>
            Digite seu email para receber as instruções para redefinir sua senha
        </Text>

        <Text style={styles.label}>E-mail {"\n"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
      </View>

      <View style={styles.controlsbutons}>
        <ButtonPurple title="Recuperar senha" onPress={handleNavigate} />
      </View>
    </View>
  );
}