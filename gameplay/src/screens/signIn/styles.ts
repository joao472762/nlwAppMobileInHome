import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    
    container :{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image:{
        height: 360
    },
    content: {
        paddingHorizontal: 30,
        marginTop: -45,
        paddingVertical: 10,
    },
    title: {
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        
     
    },
    subtitle:{
       
        textAlign: 'center',
        color: 'white',
        lineHeight: 25,
        marginTop: -25
        
    }
})