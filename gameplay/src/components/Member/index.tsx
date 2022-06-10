import React from "react"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import {View, Text}  from "react-native"
import { Avatar } from "../avatar"
import { styles } from "./style"
import { theme } from "../../global/styles/theme"


export type MemberProps ={
    userName: string,
    status: string,
    avatarUrl: string,
}

type Props = {
    data: MemberProps
}


export function Member(
    {data}: Props
){
    const {avatarUrl,status,userName} = data
    const {occupied,primary, on} = theme.colors
    const isOnline = status == 'online'
    return(
        <RectButton style={styles.container}>
            <Avatar
            imageUrl={avatarUrl}
            />

            <View style={styles.content}>

              <Text style={styles.title}>
                {userName}
              </Text>
              <View style={styles.statusContent}>

                <View style={[styles.bulletStatus,
                {backgroundColor: isOnline ? on : primary} 
                ]}/>

                <Text style={styles.status}>
                    {isOnline ? "Disponível": "Ocupado"}
            
                </Text>

              </View>

            </View>
        </RectButton>
    )
}