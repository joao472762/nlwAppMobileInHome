import React from 'react'

import { Image} from 'react-native';
import { styles } from './style';



export function GuildIcon(){
    const uri = 'https://styles.redditmedia.com/t5_388p4/styles/communityIcon_1xjv62tivxy61.png?width=256&s=761dfb604ad32ac722f86777120d1efe32cbfeee'
    return(
        
        <Image
        style={styles.image}
        source={{uri }}
        resizeMode='cover'
        />

    );
}