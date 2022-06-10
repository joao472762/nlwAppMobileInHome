import React from 'react'
import { styles } from './style'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import {RectButtonProps, RectButton} from "react-native-gesture-handler"

import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils'
import PlayerSvg from  '../../assets/player.svg' 
import { theme } from '../../global/styles/theme'
import CalendarSvg from '../../assets/calendar.svg' 

export type appointmentsGuildProps = {
    id: string 
    name: string,
    icon?: string
    owner: boolean
}
export type appointmentsProps = {
    id: string,
    guild: appointmentsGuildProps,
    category:  string,
    date: string,
    description: string,
}

type localProps = RectButtonProps & {
    data: appointmentsProps
}

export function Appointments({data,...props}:localProps){
    const { 
        guild,
        category,
        description,
        date} = data
    const {owner} = guild
    const {primary,on} = theme.colors
    const [categoryAcutally] = categories.filter(item => item.id === data.category)
    
    return(
        <RectButton 
        {...props}
        >
            <View style={styles.container}>

                <GuildIcon
                />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text  style={styles.title}>
                            {guild.name}
                        </Text>
                        <Text style={styles.subTitle}>
                            Ranqueada
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg/>
                            <Text style={styles.date}>
                                {date}
                             </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg
                            fill={!owner ? on : theme.colors.primary}
                            />
                            <Text 
                             style={[
                                   styles.status,
                                   !owner? {color: on}:{color:primary} 
                                 ]}>
                                      {
                                          owner? 'Anfitrião':'Covidado'
                                     }
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
        </RectButton>
    )
}