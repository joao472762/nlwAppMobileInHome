import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
 
    },
    content:{
        flex: 1
    },
    header:{
     
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },
    subTitle:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    playersInfo:{
        alignItems: 'center',
        marginTop: 8, 
        flexDirection: 'row',
        justifyContent: 'space-between'
      
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    dateInfo:{
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    date:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.heading,
        marginLeft: 12
    },
    status:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginLeft: 7
    
    }
})