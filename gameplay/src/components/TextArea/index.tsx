import React from "react";
import { TextInputProps, View,TextInput, Text } from "react-native";

import { styles } from "./style";

type Props = TextInputProps & {
    hasHeader?: boolean
    title?: string,
    subtitle?: string
}
export function TextArea({ title, subtitle, hasHeader= true,...props}: Props){
    return(
        <View style={styles.container}>
            {hasHeader && 
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {
                            title ? title : 'Descrição'
                        }
                    </Text>
                    <Text style={styles.subTitle}>
                        {
                            subtitle ? subtitle : 'Max 100 caracters'
                        }
                    </Text>
                </View>
            }

            <TextInput            
            style={styles.input}
            {...props}
            />
        </View>
    );
}