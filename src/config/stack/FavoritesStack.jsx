import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Favorite  from "../../modules/favorites/adapters/screens/Favorite"

const Stack = createStackNavigator();

export default function FavoriteStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={{title: "Favoritos"}}
            />
        </Stack.Navigator>
    )
}