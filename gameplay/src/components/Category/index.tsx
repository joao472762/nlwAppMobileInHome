import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type categoryProps =  RectButtonProps & {
    hasCheckbox?: boolean
    title: string,
    icon: React.FC<SvgProps>
    checked: boolean
}

export function Category(
    {
        hasCheckbox = false,
        title,
        icon: Icon,
        checked,
        ...props
        
    }:categoryProps
){
    const {secondary50,secondary85,secondary40} = theme.colors
    return(
        <RectButton 
        {...props}
        style={styles.container} 
        
        >
            <LinearGradient
            colors={checked?[secondary85,secondary40]:[secondary50,secondary50]}
            style= {
                [styles.content, checked ?{opacity: 1}: {opacity: .4}]
            }
            >
               {
                   hasCheckbox && <View style={checked? styles.checked : styles.check} />
               }  
                <Icon
                width={48}
                height={48}
                />
                <Text style={styles.title}> 
                    {title}
                </Text>
            </LinearGradient>
        </RectButton>
    )
}