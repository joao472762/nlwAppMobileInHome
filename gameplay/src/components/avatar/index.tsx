import {  Image } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

interface avatarProps {
    imageUrl: string
}

export function Avatar({imageUrl}:avatarProps){
    const {secondary50,secondary70} = theme.colors
    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary50,secondary70]}
        >
            <Image 
            source={{uri: imageUrl}}
            style={styles.avatar}
            />


        </LinearGradient>
        
    )
}