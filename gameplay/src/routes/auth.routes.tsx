import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import { Home } from "../screens/Home";
import { Signin } from "../screens/SignIn";
import { theme } from "../global/styles/theme";
import { AppointmentCreate} from "../screens/AppointmentCreate";
import { AppointmentDetail } from "../screens/AppointmentDetail";
import { Guilds } from "../screens/Guilds";

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
            
            <Screen
            name="AppointmentDetail"
            component={AppointmentDetail}/>
            
            <Screen
            name= "AppointmentCreate"
            component={AppointmentCreate}
            />

           
        </Navigator>
    );
}