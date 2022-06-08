import React from "react";
import { ScrollView} from "react-native";

import { categories } from "../../utils";
import { Category } from "../Category";
import { styles } from "./style";

type categorySelectProps = {
    categorySelected: string,
    setCategory: (categoryId:string) => void
}

export function CategorySelect(
    {categorySelected,setCategory}:categorySelectProps
){
    return(
        <ScrollView
        horizontal
        collapsable = {true}
        showsHorizontalScrollIndicator = {false}
        style= {styles.container}
        contentContainerStyle={{
            paddingRight: 35
        }}
        >
            {
                categories.map(category=>(
                    <Category
                    key={category.id}
                    title = {category.title}
                    icon= {category.icon}
                    checked = {category.id == categorySelected}
                    onPress = {()=>setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
}