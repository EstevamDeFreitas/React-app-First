import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/style/theme";
import logoSmall from "../../../assets/app-name-small.png";
import emailConfirmado from "../../../assets/Email_Confirmado.png"
import apple from "../../../assets/apple.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linha from "../../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import { ButtonPurple } from "../../components/ButtonPurple";

export function ConfirmEmail() {


  const navigation = useNavigation<any>();

  const handleNavigateHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Confirme seu email {"\n"}
        </Text>

        <Image source={emailConfirmado} style={styles.imageLogo}></Image>

        <Text style={styles.label}>
            Enviamos as instruções em seu email
        </Text>
      </View>

      <View style={styles.controlsbutons}>
        <ButtonPurple title="Entrar" onPress={handleNavigateHome} />
      </View>
    </View>
  );
}