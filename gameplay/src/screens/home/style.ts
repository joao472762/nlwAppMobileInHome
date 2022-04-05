import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles  = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getStatusBarHeight() + 24, 
        marginBottom: 46,
    },
    headerTitle:{

    },
    headerSubtitle:{}
})