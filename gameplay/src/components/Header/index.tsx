import React ,{ReactNode} from "react"
import { Text, View} from "react-native"
import { styles } from "./style"
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { BorderlessButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

type headerProps = {
    title: string
    action?: ReactNode
}

export function Header({title,action}: headerProps){
    const navegation = useNavigation()
    const {secondary100,secondary40,heading} = theme.colors
    function handleGoBack(){
        navegation.goBack()
    }
    return(
        <LinearGradient
    
        colors={[secondary100,secondary40]}
         style={styles.container}>
             <View style={styles.content}>
                 <BorderlessButton
                 onPress={handleGoBack}
                 >

                    <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                    />
                 </BorderlessButton>

                <Text style={styles.title}>
                    {title}
                </Text>
                {
                    action
                    ? 
                    <View>
                      {action}
                    </View>
                    : 
                    <View style={{width: 24}}/>
                }
             </View>
        </LinearGradient>
    )
}