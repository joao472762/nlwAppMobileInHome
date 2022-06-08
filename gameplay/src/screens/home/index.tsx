import React, { useState } from "react";
import { styles } from "./style";
import { FlatList, Text, View} from "react-native";
import { Profile } from "../../components/Profile";
import { AddButton } from "../../components/AddButton";
import { CategorySelect } from "../../components/CategorySelect";
import { HeaderList } from "../../components/HeaderList";
import { Appointments } from "../../components/Appointments";

export function Home(){
    const [category,setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild:{
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true

            },
            category: '1',
            date: '22/06 ás 18:22h',
            description: 'é hoje que nós vamos chegar ao challenge sem pereder uma da m10'
        }
    ]

    function handleSelectCategory(categoryId: string){
        category === categoryId ? setCategory('') : setCategory(categoryId)
    }
    return(
        <View>
            <View style={styles.header}>
                <Profile/>
                <AddButton/>
            </View>
            <CategorySelect
            categorySelected = {category}
            setCategory = {handleSelectCategory}
            />
            <View style={styles.content}>
                <HeaderList
                title="Partidas Agendadas"
                subTitle="Total 6"
                />
                <FlatList
                data={appointments}
                keyExtractor= {item => item.id}
                renderItem = {
                    ({item})=>(
                       <Appointments
                       data={item}
                       />
                    )
                }
                />
            </View>
        </View>
        
    );

}
