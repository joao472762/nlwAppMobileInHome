import React from 'react'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { styles } from './style'
import {RectButtonProps, RectButton} from "react-native-gesture-handler"
import { GuildIcon } from '../GuildIcon'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { categories } from '../../utils'
import PlayerSvg from  '../../assets/player.svg' 

type appointmentsGuildProps = {
    name: string,
    //icon?: React.FC<SvgProps>,
    owner: true
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
                            {
                                owner? 'Anfitrião':'Covidado'
                            }
                        </Text>
                    </View>

                    <Text style={styles.subTitle}>
                        {categoryAcutally.title}
                    </Text>
                    <View style={styles.playersInfo}>
                        <View style={styles.calendar}>
                            <MaterialCommunityIcons
                            name='calendar-month'
                            size={16}
                            color={theme.colors.primary}
                            />
                            <Text style={styles.date}
                            >
                                {date}
                        </Text>
                        </View>
                        <PlayerSvg
                        fill={owner ? on : theme.colors.primary}
                        />
                    </View>
                </View>
            </View>
        </RectButton>
    )
}