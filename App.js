import React from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import Login from "./src/screens/login/login";
import Home from "./src/screens/home/home";
import Debito from "./src/screens/debito/debito";


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Debito" component={Debito} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};