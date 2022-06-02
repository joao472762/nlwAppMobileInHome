import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import { Home } from "../screens/home";
import { Signin } from "../screens/signIn";
import { theme } from "../global/styles/theme";

const {Navigator,Screen} = createStackNavigator();

export function AuthRoutes(){
    const {secondary90} = theme.colors


    return(

        <Navigator
        
        screenOptions={{
            headerShown: false,
            cardStyle:{backgroundColor:secondary90}
        }}
        >
            <Screen
            name="Sigin"
            component={Signin}/>

            <Screen
            name="Home"
            component={Home}/>
        
        </Navigator>
    );
}