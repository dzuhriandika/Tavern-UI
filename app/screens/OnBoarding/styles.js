import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_TERTIARY_GREY,
  COLOR_WHITE,
  FONT_TERTIARY_REGULAR,
  FONT_SIZE_HEADLINE5,
  FONT_SIZE_BODY2
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  header: {
    color: COLOR_BLACK,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_HEADLINE5,
    marginVertical: METRICS.mediumMargin,
    textAlign: 'center'
  },
  text: {
    color: COLOR_FONT_TERTIARY_GREY,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_BODY2,
    marginBottom: METRICS.fourthSection,
    width: scale(240),
    lineHeight: scale(24),
    textAlign: 'center'
  },
  images: {
    width: scale(220),
    height: scale(200),
    marginBottom: METRICS.doubleSection
  }
});

export default styles;
