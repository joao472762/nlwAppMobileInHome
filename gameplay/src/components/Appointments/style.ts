import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 24,
        alignItems: 'center'
    

    },
    content:{
        width: '80%',
    },
    header:{
     
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 24,
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
        marginTop: 8, 
        flexDirection: 'row',
        justifyContent: 'space-between'
      
    },
    calendar:{
        flexDirection: 'row',
        
    },
    date:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.heading,
        marginLeft: 12
    }
})