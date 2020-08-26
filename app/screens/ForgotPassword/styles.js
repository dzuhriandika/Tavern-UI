import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PLACEHOLDER,
  COLOR_FONT_TEXTINPUT,
  COLOR_BASE_BUTTON_SEND,
  FONT_SIZE_HEADLINE5,
  FONT_SIZE_BODY2
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: {
    width: scale(160),
    height: scale(160),
    marginTop: METRICS.tripleSection
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: METRICS.section
  },
  screenTitle: {
    textAlign: 'center',
    fontSize: FONT_SIZE_HEADLINE5,
    marginBottom: METRICS.marginForgot2
  },
  description: {
    fontSize: FONT_SIZE_BODY2,
    textAlign: 'center',
    paddingRight: METRICS.doubleSection,
    paddingLeft: METRICS.doubleSection,
    marginBottom: METRICS.marginForgot
  },
  input: {
    height: scale(45),
    width: scale(300),
    color: COLOR_FONT_TEXTINPUT,
    borderRadius: scale(4),
    backgroundColor: COLOR_BASE_PLACEHOLDER,
    padding: METRICS.baseMargin,
    marginBottom: METRICS.searchBarHeight,
    fontSize: FONT_SIZE_BODY2,
    paddingHorizontal: scale(20)
  },
  btn: { width: scale(300), height: scale(45), backgroundColor: COLOR_BASE_BUTTON_SEND },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_BODY2,
    fontWeight: 'bold'
  },
  margin: { marginBottom: METRICS.baseMargin }
});

export default styles;
