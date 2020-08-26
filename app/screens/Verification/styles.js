import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_FONT_TERTIARY_GREY,
  COLOR_BLACK,
  FONT_TERTIARY_REGULAR,
  FONT_SIZE_BODY2,
  FONT_SIZE_BODY1,
  FONT_SIZE_HEADLINE5
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    position: 'absolute'
  },
  secondContainer: {
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleBaseMargin
  },
  logoContainer: {
    width: scale(200),
    height: scale(200),
    alignSelf: 'center',
    top: scale(60)
  },
  verify: {
    width: scale(140),
    height: scale(170),
    alignSelf: 'center'
  },
  verifyTitle: {
    fontSize: FONT_SIZE_HEADLINE5,
    color: COLOR_BLACK,
    marginBottom: METRICS.baseMargin,
    textAlign: 'center',
    top: scale(55)
  },
  verifyDsc: {
    color: COLOR_FONT_TERTIARY_GREY,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_BODY2,
    marginLeft: METRICS.marginForgot2,
    marginRight: METRICS.marginForgot2,
    textAlign: 'center',
    top: scale(50)
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: scale(1),
    padding: scale(1),
    top: scale(85),
    alignSelf: 'center'
  },
  TextInputStyle: {
    height: scale(50),
    width: scale(60),
    top: scale(-15),
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    fontSize: FONT_SIZE_BODY1,
    textAlign: 'center'
  },
  button: {
    width: scale(320),
    height: scale(40),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    top: scale(-100),
    alignSelf: 'center'
    // shadowColor: COLOR_BASE_PRIMARY_MAIN,
    // shadowRadius: scale(10),
    // shadowOpacity: scale(0.6),
    // elevation: scale(3),
    // shadowOffset: { width: 0, height: scale(4) },
    // overflow: 'hidden',
    // bottom: scale(154),
    // marginRight: METRICS.marginForgot,
    // marginTop: METRICS.baseMargin
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_BODY2
  }
});
export default styles;
