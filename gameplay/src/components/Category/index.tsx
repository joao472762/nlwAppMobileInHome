import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type categoryProps =  RectButtonProps & {

    title: string,
    icon: React.FC<SvgProps>
    checked: boolean
}

export function Category(
    {
        
        title,
        icon: Icon,
        checked = false,
        ...props
        
    }:categoryProps
){
    const {secondary50,secondary70} = theme.colors
    return(
        <RectButton 
        {...props}
        style={styles.container} 
        
        >
            <LinearGradient
            colors={[secondary50,secondary70]}
            style= {
                [styles.content,checked ?{opacity: 1}: {opacity: .4}]
            }
            >
                <View style={checked? styles.checked : styles.check} >

                </View>
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