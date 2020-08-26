import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_PRIMARY_BLACK,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  FONT_SIZE_HEADLINE5
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR_WHITE
  },

  title: {
    color: COLOR_PRIMARY_BLACK,
    fontSize: FONT_SIZE_HEADLINE5,
    fontWeight: 'bold',
    padding: METRICS.doubleBaseMargin,
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin
  },

  tabStyle: {
    backgroundColor: COLOR_WHITE
  },

  textStyle: {
    backgroundColor: COLOR_TRANSPARENT,
    color: COLOR_BLACK
  }
});

export default styles;
