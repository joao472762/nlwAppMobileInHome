import React, { ReactNode } from 'react';
import { View ,Modal,ModalProps, TouchableWithoutFeedback} from 'react-native';
import { Guilds } from '../../screens/Guilds';
import { Background } from '../background';

import { styles } from './style';

type Props = ModalProps & {
  children: ReactNode,
  closeModal:  ()=> void,
}

export function ModalView({
  closeModal,
  children,
  ...props
}:Props) {
  return (
    <Modal
    transparent
    animationType='slide'
    statusBarTranslucent
    
    {...props}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar}/>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}