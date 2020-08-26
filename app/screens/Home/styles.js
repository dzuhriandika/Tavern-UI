/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { white } from '../../styles/colors';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.baseMargin
  },
  header: {
    paddingLeft: metrics.baseMargin,
    backgroundColor: white
  },
  menu: {
    paddingHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
    paddingBottom: metrics.baseMargin
  },
  col_1: {
    flex: 1,
    marginRight: scale(5)
  },
  col_2: {
    flex: 1,
    marginLeft: scale(5)
  }
});

export default styles;
