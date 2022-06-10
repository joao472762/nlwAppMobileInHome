import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  content:{},
  title:{
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  statusContent:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  status:{
    textAlign: 'center',
    marginLeft: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginBottom: 12
  },
  bulletStatus:{
    marginTop: -9,
    borderRadius: 4,
    height: 8,
    width: 8,
    backgroundColor: theme.colors.on,
  }
});