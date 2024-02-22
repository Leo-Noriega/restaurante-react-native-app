import * as react from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import LoginStack from "../stack/LoginStack"
import FavoriteStack from "../stack/FavoritesStack";
import RestaurantsStack from "../stack/RestaurantsStack";
import {Icon} from "@rneui/base"

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    const {iconName, iconType} = getIconName(route.name, focused);
                    // Retornar un Icon de React Native Elements
                    return <Icon name={iconName} type={iconType} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#9e3cff',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}>
                <Tab.Screen
                    name="RestaurantsStack"
                    component={RestaurantsStack}
                    options={{title: 'Restaurantes'}}
                />
                <Tab.Screen
                    name="Favoritestack"
                    component={FavoriteStack}
                    options={{title: 'Favoritos'}}
                />
                <Tab.Screen
                    name="LoginStack"
                    component={LoginStack}
                    options={{title: 'Cuenta'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
        ;
}

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';

    switch (routeName) {
        case 'RestaurantsStack':
            iconName = focused ? 'home-circle' : 'home-circle-outline';
            break;
        case 'Favoritestack':
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
            break;
        case 'LoginStack':
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            break;
    }

    return {iconName, iconType};
};