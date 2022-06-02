import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function HeaderList() {
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            Partidada Agendada
        </View>
        <View style={styles.subTitle}>
            total 8
        </View>
    </View>
  );
}