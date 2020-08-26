import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  FONT_CAPTION_PRIMARY,
  FONT_BUTTON_PRIMARY,
  COLOR_PRIMARY_BLUE,
  COLOR_BLACK,
  COLOR_FONT_TERTIARY_GREY,
  COLOR_PRIMARY_BLACK,
  COLOR_BASE_BUTTON_LOGIN,
  COLOR_MATTERHORN,
  COLOR_GRAY90
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  boxedContainer: {
    padding: METRICS.doubleBaseMargin,
    backgroundColor: COLOR_WHITE,
    height: METRICS.screenHeight
  },

  emptyContainer: {
    borderBottomColor: COLOR_BLACK,
    borderBottomWidth: 0.5
  },

  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  email: {
    color: COLOR_FONT_TERTIARY_GREY,
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'normal'
  },

  card: {
    marginTop: METRICS.doubleBaseMargin,
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    shadowColor: COLOR_GRAY90,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 15,
    elevation: 10
  },

  cardHeader: {
    margin: METRICS.smallMargin - 1,
    paddingHorizontal: METRICS.doubleBaseMargin - 4,
    paddingVertical: METRICS.baseMargin - 1
  },

  dateText: {
    color: COLOR_PRIMARY_BLACK,
    ...FONT_BUTTON_PRIMARY,
    fontWeight: 'bold'
  },

  timeText: {
    color: COLOR_PRIMARY_BLACK,
    ...FONT_CAPTION_PRIMARY
  },

  listHeader: {
    color: COLOR_PRIMARY_BLACK,
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'bold',
    marginBottom: METRICS.baseMargin - 2
  },

  listItem: {
    color: COLOR_MATTERHORN,
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
    borderTopColor: COLOR_BLACK,
    borderTopWidth: 0.5,
    paddingTop: METRICS.baseMargin,
    paddingBottom: METRICS.baseMargin - 2
  },

  totalCost: {
    color: COLOR_MATTERHORN,
    ...FONT_BUTTON_PRIMARY
  },

  totalCostBlue: {
    color: COLOR_PRIMARY_BLUE,
    ...FONT_BUTTON_PRIMARY,
    fontWeight: 'bold'
  },

  button: {
    paddingTop: METRICS.baseMargin - 1,
    paddingBottom: METRICS.baseMargin,
    color: COLOR_WHITE,
    ...FONT_BUTTON_PRIMARY,
    textAlign: 'center',
    backgroundColor: COLOR_BASE_BUTTON_LOGIN,
    borderRadius: 5,
    margin: METRICS.smallMargin - 1
  }
});

export default styles;
