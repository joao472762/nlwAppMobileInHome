import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
      height: 120,
      width: 104,
      marginRight: 8,
      borderRadius: 8,
  },
  content:{
    height: 120,
    width: 104,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.secondary85,
    borderRadius: 8,
    paddingVertical: 7
    
  },
  check:{
    position: 'absolute',
    top: 8,
    right: 8,
    height: 11,
    width: 11,
    backgroundColor: theme.colors.secondary80,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 2
  },
  checked:{
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    top: 8,
    right: 8,
    height: 10,
    width: 10,
    borderColor: theme.colors.secondary70,
    borderWidth: 1,
    borderRadius: 2
  },
  title:{
      color: theme.colors.heading,
      fontSize: 15,
      fontFamily: theme.fonts.title700,
      marginTop: 16,
  },
});