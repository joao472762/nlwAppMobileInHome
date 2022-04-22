import React from "react";
import {NavigationContainer} from "@react-navigation/native"

import { AuthRoutes } from "./auth.routes";
import { Background } from "../components/background";


export function  Routes(){
    return(
        <NavigationContainer>
            <Background>
                <AuthRoutes/>
            </Background>
        </NavigationContainer>
    )
}