import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AirbnbRating, Image } from "@rneui/base";//falta poner una imagen nueva

export default function FlatListWeb(props) {
  const { image, title, description, rating } = props;
  return (
    <View style={styles.listWeb}>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{title}</Text>
          <AirbnbRating
            count={5}
            isDisabled={true}
            defaultRating={rating}
            size={16}
            showRating={false}
          />
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listWeb: {
    flex: 1,
    flexDirection: "row",
    // create a shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 8,
  },
  image: {
    width: 124,
    height: 124,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
});
