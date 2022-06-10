import React from "react";
import { TextInputProps, View,TextInput } from "react-native";
import { styles } from "./style";

export function SmallInput({...props}: TextInputProps){
    return(
        <TextInput
        keyboardType="numeric"
        style={styles.container}
        {...props}
        />
    );
}