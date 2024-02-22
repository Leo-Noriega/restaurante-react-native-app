import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <Text>Restaurants</Text>
      <Text>
        <Icon name="home" type="font-awesome" color="red" size={22} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
});
