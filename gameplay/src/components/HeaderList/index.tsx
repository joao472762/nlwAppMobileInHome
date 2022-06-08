import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type headerListProps = {
  title: string,
  subTitle: string,
}
export function HeaderList(
  {title,subTitle}: headerListProps
) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}