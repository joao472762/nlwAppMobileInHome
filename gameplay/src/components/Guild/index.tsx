import React from "react";
import {Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native";
import {Feather} from '@expo/vector-icons'
import { GuildIcon } from "../GuildIcon";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";

 
export type GuildProps = {
    id: string
    name: string,
    icon?: string | null
    owner: boolean
}
type Props = TouchableOpacityProps &{
    data: GuildProps
}
 
export function Guild({data,...res}: Props){
    return(
    
        <TouchableOpacity
        style={styles.container}
        activeOpacity={.7}
        {...res}
        >
             <GuildIcon/>

            <View style={styles.content}>
                <View style={styles.description}>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.subTitle}>
                        {data.owner ? 'Administrador': 'Convidado'}
                    </Text>
                </View>
            </View>
            
            <Feather
            name="chevron-right"
            size={18}
            color={theme.colors.heading}
            />
        </TouchableOpacity>
        
    );
}