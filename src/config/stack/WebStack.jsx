import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Web from "../../modules/web/adapters/screens/Web";

const Stack = createStackNavigator();
export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Web" component={Web} options={{ title: "Web" }} />
    </Stack.Navigator>
  );
}
