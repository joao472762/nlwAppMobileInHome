import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    marginTop: 100,
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  bar:{
    backgroundColor: theme.colors.secondary30,
    height:2,
    width:39,
    marginHorizontal: 'auto',
    marginTop: 13,
    borderRadius: 2,
    alignSelf: 'center'
  }
});