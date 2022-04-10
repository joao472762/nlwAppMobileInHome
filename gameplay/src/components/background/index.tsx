import React, { ReactNode } from "react";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

interface backgroundProps {
    children: ReactNode
}

export function Background({children}:backgroundProps){
    const {secondary80,secondary100} = theme.colors
    return(
        <LinearGradient
        
         style={styles.container}
         colors={[secondary80, secondary100]}
        >
            {children }
        </LinearGradient>
    )
}