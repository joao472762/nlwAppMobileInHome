import React, {  useState } from "react";
import { FlatList,  View} from "react-native";               
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { AddButton } from "../../components/AddButton";
import { HeaderList } from "../../components/HeaderList";
import { ListDivider } from "../../components/ListDivider";
import { Appointments } from "../../components/Appointments";
import { CategorySelect } from "../../components/CategorySelect";


export function Home(){
    const [category,setCategory] = useState('')
    const Navegation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild:{
                id: '1',
                name: 'Lendários',
               // icon: null,
                owner: true

            },
            category: '1',
            date: '22/06 ás 18:22h',
            description: 'é hoje que nós vamos chegar ao challenge sem pereder uma da m10'
        },
        {
            id: '2',
            guild:{
                id: '1',
                name: 'Lendários',
               // icon: null,
                owner: true

            },
            category: '1',
            date: '22/06 ás 18:22h',
            description: 'é hoje que nós vamos chegar ao challenge sem pereder uma da m10'
        },
        {
            id: '3',
            guild:{
                id: '1',
                name: 'Lendários',
               // icon: null,
                owner: true

            },
            category: '4',
            date: '22/06 ás 18:22h',
            description: 'é hoje que nós vamos chegar ao challenge sem pereder uma da m10'
        },
      
    ]

    function handleSelectCategory(categoryId: string){
        category === categoryId ? setCategory('') : setCategory(categoryId)
    }
    function handleAppoimentDetails(){
        Navegation.navigate('AppointmentDetail')
    }
    function handleAppointmentsCreate(){
        Navegation.navigate("AppointmentCreate")
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
                <AddButton
                onPress={handleAppointmentsCreate}
                />
            </View>
            <CategorySelect
            categorySelected = {category}
            setCategory = {handleSelectCategory}
            />
             
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
                    onPress={handleAppoimentDetails}
                    />     
                )
            }
            style={styles.matches}

            contentContainerStyle={{paddingBottom: 69,}}
            ItemSeparatorComponent = {()=> <ListDivider/>}
      
            />
        </View>
        
    );

}
