/* eslint-disable no-dupe-keys */
import { StyleSheet, Platform } from 'react-native';
import { FONT_HEADLINE6_PRIMARY, COLOR_PRIMARY_BLACK, COLOR_WHITE } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: COLOR_WHITE,
    height: Platform.OS === 'ios' ? 44 : 56
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_PRIMARY_BLACK,
    fontWeight: '500',
    fontSize: 20,
    color: COLOR_PRIMARY_BLACK
  }
});
