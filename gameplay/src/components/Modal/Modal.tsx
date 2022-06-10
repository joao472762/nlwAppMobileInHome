import React, { ReactNode } from 'react';
import { View ,Modal,ModalProps} from 'react-native';
import { Guilds } from '../../screens/Guilds';
import { Background } from '../background';

import { styles } from './style';

type Props = ModalProps & {
  children: ReactNode
}

export function ModalView({children,...props}:Props) {
  return (
    <Modal
    transparent
    animationType='slide'
    
    {...props}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}/>
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}