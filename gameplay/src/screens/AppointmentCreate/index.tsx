import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView,
Platform,ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import {styles} from "./style"
import { Guilds } from "../Guilds";
import {Feather} from '@expo/vector-icons'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { ModalView } from "../../components/Modal/Modal";
import { TextArea } from "../../components/TextArea";
import { LinearGradient } from "expo-linear-gradient";
import { SmallInput } from "../../components/SmallInput";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "../../components/GuildIcon";

export function AppointmentCreate(){

    const  [category, setCategory] = useState('')
    const [openGuildModal, setOnpenGuidlModal] = useState(false)
    const [guild,setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOnpenGuilds(){
        setOnpenGuidlModal(true)
    }

    function handleCloseGuilds(){
        setOnpenGuidlModal(false)
    }

    function handleGuilSelected(guildSelect:GuildProps){
        setGuild(guildSelect)
        setOnpenGuidlModal(false)
    }

    function handleSelectCategory(categoryId: string){
         setCategory(categoryId)
    }

    const {secondary85,secondary50, heading} = theme.colors
    return(
       
        <KeyboardAvoidingView
        behavior= {Platform.OS === 'ios' ? 'padding' :'height'}
        >
            <ScrollView
            
            >
                <View style={styles.container}>
                    <Header
                    title="Agendar Partida"
                    />
                    <Text style={[styles.label,{
                         paddingHorizontal: 24,  marginTop: 32,
                         marginBottom: 12,
                    }]}>
                        Categoria
                    </Text>
                    <CategorySelect
                    setCategory={handleSelectCategory}
                    categorySelected= {category}
                    hasCheckbox = {true}
                    />
                    <View style={styles.form}>
                        <RectButton
                        onPress={handleOnpenGuilds}
                        style={styles.select}
                        >
                            <View  style={styles.selectBody}>
                                {
                                    guild.icon 
                                    ? <GuildIcon/> 
                                    :<LinearGradient
                                    colors={[secondary85,secondary50]}
                                    style={styles.image}/>
                                }

                                <Text style={[styles.label,
                                    {flex: 1, textAlign: 'center'}]}>
                                    {
                                        guild.name
                                        ? guild.name 
                                        : `Selecione o servidor`
                                    }
                                </Text>
                                <Feather
                                size={18}
                                color= {heading}
                                name="chevron-right"
                                style={styles.chevron}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.fields}>
                                    
                            <View>
                                <Text style={styles.label}>
                                    dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.label}>
                                    Hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput  maxLength={2}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.textAreaContent}>

                            <TextArea
                            maxLength={100}
                            multiline
                            numberOfLines={5}
                            autoCorrect={false}
                            />

                        </View>
                
                    </View>
                    <View style={styles.footer}>
                        <Button  title="Agendar"/>
                    </View> 
                </View>
            </ScrollView>
            <ModalView 
            visible={openGuildModal}
            closeModal= {handleCloseGuilds}
            >
                <Guilds handleGuilSelected={handleGuilSelected}/>
            </ModalView>
        </KeyboardAvoidingView>
    );
}