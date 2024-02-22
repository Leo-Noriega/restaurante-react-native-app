import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { Overlay } from "@rneui/base";

export default function Loading(props) {
  const { isShow, title } = props;
  return (
    <Overlay
      isVisible={isShow}
      windowsBackgroundColor="rgb(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#88c000" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 150,
    width: 250,
    backgroundColor: "#fff",
    borderColor: "#ef524a",
    borderWidth: 1.5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
});
