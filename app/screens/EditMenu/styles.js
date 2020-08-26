import { StyleSheet } from 'react-native';
import { white, black, grey2, whiteGrey, blueSky } from '../../styles/colors';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  header: {
    paddingLeft: metrics.baseMargin,
    backgroundColor: white,
    paddingTop: metrics.baseMargin
  },
  headerText: {
    fontWeight: 'bold',
    color: black
  },
  container: {
    padding: metrics.baseMargin
  },
  noImage: {
    backgroundColor: whiteGrey,
    height: scale(212),
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  noImageText: {
    marginLeft: metrics.baseMargin,
    color: grey2
  },
  imageExist: {
    width: '100%',
    height: scale(212),
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%'
  },
  customInput: {
    backgroundColor: whiteGrey,
    paddingHorizontal: metrics.baseMargin,
    borderRadius: 5,
    marginTop: metrics.baseMargin
  },
  inlineForm: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inlineInput: {
    width: '48%'
  },
  separator: {
    marginTop: metrics.baseMargin
  },
  mainBtn: {
    borderRadius: 5,
    backgroundColor: blueSky
  }
});

export default styles;
