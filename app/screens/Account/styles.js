/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY_BLUE,
  COLOR_WHITE,
  COLOR_PRIMARY_RED,
  FONT_SIZE_BODY1,
  COLOR_INPUT_GREY
} from '../../styles/index';
import METRICS from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  Mainscreen: {
    backgroundColor: COLOR_WHITE,
    flex: 1
  },
  container: {
    marginHorizontal: METRICS.doubleBaseMargin
  },
  aboutWrap: {
    alignItems: 'flex-end',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection
  },
  about: {
    color: COLOR_PRIMARY_BLUE,
    fontSize: 13,
    fontWeight: '500'
  },
  imageWrap: {
    alignItems: 'center'
  },
  profil: {
    marginBottom: METRICS.doubleBaseMargin,
    height: scale(126),
    width: scale(126),
    borderRadius: 1000
  },
  name: {
    fontSize: 25,
    color: '#2F2E41'
  },
  email: {
    fontSize: 15,
    color: '#8B8B8B',
    marginBottom: METRICS.searchBarHeight
  },
  btnEditProfil: {
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY_BLUE,
    width: '100%',
    borderRadius: 4,
    marginBottom: METRICS.baseMargin
  },
  teksEditProfil: {
    color: COLOR_WHITE,
    fontWeight: '500',
    fontSize: 15
  },
  margin: {
    marginTop: METRICS.baseMargin
  },
  btnLogout: {
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY_RED,
    width: '100%',
    borderRadius: 4
  },
  teksLogout: {
    color: COLOR_WHITE,
    fontWeight: '500',
    fontSize: FONT_SIZE_BODY1
  },

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

  //
});

export default styles;
