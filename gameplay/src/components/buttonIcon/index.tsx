import React from "react";
import { TouchableOpacity, View, Image,Text, TouchableOpacityProps } from "react-native";
import dicordIcon from "../../../assets/discord.png"
import { styles } from "./style";


type buttonProps = TouchableOpacityProps &{
    title:  string
}

export function ButtonIcon({title,...res}:buttonProps){
    return(
    
        <TouchableOpacity 
        style={styles.content}
        {...res}
        >
            <View style={styles.iconWrapper}>
                <Image source={dicordIcon}/>
                
            </View>
            <Text style={styles.title}>
                    {title}
            </Text>
        </TouchableOpacity>
        
    );
}