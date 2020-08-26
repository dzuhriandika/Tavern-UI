/* eslint-disable import/named */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_INPUT_GREY,
  COLOR_FONT_TEXTINPUT,
  COLOR_PRIMARY_BLUE,
  FONT_SIZE_BODY2,
  FONT_SIZE_SUBTITLE1
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  Mainscreen: {
    backgroundColor: COLOR_WHITE,
    flex: 1
  },
  container: {
    marginHorizontal: METRICS.baseMargin,
    backgroundColor: COLOR_WHITE
  },
  marginTop: {
    marginBottom: METRICS.searchBarHeight
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.doubleSection },
  input: {
    width: '100%',
    height: scale(45),
    color: COLOR_FONT_TEXTINPUT,
    borderRadius: scale(4),
    backgroundColor: COLOR_INPUT_GREY,
    padding: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: FONT_SIZE_BODY2
  },
  inputPass: {
    width: scale(300),
    height: scale(45),
    color: COLOR_FONT_TEXTINPUT,
    borderTopLeftRadius: scale(4),
    borderBottomLeftRadius: scale(4),
    padding: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: FONT_SIZE_BODY2
  },
  btnSave: {
    width: '100%',
    height: scale(45),
    backgroundColor: COLOR_PRIMARY_BLUE,
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: METRICS.section
  },
  teksSave: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_SUBTITLE1,
    fontWeight: '500'
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: COLOR_INPUT_GREY,
    height: scale(45),
    marginBottom: METRICS.baseMargin,
    borderRadius: scale(4)
  },
  hidePassword: {
    justifyContent: 'center',
    height: scale(45),
    borderTopRightRadius: scale(4),
    borderBottomRightRadius: scale(4),
    paddingRight: METRICS.medium
  },
  margin: { marginBottom: METRICS.baseMargin },
  noImage: {
    backgroundColor: COLOR_INPUT_GREY,
    height: scale(126),
    width: scale(126),
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: METRICS.baseMargin
  },
  profilWrap: {
    marginBottom: METRICS.baseMargin,
    position: 'relative',
    height: scale(126),
    width: scale(126),
    borderRadius: 1000
  },
  cameraWrap: {
    zIndex: 1,
    position: 'absolute',
    bottom: '38%',
    left: '38%'
  }
});

export default styles;
