import React from "react";
import { styles } from "./style";
import { Image, View, Text} from "react-native";
import avatar from '../../../assets/discord.png'

export function Home(){
    return(
        <View>
            <View style={styles.header}>
                <Image source={avatar}/>
                <Text>
                    Pedro
                </Text>
            </View>
        </View>
    );

}