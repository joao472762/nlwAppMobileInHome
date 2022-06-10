import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles  = StyleSheet.create({
    container:{
        flex: 1
    },
    content:{
        marginTop: 42,
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: getStatusBarHeight() + 26, 
        marginBottom: 46,
    },
    matches:{
        marginTop: 24,
        marginLeft: 24,
       
    },
    headerTitle:{

    },
    headerSubtitle:{}
})