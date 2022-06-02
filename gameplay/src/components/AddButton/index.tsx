import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {RectButton,RectButtonProps} from "react-native-gesture-handler"
import { style } from "./style";
export function AddButton(){
    return(
        <RectButton style={style.container}>
            <MaterialCommunityIcons
            name="plus"
            size={30}
            color= {'#fff'}
            />
        </RectButton>
    )
}