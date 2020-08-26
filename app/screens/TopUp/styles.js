/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/named */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { black, white } from '../../styles/colors';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

export default StyleSheet.create({
  buttonAccept: {
    backgroundColor: '#87cafe',
    borderRadius: 5,
    fontFamily: 'Nunito',
    height: scale(20),
    justifyContent: 'center',
    marginRight: METRICS.baseMargin,
    shadowColor: '#87CAFE',
    width: scale(70)
  },
  buttonBox: {
    flexDirection: 'row'
  },
  buttonReject: {
    backgroundColor: '#FF6584',
    borderRadius: 4,
    fontFamily: 'Nunito',
    height: scale(20),
    justifyContent: 'center',
    marginRight: METRICS.horizontalLineHeight,
    shadowColor: '#FF6584',
    width: scale(70)
  },
  card: {
    borderRadius: 4,
    padding: METRICS.baseMargin
  },
  cardBox1: {
    flex: 1
  },
  cardBox2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: METRICS.baseMargin
  },
  cardContainer: {
    flexDirection: 'column'
  },
  container: {
    padding: METRICS.baseMargin
  },
  header: {
    backgroundColor: white,
    paddingLeft: METRICS.baseMargin,
    paddingTop: METRICS.baseMargin
  },
  headerText: {
    color: black,
    fontWeight: 'bold'
  },
  overlay: {
    backgroundColor: COLOR_WHITE,
    height: METRICS.screenHeight,
    width: METRICS.screenWidth
  },
  subTitleBox: {
    flexDirection: 'row'
  },
  text: {
    color: 'black',
    fontFamily: 'Nunito',
    fontSize: 18
  },
  text2: {
    color: '#A8A8A8',
    fontFamily: 'Nunito',
    fontSize: 12,
    marginRight: METRICS.smallMargin,
    marginTop: METRICS.smallMargin
  },
  textBok: {
    fontFamily: 'Nunito',
    fontSize: 14
  },
  titleButton: {
    color: COLOR_WHITE,
    fontFamily: 'Nunito',
    fontSize: 14
  }
});
