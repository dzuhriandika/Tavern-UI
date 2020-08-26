/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, FONT_CAPTION_PRIMARY, FONT_BUTTON_PRIMARY } from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  boxedContainer: {
    padding: METRICS.doubleBaseMargin,
    backgroundColor: COLOR_WHITE,
    height: METRICS.screenHeight
  },

  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  name: {
    color: '#4F4F4F',
    ...FONT_HEADLINE6_PRIMARY,
    fontWeight: 'bold'
  },

  email: {
    color: '#8B8B8B',
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'normal'
  },

  card: {
    padding: METRICS.smallMargin - 1,
    marginTop: METRICS.doubleBaseMargin,
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    shadowColor: '#E5E5E5',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 15,
    elevation: 10
  },

  blueBox: {
    backgroundColor: '#87CAFE',
    borderRadius: 5,
    margin: METRICS.smallMargin - 1,
    paddingHorizontal: METRICS.doubleBaseMargin - 4,
    paddingVertical: METRICS.baseMargin - 1
  },

  dateText: {
    color: COLOR_WHITE
  },

  timeText: {
    color: 'rgba(255, 255, 255, 0.8)'
  },

  listHeader: {
    color: '#2F2E41',
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'bold',
    marginBottom: METRICS.baseMargin - 2
  },

  listItem: {
    color: 'rgba(79, 79, 79, 0.7)',
    ...FONT_CAPTION_PRIMARY
  },

  orderList: {
    paddingHorizontal: METRICS.doubleBaseMargin + 1
  },

  paddingPutih: {
    paddingTop: METRICS.baseMargin + 3,
    paddingBottom: METRICS.baseMargin
  },

  line: {
    borderTopColor: '#000000',
    borderTopWidth: 0.5,
    paddingTop: METRICS.baseMargin,
    paddingBottom: METRICS.baseMargin - 2
  },

  totalCost: {
    color: 'rgba(79, 79, 79, 0.7)',
    ...FONT_BUTTON_PRIMARY
  },

  totalCostBlue: {
    color: '#62BBFF',
    ...FONT_BUTTON_PRIMARY,
    fontWeight: 'bold'
  }
});

export default styles;
