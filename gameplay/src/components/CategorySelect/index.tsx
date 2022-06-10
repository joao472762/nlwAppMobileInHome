import React from "react";
import { ScrollView} from "react-native";

import { styles } from "./style";
import { Category } from "../Category";
import { categories } from "../../utils";

type categorySelectProps = {
    hasCheckbox?: boolean
    categorySelected: string,
    setCategory: (categoryId:string) => void
}

export function CategorySelect(
    {categorySelected,setCategory, hasCheckbox = false}:categorySelectProps
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
                    hasCheckbox = {hasCheckbox}
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