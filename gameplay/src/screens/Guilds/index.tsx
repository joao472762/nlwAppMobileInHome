import React from "react"
import {View, FlatList, Text} from "react-native"
import { ListDivider } from "../../components/ListDivider"

import {styles} from "./style"
import { Guild } from "../../components/Guild"
import { GuildProps } from "../../components/Guild";


type Props = {
    handleGuilSelected: (guild:GuildProps) => void
}

const guild = [
    {
        id: '1',
        name: 'joga bonito',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'chama',
        icon: 's',
        owner: true
    },
]
export function Guilds({handleGuilSelected}:Props){
    return(
        <View style={styles.container}>
            <FlatList
            data={guild}
            keyExtractor= {(item)=> item.id}
            renderItem = {
                ({item})=>(
                    <Guild
                    onPress={()=>handleGuilSelected(item)}
                    data={item}
                    />
                    
                )
            }
            style={styles.guilds}
            showsVerticalScrollIndicator= {false}
            ItemSeparatorComponent= {()=> <ListDivider/>}
            /> 
        </View>   
    )
}