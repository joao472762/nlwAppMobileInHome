import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import { Home } from "../screens/home";
import { Signin } from "../screens/signIn";

const {Navigator,Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        >
            <Screen
            name="SignIn"
            component={Signin}
            />
            <Screen
            name="home"
            component={Home}
            />
         
                
        </Navigator>

        
    );
}