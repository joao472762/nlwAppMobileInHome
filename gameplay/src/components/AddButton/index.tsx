import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {RectButton,RectButtonProps} from "react-native-gesture-handler"
import { style } from "./style";

type AddButtonProps = RectButtonProps

export function AddButton({...res}:RectButtonProps){
    return(
        <RectButton
         style={style.container}
         {...res}
         >
            <MaterialCommunityIcons
            name="plus"
            size={30}
            color= {'#fff'}
            />
        </RectButton>
    )
}