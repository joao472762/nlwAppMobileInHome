import React from "react";
import { styles } from "./style";
import { Image, View, Text, StyleSheet} from "react-native";
import avatar from '../../../assets/discord.png'
import { theme } from "../../global/styles/theme";
import { Profile } from "../../components/Profile";

export function Home(){
    return(
        <View>
            <View style={styles.header}>
                <Profile/>
            </View>
        </View>
    );

}
const LocalStyles = StyleSheet.create({
    Title:{
        color: 'white'
    }
})