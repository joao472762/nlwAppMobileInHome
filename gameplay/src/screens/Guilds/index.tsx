import React from "react"
import {View, FlatList, Text} from "react-native"
import { ListDivider} from "../../components/ListDivider"

import {styles} from "./style"
import { Guild } from "../../components/Guild"
import { GuildProps } from "../../components/Guild";


type Props = {
    handleGuilSelected: (guild:GuildProps) => void,

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
    {
        id: '3',
        name: 'joga bonito',
        icon: 'image.png',
        owner: true
    },
    {
        id: '4',
        name: 'chama',
        icon: 's',
        owner: true
    },
    {
        id: '5',
        name: 'joga bonito',
        icon: 'image.png',
        owner: true
    },
    {
        id: '6',
        name: 'chama',
        icon: 's',
        owner: true
    },
    {
        id: '7',
        name: 'joga bonito',
        icon: 'image.png',
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
            contentContainerStyle={{
                paddingBottom: 68,
                paddingTop: 104
            }}
            style={styles.guilds}
            showsVerticalScrollIndicator= {false}
            ItemSeparatorComponent= {()=> <ListDivider/>}
            /> 
        </View>   
    )
}