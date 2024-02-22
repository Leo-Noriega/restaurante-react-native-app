import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon, Image } from "@rneui/base";
import Logo from "../../../../../../assets/img/logo.png";
import { isEmpty } from "lodash";
import Loading from "../../../../../kernel/components/Loading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  // Falta el getAuth
  const auth = getAuth();
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [showErrorMessage, setShowErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowErrorMessage("");
      setLoading(true);
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("UserLogged");
      } catch (error) {
        setShowErrorMessage("Usuario o contraseña incorrecta");
      } finally {
        setLoading(false);
      }
    } else {
      setShowErrorMessage("Campos obligatorios");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
        containerStyle={{ marginBottom: 20 }} //Esta linea la añadi yo por que me dio TOC
      />
      <Input
        placeholder="noriega@utez.edu.mx"
        // onChangeText={element => setEmail(element)}
        onChange={({ nativeEvent: { text } }) => setEmail(text)}
        label="Correo electrónico *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        keyboardType="email-address"
        rightIcon={<Icon type="material-community" name="at" color="#EB5249" />}
        errorMessage={showErrorMessage}
      />
      <Input
        placeholder="*********"
        // onChangeText={element => setPassword(element)}
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        label="Contraseña *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type={"material-community"}
            name={showPassword ? "eye" : "eye-off"}
            color="#EB5249"
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
        errorMessage={showErrorMessage}
      />
      <Button
        title="Iniciar sesión"
        onPress={login}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
      />
      <Loading isShow={loading} title={"Iniciando sesión"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    color: "#88BF40",
    fontSize: 16,
  },
  btnContainer: {
    width: "80%",
  },
  btnStyle: {
    backgroundColor: "#EB5149",
  },
});
