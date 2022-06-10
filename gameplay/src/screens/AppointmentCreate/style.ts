import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    
    },
    label:{  
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        
    },
    form:{
        paddingHorizontal: 24,
    },
    select:{
        marginTop: 32,
      
        width: '100%'
    },
    selectBody:{
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
    },
 
    image:{
        width: 64,
        height:68,
        borderLeftWidth: .2,
        borderTopWidth: 0,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
    },
    chevron:{
        marginRight: 34,
    },
    fields:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 28,
    },
    column:{
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    divider:{
        marginRight: 4,
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,

    },
    textAreaContent:{
        marginTop: 28,
    },
    footer:{
        marginTop: 30,
        paddingHorizontal: 24,
        marginBottom: 30
        
    }
})