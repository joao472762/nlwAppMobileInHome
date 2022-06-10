import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";



export const styles = StyleSheet.create({
    content: {
        width:'99%',
        height: 56,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
       
        marginBottom: 30
        
  
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        fontFamily: theme.fonts.text500 
    },
    
})