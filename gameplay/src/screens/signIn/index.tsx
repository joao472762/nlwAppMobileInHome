import React  from "react";
import { Text, View,Image,} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import ilustration from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";

export function Signin(){
    const navegation = useNavigation()
    return(
        <View style={styles.container}>
            
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
                <ButtonIcon title="Entar com Discord"
                onPress={()=> navegation.navigate('Home')} />
            </View>
        </View>
    )
}