import React from "react";
import { View,Text } from "react-native";
import { Avatar } from "../avatar";
import { styles } from "./style";

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar imageUrl="https://github.com/joao472762.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.userName}>
                        Amanda
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
            
        </View>
    );
}