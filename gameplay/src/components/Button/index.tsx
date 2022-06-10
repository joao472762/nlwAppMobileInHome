import React from "react";
import { RectButton, RectButtonProperties} from "react-native-gesture-handler";

import { styles } from "./style";
import {Text} from "react-native";


type buttonProps = RectButtonProperties &{
    title:  string
}
 
export function Button({title,...res}:buttonProps){
    return(
    
        <RectButton
        style={styles.content}
        {...res}
        >
            <Text style={styles.title}>
                    {title}
            </Text>
        </RectButton>
        
    );
}