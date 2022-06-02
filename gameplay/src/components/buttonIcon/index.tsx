import React from "react";
import {  View, Image,Text} from "react-native";
import dicordIcon from "../../assets/discord.png"
import { RectButton, RectButtonProperties} from "react-native-gesture-handler";
import { styles } from "./style";


type buttonProps = RectButtonProperties &{
    title:  string
}
 
export function ButtonIcon({title,...res}:buttonProps){
    return(
    
        <RectButton
        style={styles.content}
        {...res}
        >
            <View style={styles.iconWrapper}>
                <Image source={dicordIcon}/>
                
            </View>
            <Text style={styles.title}>
                    {title}
            </Text>
        </RectButton>
        
    );
}