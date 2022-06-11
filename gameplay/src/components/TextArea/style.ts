import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles  = StyleSheet.create({
    container:{
        width: "100%",
        
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title:{
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
      },
      subTitle:{
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13
      },
    input:{
        height: 95,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 13,
        marginRight: 4,
        textAlignVertical: 'top',
        padding: 16,
    }
})