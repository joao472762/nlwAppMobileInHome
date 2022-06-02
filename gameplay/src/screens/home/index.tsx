import React, { useState } from "react";
import { styles } from "./style";
import { View} from "react-native";
import { Profile } from "../../components/Profile";
import { AddButton } from "../../components/AddButton";
import { CategorySelect } from "../../components/CategorySelect";

export function Home(){
    const [category,setCategory] = useState('')

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
        </View>
        
    );

}
