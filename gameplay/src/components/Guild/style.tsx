import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";



export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
    },
    description:{},
    title: {
        color: theme.colors.heading,
        fontSize: 18,
        fontFamily: theme.fonts.title700
    },
    subTitle:{
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.text400
    }
    
})