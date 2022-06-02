import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    user:{
        flexDirection: 'row',
        marginBottom: 3


    },
    greeting:{
        fontSize: 24,
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        marginRight: 6 
    },
    userName:{
        fontSize: 24,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700
    },
    message:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        lineHeight: 17

    }
})