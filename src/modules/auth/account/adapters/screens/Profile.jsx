import { StyleSheet, View } from "react-native";
import { getAuth } from "firebase/auth";
import React from "react";
import { signOut } from "firebase/auth";
import { Button } from "@rneui/base";

export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("UserLogged");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Cerrar sesión"
        onPress={logout}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
      />
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
  btnContainer: {
    width: "80%",
  },
  btnStyle: {
    backgroundColor: "#EB5149",
    borderRadius: 10
  },
});
