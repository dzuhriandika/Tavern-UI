/* eslint-disable no-unused-vars */
import { StyleSheet } from 'react-native';
import METRICS from '../../../constants/metrics';
import { scale } from '../../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_GREY,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_TERTIARY_REGULAR,
  FONT_SIZE_CAPTION,
  FONT_SIZE_BODY2
} from '../../../styles';

const styles = StyleSheet.create({
  fullScreen: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight
  },
  container: {
    backgroundColor: COLOR_TRANSPARENT,
    position: 'absolute'
  },
  slide: {
    backgroundColor: COLOR_TRANSPARENT
  },
  pagination: {
    position: 'absolute',
    bottom: scale(80),
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: COLOR_TRANSPARENT
  },

  dot: {
    backgroundColor: COLOR_GREY,
    width: scale(20),
    height: scale(3),
    borderRadius: scale(4),
    marginLeft: scale(3),
    marginRight: scale(3),
    bottom: 0
  },

  activeDot: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },

  buttonWrapper: {
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    // paddingHorizontal: scale(10),
    // paddingVertical: scale(60),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonOnBoarding: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    width: scale(320),
    height: scale(40),
    bottom: scale(40),
    shadowColor: COLOR_BASE_PRIMARY_MAIN,
    shadowRadius: scale(10),
    shadowOpacity: scale(0.6),
    elevation: scale(3),
    shadowOffset: { width: 0, height: scale(4) },
    marginBottom: METRICS.doublesearchBarHeight
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_BODY2,
    alignItems: 'center'
  },
  skipWrap: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection
    // backgroundColor: COLOR_TRANSPARENT,
    // flexDirection: 'column',
    // top: 0,
    // left: 0
  },
  skip: {
    color: COLOR_BLACK,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_CAPTION,
    right: METRICS.baseMargin
  }
});

export default styles;
