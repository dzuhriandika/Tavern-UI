import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PLACEHOLDER,
  COLOR_FONT_TEXTINPUT,
  COLOR_BASE_BUTTON_LOGIN,
  FONT_SIZE_BODY2,
  COLOR_WHITE_LOGIN
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { gray } from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.doubleSection },
  input: {
    width: scale(300),
    height: scale(45),
    color: COLOR_FONT_TEXTINPUT,
    borderRadius: scale(4),
    backgroundColor: COLOR_BASE_PLACEHOLDER,
    padding: METRICS.baseMargin,
    marginBottom: METRICS.smallMargin,
    fontSize: FONT_SIZE_BODY2,
    paddingHorizontal: scale(20)
  },
  inputPassword: {
    flexDirection: 'row',
    backgroundColor: COLOR_BASE_PLACEHOLDER,
    borderRadius: scale(4),
    borderColor: gray.gray_10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: METRICS.smallMargin,
    marginLeft: METRICS.smallMargin
  },
  inputPass: {
    width: scale(255),
    height: scale(45),
    paddingHorizontal: scale(10),
    color: COLOR_FONT_TEXTINPUT,
    borderRadius: scale(4),
    backgroundColor: COLOR_BASE_PLACEHOLDER,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_BODY2,
    // eslint-disable-next-line no-dupe-keys
    paddingHorizontal: scale(20)
  },
  hidePassword: {
    backgroundColor: COLOR_BASE_PLACEHOLDER,
    width: scale(45),
    height: scale(20)
  },
  iconHide: {
    marginLeft: METRICS.baseMargin
  },
  btn: { width: scale(300), height: scale(45), backgroundColor: COLOR_BASE_BUTTON_LOGIN },
  forgetPass: {
    alignSelf: 'flex-end',
    marginRight: METRICS.section,
    marginTop: METRICS.smallMargin
  },
  textForgot: {
    color: COLOR_WHITE_LOGIN
  },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_BODY2
  },
  margin: { marginBottom: METRICS.section }
});

export default styles;
