import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Image, Button } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";
// import {useNavigation} from "@react-navigation/native"; esto es si hay mas de un componente

export default function UserGuest({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        containerStyle={styles.logoContainer}
        placeholderContent={<ActivityIndicator />}
      />
      <Text style={styles.title}>
        ¡Descubre tu próximo restaurante favorito con nuestra aplicación! 🍽✨
      </Text>
      <Text style={styles.description}>
        En nuestra plataforma, explorarás una variedad increíble de restaurantes
        para cualquier ocasión, gusto o antojo. ¿Amante de la comida italiana,
        fanático de la comida rápida o en busca de la experiencia gourmet más
        refinada? Lo tenemos todo cubierto.
      </Text>
      <Button
        title={"Inicia sesión"}
        type={"clear"}
        containerStyle={{ padding: 16 }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title={"Crea tu cuenta"}
        type={"clear"}
        containerStyle={{ padding: 16 }}
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 15,
    textAlign: "center",
  },
  description: {
    marginHorizontal: 32,
  },
});
