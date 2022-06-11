import React, { useContext }  from "react";
import {
     Text,
     View,
     Image,
     Alert,
} from "react-native";

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import ilustration from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";


export function Signin(){

     
    const {user,signIn} = useAuth()

    async function handleSignIn(){
        try {
            signIn()
        } catch (error) {
            Alert.alert('deu ruim')
        }
    }
   

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
                onPress={handleSignIn} />
            </View>
        </View>
    )
}