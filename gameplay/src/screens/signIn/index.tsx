import React  from "react";
import { Text, View,Image, StatusBar} from "react-native";


import ilustration from "../../../assets/illustration.png"
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from "./styles";
export function Signin(){
    return(
        <View style={styles.container}>
            <StatusBar
            barStyle={"light-content"}
            backgroundColor = 'transparent'
            translucent
            />
            <Image 
            source={ilustration}
            style={styles.image}
            resizeMode = 'stretch'
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize {'\n'}
                    sua jogatinas{'\n'}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos   
                </Text>
                <ButtonIcon title="Entar com Discord" activeOpacity={.7}/>
            </View>
        </View>
    )
}