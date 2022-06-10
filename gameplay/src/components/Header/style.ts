import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import {getStatusBarHeight} from "react-native-iphone-x-helper"
export const styles =  StyleSheet.create({
    container:{
        paddingTop:  getStatusBarHeight(),
        height: 104,
        alignItems: 'flex-end',
        width: '100%',
        flexDirection:'row',
        paddingBottom: 18,
        
    },
    content:{
        paddingHorizontal:24,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title:{
    
        marginLeft: 0,
        flex: 1,
        textAlign: 'center',
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 20,
    },

})