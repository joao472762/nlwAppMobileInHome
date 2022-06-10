import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import {getBottomSpace} from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner:{
    width: '100%',
    height: 234,
    marginBottom: 24,
    
  },
  bannerContent:{
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end'
  },
  title:{
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.heading,

  },
  subTitle:{
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
  members:{
    marginLeft: 24,
    marginTop: 24,
    paddingRight: 20
  },
  footer:{
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: getBottomSpace()
  }
 
});