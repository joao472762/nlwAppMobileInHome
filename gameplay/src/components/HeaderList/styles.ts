import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  title:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18
  },
  subTitle:{
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13
  },
});