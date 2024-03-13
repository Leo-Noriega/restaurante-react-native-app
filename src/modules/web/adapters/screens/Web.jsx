import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import FlatListWeb from "./components/FlatListWeb";
import { Button } from "@rneui/base";
import Loading from '../../../../kernel/components/Loading'
import AxiosClient from "../../../../config/axios/axios-client";

export default function Web() {
  const [useRestaurants, setUseRestaurants] = useState([]);
  const [loading, setLoading] = useState(null);
  <Loading isShow={loading} title="Cargando datos..." />

  const getRestaurants = async () => {
    try {
      const response = await AxiosClient.get("/api/v1/restaurant/");
      const arrayRestaurants = response.data.map((item) => {
        return {
          id: item.id.toString(),
          title: item.title,
          description: item.description,
          rating: item.rating,
          image: item.image,
        }
      });
      setUseRestaurants(arrayRestaurants);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postRestaurant = async () => {
    try {
      const response = await AxiosClient.post("/api/v1/restaurant/", {
        title: "Restaurante 1",
        description: "Descripcion del restaurante 1",
        rating: 5,
        image: "https://www.gastroeconomy.com/wp-content/uploads/2012/02/Restaurant.jpg",
      });
      console.log(response);
    }
    catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  {/*
useEffect(() => {
    getRestaurants();
  }, []);
  */}
  return (
    <View style={styles.container}>
      {/* <Button onPress={getRestaurants}>Get Restaurantes</Button> */}
      <FlatList
        data={useRestaurants}
        renderItem={({ item }) => (
          <FlatListWeb
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button onPress={getRestaurants}>Get Restaurantes</Button>
      <Button onPress={postRestaurant}>Post Restaurante</Button>
      <Loading isShow={loading} title="Cargando restaurantes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
